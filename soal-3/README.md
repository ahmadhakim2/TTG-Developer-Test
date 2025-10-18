## Soal 3 — Cari Nomor Hilang di Array

### Deskripsi
Buat fungsi JavaScript untuk mencari satu nomor yang hilang dari sebuah array berisi bilangan bulat berurutan (urutannya boleh acak), tidak selalu dimulai dari nol, dan panjang input dapat mencapai ribuan elemen.

Fungsi tersedia di `index.js` sebagai `findMissingNumbers(numbers)` yang mengembalikan semua angka yang hilang pada rentang `[min..max]`.

### Constraint
- Nomor dalam input array pasti berurutan (hanya ada satu yang hilang).
- Input array bisa mencapai ribuan elemen.
- Deret tidak harus dimulai dari 0.

### Kompleksitas
- Waktu: O(n) — satu kali iterasi untuk menghitung `min`, `max`, dan jumlah aktual.
- Ruang: O(1) — tidak memakai struktur data tambahan berskala n.

### Algoritma Singkat
1. Iterasi array untuk mendapatkan `min`, `max`, dan `actualSum` (jumlah aktual semua elemen).
2. Hitung jumlah ekspektasi deret utuh dari `min..max` dengan rumus aritmetika:  
   `expectedSum = ((min + max) * (max - min + 1)) / 2`.
3. Nomor hilang adalah `expectedSum - actualSum`.

### Cara Menjalankan (Mode Interaktif)
- Dari root proyek:

```bash
node soal-3/index.js
```

- Aplikasi akan menampilkan menu:
  - `1. Tambah input` → masukkan angka untuk ditambahkan ke array.
  - `2. Hitung outputnya` → menghitung semua angka yang hilang pada rentang `[min..max]` dari array saat ini dan menampilkan hasil.

- Contoh alur:
  1) Pilih `1`, masukkan: `3`
  2) Pilih `1`, masukkan: `0`
  3) Pilih `1`, masukkan: `2`
  4) Pilih `1`, masukkan: `4`
  5) Pilih `2` → output: `1`

### Pemakaian sebagai Modul
- Dari dalam folder `soal-3`:

```js
const { findMissingNumbers } = require('./index');
console.log(findMissingNumbers([1, 4])); // [2, 3]
```

- Dari root proyek (Node akan me-resolve `index.js` di dalam folder `soal-3`):

```js
const { findMissingNumbers } = require('./soal-3');
```

### API
- `findMissingNumbers(numbers: number[]): number[]`
  - Mengembalikan seluruh angka yang hilang pada rentang `[min..max]`.

### Contoh
- Input: `[ 3, 0, 2, 4 ]` → Output: `1`
- Input: `[ 3106, 3102, 3104, 3105, 3107 ]` → Output: `3103`
- Input: `[ 1, 4 ]` → Output: `2, 3` (menggunakan `findMissingNumbers`)

### Catatan
- File menggunakan `"use strict"` untuk menerapkan strict mode di CommonJS sehingga error lebih cepat terdeteksi. Pada ES Modules dan `class`, strict mode aktif otomatis.


