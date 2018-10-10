---
layout: post
current: post
cover: assets/images/gambar-ilustrasi.jpg
navigation: True
title: "Mudahnya Trik Cropping Gambar Online Memakai Server Wordpress Tanpa Akun"
description: "Memanfaatkan fitur cropping otomatis wordpress (yang lebih efisien) anti ribet download upload gambar meskipun bukan pengguna WordPress"
date: 2018-10-09 20:20:20
last_updated: 2018-10-10 15:42:03
tags: [tutorial, menulis]
class: post-template
subclass: 'post tag-desain'
author: mukidi
---

Fungsi gambar baik berupa foto ataupun hasil editing mempunyai peran yang lumayan penting saat menulis artikel. Utamanya saat menulis di blog atau media online lainnya. Seperti ujaran yang cukup populer: "Satu gambar lebih efektif daripada seribu kata." Atau menurut generasi milenial: "No pict = Hoax."

Untuk keperluan ilustrasi tulisan, blogger atau penulis, lebih memilih untuk memasukkan gambar yang didapatkan dari situs lain dengan alasan tertentu. Masalahnya, gambar yang didapat seacara online bisa jadi mempunyai ukuran yang lebih besar dari yang dibutuhkan. Ukuran yang dimaksud disini bisa berarti terlalu lebar/tinggi. bisa juga ukuran file bitmap (jpg/png) terlampau berat untuk dibuka sehingga mempengaruhi pemuatan halaman secara keseluruhan.

### Bandwith dan Gambar Online

Untuk mengatasi masalah di atas, biasanya penulis/blogger harus mengunduh terlebih dahulu file gambar dan melakukan pemotongan gambar agar sesuai dengan yang diinginkan. Kemudian mengunggah kembali gambar hasil _editing_. Entah mengunggah langsung ke hosting blog/atau situs yang saat ini dipakai untuk mempublikasikan tulisan (pilihan pertama) maupun mengunggah ke situs hosting gambar external (pilihan kedua) semacam imgur.com, kemudian menyematkan tautan langsung gambar yang telah diunggah.

Pilihan pertama, tak akan menjadi masalah jika menggunakan media publikasi gratisan seperti Blogger (sub domain blogspot.com) atau Wordpress (versi gratis, sub domain wordpress.com) dan platform blogging lokal seperti Kompasiana. Karena penulis tidak perlu memikirkan apakah jatah bandwith akan terlampaui ketika artikel menjadi populer dan berkali-kali dibaca. 

Pilihan kedua mejadi alternatif bagi blogger yang mempublikasikan tulisan secara mandiri menggunakan CMS (Content Management System) seperti CMS Wordpres, Jomla maupun Drupal dengan menyewa hosting sendiri. Ini karena umumnya, hosting situs melakukan pembatasan jumlah arus data yang dipakai dalam satu bulan. Sedangkan file gambar cukup memakan data dibandingkan dengan teks, apalagi jika file gambar punya ukuran yang besar.

### Optimalisasi Gambar Ilustrasi

Seperti yang sudah disinggung sebelumnya, gambar dengan resolusi yang tajam pasti punya ukuran file yang besar. Besarnya file gambar turut mempengaruhi pemuatan situs oleh browser. Apalagi jika diakses dari jaringan internet yang lemah. Untuk itu, file gambar perlu di-optimasi sehingga ukuran file lebih kecil namun tetap bisa menampilkan gambar yang cukup layak untuk dilihat. Bagi yang cukup akrab dengan perangkat lunak Adobe Photoshop, perkara optimasi gambarcukup mudah untuk dilakukan. Tetapi, proses dan langkah dari menemukan gambar ilustrasi hingga bisa dipakai dalam publishing cukup memakan waktu.

Untuk mempersingkat proses optimasi gambar, blogger bisa memanfaatkan layanan optimasi gambar online yang sudah banyak tersebar di internet. Beberapa situs optimasi gambar bahkan mempermudah dengan hanya mnyuruh menyalin tautan gambar ke kolom yang disediakan dan tinggal mengunduh hasil gambar optimasi. Tetapi sekali lagi pilihan optimasi gambar ini juga masih terlalu panjang dan tidak _efisien_ (ramah waktu) dalam prosesnya.

### Memanfaatkan Server Wordpress

Hemm... Kalau dari judulnya, cara ini sepertinya _bakal_ ribet lagi. Oh, tentu tidak. Jika kamu berpikiran bahwa cara ini membutuhkan akun wordpress kamu salah besar. Cara atau trik optimasi gambar yang satu bisa dimanfaatkan siapapun asal masih terhubung dengan internet. Tertarik kan? Tidak mungkin kamu membaca hingga sampai di sini jika tidak tertarik.

