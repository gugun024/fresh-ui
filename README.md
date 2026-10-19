# ✨ Fresh UI

Library komponen siap pakai — **pure CSS tanpa framework**. Light theme, aksen indigo/violet, gaya dokumentasi modern.

## Cara Pakai

Copy 2 file ke project lo:

```html
<link rel="stylesheet" href="css/fresh-ui.css">
<script src="fresh-ui.js"></script>  <!-- opsional, untuk modal/dropdown/tabs -->
```

Cukup link **satu file** `css/fresh-ui.css` — dia otomatis mengimpor
semua modul di bawahnya. Tanpa build step, tanpa dependensi, tanpa npm. Buka halaman demo untuk lihat live:

| Halaman | Isi |
|---|---|
| `index.html` | demo semua komponen dasar |
| `landing-demo.html` | contoh landing page utuh (navbar → hero → fitur → harga → testimoni → FAQ → CTA → footer) |
| `admin-demo.html` | contoh dashboard admin utuh (sidebar → topbar → statistik → tabel → form) |

## Daftar Komponen

| Komponen | Class | Contoh |
|---|---|---|
| Button | `.btn` `.btn-primary` `.btn-secondary` `.btn-success` `.btn-warning` `.btn-danger` `.btn-ghost` `.btn-outline` | `<button class="btn btn-primary">Simpan</button>` |
| Ukuran button | `.btn-sm` `.btn-lg` `.btn-block` | `<button class="btn btn-primary btn-sm">` |
| Button group | `.btn-group` | `<div class="btn-group"><button class="btn">…` |
| Card | `.card` `.card-hover` `.card-head` `.card-foot` | `<div class="card">…` |
| Stat card | `.stat-card` `.lbl` `.val` `.delta.up` `.delta.down` | dashboard angka |
| Badge | `.badge` `.badge-primary/success/warning/danger/info/gray` | `<span class="badge badge-success">Aktif</span>` |
| Status dot | `.dot` `.dot-ok` `.dot-warn` `.dot-bad` | `<span class="dot dot-ok"></span>Online` |
| Alert | `.alert` `.alert-info/success/warning/danger` | `<div class="alert alert-success">…` |
| Table | `.tbl` `.tbl-striped` `.tbl-hover` + `.tbl-wrap` | `<div class="tbl-wrap"><table class="tbl">` |
| Input | `.input` (input/select/textarea) | `<input class="input" placeholder="…">` |
| Input error | `.input-err` + `.err-msg` | validasi form |
| Input group | `.input-group` + `.addon` | `<div class="input-group"><input class="input"><span class="addon">GB</span></div>` |
| Checkbox/Radio | `.check` `.radio` | `<label class="check"><input type="checkbox">…` |
| Toggle switch | `.toggle` + `.tk` | `<label class="toggle"><input type="checkbox"><span class="tk"></span>…` |
| Modal | `.modal-ov` `.modal` `.modal-head/body/foot` `.modal-x` | buka via `data-modal-target="#id"` |
| Topbar | `.topbar` `.brand` | navigasi atas sticky |
| Breadcrumb | `.crumbs` + `.sep` | `<div class="crumbs"><a>…</a><span class="sep">›</span>` |
| Tabs | `.tabs` + `data-tabs`/`data-tab`/`data-tab-panel` | otomatis via JS |
| Pagination | `.pager` + `.cur` | `<div class="pager"><a>‹</a>…` |
| Dropdown | `.dd` `.dd-menu` + `data-dd-toggle` | otomatis via JS |
| Method pill | `.m` `.get` `.post` `.put` `.del` | `<span class="m get">GET</span>` (API docs) |
| Code | `code`, `pre`, `kbd` | inline & block |
| Progress | `.prog` `.ok` `.warn` `.bad` + `<i style="width:75%">` | bar progres |
| Avatar | `.avatar` `.sm` `.lg` | `<div class="avatar">BD</div>` (inisial) |
| Tooltip | `[tip]` | `<button tip="Halo!">Hover</button>` (CSS murni) |
| Empty state | `.empty` + `.ic` | tampilan data kosong |
| Toast | `.toast-wrap` `.toast` `.toast-success/warning/danger/info` | via JS: `toast('Pesan', 'success')` |
| Spinner | `.spinner` `.sm` `.lg` `.spinner-overlay(.open)` | `<span class="spinner"></span>` |
| Skeleton | `.skeleton` `.sk-text` `.sk-block` `.sk-circle` | shimmer loading |
| Info box | `.info-box` `.ib-ic(.ok/warn/bad/info)` `.ib-num` `.ib-lbl` | khas AdminLTE |
| Small box | `.small-box(.ok/warn/bad/info)` `.sb-num` `.sb-lbl` `.sb-ic` `.sb-more` | khas AdminLTE |
| Timeline | `.timeline` `.tl-item` `.tl-dot(.ok/warn/bad)` `.tl-date` `.tl-card` | vertikal |
| Carousel | `.carousel[data-carousel]` `.car-track` `.car-slide` `.car-prev/next` `.car-dots` | otomatis via JS |
| Ribbon | `.has-ribbon` + `.ribbon(.ok/warn/bad)` | sudut card |
| Layout | `.wrap` `.grid.c2/c3/c4` `.row-between` `.mt` `.mb` | grid responsif |

