/* Fresh UI — interaksi minimal (vanilla JS, tanpa dependensi) */
(function(){
  // Modal: buka via [data-modal-target], tutup via .modal-x / klik overlay / Esc
  document.addEventListener('click', function(e){
    var t = e.target.closest('[data-modal-target]');
    if (t) {
      var m = document.querySelector(t.getAttribute('data-modal-target'));
      if (m) m.classList.add('open');
      return;
    }
    if (e.target.closest('.modal-x') || e.target.classList.contains('modal-ov')) {
      var ov = e.target.closest('.modal-ov');
      if (ov) ov.classList.remove('open');
      return;
    }
    // Dropdown: toggle, klik di luar menutup
    var dd = e.target.closest('.dd');
    document.querySelectorAll('.dd.open').forEach(function(d){
      if (d !== dd) d.classList.remove('open');
    });
    if (dd && e.target.closest('[data-dd-toggle]')) dd.classList.toggle('open');
  });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-ov.open').forEach(function(m){ m.classList.remove('open'); });
      var sb = document.querySelector('.sidebar.open');
      var ov = document.querySelector('.side-ov.show');
      if (sb) sb.classList.remove('open');
      if (ov) ov.classList.remove('show');
    }
  });
  // Admin sidebar drawer (mobile): [data-sidebar-toggle] membuka,
  // .side-ov / Esc menutup
  document.addEventListener('click', function(e){
    if (e.target.closest('[data-sidebar-toggle]')) {
      var sb = document.querySelector('.sidebar');
      var ov = document.querySelector('.side-ov');
      if (sb) sb.classList.add('open');
      if (ov) ov.classList.add('show');
      return;
    }
    if (e.target.classList && e.target.classList.contains('side-ov')) {
      var sb2 = document.querySelector('.sidebar');
      if (sb2) sb2.classList.remove('open');
      e.target.classList.remove('show');
    }
  });
  // Sidebar treeview: klik parent .side-tree > .side-link buka/tutup submenu
  document.addEventListener('click', function(e){
    var st = e.target.closest('.side-tree > .side-link');
    if (st) {
      e.preventDefault();
      st.parentElement.classList.toggle('open');
    }
  });
  // Tabs sederhana: [data-tab] + [data-tab-panel="id"]
  document.querySelectorAll('[data-tab]').forEach(function(tab){
    tab.addEventListener('click', function(e){
      e.preventDefault();
      var wrap = tab.closest('[data-tabs]');
      if (!wrap) return;
      wrap.querySelectorAll('[data-tab]').forEach(function(x){ x.classList.remove('active'); });
      wrap.querySelectorAll('[data-tab-panel]').forEach(function(p){ p.style.display = 'none'; });
      tab.classList.add('active');
      var panel = wrap.querySelector('[data-tab-panel="'+tab.getAttribute('data-tab')+'"]');
      if (panel) panel.style.display = '';
    });
  });
  // Carousel: [data-carousel] > .car-track > .car-slide + .car-prev/.car-next + .car-dots
  document.querySelectorAll('[data-carousel]').forEach(function(car){
    var track = car.querySelector('.car-track');
    var slides = car.querySelectorAll('.car-slide');
    var dots = car.querySelectorAll('.car-dots button');
    if (!track || !slides.length) return;
    var i = 0;
    var go = function(n){
      i = (n + slides.length) % slides.length;
      track.style.transform = 'translateX(-' + (i*100) + '%)';
      dots.forEach(function(d, k){ d.classList.toggle('on', k === i); });
    };
    var prev = car.querySelector('.car-prev');
    var next = car.querySelector('.car-next');
    if (prev) prev.addEventListener('click', function(){ go(i-1); });
    if (next) next.addEventListener('click', function(){ go(i+1); });
    dots.forEach(function(d, k){ d.addEventListener('click', function(){ go(k); }); });
    go(0);
  });
  // Toast helper global: toast('Pesan disimpan', 'success')
  // tipe: success | warning | danger | info (default info)
  window.toast = function(msg, type){
    type = type || 'info';
    var wrap = document.querySelector('.toast-wrap');
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.className = 'toast-wrap';
      document.body.appendChild(wrap);
    }
    var icons = {success:'✅', warning:'⚠️', danger:'⛔', info:'ℹ️'};
    var el = document.createElement('div');
    el.className = 'toast toast-' + type;
    var tic = document.createElement('span');
    tic.className = 'tic';
    tic.textContent = icons[type] || icons.info;
    var body = document.createElement('div');
    body.textContent = msg;
    var x = document.createElement('button');
    x.className = 'toast-x';
    x.setAttribute('aria-label', 'Tutup');
    x.textContent = '×';
    el.appendChild(tic); el.appendChild(body); el.appendChild(x);
    wrap.appendChild(el);
    var killed = false;
    var kill = function(){
      if (killed) return;
      killed = true;
      el.classList.add('out');
      setTimeout(function(){ el.remove(); }, 200);
    };
    x.addEventListener('click', function(ev){ ev.stopPropagation(); kill(); });
    el.addEventListener('click', kill);
    setTimeout(kill, 4000);
  };
})();
