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
    if (e.key === 'Escape') document.querySelectorAll('.modal-ov.open').forEach(function(m){ m.classList.remove('open'); });
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
})();
