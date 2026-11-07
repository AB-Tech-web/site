/* AB Tech panels - shared UI helpers (icons, theme, shell, modal, toast, charts) */
(function () {
  var IC = {
    home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>',
    grid: '<rect x="3" y="3" width="7" height="9" rx="2"/><rect x="14" y="3" width="7" height="5" rx="2"/><rect x="14" y="12" width="7" height="9" rx="2"/><rect x="3" y="16" width="7" height="5" rx="2"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.6-3.6 3.2-5.5 6.5-5.5s5.9 1.9 6.5 5.5"/><path d="M16 4.6a3.5 3.5 0 010 6.8M18 14.8c2 .6 3.1 2.4 3.5 5.2"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c.7-4.2 4-6 8-6s7.3 1.8 8 6"/>',
    chat: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9.5h8M8 12.5h5"/>',
    folder: '<path d="M3 7a2 2 0 012-2h4l2 2.5h8a2 2 0 012 2V18a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>',
    hash: '<path d="M5 9h14M5 15h14M9.5 4l-1.5 16M16 4l-1.5 16"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/>',
    out: '<path d="M9 4H5a2 2 0 00-2 2v12a2 2 0 002 2h4"/><path d="M16 8l4 4-4 4M20 12H9"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M20 14.5A8 8 0 019.5 4 8 8 0 1020 14.5z"/>',
    send: '<path d="M21 3L10 14M21 3l-7 18-4-7-7-4z"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M4 8l8 5.5L20 8"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M16 7l3 3"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    back: '<path d="M15 5l-7 7 7 7"/>',
    image: '<rect x="3" y="4" width="18" height="16" rx="2.5"/><circle cx="9" cy="10" r="1.8"/><path d="M4 18l5-5 4 4 3-3 4 4"/>',
    link: '<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7L11.5 6.8M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1.5-1.5"/>',
    bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0012 3z"/>',
    down: '<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',
    edit: '<path d="M4 20h4L19 9a2.8 2.8 0 00-4-4L4 16z"/>',
    ext: '<path d="M7 17L17 7M8 7h9v9"/>',
    pulse: '<path d="M3 12h4l2.5-6 4 12 2.5-6H21"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
    shield: '<path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    list: '<path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"/>',
    bell: '<path d="M6 9a6 6 0 0112 0c0 6 2.5 7 2.5 7h-17S6 15 6 9zM10 20a2 2 0 004 0"/>',
    chev: '<path d="M6 9l6 6 6-6"/>'
  };
  var P = window.P = {};
  P.ic = function (n, s) { return '<svg class="ic" viewBox="0 0 24 24" width="' + (s || 18) + '" height="' + (s || 18) + '" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (IC[n] || '') + '</svg>' };
  P.esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] }) };
  P.$ = function (s, r) { return (r || document).querySelector(s) };
  P.$$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)) };
  P.init = function (n) { return (String(n || '?').trim()[0] || '?').toUpperCase() };

  /* theme */
  function theme() { var t; try { t = localStorage.getItem('ab_theme') } catch (e) { } if (!t) t = 'dark'; document.documentElement.setAttribute('data-theme', t); return t }
  P.theme = theme(); theme();
  P.toggleTheme = function () { P.theme = P.theme === 'dark' ? 'light' : 'dark'; try { localStorage.setItem('ab_theme', P.theme) } catch (e) { } document.documentElement.setAttribute('data-theme', P.theme); P.$$('[data-th]').forEach(P.paintTheme) };
  P.paintTheme = function (b) { b.innerHTML = P.ic(P.theme === 'dark' ? 'sun' : 'moon') + '<span>' + (P.theme === 'dark' ? 'Light mode' : 'Dark mode') + '</span>' };

  /* time */
  P.ago = function (t) { if (!t) return ''; var s = (Date.now() - t) / 1000; if (s < 60) return P.t('now'); if (s < 3600) return P.t(Math.floor(s / 60) + ' min'); if (s < 86400) return P.t(Math.floor(s / 3600) + ' h'); if (s < 604800) return P.t(Math.floor(s / 86400) + ' d'); return new Date(t).toLocaleDateString() };
  P.hm = function (t) { return new Date(t).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
  P.dmy = function (t) { var d = new Date(t), n = new Date(), y = new Date(Date.now() - 864e5); if (d.toDateString() === n.toDateString()) return P.t('Today'); if (d.toDateString() === y.toDateString()) return P.t('Yesterday'); return d.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' }) };
  P.days = function (n) { var a = []; for (var i = n - 1; i >= 0; i--) a.push(new Date(Date.now() - i * 864e5).toISOString().slice(0, 10)); return a };

  /* toast + modal + confirm */
  P.toast = function (m, bad) { var w = P.$('.ts'); if (!w) { w = document.createElement('div'); w.className = 'ts'; document.body.appendChild(w) } var d = document.createElement('div'); if (bad) d.className = 'bad'; d.textContent = m; w.appendChild(d); setTimeout(function () { d.remove() }, 3800) };
  P.modal = function (html, wide) {
    var m = document.createElement('div'); m.className = 'md' + (wide ? ' wd' : ''); m.innerHTML = '<div role="dialog" aria-modal="true">' + html + '</div>'; document.body.appendChild(m);
    function close() { m.remove(); document.removeEventListener('keydown', k) } function k(e) { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', k); m.addEventListener('mousedown', function (e) { if (e.target === m) close() });
    P.$$('[data-x]', m).forEach(function (b) { b.addEventListener('click', close) }); m.close = close; return m
  };
  P.confirm = function (title, text, ok) {
    return new Promise(function (res) {
      var m = P.modal('<h3>' + P.esc(title) + '</h3><p class="mu">' + P.esc(text) + '</p><div class="ft"><button class="btn sec" data-x>Cancel</button><button class="btn dng" id="ok">' + P.esc(ok || 'Confirm') + '</button></div>');
      P.$('#ok', m).onclick = function () { m.close(); res(true) }; P.$('[data-x]', m).addEventListener('click', function () { res(false) })
    })
  };

  /* image -> small JPEG data URL (stored in the database, no Storage plan needed) */
  P.img = function (file, max, q) {
    return new Promise(function (res, rej) {
      var r = new FileReader(); r.onerror = rej; r.onload = function () {
        var i = new Image(); i.onerror = rej; i.onload = function () {
          var k = Math.min(1, (max || 1200) / Math.max(i.width, i.height)), c = document.createElement('canvas'); c.width = Math.round(i.width * k); c.height = Math.round(i.height * k);
          var x = c.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height); x.drawImage(i, 0, 0, c.width, c.height); res(c.toDataURL('image/jpeg', q || .82))
        }; i.src = r.result
      }; r.readAsDataURL(file)
    })
  };

  /* EmailJS REST */
  P.mail = function (cfg, params) {
    return fetch('https://api.emailjs.com/api/v1.0/email/send', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ service_id: cfg.service, template_id: cfg.template, user_id: cfg.key, template_params: params }) })
      .then(function (r) { if (!r.ok) return r.text().then(function (t) { throw new Error(t || r.status) }) })
  };

  /* charts */
  var PAL = ['var(--c1)', 'var(--c2)', 'var(--c3)', 'var(--c4)', 'var(--c5)', 'var(--c6)'];
  P.pal = PAL;
  P.line = function (labels, series, h) {
    var W = 640, H = h || 190, pl = 30, pb = 22, pt = 10, pr = 8, max = 1, n = labels.length;
    series.forEach(function (s) { s.v.forEach(function (v) { if (v > max) max = v }) }); max = Math.ceil(max * 1.1);
    var X = function (i) { return pl + (W - pl - pr) * (n < 2 ? .5 : i / (n - 1)) }, Y = function (v) { return pt + (H - pt - pb) * (1 - v / max) };
    var o = '<svg class="chart" viewBox="0 0 ' + W + ' ' + H + '" role="img">';
    for (var g = 0; g <= 4; g++) { var yv = max * g / 4, y = Y(yv); o += '<line class="gl" x1="' + pl + '" x2="' + (W - pr) + '" y1="' + y + '" y2="' + y + '"/><text x="' + (pl - 6) + '" y="' + (y + 3) + '" text-anchor="end">' + Math.round(yv) + '</text>' }
    labels.forEach(function (l, i) { if (n <= 8 || i % 2 === 0) o += '<text x="' + X(i) + '" y="' + (H - 6) + '" text-anchor="middle">' + P.esc(l.slice(5)) + '</text>' });
    series.forEach(function (s, k) {
      var c = s.c || PAL[k], pts = s.v.map(function (v, i) { return X(i) + ',' + Y(v) }).join(' ');
      if (k === 0) o += '<polygon class="ar" points="' + pl + ',' + Y(0) + ' ' + pts + ' ' + X(n - 1) + ',' + Y(0) + '" fill="' + c + '" opacity=".12"/>';
      o += '<polyline class="ln" pathLength="1" points="' + pts + '" fill="none" stroke="' + c + '" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/>';
      s.v.forEach(function (v, i) { o += '<circle cx="' + X(i) + '" cy="' + Y(v) + '" r="2.6" fill="' + c + '"><title>' + P.esc(labels[i] + ': ' + v) + '</title></circle>' })
    });
    o += '</svg><div class="lg">' + series.map(function (s, k) { return '<span><i style="background:' + (s.c || PAL[k]) + '"></i>' + P.esc(s.n) + '</span>' }).join('') + '</div>'; return o
  };
  P.bars = function (labels, vals, color) {
    var W = 640, H = 170, pl = 28, pb = 22, pt = 8, max = Math.max.apply(null, vals.concat([1])), n = labels.length, bw = (W - pl) / n;
    var o = '<svg class="chart" viewBox="0 0 ' + W + ' ' + H + '" role="img">';
    for (var g = 0; g <= 3; g++) { var y = pt + (H - pt - pb) * (1 - g / 3); o += '<line class="gl" x1="' + pl + '" x2="' + W + '" y1="' + y + '" y2="' + y + '"/><text x="' + (pl - 6) + '" y="' + (y + 3) + '" text-anchor="end">' + Math.round(max * g / 3) + '</text>' }
    vals.forEach(function (v, i) { var h = (H - pt - pb) * v / max; o += '<rect class="bar" style="--i:' + i + '" x="' + (pl + i * bw + bw * .2) + '" y="' + (H - pb - h) + '" width="' + bw * .6 + '" height="' + h + '" rx="3" fill="' + (color || PAL[1]) + '"><title>' + P.esc(labels[i] + ': ' + v) + '</title></rect>'; if (n <= 8 || i % 2 === 0) o += '<text x="' + (pl + i * bw + bw / 2) + '" y="' + (H - 6) + '" text-anchor="middle">' + P.esc(labels[i].slice(5)) + '</text>' });
    return o + '</svg>'
  };
  P.donut = function (items) {
    var tot = items.reduce(function (a, b) { return a + b.v }, 0), R = 52, C = 2 * Math.PI * R, off = 0, o = '<div class="dnw" style="display:flex;gap:22px;align-items:center;flex-wrap:wrap"><svg viewBox="0 0 140 140" width="140" height="140" role="img"><circle cx="70" cy="70" r="' + R + '" fill="none" stroke="var(--sf2)" stroke-width="18"/>';
    if (tot) items.forEach(function (it, k) { var len = C * it.v / tot; o += '<circle class="seg" data-di="' + k + '" data-v="' + it.v + '" data-l="' + P.esc(it.l) + '" cx="70" cy="70" r="' + R + '" fill="none" stroke="' + PAL[k % PAL.length] + '" stroke-width="18" stroke-dasharray="' + len + ' ' + (C - len) + '" stroke-dashoffset="' + (-off) + '" transform="rotate(-90 70 70)"><title>' + P.esc(it.l + ': ' + it.v) + '</title></circle>'; off += len });
    o += '<text class="dc" x="70" y="71" text-anchor="middle" data-t="' + tot + '" style="fill:var(--tx);font-size:22px;font-weight:700">' + tot + '</text><text class="dcl" x="70" y="89" text-anchor="middle" style="fill:var(--mu);font-size:10px"></text></svg><div class="lg" style="flex-direction:column;margin:0">' + (items.length ? items.map(function (it, k) { return '<span data-di="' + k + '" data-v="' + it.v + '" data-l="' + P.esc(it.l) + '"><i style="background:' + PAL[k % PAL.length] + '"></i><em style="font-style:normal">' + P.esc(it.l) + '</em> &middot; ' + it.v + '</span>' }).join('') : '<span>No data yet</span>') + '</div></div>'; return o
  };
  function dnReset(w) { w.classList.remove('hl'); var dc = P.$('.dc', w), dl = P.$('.dcl', w); if (dc) dc.textContent = dc.dataset.t; if (dl) dl.textContent = ''; P.$$('[data-di]', w).forEach(function (x) { x.classList.remove('on') }) }
  function dnHov(e) {
    var t = e.target.closest && e.target.closest('[data-di]'), w = t && t.closest('.dnw'); P.$$('.dnw.hl').forEach(function (x) { if (x !== w) dnReset(x) }); if (!t || !w) return;
    w.classList.add('hl'); P.$$('[data-di]', w).forEach(function (x) { x.classList.toggle('on', x.dataset.di === t.dataset.di) }); P.$('.dc', w).textContent = t.dataset.v; P.$('.dcl', w).textContent = t.dataset.l
  }
  document.addEventListener('mouseover', dnHov); document.addEventListener('click', dnHov);
  document.addEventListener('mouseout', function (e) { var w = e.target.closest && e.target.closest('.dnw'); if (w && !(e.relatedTarget && w.contains(e.relatedTarget))) dnReset(w) });
  P.replay = function () { var v = P.$('#vw'); if (!v) return; v.classList.remove('cs'); void v.offsetWidth; clearTimeout(P._cs); P._cs = setTimeout(function () { v.classList.add('cs') }, 1300) };
  P.count = function (root) {
    if (!root || root.classList.contains('settled')) return;
    [].forEach.call(root.querySelectorAll('.tile b,.kp b,.mt2 b'), function (b) { var t = b.textContent.trim(); if (!/^\d+$/.test(t) || b._v === +t) return; var to = +t, from = b._v || 0, s = performance.now(); b._v = to; (function f(now) { var k = Math.min(1, (now - s) / 800), e = 1 - Math.pow(1 - k, 3); b.textContent = Math.round(from + (to - from) * e); if (k < 1) requestAnimationFrame(f) })(s) })
  };
  P.chart = function (el, o) {
    var W = 640, H = o.h || 240, pl = 34, pr = 10, pt = 14, pb = 24, L = o.labels, n = L.length, off = o.off || {}, S = o.series;
    var loc = function () { return P.lang === 'ar' ? 'ar-EG' : P.lang }, fmt = function (l) { return new Date(l).toLocaleDateString(loc(), { day: 'numeric', month: 'short', timeZone: 'UTC' }) };
    var col = function (s) { return s.c || PAL[S.indexOf(s) % PAL.length] };
    function draw() {
      var act = S.filter(function (s) { return !off[s.n] }), max = 1; act.forEach(function (s) { s.v.forEach(function (v) { if (v > max) max = v }) }); max = Math.ceil(max * 1.15);
      var X = function (i) { return pl + (W - pl - pr) * (n < 2 ? .5 : i / (n - 1)) }, Y = function (v) { return pt + (H - pt - pb) * (1 - v / max) };
      var h = '<div class="ich"><svg class="chart" viewBox="0 0 ' + W + ' ' + H + '" role="img">';
      for (var g = 0; g <= 4; g++) { var y = Y(max * g / 4); h += '<line class="gl" x1="' + pl + '" x2="' + (W - pr) + '" y1="' + y + '" y2="' + y + '"/><text x="' + (pl - 6) + '" y="' + (y + 3) + '" text-anchor="end">' + Math.round(max * g / 4) + '</text>' }
      L.forEach(function (l, i) { if (n <= 8 || i % Math.ceil(n / 8) === 0) h += '<text x="' + X(i) + '" y="' + (H - 6) + '" text-anchor="middle">' + P.esc(fmt(l)) + '</text>' });
      act.forEach(function (s) { var pts = s.v.map(function (v, i) { return X(i) + ',' + Y(v) }).join(' '); h += '<polygon class="ar" points="' + pl + ',' + Y(0) + ' ' + pts + ' ' + X(n - 1) + ',' + Y(0) + '" fill="' + col(s) + '" opacity=".08"/><polyline class="ln" pathLength="1" points="' + pts + '" fill="none" stroke="' + col(s) + '" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/>' });
      h += '<line class="xh" y1="' + pt + '" y2="' + (H - pb) + '" style="display:none"/><g class="dots"></g></svg><div class="tt" hidden></div></div><div class="lg">' + S.map(function (s) { return '<button type="button" class="lgb2' + (off[s.n] ? '' : ' on') + '" data-s="' + P.esc(s.n) + '"><i style="background:' + col(s) + '"></i>' + P.esc(s.n) + '</button>' }).join('') + '</div>';
      el.innerHTML = h;
      var svg = P.$('svg', el), xh = P.$('.xh', el), dots = P.$('.dots', el), tt = P.$('.tt', el), box = P.$('.ich', el);
      function at(e) {
        var t = e.touches ? e.touches[0] : e, r = svg.getBoundingClientRect(), px = (t.clientX - r.left) / r.width * W, i = n < 2 ? 0 : Math.max(0, Math.min(n - 1, Math.round((px - pl) / ((W - pl - pr) / (n - 1)))));
        xh.setAttribute('x1', X(i)); xh.setAttribute('x2', X(i)); xh.style.display = '';
        dots.innerHTML = act.map(function (s) { return '<circle cx="' + X(i) + '" cy="' + Y(s.v[i]) + '" r="4.5" fill="' + col(s) + '" stroke="var(--sf)" stroke-width="2"/>' }).join('');
        tt.innerHTML = '<b>' + P.esc(fmt(L[i])) + '</b>' + act.map(function (s) { return '<div><i style="background:' + col(s) + '"></i><span>' + P.esc(s.n) + '</span><em>' + s.v[i] + '</em></div>' }).join(''); tt.hidden = false;
        var bx = box.getBoundingClientRect(), left = (X(i) / W) * r.width + (r.left - bx.left); tt.style.left = Math.max(6, Math.min(left + 14, bx.width - tt.offsetWidth - 6)) + 'px'
      }
      ['mousemove', 'touchstart', 'touchmove'].forEach(function (ev) { svg.addEventListener(ev, at, { passive: true }) });
      function out() { xh.style.display = 'none'; dots.innerHTML = ''; tt.hidden = true } svg.addEventListener('mouseleave', out); svg.addEventListener('touchend', out);
      P.$$('[data-s]', el).forEach(function (b) { b.onclick = function () { var k = b.dataset.s; off[k] = !off[k]; if (S.every(function (s) { return off[s.n] })) off[k] = false; P.replay(); draw(); if (o.onToggle) o.onToggle() } })
    }
    draw(); return { redraw: draw }
  };
  P.hbars = function (items) { var m = Math.max.apply(null, items.map(function (i) { return i.v }).concat([1])); return items.length ? '<div class="hb">' + items.map(function (i) { return '<div><span title="' + P.esc(i.l) + '">' + P.esc(i.l.length > 14 ? i.l.slice(0, 13) + '...' : i.l) + '</span><u><b style="width:' + (100 * i.v / m) + '%"></b></u><span>' + i.v + '</span></div>' }).join('') + '</div>' : '<div class="empty">No data yet</div>' };

  /* app shell with sidebar + hash routing. cfg: {brand, nav:[{id,label,icon}], user, render(id, el, ctx)} */
  P.spark = function (v, w, h) { var m = Math.max.apply(null, v.concat([1])), n = v.length; if (n < 2) return ''; var pts = v.map(function (x, i) { return (i * (w / (n - 1))).toFixed(1) + ',' + (h - 3 - (h - 8) * x / m).toFixed(1) }).join(' '); return '<svg viewBox="0 0 ' + w + ' ' + h + '" preserveAspectRatio="none" aria-hidden="true"><polygon class="ar" points="0,' + h + ' ' + pts + ' ' + w + ',' + h + '" fill="var(--c1)" opacity=".10"/><polyline class="ln" pathLength="1" points="' + pts + '" fill="none" stroke="var(--c1)" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"/></svg>' };
  P.tile = function (ic, v, l, sub, href, o) { o = o || {}; var d = o.d; return '<a class="tile" href="' + href + '">' + (o.spark ? '<div class="sk">' + P.spark(o.spark, 120, 44) + '</div>' : '') + '<div class="th2"><div class="ib">' + P.ic(ic, 20) + '</div>' + (d == null ? '' : '<span class="dl2 ' + (d > 0 ? 'up' : d < 0 ? 'dn' : '') + '">' + (d > 0 ? '+' : '') + d + '%</span>') + '</div><div class="tb2"><b>' + v + '</b><span>' + l + '</span>' + (sub ? '<small>' + sub + '</small>' : '') + '</div></a>' };
  P.ring = function (p) { var R = 44, C = 2 * Math.PI * R; return '<svg viewBox="0 0 110 110" width="110" height="110" role="img"><circle cx="55" cy="55" r="' + R + '" fill="none" stroke="var(--sf2)" stroke-width="10"/><circle cx="55" cy="55" r="' + R + '" fill="none" stroke="var(--c1)" stroke-width="10" stroke-linecap="round" stroke-dasharray="' + (C * p / 100) + ' ' + C + '" transform="rotate(-90 55 55)"/><text x="55" y="61" text-anchor="middle" style="fill:var(--tx);font-size:22px;font-weight:700">' + p + '%</text></svg>' };
  P.notifPage = function (el) {
    var draw = function () {
      var n = P.nf, e = n.events(), s = n.seen();
      el.innerHTML = '<div class="ph"><div><h2>Notifications</h2></div><div class="phr"><button class="btn sec" id="mr">' + P.ic('check', 16) + 'Mark all read</button></div></div><div class="ls2">' + (e.map(function (x, i) { return '<div class="lr nrow' + (x.t > s ? ' un' : '') + '" data-e="' + i + '"><div class="ib" style="width:40px;height:40px;border-radius:12px">' + P.ic(x.ic, 18) + '</div><div class="tx"><b>' + x.a + '</b><small>' + P.esc(x.b) + '</small></div><small class="mu">' + P.ago(x.t) + '</small></div>' }).join('') || '<div class="cd empty">No notifications yet</div>') + '</div>'
    };
    el.onclick = function (ev) { if (ev.target.closest('#mr')) { P.nf.mark(); draw(); return } var r = ev.target.closest('[data-e]'); if (r) P.nf.open(+r.dataset.e) };
    draw(); return draw
  };
  /* project viewer: opens the client's site inside the platform (the address is never shown) */
  P.fixUrl = function (u) {
    u = String(u || '').trim(); if (!u) return '';
    if (!/^[a-z][a-z0-9+.\-]*:/i.test(u)) u = 'https://' + u.replace(/^\/+/, '');
    if (location.protocol === 'https:' && /^http:\/\//i.test(u)) u = u.replace(/^http:/i, 'https:');
    return u
  };
  P.skMain = '<i class="sq" style="--w:min(625px,70vw);--h:62px;--r:20px"></i><i class="sq" style="--w:min(1250px,100%);--h:94px;--r:32px;margin-top:44px"></i><div class="sq-row">' + Array(11).join('<div><i class="sq" style="--w:76px;--h:76px;--r:50%"></i><i class="sq" style="--w:76px;--h:15px"></i></div>') + '</div>';
  P.openSite = function (p, closeLabel) {
    var w = document.createElement('div'); w.className = 'vw'; w.oncontextmenu = function (e) { e.preventDefault() };
    w.innerHTML = '<div class="hd"><button class="gh" id="vc">' + P.ic('back', 16) + (closeLabel || 'Back') + '</button><b>' + P.esc(p.title) + '</b></div><div class="vl" aria-busy="true"><div class="sq-m">'+P.skMain+'</div></div><iframe src="' + P.esc(P.fixUrl(p.url)) + '" title="' + P.esc(p.title) + '" referrerpolicy="no-referrer" allow="fullscreen; clipboard-write"></iframe>';
    document.body.appendChild(w);
    var f = w.querySelector('iframe'), l = w.querySelector('.vl'); f.addEventListener('load', function () { l.remove() });
    P.$('#vc', w).onclick = function () { w.remove() };
    return w
  };
  /* logout confirmation: opens as a side panel */
  P.logoutPanel = function (u) {
    if (P.$('.lo-w')) return; u = u || {};
    var prev = document.activeElement, w = document.createElement('div'); w.className = 'lo-w';
    w.innerHTML = '<div class="lo-s"></div><aside class="lo-p" role="dialog" aria-modal="true" aria-label="Log out"><div class="lo-h"><b>Log out</b><button type="button" class="gh ico" id="lo-x" aria-label="Close">' + P.ic('x', 16) + '</button></div>' +
      '<div class="lo-b"><div class="lo-i">' + P.ic('out', 26) + '</div><h3>Log out of your account?</h3><p class="mu">You will need to log in again to open your dashboard.</p>' +
      '<div class="lo-u"><span class="av">' + P.esc(P.init(u.name || '')) + '</span><div><b>' + P.esc(u.name || '') + '</b><small>' + P.esc(u.email || '') + '</small></div></div></div>' +
      '<div class="lo-f"><button type="button" class="btn" id="lo-ok">' + P.ic('out', 16) + 'Log out</button><button type="button" class="btn sec" id="lo-no">Cancel</button></div></aside>';
    document.body.appendChild(w); void w.offsetWidth; w.classList.add('in');
    function close() { document.removeEventListener('keydown', key); w.classList.remove('in'); setTimeout(function () { w.remove(); if (prev && prev.focus) prev.focus() }, 400) }
    function key(e) { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', key);
    P.$('.lo-s', w).onclick = P.$('#lo-x', w).onclick = P.$('#lo-no', w).onclick = close;
    P.$('#lo-ok', w).onclick = function () {
      this.disabled = true; var go = function () { location.replace('login.html') };
      try { FB.logout().then(go, go) } catch (e) { go() }
    };
    P.$('#lo-no', w).focus()
  };
  P.shell = function (cfg) {
    var app = document.getElementById('app'), vis = cfg.nav.filter(function (n) { return !n.hide }), last = '', uid = (cfg.user && cfg.user.uid) || 'x', sk = 'ab_seen_' + uid, seen = 0, t0 = Date.now(), lt = 0, ready = false, base = document.title.replace(/^\(\d+\) /, '');
    try { seen = +localStorage.getItem(sk) || 0; if (!seen) { seen = Date.now(); localStorage.setItem(sk, seen) } } catch (e) { seen = seen || Date.now() }
    function evs() { try { return cfg.events ? cfg.events() : [] } catch (e) { return [] } }
    P.nf = { events: evs, seen: function () { return seen }, mark: function () { seen = Date.now(); try { localStorage.setItem(sk, seen) } catch (e) { } bell() }, open: function (i) { var x = evs()[i]; if (!x) return; if (x.fn) x.fn(); if (x.h) location.hash = x.h.replace(/^#/, '') } };
    var navH = vis.map(function (n) { var g = n.g && n.g !== last ? (last = n.g, '<div class="sg">' + n.g + '</div>') : ''; return g + '<a href="#' + n.id + '" data-n="' + n.id + '">' + P.ic(n.icon) + '<span>' + n.label + '</span><em class="bd" id="bd-' + n.id + '"></em></a>' }).join('');
    var bnH = '<nav class="bn">' + vis.slice(0, 4).map(function (n) { return '<a href="#' + n.id + '" data-n2="' + n.id + '">' + P.ic(n.icon, 22) + '<span>' + n.label + '</span><em class="bd" id="bn-' + n.id + '"></em></a>' }).join('') + '<button id="mo2" type="button">' + P.ic('menu', 22) + '<span>More</span></button></nav>';
    app.innerHTML = '<div class="sh" id="sh"><aside class="sd"><div class="br"><img src="icon-192.png" alt="" onerror="this.style.display=\'none\'"><div>AB Tech<small>' + P.esc(cfg.brand) + '</small></div></div><nav class="sn">' + navH + '</nav><div class="sf"><button class="gh" id="lo">' + P.ic('out') + '<span>Log out</span></button></div></aside><div class="sc" id="sc"></div>' +
      '<main class="mn"><header class="tb"><button class="gh mb" id="mb" aria-label="Menu">' + P.ic('menu') + '</button><a class="gh ico" id="bkb" href="#" hidden aria-label="Back"><span class="flip" style="display:inline-flex">' + P.ic('back', 16) + '</span></a><h1 id="tt"></h1>' +
      '<label class="srch2" id="sr" for="si">' + P.ic('search', 16) + '<input id="si" placeholder="Search..." autocomplete="off"><div class="sres" id="srs" hidden></div></label>' +
      '<div class="tr"><button class="gh ico lgb" id="lgb" aria-label="Language">' + P.ic('globe', 16) + '<span class="lc"></span></button><button class="gh ico" data-th aria-label="Theme"></button><button class="gh ico bell" id="bell" aria-label="Notifications">' + P.ic('bell', 18) + '<em class="nb" id="nb"></em></button><a class="chip" href="#' + (cfg.profile || '') + '"><span class="av">' + P.esc(P.init(cfg.user.name)) + '</span><span>' + P.esc(cfg.user.name) + '</span></a></div></header><div id="vw"></div></main>' + bnH + '</div><div class="nf" id="nf" hidden></div>';
    var sh = P.$('#sh'), vw = P.$('#vw'), nf = P.$('#nf'), cleanup = null, items = [];
    P.$$('[data-th]').forEach(P.paintTheme); P.paintLang();
    P.$('[data-th]').onclick = P.toggleTheme; P.$('#lgb').onclick = P.langMenu;
    P.$('#lo').onclick = function () { P.logoutPanel(cfg.user) };
    P.$('#mb').onclick = P.$('#mo2').onclick = function () { sh.classList.toggle('open') }; P.$('#sc').onclick = function () { sh.classList.remove('open') };
    function drawNf() {
      var e = evs().slice(0, 12), ask = window.Notification && Notification.permission === 'default';
      nf.innerHTML = '<div class="nh"><b>Notifications</b><button class="gh sm" id="mr2">Mark all read</button></div><div class="nl">' + (e.map(function (x, i) { return '<a class="ni' + (x.t > seen ? ' un' : '') + '" data-i="' + i + '"><div class="ib">' + P.ic(x.ic, 16) + '</div><div><b>' + x.a + '</b><span class="t">' + P.esc(x.b) + '</span></div><small>' + P.ago(x.t) + '</small></a>' }).join('') || '<div class="empty">No notifications yet</div>') + '</div>' + (ask ? '<button class="nfa" id="en">Enable browser alerts</button>' : '') + '<a class="nfa" href="#notifications" id="va">View all</a>'
    }
    function bell() {
      var e = evs(), n = e.filter(function (x) { return x.t > seen }).length, nb = P.$('#nb');
      if (nb) { nb.textContent = n > 99 ? '99+' : n; nb.classList.toggle('show', n > 0) }
      document.title = (n ? '(' + n + ') ' : '') + base;
      var mx = e.length ? e[0].t : 0;
      if (!ready) { lt = Math.max(lt, mx); if (Date.now() - t0 > 3000) ready = true }
      else if (mx > lt) { e.filter(function (x) { return x.t > lt }).slice(0, 2).forEach(function (x) { P.toast(P.t(x.a) + ': ' + x.b) }); lt = mx; var bl = P.$('#bell'); bl.classList.remove('ring'); void bl.offsetWidth; bl.classList.add('ring'); try { if (window.Notification && Notification.permission === 'granted' && document.hidden) new Notification(P.t(e[0].a), { body: e[0].b }) } catch (er) { } }
      if (!nf.hidden) drawNf()
    }
    P.$('#bell').onclick = function (e) { e.stopPropagation(); nf.hidden = !nf.hidden; if (!nf.hidden) drawNf() };
    nf.onclick = function (e) {
      e.stopPropagation();
      if (e.target.closest('#mr2')) return P.nf.mark();
      if (e.target.closest('#va')) { nf.hidden = true; return }
      if (e.target.closest('#en')) { try { Notification.requestPermission().then(drawNf) } catch (x) { } return }
      var a = e.target.closest('[data-i]'); if (a) { nf.hidden = true; P.nf.open(+a.dataset.i) }
    };
    var si = P.$('#si'), srs = P.$('#srs');
    si.oninput = function () {
      var q = si.value.trim().toLowerCase(); if (!q || !cfg.search) { srs.hidden = true; return }
      items = cfg.search(q).slice(0, 8);
      srs.innerHTML = items.map(function (x, i) { return '<a class="sri" data-i="' + i + '"><div class="ib">' + P.ic(x.ic, 16) + '</div><div><b>' + P.esc(x.t) + '</b><span>' + P.esc(x.s || '') + '</span></div></a>' }).join('') || '<div class="empty" style="padding:14px">No results</div>'; srs.hidden = false
    };
    srs.onclick = function (e) { e.preventDefault(); var a = e.target.closest('[data-i]'); if (!a) return; var x = items[a.dataset.i]; srs.hidden = true; si.value = ''; si.blur(); if (x.fn) x.fn(); else if (x.h) location.hash = x.h.replace(/^#/, '') };
    si.onkeydown = function (e) { if (e.key === 'Escape') { si.value = ''; srs.hidden = true; si.blur() } };
    document.addEventListener('click', function (e) { if (!e.target.closest('#sr')) srs.hidden = true; if (!e.target.closest('#nf,#bell')) nf.hidden = true });
    document.addEventListener('keydown', function (e) { if (e.key === '/' && !/INPUT|TEXTAREA|SELECT/.test((document.activeElement || {}).tagName || '')) { e.preventDefault(); si.focus() } });
    function go() {
      var h = location.hash.slice(1).split('/'), id = h[0] || cfg.nav[0].id, sub = h.slice(1).join('/');
      if (!cfg.nav.some(function (n) { return n.id === id })) { id = cfg.nav[0].id; sub = '' }
      var nv = cfg.nav.filter(function (n) { return n.id === id })[0];
      P.$$('.sn a').forEach(function (a) { a.classList.toggle('on', a.dataset.n === id) }); P.$$('.bn a').forEach(function (a) { a.classList.toggle('on', a.dataset.n2 === id) });
      P.$('#tt').textContent = (sub && cfg.subTitle && cfg.subTitle(id, sub)) || nv.label; sh.classList.remove('open'); sh.classList.toggle('chat', id === 'chat' || id === 'messages'); nf.hidden = true;
      var bb = P.$('#bkb'); bb.hidden = !sub; bb.href = '#' + id;
      if (cleanup) { try { cleanup() } catch (e) { } cleanup = null } vw.innerHTML = ''; vw.classList.remove('settled', 'cs'); clearTimeout(P._s); P._s = setTimeout(function () { vw.classList.add('settled', 'cs') }, 1300);
      cleanup = cfg.render(id, vw, sub) || null; window.scrollTo(0, 0); [90, 400, 800].forEach(function (t) { setTimeout(function () { P.count(vw) }, t) })
    }
    addEventListener('hashchange', go); addEventListener('ablang', go); go();
    return { go: go, bell: bell, badge: function (id, n) { ['bd-', 'bn-'].forEach(function (p) { var b = P.$('#' + p + id); if (b) { b.textContent = n > 99 ? '99+' : n; b.classList.toggle('show', n > 0) } }) }, cur: function () { return location.hash.slice(1) || cfg.nav[0].id } }
  };

  /* chat bubbles with day separators */
  P.bubbles = function (list, mine) {
    var last = '', o = '';
    list.forEach(function (m) { var d = P.dmy(m.t); if (d !== last) { o += '<div class="dy">' + d + '</div>'; last = d } o += '<div class="bb' + (m.from === mine ? ' me' : '') + '">' + P.esc(m.text) + '<time>' + P.hm(m.t) + '</time></div>' });
    return o
  };
  P.arr = function (o) { return o ? Object.keys(o).map(function (k) { var v = o[k]; return typeof v === 'object' && v ? Object.assign({ id: k }, v) : { id: k, v: v } }) : [] };

  /* language: English / Italiano / Arabic, same "ab_lang" key as the website */
  var RAW = `Overview|Panoramica|نظرة عامة
Dashboards|Dashboard|لوحات المتابعة
Users|Utenti|المستخدمين
Messages|Messaggi|الرسائل
Projects|Progetti|المشاريع
Homepage|Home page|الصفحة الرئيسية
Settings|Impostazioni|الإعدادات
My projects|I miei progetti|مشاريعي
Requests|Richieste|الطلبات
Profile|Profilo|حسابي
Admin panel|Pannello admin|لوحة الإدارة
Client area|Area clienti|منطقة العميل
Open website|Apri il sito|افتح الموقع
Light mode|Modalità chiara|الوضع الفاتح
Dark mode|Modalità scura|الوضع الداكن
Log out|Esci|تسجيل الخروج
Language|Lingua|اللغة
Close|Chiudi|إغلاق
Cancel|Annulla|إلغاء
Delete|Elimina|حذف
Edit|Modifica|تعديل
Preview|Anteprima|معاينة
Save|Salva|حفظ
Search|Cerca|بحث
Open project|Apri progetto|افتح المشروع
Show more|Mostra altro|عرض المزيد
now|ora|دلوقتي
Today|Oggi|النهارده
Yesterday|Ieri|إمبارح
Type a message|Scrivi un messaggio|اكتب رسالة
Loading...|Caricamento...|جاري التحميل...
Website visits|Visite al sito|زيارات الموقع
Unique visitors|Visitatori unici|زوار فريدين
Registered users|Utenti registrati|مستخدمين مسجلين
Logins|Accessi|مرات الدخول
Project requests|Richieste di progetto|طلبات المشاريع
Unread messages|Messaggi non letti|رسائل غير مقروءة
Add to homepage|Aggiungi alla home|أضف للصفحة الرئيسية
All time|Sempre|الإجمالي
Last 7 days|Ultimi 7 giorni|آخر 7 أيام
Last 30 days|Ultimi 30 giorni|آخر 30 يوم
Day by day|Giorno per giorno|يوم بيوم
Visits, last 14 days|Visite, ultimi 14 giorni|الزيارات آخر 14 يوم
Suggestions|Suggerimenti|اقتراحات
Recent activity|Attività recente|آخر النشاطات
Newest users|Ultimi utenti|أحدث المستخدمين
All|Tutti|الكل
On the homepage|In home page|في الصفحة الرئيسية
Hidden|Nascosti|مخفية
Client projects|Progetti dei clienti|مشاريع العملاء
Homepage only|Solo home page|للصفحة الرئيسية فقط
Client|Cliente|العميل
New project|Nuovo progetto|مشروع جديد
Projects on the homepage|Progetti in home page|المشاريع في الصفحة الرئيسية
Add new project|Aggiungi nuovo progetto|أضف مشروع جديد
Add an existing project|Aggiungi un progetto esistente|أضف مشروع موجود
Choose a project|Scegli un progetto|اختار مشروع
No projects on the homepage yet.|Nessun progetto in home page.|مفيش مشاريع في الصفحة الرئيسية لسه.
Homepage counters|Contatori della home|عدادات الصفحة الرئيسية
Show on the homepage|Mostra nella home page|اعرضه في الصفحة الرئيسية
Hide from homepage|Nascondi dalla home|اخفيه من الصفحة الرئيسية
Show on homepage|Mostra nella home|اعرضه في الصفحة الرئيسية
Save project|Salva progetto|احفظ المشروع
Edit project|Modifica progetto|تعديل المشروع
Title|Titolo|العنوان
Description|Descrizione|الوصف
Project image|Immagine del progetto|صورة المشروع
Upload|Carica|رفع صورة
Project or website link|Link del progetto o sito|رابط المشروع أو الموقع
Project saved|Progetto salvato|اتحفظ المشروع
Saved|Salvato|اتحفظ
Project deleted|Progetto eliminato|اتمسح المشروع
Status updated|Stato aggiornato|اتغيرت الحالة
Delete project|Elimina progetto|حذف المشروع
Save counters|Salva contatori|احفظ العدادات
Number|Numero|الرقم
Short description|Descrizione breve|وصف قصير
No users found.|Nessun utente trovato.|مفيش مستخدمين.
Search users|Cerca utenti|ابحث عن مستخدم
Export CSV|Esporta CSV|تصدير CSV
Your projects will appear here once we add them.|I tuoi progetti appariranno qui quando li aggiungeremo.|مشاريعك هتظهر هنا أول ما نضيفها.
Latest projects|Ultimi progetti|أحدث المشاريع
Recent requests|Richieste recenti|آخر الطلبات
No requests yet.|Nessuna richiesta.|مفيش طلبات لسه.
New request|Nuova richiesta|طلب جديد
Message us|Scrivici|كلمنا
Completed|Completate|المكتملة
Unread replies|Risposte non lette|ردود غير مقروءة
Project not found.|Progetto non trovato.|المشروع مش موجود.
My requests|Le mie richieste|طلباتي
New project request|Nuova richiesta di progetto|طلب مشروع جديد
Send request|Invia richiesta|ابعت الطلب
Project title|Titolo del progetto|اسم المشروع
Describe what you need|Descrivi cosa ti serve|اشرح اللي محتاجه
Type|Tipo|النوع
Website|Sito web|موقع
Web app / dashboard|Web app / dashboard|تطبيق ويب / لوحة تحكم
Mobile app|App mobile|تطبيق موبايل
Other|Altro|أخرى
New|Nuova|جديد
In progress|In corso|جاري التنفيذ
Done|Completata|تم
My details|I miei dati|بياناتي
Change password|Cambia password|غيّر كلمة السر
Full name|Nome completo|الاسم الكامل
Email|Email|الإيميل
Current password|Password attuale|كلمة السر الحالية
New password|Nuova password|كلمة السر الجديدة
Update password|Aggiorna password|حدّث كلمة السر
AB Tech team|Team AB Tech|فريق AB Tech
Follow your projects, send new requests and talk to the AB Tech team from here.|Segui i tuoi progetti, invia nuove richieste e parla con il team AB Tech da qui.|تابع مشاريعك وابعت طلبات جديدة وكلّم فريق AB Tech من هنا.
Say hello. Ask anything about your project.|Scrivici. Chiedi pure qualsiasi cosa sul tuo progetto.|ابعتلنا أي سؤال عن مشروعك.
Joined|Iscritto|انضم
Conversation|Conversazione|المحادثة
Delete user|Elimina utente|حذف المستخدم
Open chat|Apri chat|افتح المحادثة
Add project|Aggiungi progetto|أضف مشروع
No requests.|Nessuna richiesta.|مفيش طلبات.
No projects assigned.|Nessun progetto assegnato.|مفيش مشاريع.
No messages.|Nessun messaggio.|مفيش رسائل.
Search requests|Cerca richieste|ابحث في الطلبات
No requests found.|Nessuna richiesta trovata.|مفيش طلبات.
Details|Dettagli|التفاصيل
Date|Data|التاريخ
Status|Stato|الحالة
Delete request|Elimina richiesta|حذف الطلب
Last login|Ultimo accesso|آخر دخول
Visibility|Visibilità|الظهور
Public|Pubblico|عام
Private|Privato|خاص
Public (visitors can open it)|Pubblico (i visitatori possono aprirlo)|عام (الزوار يقدروا يفتحوه)
Private (shown, but nobody can open it)|Privato (visibile, ma nessuno può aprirlo)|خاص (بيظهر بس محدش يقدر يفتحه)
Client name (shown on the website)|Nome del cliente (mostrato sul sito)|اسم العميل (بيظهر في الموقع)
Features (separated by commas)|Funzionalità (separate da virgole)|المميزات (بينها فاصلة)
Client (who sees it in their dashboard)|Cliente (chi lo vede nella dashboard)|العميل (اللي بيشوفه في لوحته)
Homepage only (no client)|Solo home page (nessun cliente)|للصفحة الرئيسية فقط (بدون عميل)
Enter a link that starts with https://|Inserisci un link che inizia con https://|اكتب رابط بيبدأ بـ https://
More|Altro|المزيد
New requests|Nuove richieste|طلبات جديدة
Your request|La tua richiesta|طلبك
Create your account|Crea il tuo account|اعمل حسابك
Welcome back|Bentornato|أهلاً بيك تاني
Sign up to send requests and follow your projects.|Registrati per inviare richieste e seguire i tuoi progetti.|سجّل عشان تبعت طلبات وتتابع مشاريعك.
Log in to your AB Tech dashboard.|Accedi alla tua dashboard AB Tech.|ادخل على لوحتك في AB Tech.
Login|Accedi|تسجيل الدخول
Sign up|Registrati|حساب جديد
Password|Password|كلمة السر
Create account|Crea account|إنشاء الحساب
Back to website|Torna al sito|الرجوع للموقع
Main|Principale|الرئيسية
Manage|Gestione|الإدارة
System|Sistema|النظام
Account|Account|الحساب
Notifications|Notifiche|الإشعارات
Mark all read|Segna tutto come letto|اعتبرها كلها مقروءة
View all|Vedi tutte|عرض الكل
Enable browser alerts|Attiva avvisi del browser|فعّل تنبيهات المتصفح
No notifications yet|Nessuna notifica|مفيش إشعارات لسه
Search...|Cerca...|ابحث...
No results|Nessun risultato|مفيش نتايج
More|Altro|المزيد
New sign-up|Nuova registrazione|تسجيل جديد
Login|Accesso|دخول
New project request|Nuova richiesta di progetto|طلب مشروع جديد
New message|Nuovo messaggio|رسالة جديدة
Website message|Messaggio dal sito|رسالة من الموقع
New reply from AB Tech|Nuova risposta da AB Tech|رد جديد من AB Tech
Request update|Aggiornamento richiesta|تحديث على الطلب
New project added|Nuovo progetto aggiunto|تمت إضافة مشروع جديد
Returning visits|Visite di ritorno|زيارات متكررة
Requests by status|Richieste per stato|الطلبات حسب الحالة
Traffic|Traffico|الزيارات
Visits|Visite|الزيارات
Current request|Richiesta attuale|الطلب الحالي
Activity|Attività|النشاط
Needs attention|Da controllare|محتاج انتباه
Nothing in progress right now.|Niente in corso al momento.|مفيش حاجة شغالة دلوقتي.
Theme|Tema|المظهر
Trends|Andamento|الاتجاهات
Conversion funnel|Funnel di conversione|مسار التحويل
Visits by weekday|Visite per giorno|الزيارات حسب اليوم
Requests by type|Richieste per tipo|الطلبات حسب النوع
User activity|Attività utenti|نشاط المستخدمين
Projects per client|Progetti per cliente|المشاريع لكل عميل
Sign-ups|Registrazioni|التسجيلات
Users with a request|Utenti con una richiesta|مستخدمين عملوا طلب
Completed requests|Richieste completate|طلبات مكتملة
of previous step|del passaggio precedente|من الخطوة اللي قبلها
This week|Questa settimana|الأسبوع ده
This month|Questo mese|الشهر ده
Inactive|Inattivi|غير نشطين
Live data from your website and panel|Dati in tempo reale dal tuo sito e pannello|بيانات حيّة من موقعك ولوحتك
Visit to account rate|Da visita ad account|من زيارة لحساب
Requests per user|Richieste per utente|طلبات لكل مستخدم
New visitors share|Quota nuovi visitatori|نسبة الزوار الجدد
Conversations|Conversazioni|المحادثات
All project requests|Tutte le richieste|كل الطلبات
We usually reply within a day|Di solito rispondiamo entro un giorno|بنرد عادةً في خلال يوم
Loading project...|Caricamento del progetto...|بنحمّل المشروع...
All projects|Tutti i progetti|كل المشاريع
Log out of your account?|Uscire dal tuo account?|تسجيل الخروج من حسابك؟
You will need to log in again to open your dashboard.|Dovrai accedere di nuovo per aprire la dashboard.|هتحتاج تسجّل دخول تاني عشان تفتح لوحة التحكم.
Cancel|Annulla|إلغاء`;
  var MAP = {}; RAW.split('\n').forEach(function (l) { var p = l.split('|'); MAP[p[0]] = [p[1], p[2]] });
  var PAT = [
    ['^(\\d+) today$', '$1 oggi', '$1 النهارده'], ['^(\\d+) new$', '$1 nuove', '$1 جديد'], ['^(\\d+) in progress$', '$1 in corso', '$1 جاري'],
    ['^(\\d+) sign-ups$', '$1 registrazioni', '$1 تسجيل'], ['^(\\d+) from website$', '$1 dal sito', '$1 من الموقع'], ['^(\\d+) on the homepage$', '$1 in home page', '$1 في الصفحة الرئيسية'],
    ['^(\\d+) min$', '$1 min', '$1 د'], ['^(\\d+) h$', '$1 h', '$1 س'], ['^(\\d+) d$', '$1 g', '$1 ي'],
    ['^Good (morning|afternoon|evening), (.*)$', function (m) { return { morning: 'Buongiorno', afternoon: 'Buon pomeriggio', evening: 'Buonasera' }[m[1]] + ', ' + m[2] }, function (m) { return { morning: 'صباح الخير', afternoon: 'مساء الخير', evening: 'مساء الخير' }[m[1]] + '، ' + m[2] }],
    ['^(\\d+) projects?$', function (m) { return m[1] + (m[1] == 1 ? ' progetto' : ' progetti') }, function (m) { return m[1] + ' مشروع' }]
  ];
  function tr(s) {
    if (P.lang === 'en') return s; var k = MAP[s], i = P.lang === 'it' ? 0 : 1; if (k) return k[i];
    for (var j = 0; j < PAT.length; j++) { var m = s.match(new RegExp(PAT[j][0])); if (m) { var r = PAT[j][i + 1]; return typeof r === 'function' ? r(m) : s.replace(new RegExp(PAT[j][0]), r) } } return null
  }
  P.t = function (s) { return tr(s) || s };
  P.langs = [{ c: 'en', n: 'English', s: 'EN' }, { c: 'it', n: 'Italiano', s: 'IT' }, { c: 'ar', n: 'العربية', s: 'AR' }];
  P.lang = 'en'; try { var sl = localStorage.getItem('ab_lang'); if (/^(en|it|ar)$/.test(sl)) P.lang = sl } catch (e) { }
  function setDir() { var d = document.documentElement; d.setAttribute('lang', P.lang); d.setAttribute('dir', P.lang === 'ar' ? 'rtl' : 'ltr'); if (P.lang === 'ar' && !document.getElementById('cairo')) { var f = document.createElement('link'); f.id = 'cairo'; f.rel = 'stylesheet'; f.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@400..800&display=swap'; document.head.appendChild(f) } }
  setDir();
  P.paintLang = function () { P.$$('.lc').forEach(function (e) { e.textContent = P.langs.filter(function (l) { return l.c === P.lang })[0].s }) };
  var store = new WeakMap(), AT = ['placeholder', 'aria-label', 'title'], busy = false, SK = 'script,style,textarea,[data-nt]';
  function tnode(n) {
    var v = n.nodeValue, r = store.get(n); if (!r || r.last !== v) { r = { o: v, last: v }; store.set(n, r) }
    var o = r.o.trim(); if (!o) return; var t = tr(o), nv = t == null ? r.o : r.o.replace(o, t); if (nv !== v) { n.nodeValue = nv } r.last = nv
  }
  function tattr(e) {
    var st = store.get(e) || {}; store.set(e, st);
    AT.forEach(function (a) { if (!e.hasAttribute(a)) return; var v = e.getAttribute(a), r = st[a]; if (!r || r.last !== v) { r = st[a] = { o: v, last: v } } var t = tr(r.o); var nv = t == null ? r.o : t; if (nv !== v) e.setAttribute(a, nv); r.last = nv })
  }
  function walk(root) {
    if (!root) return; if (root.nodeType === 3) { var pe = root.parentNode; if (pe && pe.closest && !pe.closest(SK)) tnode(root); return }
    if (root.nodeType !== 1 || root.matches(SK)) return;
    var w = document.createTreeWalker(root, 4, null), n, a = [];
    while ((n = w.nextNode())) { if (!n.parentNode.closest(SK)) a.push(n) } a.forEach(tnode);
    tattr(root); [].forEach.call(root.querySelectorAll('[placeholder],[aria-label],[title]'), tattr)
  }
  var obs = new MutationObserver(function (l) { if (busy) return; busy = true; l.forEach(function (m) { if (m.type === 'characterData') walk(m.target); else [].forEach.call(m.addedNodes, walk) }); obs.takeRecords(); busy = false });
  function start() { busy = true; walk(document.body); busy = false; obs.observe(document.body, { childList: true, subtree: true, characterData: true }) }
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
  P.setLang = function (c) {
    if (c === P.lang) return; P.lang = c; try { localStorage.setItem('ab_lang', c) } catch (e) { } setDir(); P.paintLang();
    busy = true; walk(document.body); obs.takeRecords(); busy = false; window.dispatchEvent(new CustomEvent('ablang', { detail: c }))
  };
  P.langMenu = function () {
    var m = P.modal('<h3>Language<button class="gh x" data-x aria-label="Close">' + P.ic('x', 16) + '</button></h3><div class="lgl">' + P.langs.map(function (l) { return '<button data-l="' + l.c + '" class="' + (l.c === P.lang ? 'on' : '') + '" lang="' + l.c + '"><span data-nt>' + l.n + '</span>' + (l.c === P.lang ? P.ic('check', 16) : '') + '</button>' }).join('') + '</div>');
    P.$$('[data-l]', m).forEach(function (b) { b.onclick = function () { m.close(); P.setLang(b.dataset.l) } })
  };
  addEventListener('storage', function (e) { if (e.key === 'ab_lang' && /^(en|it|ar)$/.test(e.newValue)) P.setLang(e.newValue) });

  /* every <select> becomes a themed dropdown (same look as the rest of the panel) */
  var DD = null; function closeDd() { if (DD) { DD.m.remove(); DD.b.classList.remove('open'); DD = null } }
  function ddInit(s) {
    if (s._dd || s.multiple || s.hasAttribute('data-native')) return; s._dd = 1; s.classList.add('dd-n');
    var b = document.createElement('button'); b.type = 'button'; b.className = 'dd' + (/width:\s*auto/.test(s.getAttribute('style') || '') ? ' auto' : ''); b.innerHTML = '<span class="dl"></span>' + P.ic('chev', 14); s.parentNode.insertBefore(b, s.nextSibling);
    function paint() { var o = s.options[s.selectedIndex]; b.firstChild.textContent = o ? o.text : ''; b.disabled = s.disabled }
    paint(); s.addEventListener('change', paint);
    b.onclick = function (e) {
      e.stopPropagation(); if (b.classList.contains('open')) return closeDd(); closeDd(); b.classList.add('open');
      var m = document.createElement('div'); m.className = 'ddm'; m.innerHTML = [].map.call(s.options, function (o, i) { return '<div class="o' + (i === s.selectedIndex ? ' on' : '') + '" data-i="' + i + '"><span>' + P.esc(o.text) + '</span>' + (i === s.selectedIndex ? P.ic('check', 14) : '') + '</div>' }).join(''); document.body.appendChild(m);
      var r = b.getBoundingClientRect(); m.style.minWidth = r.width + 'px'; m.style.left = Math.max(8, Math.min(r.left, innerWidth - m.offsetWidth - 8)) + 'px'; var h = m.offsetHeight; m.style.top = (r.bottom + h + 12 > innerHeight && r.top > h + 12 ? r.top - h - 6 : r.bottom + 6) + 'px'; DD = { b: b, m: m };
      m.onclick = function (ev) { ev.stopPropagation(); var o = ev.target.closest('[data-i]'); if (!o) return; s.selectedIndex = +o.dataset.i; paint(); s.dispatchEvent(new Event('change', { bubbles: true })); closeDd() }
    }
  }
  document.addEventListener('click', closeDd); addEventListener('resize', closeDd); addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDd() });
  addEventListener('scroll', function (e) { if (DD && !DD.m.contains(e.target)) closeDd() }, true);
  function ddScan(r) { if (r.nodeType !== 1) return; if (r.tagName === 'SELECT') ddInit(r); [].forEach.call(r.querySelectorAll('select'), ddInit) }
  var sobs = new MutationObserver(function (l) { l.forEach(function (m) { [].forEach.call(m.addedNodes, ddScan) }) });
  function ddStart() { ddScan(document.body); sobs.observe(document.body, { childList: true, subtree: true }) }
  if (document.body) ddStart(); else document.addEventListener('DOMContentLoaded', ddStart);
})();
