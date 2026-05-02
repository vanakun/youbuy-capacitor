# YouBuy Shopies Native Wrapper

Native wrapper menggunakan Capacitor untuk http://youbuy-shopies.mamorasoft.com/

## Prasyarat
1. Node.js & npm terinstal di komputer.
2. Android Studio (untuk build Android).
3. Xcode (untuk build iOS, hanya di Mac).

## Cara Penggunaan

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Tambah Platform Android**
   ```bash
   npx cap add android
   ```

3. **Sinkronisasi Kode**
   ```bash
   npx cap sync
   ```

4. **Buka Project di Android Studio**
   ```bash
   npx cap open android
   ```

## Konfigurasi Penting
File `capacitor.config.ts` telah dikonfigurasi untuk langsung memuat URL:
```typescript
server: {
  url: 'http://youbuy-shopies.mamorasoft.com/',
  cleartext: true
}
```
`cleartext: true` diperlukan karena website menggunakan `http` (bukan `https`).

## Build Otomatis dengan GitHub Actions

Project ini sudah dikonfigurasi untuk build APK secara otomatis menggunakan GitHub Actions.

### Cara Mendapatkan APK:
1. Push kode ke branch `main` atau `master`.
2. Buka tab **Actions** di repositori GitHub Anda.
3. Pilih workflow **Build Android APK**.
4. Klik pada run terbaru yang berhasil.
5. Scroll ke bawah ke bagian **Artifacts**.
6. Download `YouBuy-Debug-APK` atau `YouBuy-Release-Unsigned-APK`.

### Cara Menjalankan Build Manual:
1. Buka tab **Actions**.
2. Pilih **Build Android APK** di sisi kiri.
3. Klik tombol **Run workflow**.
4. Pilih branch dan klik **Run workflow**.

---

## Catatan untuk Play Store/App Store
Beberapa toko aplikasi mungkin menolak aplikasi yang hanya merupakan wrapper website jika tidak memiliki fitur native tambahan (seperti Push Notifications, Camera access, dll). Jika ditolak, Anda mungkin perlu menambahkan integrasi fitur native menggunakan Capacitor Plugins.