### Komponen Landing Page

| Komponen | Class | Keterangan |
|---|---|---|
| Navbar publik | `.nav-public` `.nav-brand` `.logo-mark` `.nav-links` | sticky, blur, + tombol CTA |
| Hero | `.hero` `.hero-kicker` `.hero-cta` `.hero-note` | varian centered |
| Hero split | `.hero-split` `.hero-visual` | teks kiri + visual kanan |
| Logo strip | `.logo-strip` `.logo-row` `.lg` | social proof |
| Section | `.sec` `.sec-head` `.sec-kicker` | heading section terpusat |
| Feature grid | `.feature-card` `.feature-ic` | pakai `.grid.c3` |
| Steps | `.steps` `.step` `.step-num` | cara kerja 3 langkah |
| Pricing | `.pricing` `.price-card` `.price-featured` `.price-tag` `.price-feats` `.tprice` | 3 tier, highlight tengah |
| Testimoni | `.testi-card` `.testi-who` `.stars` | kartu ulasan |
| FAQ | `.faq` + `<details><summary>` | accordion tanpa JS |
| CTA banner | `.cta-banner` | gradient indigo→violet |
| Footer | `.footer` `.footer-grid` `.footer-col` `.footer-bottom` `.soc` | multi-kolom + sosmed |

### Layout Admin

| Komponen | Class | Keterangan |
|---|---|---|
| Layout | `.admin-layout` | flex: sidebar + konten |
| Sidebar | `.sidebar` `.side-logo` `.side-nav` `.side-label` `.side-link(.active)` `.side-foot` | fixed kiri, menu + badge `.cnt` |
| Treeview | `.side-tree(.open)` `.side-arrow` `.side-sub` | submenu expand/collapse (klik parent) |
| Konten | `.admin-main` `.admin-content` | area konten utama |
| Topbar admin | `.admin-topbar` `.page-title` `.search` `.spacer` | sticky |
| Drawer mobile | `.side-toggle` `[data-sidebar-toggle]` `.side-ov` | sidebar jadi drawer < 900px |

Lihat contoh jadi: `landing-demo.html` (halaman SaaS utuh) dan `admin-demo.html` (dashboard toko utuh).

### Interaksi JS (fresh-ui.js)

| Trigger | Fungsi |
|---|---|
| `data-modal-target="#id"` | buka modal; tutup via `.modal-x`, klik overlay, atau `Esc` |
| `data-dd-toggle` di dalam `.dd` | buka/tutup dropdown; klik di luar menutup |
| `data-tabs` > `[data-tab="x"]` + `[data-tab-panel="x"]` | tab switching |
| `toast('Pesan', 'success')` | notifikasi kanan-bawah, auto-hilang 4 detik |
| `[data-carousel]` | carousel: tombol prev/next + dots otomatis |

## Kustomisasi

Semua warna & ukuran pakai **CSS variables** di `:root` (lihat `css/tokens.css`). Timpa di stylesheet lo sendiri:

```css
:root{
  --pri:#4f46e5;      /* warna utama */
  --pri-dark:#4338ca;
  --pri-soft:#eef0ff; /* background lembut */
  --ok:#059669;       /* sukses */
  --warn:#d97706;     /* peringatan */
  --danger:#dc2626;   /* bahaya */
  --info:#0284c7;     /* info */
  --bg:#ffffff;       /* background */
  --bg-soft:#f6f7fb;
  --txt:#1a2333;      /* teks */
  --muted:#64748b;    /* teks sekunder */
  --line:#e6e9f2;     /* garis/border */
  --r-md:12px;        /* radius */
  --font:'Inter',system-ui,sans-serif;
}
```

Contoh ganti tema jadi hijau:

```css
:root{ --pri:#059669; --pri-dark:#047857; --pri-soft:#e6f9f0; }
```

## Struktur

```
ui-kit/
├── css/
│   ├── fresh-ui.css   # ENTRY POINT — cukup link file ini (hanya @import)
│   ├── tokens.css     # design tokens: warna, radius, shadow, font (:root)
│   ├── base.css       # reset, base typography, layout helpers (.wrap, .grid…)
│   ├── components.css # komponen UI dasar (button → ribbon: 23 section)
│   ├── landing.css    # komponen landing page (navbar → footer)
│   └── admin.css      # layout dashboard admin (sidebar → drawer mobile)
├── fresh-ui.js        # interaksi: modal/dropdown/tabs/sidebar (~2 KB)
├── index.html         # demo komponen dasar
├── landing-demo.html  # contoh landing page utuh
├── admin-demo.html    # contoh dashboard admin utuh
└── README.md
```

Setiap file CSS diawali daftar isi (TOC) dan memakai format komentar
section yang konsisten: `/* ===== 1. Buttons ===== */`.

> Butuh sebagian saja? Link modul langsung, misal cuma butuh landing:
> ```html
> <link rel="stylesheet" href="css/tokens.css">
> <link rel="stylesheet" href="css/base.css">
> <link rel="stylesheet" href="css/landing.css">
> ```
> Urutan penting: `tokens.css` harus selalu pertama.

## Catatan

- Tidak ada dark mode bawaan (bisa ditambah via variables).
- Modal & dropdown butuh `fresh-ui.js`; sisanya CSS murni.
- Lisensi: MIT — bebas dipakai project apapun.
