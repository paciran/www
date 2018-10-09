---
title: "Membunuh Waktu: Membuat Playlist Lagu-lagu Padi, Online Boss!"
description: Dengan tingkat kesenggangan waktu yang begitu tak terbatas,
layout: post
current: post
cover: False
navigation: True
date: 2018-08-08 09:00:00
class: post-template
subclass: 'post tag-speeches'
author: mukidi
tags: [tutorial, padi reborn]
---
Seperti biasa, karena _saking nganggure_, Saia butuh kegiatan yang membuat jari (secara spesifik: dua jempol) sibuk. Setelah dua hari tak ada hal baru dalam keseharian _saia_; ngopi, _jandon_, main game [War Robots](https://warrobots.net/en) atau [PUBG](http://www.pubgmobile.com/en-US) sambil tiduran tentu saja. Akhirnya ketemu juga yang belum pernah saya coba: **Membuat sebuah _audio player_ sederhana dengan fitur playlist**. 

Tujuannya tentu saja agar bisa memainkan beberapa file audio sekaligus sesuai dengan urutan yang ditentukan dalam playlist. Secara sederhana, jika hanya memakai tag `audio` HTML5 saja hanya bisa [memainkan satu file audio saja](https://www.knoacc.org/2012/10/menambah-audio-ke-blog-web-dengan-html5.html) dalam satu tag. Dan harus menekan kembali tombol play lagi jika ingin memutar file audio lainnya. Tidak nyaman tentu saja.

Setelah melihat beberapa metode yang ada di internet, ada satu cara yang relatif mudah. Dan saia coba implementasikan di halaman lain yang memuat beberapa lagu milik band Indonesia: Padi, dari album pertama.

### Embed

Dari penjelasannya, untuk melakukannya termasuk mudah dan sudah mampu menampung playlist `.m3u`, sebagai contohnya:

```html
<embed name="music_playlist"
src="/music/music_playlist.m3u"
width="150"
height="90"
loop="false"
autostart="true"/>
```
Niatnya, ingin membuat sebuah playlist dengan 3 lagu Padi:

1. Sobat - [link](/assets/audio/padi-sobat.m4a)
2. Bidadari - [link](/assets/audio/padi-bidadari.m4a)
3. Mahadewi - [link](/assets/audio/padi-mahadewi.m4a)

Sayangnya, setelah di coba beberapa kali tetap saja tidak bisa. Bohong besarr...

![Yasudahlah Padi](assets/images/padi-reborn.jpg)

Yasudahlah.. Pakai tag audio saja

<audio controls><source src="https://www.paciran.com/assets/audio/padi-sobat.m4a" preload="metadata" type="audio/mpeg" ></audio>
<audio controls><source src="https://www.paciran.com/assets/audio/padi-bidadari.m4a" preload="metadata" type="audio/mpeg" ></audio>
<audio controls><source src="https://www.paciran.com/assets/audio/padi-mahadewi.m4a" preload="metadata" type="audio/mpeg" ></audio>

**Cekrek!**

### Maafkan aku sobat...

Jika berhasil, ya, jika berhasil, _yo uapik sanget toh_.

Mmm... sudah hampir 2 jam terlewati hanya untuk tulisan ini. Dan menghabiskan waktu se-sore kemarin untuk mencoba di localhost. Lumayanlah, bisa membunuh waktu dengan hal berguna yang sebenarnya _gak guna banget_.

![Padi Reborn](https://i0.wp.com/ikhwanalim.files.wordpress.com/2017/12/maxresdefault.jpg?resize=840,450)

Untuk saat ini, dunia musik Indonesia, khususnya sobat Padi, masih _hype_ atas band legendaris Padi yang lahir kembali.
Saat konser pulang kampung di Surabaya 10 November, ada kado kecil berupa single terbaru berjudul **Kau Malaikatku**. - [link](/assets/audio/padi-reborn-malaikatku.mp3)

<audio controls="controls"><source src="https://paciran.com/assets/audio/padi-reborn-malaikatku.mp3" preload="metadata" type="audio/mpeg"></audio>

Dan sebagai bonus, ada 2 lagu lagi yang (sepertinya) dibawakan _sodok seje_: 1. Sobat [link](/assets/audio/sobat.mp3) dan 2. Semua Tak Sama [link](/assets/audio/padi-reborn-semua-tak-sama.mp3). Coba dengarkan versi _live_-nya di bawah ini:

<audio controls="controls"><source src="https://www.paciran.com/assets/audio/padi-reborn-sobat.mp3" preload="metadata" type="audio/mpeg"></audio>
<audio controls="controls"><source src="https://www.paciran.com/assets/audio/padi-reborn-semua-tak-sama.mp3" preload="metadata" type="audio/mpeg"></audio>
_Uyup sek kopine..._ Next time, pakai _javascript_ saja. Ada dua yang perlu di coba: 

1. Contoh audio player via [jsfidle](http://jsfiddle.net/vkMqR/2374/)
2. Contoh audio player via [codepen](http://codepen.io/markhillard/pen/Hjcwu)
