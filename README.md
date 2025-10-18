# TTG-Developer-Test

Repositori ini berisi empat soal terpisah. Setiap soal berada pada foldernya masing-masing.

## Prasyarat Umum
- Node.js v18+ (untuk soal-3 dan soal-4)
- Browser modern (untuk soal-1)
- MongoDB (untuk soal-2) atau MongoDB Atlas

## Struktur Direktori
```
soal-1/  # Form pendaftaran (HTML/CSS/JS)
soal-2/  # API pengguna (Node.js + Express + MongoDB)
soal-3/  # Cari nomor hilang (CLI interaktif)
soal-4/  # Susun ekspresi target (+, -, *) (CLI interaktif)
```

## Soal 1 — Form Pendaftaran
- Buka `soal-1/index.html` langsung di browser, atau gunakan server statis (mis. Live Server).
- Detail: `soal-1/README.md`.

## Soal 2 — API Pengguna
- Masuk ke folder `soal-2`, buat file `.env` (lihat contoh di `soal-2/README.md`).
- Jalankan:
```bash
npm install
npm run dev
```
- API berjalan di `http://localhost:3000`. Endpoint dan detail: `soal-2/README.md`.

## Soal 3 — Cari Nomor Hilang (Interaktif)
- Jalankan mode interaktif:
```bash
node soal-3/index.js
```
- Menu: tambah angka, lalu hitung untuk menampilkan semua angka yang hilang pada rentang `[min..max]`.
- Detail: `soal-3/README.md`.

## Soal 4 — Ekspresi Target (Interaktif)
- Jalankan mode interaktif:
```bash
node soal-4/index.js
```
- Menu: tambah angka, atur target, lalu hitung untuk mencari ekspresi menggunakan `+`, `-`, `*` yang mencapai target (memakai semua angka).
- Detail: `soal-4/README.md`.

## Catatan
- Semua perintah dijalankan dari root repo kecuali disebutkan lain.
- Pastikan versi Node dan MongoDB sesuai kebutuhan.
