/* AB Tech - homepage <-> Firebase (REST, no SDK): visit tracking, counters from the admin panel, contact form -> inbox */
(function () {
  var DB = 'https://ab-tech-99507-default-rtdb.firebaseio.com';
  function j(path, method, body) {
    return fetch(DB + '/' + path + '.json', { method: method || 'GET', headers: { 'Content-Type': 'application/json' }, body: body == null ? undefined : JSON.stringify(body) })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json() })
  }
  var inc = function () { return { '.sv': { increment: 1 } } };

  /* 1. count the visit once per browser session (and a unique visitor once per browser) */
  try {
    if (!sessionStorage.getItem('ab_v')) {
      sessionStorage.setItem('ab_v', '1');
      var d = new Date().toISOString().slice(0, 10), o = {}, isNew = false;
      o['total/visits'] = inc(); o['days/' + d + '/visits'] = inc();
      try { isNew = !localStorage.getItem('ab_vid'); if (isNew) localStorage.setItem('ab_vid', Date.now().toString(36) + Math.random().toString(36).slice(2, 8)) } catch (e) { }
      if (isNew) { o['total/unique'] = inc(); o['days/' + d + '/unique'] = inc() }
      j('stats', 'PATCH', o).catch(function () { })
    }
  } catch (e) { }

  /* 2. counters, editable from the admin panel */
  var css = document.createElement('style');
  css.textContent = '.st-c{grid-template-areas:"i n" "i l" "i d"!important}.st-d{grid-area:d;margin-top:4px;font-size:12px;line-height:1.45;color:rgba(255,255,255,.55);font-weight:400}';
  document.head.appendChild(css);
  function applyCounters(c) {
    if (!c) return;
    var list = Array.isArray(c) ? c : Object.keys(c).sort().map(function (k) { return c[k] });
    var cards = [].slice.call(document.querySelectorAll('.st-c')), still = matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window);
    cards.forEach(function (li, i) {
      var x = list[i]; if (!x) return;
      var n = li.querySelector('.st-n'), l = li.querySelector('span'), v = Math.max(0, +x.value || 0), suf = x.suffix || '';
      n.setAttribute('data-to', v); n.setAttribute('data-suf', suf);
      if (still || n.dataset.ab === '1') n.textContent = v + suf;
      if (x.label) l.textContent = x.label;
      var ds = li.querySelector('.st-d');
      if (x.desc) { if (!ds) { ds = document.createElement('small'); ds.className = 'st-d'; li.appendChild(ds) } ds.textContent = x.desc } else if (ds) ds.remove()
    })
  }
  j('site/counters').then(applyCounters).catch(function () { });

  /* 3. contact form -> inbox (admin reads and answers in the panel) */
  window.ABSite = {
    contact: function (form) {
      var g = function (s) { return form.querySelector(s) }, tp = g('input[name=t]:checked'), btn = g('button[type=submit]'), st = document.getElementById('tk-st');
      var rec = { name: g('#n').value.trim(), email: g('#e').value.trim(), type: tp ? tp.value : '', text: g('#m').value.trim(), t: Date.now(), read: false, source: 'site' };
      if (!rec.name || !rec.email || !rec.text) return true;
      if (btn) btn.disabled = true; if (st) st.textContent = 'Sending...';
      j('inbox', 'POST', rec).then(function () {
        if (st) st.textContent = 'Message sent. We usually reply within a day.';
        form.reset()
      }).catch(function () {
        if (st) st.innerHTML = 'Could not send right now. Write to <a href="mailto:ab.tech.webapps@gmail.com">ab.tech.webapps@gmail.com</a>.'
      }).then(function () { if (btn) btn.disabled = false });
      return true
    }
  }
})();
