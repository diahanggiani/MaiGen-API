# config
- `config.js`: berisi konfigurasi aplikasi, seperti pengaturan database, pengaturan server, atau variabel lingkungan lainnya.
- `connection.js`: berisi logic untuk menghubungkan aplikasi ke database menggunakan konfigurasi dari `config.js`.

# controllers
- `authController.js`: berisi logic untuk menangani autentikasi pengguna, seperti login, registrasi, dan logout.
- `profileController.js`: berisi logic untuk menangani data profil pengguna (username, email, password).

# database
- **migrations**
    - `20240605035507-create-users.js`: berisi skrip untuk membuat atau mengubah tabel `users` di database. migration digunakan untuk versioning perubahan pada struktur database.
- **models**
    - `index.js`: menginisialisasi dan menghubungkan semua model dalam aplikasi ke database.
    - `users.js`: mendefinisikan model `users`, termasuk skema tabel, tipe data kolom, dan relasi antar model.

# routes
- `userRoute.js`: mendefinisikan rute yang terkait dengan autentikasi, mengarahkan permintaan HTTP ke metode yang sesuai di `authController.js` dan `profileController.js`.

# .env
- berisi variabel environment yang digunakan dalam aplikasi, seperti pengaturan database, secret key untuk JWT, dan variabel konfigurasi lainnya.

# .sequelizerc
- konfigurasi untuk Sequelize CLI, menentukan lokasi folder untuk models, migrations, dan seeders.

# app.js
- entry point aplikasi. menginisialisasi server, middleware, rute, dan menghubungkan ke database.

# package-lock.json
- file yang dihasilkan secara otomatis untuk mengunci versi dependensi yang diinstal, memastikan bahwa instalasi masa depan menggunakan versi yang sama.

# package.json
- berisi informasi tentang aplikasi, termasuk nama, versi, deskripsi, dan daftar dependensi.