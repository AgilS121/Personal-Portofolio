# Portfolio Website

Website portfolio static yang dapat di-hosting di GitHub Pages tanpa memerlukan cPanel.

## 🌟 Fitur

- **Design Modern & Dark Theme** - Tampilan elegan dengan tema gelap
- **Responsive Design** - Tampil sempurna di semua perangkat
- **3 Section Utama:**
  - About - Profil, layanan, testimonial, dan klien
  - Resume - Pendidikan, pengalaman kerja, dan skills
  - Portfolio - Galeri project dengan filter kategori
- **Smooth Animations** - Transisi halus dan interaktif
- **Easy to Customize** - Mudah disesuaikan dengan data pribadi

## 🚀 Cara Deploy ke GitHub Pages

### 1. Upload ke GitHub Repository

1. Buat repository baru di GitHub (misalnya: `portfolio`)
2. Upload semua file ke repository tersebut
3. Pastikan file `index.html` ada di root folder

### 2. Aktifkan GitHub Pages

1. Buka repository di GitHub
2. Klik **Settings** (tab di atas)
3. Scroll ke bawah ke bagian **Pages** (di sidebar kiri)
4. Di bagian **Source**, pilih:
   - Branch: `main` (atau `master`)
   - Folder: `/ (root)`
5. Klik **Save**
6. Tunggu beberapa menit, website akan tersedia di: `https://username.github.com/portfolio`

### Cara Cepat dengan Git

```bash
# Inisialisasi git
git init

# Tambahkan semua file
git add .

# Commit
git commit -m "Initial portfolio website"

# Tambahkan remote repository
git remote add origin https://github.com/username/portfolio.git

# Push ke GitHub
git branch -M main
git push -u origin main
```

## 📝 Cara Kustomisasi

### 1. Edit Informasi Pribadi

Buka `index.html` dan ubah bagian berikut:

**Profil Sidebar:**
- Nama: Cari `<h1 class="name">` dan ubah
- Email: Cari `mailto:` dan ubah
- Telepon: Cari `<span class="value">+62` dan ubah
- Tanggal Lahir: Cari `November 21, 2003` dan ubah
- Lokasi: Cari `Purbalingga` dan ubah

**Social Media:**
- Cari `<div class="social-links">` dan ubah link href

### 2. Edit Section About

- Cari `<section id="about">` 
- Ubah teks di `<p class="about-text">`
- Edit layanan di `<div class="services-grid">`
- Edit testimonial di `<div class="testimonials-grid">`

### 3. Edit Section Resume

**Pendidikan:**
- Cari `<i class="fas fa-graduation-cap"></i> Education`
- Edit timeline items

**Pengalaman:**
- Cari `<i class="fas fa-briefcase"></i> Experience`
- Edit timeline items

**Skills:**
- Cari `<div class="skills-grid">`
- Ubah nama skill dan persentase di `style="width: XX%"`

### 4. Edit Section Portfolio

- Cari `<section id="portfolio">`
- Edit portfolio items di `<div class="portfolio-grid">`
- Ubah kategori dengan mengubah `data-category`

### 5. Ganti Gambar

**Avatar/Foto Profil:**
- Siapkan foto dengan nama `avatar.png`
- Letakkan di folder yang sama dengan `index.html`

**Portfolio Images:**
- Siapkan gambar project (project1.jpg, project2.jpg, dst)
- Letakkan di folder yang sama dengan `index.html`

**Client Logos:**
- Siapkan logo klien (client1.png, client2.png, dst)
- Letakkan di folder yang sama dengan `index.html`

> **Catatan:** Jika gambar tidak ada, akan muncul placeholder emoji otomatis

## 🎨 Kustomisasi Warna

Buka `style.css` dan ubah variabel di bagian `:root`:

```css
:root {
    --bg-primary: #1e1e1f;        /* Background utama */
    --bg-secondary: #2b2b2c;      /* Background card */
    --bg-card: #383838;           /* Background elemen */
    --text-primary: #ffffff;      /* Teks utama */
    --text-secondary: #b0b0b0;    /* Teks sekunder */
    --accent-color: #ffdb70;      /* Warna aksen (kuning) */
    --border-color: #3d3d3d;      /* Warna border */
}
```

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 📄 Struktur File

```
portfolio-website/
├── index.html          # File HTML utama
├── style.css           # File CSS styling
├── script.js           # File JavaScript
├── README.md           # Dokumentasi
├── avatar.png          # Foto profil (opsional)
├── project1.jpg        # Gambar portfolio (opsional)
├── project2.jpg
├── client1.png         # Logo klien (opsional)
└── client2.png
```

## 💡 Tips

1. **Custom Domain:** Anda bisa menggunakan custom domain di GitHub Pages (Settings > Pages > Custom domain)
2. **SEO:** Edit meta description di `<head>` untuk SEO yang lebih baik
3. **Analytics:** Tambahkan Google Analytics untuk tracking visitor
4. **Performance:** Kompres gambar sebelum upload untuk loading lebih cepat

## 🆘 Troubleshooting

**Website tidak muncul setelah deploy:**
- Tunggu 5-10 menit setelah aktivasi GitHub Pages
- Pastikan file `index.html` ada di root folder
- Clear browser cache dan coba lagi

**Gambar tidak muncul:**
- Pastikan nama file gambar sesuai dengan yang di HTML
- Pastikan gambar sudah di-upload ke repository
- Gunakan huruf kecil untuk nama file

**Layout berantakan di mobile:**
- Pastikan file `style.css` ter-load dengan benar
- Cek console browser untuk error

## 📞 Support

Jika ada pertanyaan atau masalah, silakan buat issue di repository ini.

## 📜 License

Free to use untuk personal dan commercial projects.

---

**Dibuat dengan ❤️ menggunakan HTML, CSS, dan JavaScript**
