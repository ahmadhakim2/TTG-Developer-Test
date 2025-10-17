## Form Pendaftaran (Soal 1)

Halaman web sederhana menggunakan HTML, CSS, dan JavaScript untuk menampilkan form pendaftaran pengguna yang responsif dan tervalidasi.

### Fitur
- **Validasi email**: memastikan format email valid.
- **Validasi password**: minimal 8 karakter dan harus sama dengan konfirmasi.
- **Pesan sukses**: menampilkan "Pendaftaran Berhasil" setelah validasi lolos.
- **Responsif**: tampilan mobile-friendly.

### Teknologi
- **HTML5** untuk struktur
- **CSS3** untuk gaya dan responsivitas
- **JavaScript (vanilla)** untuk validasi form

### Struktur Berkas
```
soal-1/
  ├─ index.html   // Markup halaman dan form
  ├─ styles.css   // Gaya responsif dan tema
  └─ script.js    // Logika validasi dan pesan sukses
```

### Cara Menjalankan
1. Buka langsung `soal-1/index.html` di browser (double-click).
2. Atau gunakan server statis (opsional), misalnya Live Server (VS Code).

### Cara Menggunakan
1. Isi **Nama lengkap**, **Email**, **Password**, dan **Konfirmasi password**.
2. Klik tombol **Daftar**.
3. Jika ada kesalahan, pesan error akan muncul di bawah field terkait.
4. Jika semua valid, muncul pesan: "Pendaftaran Berhasil" di bawah form.

### Validasi yang Diterapkan
- **Email**: harus berformat valid (contoh: nama@domain.com).
- **Password**: minimal **8** karakter.
- **Konfirmasi password**: harus sama dengan password.
- **Semua field** wajib diisi.


