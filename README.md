# ✨ Fresh UI

Library komponen siap pakai — **pure CSS tanpa framework**. Light theme, aksen indigo/violet, gaya dokumentasi modern.

## Cara Pakai

Copy 2 file ke project lo:

```html
<link rel="stylesheet" href="fresh-ui.css">
<script src="fresh-ui.js"></script>  <!-- opsional, untuk modal/dropdown/tabs -->
```

Tanpa build step, tanpa dependensi, tanpa npm. Buka `index.html` untuk lihat semua komponen live.

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
| Layout | `.wrap` `.grid.c2/c3/c4` `.row-between` `.mt` `.mb` | grid responsif |

### Interaksi JS (fresh-ui.js)

| Trigger | Fungsi |
|---|---|
| `data-modal-target="#id"` | buka modal; tutup via `.modal-x`, klik overlay, atau `Esc` |
| `data-dd-toggle` di dalam `.dd` | buka/tutup dropdown; klik di luar menutup |
| `data-tabs` > `[data-tab="x"]` + `[data-tab-panel="x"]` | tab switching |

## Kustomisasi

Semua warna & ukuran pakai **CSS variables** di `:root`. Timpa di stylesheet lo sendiri:

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
├── fresh-ui.css   # semua style (~13 KB)
├── fresh-ui.js    # interaksi modal/dropdown/tabs (~1.7 KB)
├── index.html     # demo semua komponen
└── README.md
```

## Catatan

- Tidak ada dark mode bawaan (bisa ditambah via variables).
- Modal & dropdown butuh `fresh-ui.js`; sisanya CSS murni.
- Lisensi: MIT — bebas dipakai project apapun.
