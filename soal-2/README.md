# API Pengguna - Soal 2

API sederhana menggunakan Node.js (Express) + MongoDB (Mongoose).

## Setup
1. Pastikan MongoDB berjalan lokal atau gunakan MongoDB Atlas.
2. Buat file `.env` di folder `soal-2` dengan isi seperti berikut:

```
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/soal2db
```

3. Install dependencies dan jalankan:

```bash
npm install
npm run dev
```

## Endpoint
Base URL: `http://localhost:3000`

- POST `/api/users`
  - Body (JSON): `{ "name": "John Doe", "email": "john@example.com" }`
  - Response 201: objek user
  - Error 409: Email sudah terdaftar

- GET `/api/users`
  - Response 200: array user

- GET `/api/users/:id`
  - Response 200: objek user
  - Error 404: Pengguna tidak ditemukan

- DELETE `/api/users/:id`
  - Response 204: tanpa body
  - Error 404: Pengguna tidak ditemukan

## Catatan Validasi
- Semua request dengan body harus mengirim header `Content-Type: application/json`.
- `email` unik dalam database (unique index), duplikat akan mengembalikan 409.
