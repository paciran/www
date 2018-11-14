---
title: "Cara Setting WP Fastest Cache Dengan Cloudflare"
description: "Cara melakukan pengaturan untuk menghubungkan plugin WP Fastest Cache dengan CDN Cloudflare"
author: mukidi
editor: mukidi
tags: [menulis, tutorial, internet]
current: posts
class: post-template
subclass: [post, tag-tutorial]
date: 2018-11-14 10:00:50

---
Kecepatan blog atau website sangat berpengaruh terhadap peringkat artikel pada pencarian google dan tentu saja jumlah pengunjung suatu blog dan website dipengaruhi oleh mesin pencari.

Kamu tentu saja ingin pengunjung blog kamu semakin hari semakin banyak, selain menerapkan teknik SEO yang baik kita bisa mempercepat akses ke situs, oleh karena itu kali ini saya menulis tutorial mempercepat wordpress dengan plugin WP Fastest Cache dan Cloudflare.

Tutorial ini sangat cocok untuk pemula karna pengaturan yang sangat cepat dan sederhana, tentu saja hal ini sangat membantu dalam mempercepat blog kamu.

**Syarat:** Memiliki blog [wordpress](https://www.wordpress.org) dan akun [Cloudflare](https://www.cloudflare.com)

## Mengkombinasikan WP Fastest Cache dengan CDN Cloudflare
Agar blog wordpress semakin cepat ketika diakses, bisa memanfaatkan CDN milik Cloudflare melalui plugin WP Fastest Cache. Berikut ini adalah cara untuk menghubungkan kedua-nya dan mendapatkan manfaat dari _caching_ konten dari CDN Cloudflare

### 1. Buat Akun Cloudflare
Lakukan pendaftaran akun Cloudflare pada [link ini](https://dash.cloudflare.com/sign-up){: target="_blank" rel="nofollow noopener"}

### 2. Install Plugin WP Fastest Cache
Buka **Dashboard** situs wordpress kamu, buka/klik menu **plugin** dan tambahkan plugin baru **WP Fastest Cache**. Lakukan instalasi dan aktifkan plugin tersebut.

### 3. Pengaturan WP Fastest Cache
Setelah instalasai dan aktifasi, kamu bisa masuk ke menu WP Fastest Cache dan ikuti pengaturan sesuai gambar dibawah ini:

![pengaturan wp fastest cache](https://i2.wp.com/www.ramitan.com/wp-content/uploads/2018/07/WP-Fastest-Cache-e1535542367236.png?w=750&ssl=1)

### 4. Atur Cache Time-out
Lakukan pengaturan _cache timeout_ seperti gambar berikut:

![tentukan cache time out ideal](https://i1.wp.com/www.ramitan.com/wp-content/uploads/2018/07/WP-Fastest-Cache2-e1535542388737.png?w=750&ssl=1)

### 5. Dapatkan API Key Cloudflare
Untuk mendapatkan API Cloudflare, silahkan login ke dashboard Cloudflare kemudian klik pada My Profile. API Key akan terlihat seperti gambar di bawah:

![cara melihat api key cloudflare](https://i1.wp.com/www.ramitan.com/wp-content/uploads/2018/07/CF-e1535542380263.png?w=750&ssl=1)

Klik pada **View** untuk melihat API Key yang diberikan.

### 6. Koneksikan WP Fastest Cache dengan Cloudflare
Kembali pada pengaturan plugin WP Fastest Cache pada tab CDN, kamu bisa memasukan email dan API Key Cloudflare, setelah memasukan email dan API Key ikuti saja langkahnya dengan menekan tombol Next. Pengaturan akan terlihat seperti gambar dibawah ini:

![WP Fastets Cache + Cliudflare CDN](https://i2.wp.com/www.ramitan.com/wp-content/uploads/2018/07/WP-Fastest-Cache3-e1535542396865.png?w=750&ssl=1)

### 7. Delete Cache Dan Minified JS/CSS
Sebagai langkah terakhir, setelah semua pengaturan diatas selesai, silahkan Delete Cache And Minified JS/CSS pada WP Fastest Cache dan **Purge Everything** Pada Caching Cloudflare.

Dengan menghubungkan plugin WP Fastest Cache dengan Cloudflare seperti yang dijelaskan di atas, diharapkan mampu membuat website/blog wordpres kamu semakin cepat dimuat oleh browser. Dengan begitu bisa menambah atau meningkatkan pengunjung.
