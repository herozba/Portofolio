# 📰 Dudung News — Portal Berita Modern

Aplikasi web portal berita yang dibangun dengan **Nuxt 4**, menampilkan artikel dari API dengan tampilan editorial yang elegan.

## ✨ Fitur

- 🔍 **Pencarian Real-time** — Cari berdasarkan judul, isi, penulis, atau kategori
- 👤 **Filter Penulis** — Tampilkan artikel dari penulis tertentu
- 📅 **Sortir Artikel** — Urutkan dari terbaru atau terlama
- 🃏 **Dua Mode Tampilan** — Kartu (grid) atau Daftar terurut
- 💀 **Skeleton Loading** — Animasi placeholder saat memuat data
- 🎨 **Desain Editorial Dark** — Estetika surat kabar mewah bergaya modern
- 📱 **Responsif** — Tampil sempurna di semua ukuran layar

## 🚀 Cara Menjalankan

### Prasyarat
- Node.js 18+ 
- npm atau pnpm

### Instalasi & Jalankan

```bash
# Install dependensi
npm install

# Jalankan development server (localhost:3000)
npm run dev

# Build untuk produksi
npm run build

# Preview build produksi
npm run preview
```

## 📁 Struktur Proyek

```
dudung-news/
├── assets/css/
│   └── global.css          # Variabel CSS, animasi, style global
├── components/
│   ├── AppHeader.vue        # Header dengan ticker berita
│   ├── AppFooter.vue        # Footer
│   ├── SearchBar.vue        # Bar pencarian + filter + sort + view toggle
│   ├── ArticleCard.vue      # Kartu artikel (tampilan grid)
│   ├── ArticleListItem.vue  # Item artikel (tampilan daftar)
│   ├── SkeletonCard.vue     # Placeholder saat loading
│   └── EmptyState.vue       # Tampilan saat tidak ada hasil
├── composables/
│   └── useArticles.ts       # State management: fetch, filter, sort
├── pages/
│   └── index.vue            # Halaman utama
├── app.vue                  # Root app
└── nuxt.config.ts           # Konfigurasi Nuxt 4
```

## 🌐 Sumber Data

Artikel diambil dari:
```
https://api.npoint.io/749e4cc46af7d03db38a
```

## 🎨 Design System

- **Font Display**: Playfair Display (serif) — untuk judul editorial
- **Font Body**: DM Sans — untuk teks biasa
- **Font Mono**: DM Mono — untuk metadata & label
- **Tema**: Dark editorial (terinspirasi koran premium)
- **Aksen**: Merah (#c8392b) + Emas (#c9a84c)
