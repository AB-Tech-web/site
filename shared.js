/* language system: loaded here so every page gets it (see lang.js) */
(function () { if (!window.ABL && document.readyState === 'loading') { try { document.write('<script src="lang.js?v=1"><\/script>') } catch (e) { } } })();
(function () {
  var L; try { L = localStorage } catch (e) { L = { getItem: function () { return null }, setItem: function () { }, removeItem: function () { } } }
  function get(k, d) { try { var v = JSON.parse(L.getItem(k)); return v == null ? d : v } catch (e) { return d } }
  function set(k, v) { try { L.setItem(k, JSON.stringify(v)) } catch (e) { } }
  var COL = { 350: '#e0182e', 262: '#7b3cf0', 222: '#1f55e0' };
  var AB = window.AB = {
    hue: get('ab_hue', 350),
    esc: function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] }) },
    users: function () { var u = get('ab_users', null); if (!u) { u = [{ name: 'Admin', email: 'admin@abtech.com', pass: 'admin123', role: 'admin' }]; set('ab_users', u) } return u },
    saveUsers: function (u) { set('ab_users', u) },
    reqs: function () { return get('ab_reqs', []) },
    saveReqs: function (r) { set('ab_reqs', r) },
    me: function () { return get('ab_session', null) },
    login: function (e, p) { var u = AB.users().filter(function (x) { return x.email === e.toLowerCase() && x.pass === p })[0]; if (!u) return null; set('ab_session', { name: u.name, email: u.email, role: u.role }); return u },
    signup: function (n, e, p) { e = e.toLowerCase(); var us = AB.users(); if (us.some(function (x) { return x.email === e })) return false; us.push({ name: n, email: e, pass: p, role: 'user' }); AB.saveUsers(us); return true },
    logout: function () { try { L.removeItem('ab_session') } catch (e) { } location.href = 'login.html?out=1' },
    guard: function (role) { var m = AB.me(); if (!m || (role && m.role !== role)) { location.replace('login.html'); return null } return m },
    setHue: function (h) { AB.hue = h; set('ab_hue', h); document.documentElement.style.setProperty('--accent', COL[h]);[].forEach.call(document.querySelectorAll('.dots button'), function (b) { b.classList.toggle('on', +b.dataset.h === h) }); if (AB.redraw) AB.redraw() },
    header: function () {
      var m = AB.me(), h = document.getElementById('hdr'), SW = window.ABL ? ABL.switcher : function () { return '' };
      var dots = Object.keys(COL).map(function (k) { return '<button data-h="' + k + '" style="background:' + COL[k] + '" aria-label="Color"' + (+k === AB.hue ? ' class="on"' : '') + '></button>' }).join('');
      var auth = m ? '<a class="pill" href="' + (m.role === 'admin' ? 'admin.html' : 'users.html') + '">Dashboard</a><button class="pill ghost" data-lo>Logout</button>' : '<a class="pill" href="login.html">Login</a>';
      var I = { h: '<svg viewBox="0 0 24 24"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>', s: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></svg>', c: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 8l9 6 9-6"/></svg>', w: '<svg viewBox="0 0 24 24"><path d="M12 3l2.4 5.6L20 11l-5.6 2.4L12 19l-2.4-5.6L4 11l5.6-2.4z"/></svg>' };
      var drawer = '<a class="logo mlogo" href="index.html" aria-label="AB Tech"><img src="icon-192.png?v=3" alt="" width="34" height="34"><span>Tech</span></a><button class="mbtn" aria-label="Menu" aria-expanded="false"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button><div class="scrim"></div><aside class="drawer" aria-label="Menu"><div class="dr-top"><a class="logo" href="index.html" aria-label="AB Tech"><img src="icon-192.png?v=3" alt="" width="34" height="34"><span>Tech</span></a><button class="dr-x" aria-label="Close"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div><div class="dr-nav"><a href="index.html" style="--k:0">' + I.h + 'Home</a><a href="index.html#why" style="--k:1">' + I.w + 'Why AB?</a><a href="index.html#services" style="--k:2">' + I.s + 'Services</a><a href="index.html#contact" style="--k:3">' + I.c + 'Contact</a></div><div class="dr-sec">Language</div>' + SW('m') + '<div class="dr-sec">Theme color</div><div class="dots dr-dots">' + dots + '</div><div class="dr-auth">' + auth + '</div></aside>';
      h.innerHTML = '<header><a class="logo" href="index.html" aria-label="AB Tech"><img src="icon-192.png?v=3" alt="" width="34" height="34"><span>Tech</span></a><nav aria-label="Main"><i class="ind" aria-hidden="true"></i><a href="index.html" data-i="0">Home</a><a href="index.html#why" data-i="1">Why AB?</a><a href="index.html#services" data-i="2">Services</a><a href="index.html#contact" data-i="3">Contact</a></nav><div class="hr">' + SW('d') + '<div class="dots">' + dots + '</div>' + auth + '</div></header>' + drawer;
      h.addEventListener('click', function (e) {
        var b = e.target.closest('button'); if (!b) return;
        if (b.hasAttribute('data-lo')) AB.logout(); else if (b.hasAttribute('data-install')) AB.install(); else if (b.dataset.h) AB.setHue(+b.dataset.h);
        else if (b.classList.contains('mbtn')) setOpen(!h.classList.contains('open'));
        else if (b.classList.contains('dr-x')) setOpen(false)
      });

      var ib = [].slice.call(h.querySelectorAll('.hr, .dr-auth')).map(function (p) { var x = document.createElement('button'); x.type = 'button'; x.className = 'pill ghost'; x.setAttribute('data-install', ''); x.textContent = 'Install app'; x.style.display = 'none'; p.insertBefore(x, p.firstChild); return x });
      AB.syncInstall = function () { var ok = !standalone && (deferred || ios); ib.forEach(function (x) { x.style.display = ok ? '' : 'none' }) }; AB.syncInstall();
      var hd = h.firstChild, nav = hd.querySelector('nav'), ind = nav.querySelector('.ind'), links = [].slice.call(nav.querySelectorAll('a')),
        wy = document.getElementById('why'), sv = document.getElementById('services'), ct = document.getElementById('contact'),
        onIdx = !!sv, cur = onIdx ? 0 : -1, hov = -1, lock = 0, lastY = scrollY, tick = false;
      var dr = h.querySelector('.drawer'), mb = h.querySelector('.mbtn'), dl = [].slice.call(dr.querySelectorAll('.dr-nav a'));
      dr.inert = true;
      function mark() { dl.forEach(function (a, i) { a.classList.toggle('on', i === cur) }) }
      function setOpen(o) { h.classList.toggle('open', o); dr.inert = !o; mb.setAttribute('aria-expanded', o ? 'true' : 'false'); document.documentElement.style.overflow = o ? 'hidden' : ''; if (o) dr.querySelector('.dr-x').focus({ preventScroll: true }) }
      dl.forEach(function (a, i) {
        a.addEventListener('click', function (ev) {
          cur = i; hov = -1; lock = Date.now() + 900;
          if (onIdx && i === 0) { ev.preventDefault(); scrollTo({ top: 0, behavior: 'smooth' }) } rest(); setOpen(false)
        })
      });
      h.querySelector('.scrim').addEventListener('click', function () { setOpen(false) });
      addEventListener('keydown', function (e) { if (e.key === 'Escape' && h.classList.contains('open')) setOpen(false) });
      function place(i) {
        var a = links[i]; links.forEach(function (x, k) { x.classList.toggle('sel', k === i) }); if (!a) { ind.style.opacity = 0; return }
        ind.style.setProperty('--x', a.offsetLeft + 'px'); ind.style.setProperty('--w', a.offsetWidth + 'px'); ind.style.opacity = 1
      }
      function rest() { place(hov >= 0 ? hov : cur); mark() }
      links.forEach(function (a, i) {
        a.addEventListener('mouseenter', function () { hov = i; rest() });
        a.addEventListener('click', function (ev) {
          cur = i; hov = -1; lock = Date.now() + 900;
          if (onIdx && i === 0) { ev.preventDefault(); scrollTo({ top: 0, behavior: 'smooth' }) } rest()
        })
      });
      nav.addEventListener('mouseleave', function () { hov = -1; rest() });
      nav.addEventListener('pointerdown', function () { ind.classList.add('press') });
      ['pointerup', 'pointercancel'].forEach(function (t) { addEventListener(t, function () { ind.classList.remove('press') }) });
      rest(); requestAnimationFrame(function () { requestAnimationFrame(function () { ind.classList.add('ready') }) });
      addEventListener('resize', function () { if (innerWidth > 820 && h.classList.contains('open')) setOpen(false); rest() }); addEventListener('load', rest);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(rest);

      var Ls = [].slice.call(document.querySelectorAll('.light'));
      function frame() {
        tick = false; var y = Math.max(0, scrollY), d = y - lastY;
        hd.classList.toggle('solid', y > 40);
        var ly = hd.offsetHeight / 2; hd.classList.toggle('lt', Ls.some(function (s) { var r = s.getBoundingClientRect(); return r.top <= ly && r.bottom >= ly }));
        if (y < 80) { hd.classList.remove('hide'); lastY = y }
        else if (d > 6) { var fv = false; try { fv = !!hd.querySelector(':focus-visible') } catch (e) { } if (!fv) hd.classList.add('hide'); lastY = y }
        else if (d < -2) { hd.classList.remove('hide'); lastY = y }
        if (onIdx && Date.now() >= lock) {
          var p = y + innerHeight * .4, i = 0;
          if (wy && p >= wy.getBoundingClientRect().top + y) i = 1;
          if (sv && p >= sv.getBoundingClientRect().top + y) i = 2;
          if (ct && p >= ct.getBoundingClientRect().top + y) i = 3;
          if (y + innerHeight >= document.documentElement.scrollHeight - 4) i = 3;
          if (i !== cur) { cur = i; if (hov < 0) rest() }
        }
      }
      addEventListener('scroll', function () { if (!tick) { tick = true; requestAnimationFrame(frame) } }, { passive: true }); frame();
      hd.addEventListener('focusin', function () { hd.classList.remove('hide') });
    }
  };
  document.documentElement.style.setProperty('--accent', COL[AB.hue] || COL[350]);

  function icon(rel, href, type, sizes) { var l = document.createElement('link'); l.rel = rel; l.href = href; if (type) l.type = type; if (sizes) l.sizes = sizes; document.head.appendChild(l) }
  if (!document.querySelector('link[rel~="icon"]')) {
  icon('icon', 'favicon-32.png?v=3', 'image/png', '32x32');
  icon('icon', 'favicon.png?v=3', 'image/png', '192x192');
  icon('apple-touch-icon', 'apple-touch-icon.png?v=3');
  }
  /* installable app (PWA) */
  (function () {
    try {
      var base = new URL('./', location.href).href, I192 = new URL('icon-192.png?v=3', base).href, I512 = new URL('icon-512.png?v=3', base).href, IM = new URL('icon-maskable-512.png?v=3', base).href;
      var man = { name: 'AB Tech', short_name: 'AB Tech', description: 'AB Tech - websites & apps', id: base, start_url: base, scope: base, display: 'standalone', orientation: 'portrait', background_color: '#080002', theme_color: '#080002',
        icons: [{ src: I192, sizes: '192x192', type: 'image/png', purpose: 'any' }, { src: I512, sizes: '512x512', type: 'image/png', purpose: 'any' }, { src: IM, sizes: '512x512', type: 'image/png', purpose: 'maskable' }] };
      [].forEach.call(document.querySelectorAll('link[rel="manifest"]'), function (l) { l.remove() });
      var ml = document.createElement('link'); ml.rel = 'manifest'; ml.href = URL.createObjectURL(new Blob([JSON.stringify(man)], { type: 'application/manifest+json' })); document.head.appendChild(ml)
    } catch (e) { }
  })();
  var deferred = null, ios = /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream,
    standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () { }) });
  addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); deferred = e; if (AB.syncInstall) AB.syncInstall() });
  addEventListener('appinstalled', function () { deferred = null; standalone = true; if (AB.syncInstall) AB.syncInstall() });
  AB.install = function () {
    if (deferred) { var d = deferred; deferred = null; d.prompt(); if (AB.syncInstall) AB.syncInstall() }
    else if (ios) alert(window.ABL ? ABL.t('To install: tap the Share button in Safari, then "Add to Home Screen".') : 'To install: tap the Share button in Safari, then "Add to Home Screen".')
  };
  document.documentElement.classList.add('js');
  function reveal() {
    var els = document.querySelectorAll('.rv');
    if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in') }); return }
    var io = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting && en.intersectionRatio >= .15) en.target.classList.add('in'); else if (!en.isIntersecting) en.target.classList.remove('in') }) }, { threshold: [0, .15], rootMargin: '0px 0px -6% 0px' });
    els.forEach(function (e) { io.observe(e) })
  }
  if (document.readyState === 'loading') addEventListener('DOMContentLoaded', reveal); else reveal();

  function bg() {
    var c = document.createElement('canvas'); c.id = 'fx'; var sh = document.createElement('div'); sh.className = 'shade';
    document.body.prepend(sh); document.body.prepend(c);
    var x = c.getContext('2d'), s = document.createElement('canvas'), sx = s.getContext('2d'), W, H, t = 0, my = .5,
      still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    function size() { W = innerWidth; H = innerHeight; c.width = Math.ceil(W / 2); c.height = Math.ceil(H / 2); x.setTransform(.5, 0, 0, .5, 0, 0); s.width = Math.ceil(W / 2); s.height = Math.ceil(H / 2) }
    function blob(px, py, rx, ry, col, a) { sx.save(); sx.translate(px, py); sx.scale(1, ry / rx); var g = sx.createRadialGradient(0, 0, 0, 0, 0, rx); g.addColorStop(0, 'rgba(' + col + ',' + a + ')'); g.addColorStop(1, 'rgba(' + col + ',0)'); sx.fillStyle = g; sx.beginPath(); sx.arc(0, 0, rx, 0, 6.2832); sx.fill(); sx.restore() }
    function scene() {
      var w = s.width, h = s.height;
      sx.fillStyle = '#0a0003'; sx.fillRect(0, 0, w, h);
      blob(w * (.3 + .1 * Math.sin(t * .6)), h * .6, w * .45, h * .5, '200,10,30', .9);
      blob(w * (.75 + .06 * Math.cos(t * .5)), h * .35, w * .35, h * .55, '255,60,70', .7);
      var hx = w * (.62 + .03 * Math.sin(t * .4));
      blob(hx, h * .34, w * .1, h * .2, '255,200,205', .95);
      blob(hx, h * .8, w * .22, h * .3, '255,90,100', .85);
      blob(hx - w * .05, h * .4, w * .05, h * .12, '60,0,10', .7);
    }
    function draw() {
      scene();
      var rh = W < 700 ? 8 : 6, rows = Math.ceil(H / rh), sh2 = s.height / rows, k, y, d, near;
      for (k = 0; k < rows; k++) {
        y = k * rh;
        d = Math.sin(y * .018 + t * 1.6) * 14 + Math.sin(y * .047 - t * 2.1) * 6 + Math.sin(y * .009 + t) * 22;
        near = Math.exp(-Math.pow((y - my * H) / (H * .18), 2));
        d += Math.sin(y * .12 - t * 5) * 20 * near;
        x.drawImage(s, 0, k * sh2, s.width, sh2 + 1, d - 40, y, W + 80, rh + 1);
      }
      x.globalCompositeOperation = 'lighter'; x.lineWidth = 2;
      for (k = 0; k < 16; k++) {
        x.strokeStyle = 'rgba(255,110,120,' + (.035 + .02 * Math.sin(t + k)) + ')'; x.beginPath();
        for (var px = 0; px <= W; px += 24) { var py = H * (k / 16) + Math.sin(px * .008 + t * 1.3 + k) * 26 + Math.sin(px * .02 - t * 2 + k * 2) * 9; px ? x.lineTo(px, py) : x.moveTo(px, py) }
        x.stroke();
      }
      x.globalCompositeOperation = 'source-over';
      if (AB.hue !== 350) { x.globalCompositeOperation = 'hue'; x.fillStyle = 'hsl(' + AB.hue + ',90%,50%)'; x.fillRect(0, 0, W, H); x.globalCompositeOperation = 'source-over' }
    }
    var lt = 0; function loop(ts) { if (!still) requestAnimationFrame(loop); if (document.hidden || ts - lt < 33) return; lt = ts; t += .024; draw() }
    addEventListener('resize', function () { size(); draw() });
    addEventListener('pointermove', function (e) { my = e.clientY / innerHeight });
    AB.redraw = function () { if (still) draw() };
    size(); still ? draw() : requestAnimationFrame(loop);
  }
  if (document.body) bg(); else addEventListener('DOMContentLoaded', bg);
})();
