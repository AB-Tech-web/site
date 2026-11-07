/* AB Tech service worker: lets the site install as an app and open offline */
var V = 'ab-v6';
var CORE = ['./', 'index.html', 'login.html', 'users.html', 'admin.html', 'shared.css', 'shared.js', 'panel.css', 'panel.js', 'fb.js', 'site-db.js', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png', 'favicon.png', 'favicon-32.png'];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(V).then(function (c) { return Promise.all(CORE.map(function (u) { return c.add(u).catch(function () { }) })) }).then(function () { return self.skipWaiting() }))
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (k) { return Promise.all(k.filter(function (n) { return n !== V }).map(function (n) { return caches.delete(n) })) }).then(function () { return self.clients.claim() }))
});
self.addEventListener('fetch', function (e) {
  var r = e.request, u = new URL(r.url);
  /* never touch range requests (video/audio in Safari and Firefox), other origins or non-GET */
  if (r.method !== 'GET' || u.origin !== location.origin || r.headers.has('range')) return;
  e.respondWith(fetch(r).then(function (res) {
    /* only cache complete, same-origin answers (a 206 partial response makes cache.put throw) */
    if (res && res.status === 200 && res.type === 'basic') {
      var cp = res.clone();
      caches.open(V).then(function (c) { return c.put(r, cp) }).catch(function () { })
    }
    return res
  }).catch(function () {
    return caches.match(r, { ignoreSearch: true }).then(function (m) { return m || (r.mode === 'navigate' ? caches.match('index.html') : Response.error()) })
  }))
});
