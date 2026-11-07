/* AB Tech - Firebase layer (Auth + Realtime Database). Used by login / admin / users pages. */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updatePassword, verifyBeforeUpdateEmail, reauthenticateWithCredential, EmailAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase, ref, get, set, update, remove, push, onValue, increment } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA1ymNyO-RH8GyYAtoXUkFBaOrZfy7E16g",
  authDomain: "ab-tech-99507.firebaseapp.com",
  databaseURL: "https://ab-tech-99507-default-rtdb.firebaseio.com",
  projectId: "ab-tech-99507",
  storageBucket: "ab-tech-99507.firebasestorage.app",
  messagingSenderId: "574638469117",
  appId: "1:574638469117:web:0de35bc84b6910be277394",
  measurementId: "G-GVX1XTNKCH"
};
const app = initializeApp(firebaseConfig);
isSupported().then(ok => { if (ok) getAnalytics(app) }).catch(() => { });
const auth = getAuth(app), db = getDatabase(app);
const today = () => new Date().toISOString().slice(0, 10);
const cache = v => { try { v ? localStorage.setItem('ab_session', JSON.stringify({ name: v.name, email: v.email, role: v.role })) : localStorage.removeItem('ab_session') } catch (e) { } };

let cur = null, hold = Promise.resolve();
const ready = new Promise(res => {
  let done = false;
  onAuthStateChanged(auth, async u => {
    await hold;
    if (!u) { cur = null; cache(null); if (!done) { done = true; res(null) } return }
    try {
      const [a, p] = await Promise.all([get(ref(db, 'admins/' + u.uid)), get(ref(db, 'users/' + u.uid))]);
      const role = a.val() === true ? 'admin' : 'user', pr = p.val() || {};
      cur = { uid: u.uid, email: u.email, name: pr.name || (role === 'admin' ? 'Admin' : (u.email || '').split('@')[0]), role };
      cache(cur);
      if (role === 'user') onValue(ref(db, 'deleted/' + u.uid), s => { if (s.val()) signOut(auth).then(() => { cache(null); location.replace('login.html?deleted=1') }) }, () => { });
    } catch (e) { cur = null }
    if (!done) { done = true; res(cur) }
  });
});

/* safety: if Firebase never answers (offline / blocked), stop waiting after 10s so pages do not hang */
const first = Promise.race([ready, new Promise(res => setTimeout(() => res(null), 10000))]);

function track(kind) {
  const o = {}; o['total/' + kind] = increment(1); o['days/' + today() + '/' + kind] = increment(1);
  return update(ref(db, 'stats'), o).catch(() => { });
}

const FB = window.FB = {
  auth, db, user: () => first, cur: () => cur, today,
  get: async p => (await get(ref(db, p))).val(),
  set: (p, v) => set(ref(db, p), v),
  update: (p, v) => update(ref(db, p), v),
  multi: o => update(ref(db), o),
  remove: p => remove(ref(db, p)),
  key: p => push(ref(db, p)).key,
  watch: (p, cb) => onValue(ref(db, p), s => cb(s.val()), () => cb(null)),
  inc: increment, track,
  async login(email, pw) {
    const c = await signInWithEmailAndPassword(auth, email, pw), u = c.user;
    const d = await get(ref(db, 'deleted/' + u.uid));
    if (d.val()) { await signOut(auth); throw { code: 'ab/deleted' } }
    const a = (await get(ref(db, 'admins/' + u.uid))).val() === true;
    if (!a) {
      const p = (await get(ref(db, 'users/' + u.uid))).val();
      const o = { email: u.email, lastLogin: Date.now(), logins: increment(1) };
      if (!p) { o.name = (u.email || '').split('@')[0]; o.created = Date.now() }
      await update(ref(db, 'users/' + u.uid), o);
    }
    track('logins');
    cur = null; return { uid: u.uid, email: u.email, admin: a };
  },
  async signup(name, email, pw) {
    let rel; hold = new Promise(r => rel = r);
    try {
      const c = await createUserWithEmailAndPassword(auth, email, pw), u = c.user;
      await set(ref(db, 'users/' + u.uid), { name, email: u.email, created: Date.now(), lastLogin: Date.now(), logins: 1 });
      track('signups'); track('logins');
      return { uid: u.uid, email: u.email, admin: false };
    } finally { rel() }
  },
  async logout() { try { sessionStorage.removeItem('ab_admin') } catch (e) { } cache(null); await signOut(auth) },
  async reauth(pw) { const u = auth.currentUser; await reauthenticateWithCredential(u, EmailAuthProvider.credential(u.email, pw)) },
  async changePass(old, np) { await FB.reauth(old); await updatePassword(auth.currentUser, np) },
  async changeEmail(old, ne) { await FB.reauth(old); await verifyBeforeUpdateEmail(auth.currentUser, ne) },
  err(e) {
    const c = (e && (e.code || e.message)) || '';
    const m = { 'auth/invalid-credential': 'Wrong email or password.', 'auth/wrong-password': 'Wrong email or password.', 'auth/user-not-found': 'Wrong email or password.', 'auth/invalid-email': 'Please enter a valid email.', 'auth/email-already-in-use': 'This email is already registered.', 'auth/weak-password': 'Password must be at least 6 characters.', 'auth/too-many-requests': 'Too many attempts. Try again in a few minutes.', 'auth/network-request-failed': 'No connection. Check your internet.', 'auth/requires-recent-login': 'Please log in again, then retry.', 'ab/deleted': 'This account was deleted by the administrator.' };
    for (const k in m) if (String(c).indexOf(k) > -1) return m[k];
    if (/PERMISSION_DENIED|permission/i.test(String(c) + (e && e.message || ''))) return 'Permission denied. Check the database rules.';
    return 'Something went wrong. Please try again.';
  }
};
window.dispatchEvent(new Event('fb-ready'));
