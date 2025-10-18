## Soal 4 — Susun Ekspresi Mencapai Target ( +, -, * )

### Deskripsi
Diberikan daftar angka (semua wajib dipakai) dan sebuah target, temukan cara menghitung target hanya menggunakan operator `+`, `-`, dan `*`. Solver akan mencoba semua pengelompokan (parentheses) yang memungkinkan.

Implementasi tersedia di `index.js` sebagai `findExpression(numbers, target)`.

### Constraint
- Operator yang digunakan: `+`, `-`, `*`.
- Semua angka wajib digunakan persis satu kali.

### Kompleksitas
- Eksplorasi backtracking atas semua pasangan dan operator. Kompleksitas eksponensial pada jumlah angka, sesuai sifat masalah.

### Cara Menjalankan (Mode Interaktif)
- Dari root proyek:

```bash
node soal-4/index.js
```

- Aplikasi akan menampilkan menu:
  - `1. Tambah angka` → masukkan angka untuk ditambahkan ke daftar.
  - `2. Atur target` → masukkan target hasil operasi.
  - `3. Hitung ekspresi` → mencari ekspresi yang mencapai target dengan +, -, *.

Hasilnya akan menampilkan satu ekspresi yang valid (jika ada), atau pesan jika tidak ditemukan.

### API
- `findExpression(numbers: number[], target: number): string | null`
  - **numbers**: array bilangan bulat.
  - **target**: bilangan bulat tujuan.
  - Mengembalikan string ekspresi yang valid jika ditemukan; jika tidak ada, `null`.

### Contoh
- Input: `Source: [1, 4, 5, 6]`, `Target: 16` → Output (salah satu kemungkinan): `1 + 4 + 5 + 6`
- Input: `Source: [1, 4, 5, 6]`, `Target: 18` → Output (salah satu kemungkinan): `(1 + 5) * 4 - 6`
- Input: `Source: [1, 4, 5, 6]`, `Target: 50` → Output (salah satu kemungkinan): `(4 + 6) * 5 * 1`