Hal terpenting yang perlu kamu ingat adalah _domain_ ini: `i0.wp.com, i1.wp.com, i2.wp.com dan i3.wp.com yang akan kamu pakai untuk **membungkus tautan gambar** yang ingin dioptimalisasi agar lebih ringan dan format _query_ untuk **merubah ukuran atau memotong gambar** yakni: `?resize=` dan `?crop=`.

### Baca Aturan Pakai

> Sebagaimana obat, ada aturan pakai yang harus ditaati agar tidak celaka. Ikuti dengan benar.

Untuk optimalisasi gambar, selipkan _domain_ pembungkus setelah protokol (`http://` atau `https://`) dari tautan gambar yang ingin kamu optimasi. Sebagai contoh, gambar [logo ini](assets/logo-dwarkop.jpg) punya ukuran file yang besar dan berpotensi menghabiskan jatah bandwith selain itu cukup berat dimuat jika disematkan dalam halaman web. Untuk membuat gambar lebih ramah hosting dan lebih ringan gunakan salah satu domain pembungkus, misal `i0.wp.com` kedalam tautan https://www.paciran.com/assets/images/logo-dwarkop.jpg sehingga menjadi https://i0.wp.com/www.paciran.com/assets/images/logo-dwarkop.jpg

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- AtasArtikel -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-8526606076277673"
     data-ad-slot="8771412334"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins><script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

Untuk memotong atau merubah ukuran (lebar, tinggi), tempatkan _query_ (`?resize=` atau `?crop=`) di akhir tautan gambar yang sudah dibungkus sebelumnya. Yang terpenting adalah nilai setelah _query_ yang menentukan ukuran dari gambar dalam satuan _pixel_ dengan format: `lebar,tinggi` yang di-inginkan. Jika ingin gambar berukuran lebar 400px dan tinggi 320px, formatnya menjadi `400,320`. Setelah digabung, tautan akan terlihat seperti ini: `https://www.paciran.com/assets/images/logo-dwarkop.jpg?resize=400,320` Mudah, dan _efisien_.

> Catatan untuk webmaster: Trik ini sebenarnya masih punya kekurangan. Salah satunya adalah gambar biasanya tidak ter-cache oleh CDN karena mengandung _query_. Toh masih bisa diatasi dengan menambahkan parameter _query_ tersebut dalam daftar yang boleh di _cache_ pada panel penyedia layanan CDN yang dipakai.

Sebagai contohnya, sudah saya manfaatkan untuk postingan [ini (1)](https://www.paciran.com/desain-logo-dwarkop-paciran-corel-draw) dan [ini (2)](https://www.paciran.com/borongan-desain-banner-sketsel-piala-ppc-2.html). Contoh pemakaian lainnya seperti gambar cover di atas. Tautan gambar asli yang besar adalah [di sini](https://www.scad.edu/sites/default/files/styles/swarm16x7_1170/public/Academics/Illustration/Tim-Kaminski_Illustration_Drummond-A1-Workshop.jpg). Kemudian  dioptimasi sekaligus merubah ukurannya dengan server wordpress seperti pada [tautan ini](https://i0.wp.com/www.scad.edu/sites/default/files/styles/swarm16x7_1170/public/Academics/Illustration/Tim-Kaminski_Illustration_Drummond-A1-Workshop.jpg?resize=800,400). Baru kemudian saya unduh dan unggah kembali ke server hosting. Jadi, banyak sekali pilihan yang bisa dipakai dalam memanfaatkan server wordpress sebagai alat optimasi gambar.

> Tips Do it like a pro: Kamu juga bisa memanfaatkan trik ini untuk _cropping_ gambar tertentu yang terlalu besar yang ingin kamu jadikan wallpaper hape android agar pas dengan layar :)

Trik optimasi gambar dengan server wordpress, jelas **lebih efisien** walaupun belum bisa dikatakan **sangat mudah untuk dilakukan** jika dibandingkan dengan metode-metode optimasi gambar yang lain yang dijelaskan dalam artikel ini. Setidaknya, optimasi gambar secara online ini tidak memerlukan bantuan perangkat lunak maupun membuka situs optimasi gambar lain. Dan yang penting: tidak perlu download dan re-upload ke server hosting baik internal maupun external.

> Hoahem.... ngantuk, tak tinggal ngopi sek bruh.