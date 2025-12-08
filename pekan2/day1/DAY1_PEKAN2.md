# Day 1 — Pekan 2

Tanggal: 2025-12-08

## Tujuan
- Praktik dasar event handling di React (klik, tekan, lepas, input change).
- Merapikan kode dan menyederhanakan styling.

## Ringkasan Pekerjaan
- Memperbaiki komponen `ButtonClicker` agar event handler tersusun rapi dan hanya mencatat satu event ketika tombol dilepas.
- Mengganti/menghapus CSS yang tidak diperlukan; beberapa gaya dipindah ke inline style untuk menyederhanakan struktur (opsional di beberapa commit sebelumnya).
- Menghapus file `src/App.css` yang kosong.

## File yang Diubah / Dibuat
- `src/components/ButtonClicker.jsx` — komponen diperbaiki:
  - Menghapus nested handler dan memperbaiki scope fungsi.
  - Menggunakan `onMouseUp` untuk menghindari duplikasi log (menghindari `mousedown` + `click` ganda).
  - Menambahkan state sederhana untuk input dan log event.

- `src/App.jsx` — dirapikan menggunakan style inline sederhana (header/main/footer) dan struktur semantik.
- `src/index.css` — tetap digunakan sebagai global minimal.
- `src/App.css` — dihapus (kosong / tidak digunakan).
- (Sebelumnya ada `ButtonClicker.css`, tetapi sudah dihapus/atau tidak diperlukan setelah perubahan ke inline styles.)

## Cara Menjalankan & Verifikasi
1. Jalankan dev server:

```powershell
npm run dev
```

2. Buka aplikasi pada alamat dev server (mis. `http://localhost:5173`).
3. Verifikasi:
   - Tekan dan lepaskan tombol `Klik Saya`: harus muncul satu baris log "Tombol dilepas" di bagian Event Log dan/atau console.
   - Ketik di kotak input: setiap perubahan akan menambahkan log "User sedang mengetik: ...".
   - Klik `Clear` untuk mengosongkan input dan log.

## Catatan Teknis / Rekomendasi
- Perilaku duplikat log biasanya muncul karena event sequence `mousedown` -> `mouseup` -> `click`. Pilih hanya salah satu handler (`onClick` atau `onMouseUp`) tergantung tujuan. Saya gunakan `onMouseUp` untuk demonstrasi.
- Jika ingin gaya terpisah, susun ulang CSS minimal di `src/components` dan impor kembali file CSS; untuk sekarang gaya dibuat sederhana di dalam komponen.

## Langkah Berikutnya (opsional)
- Ganti `onMouseUp` dengan `onClick` jika ingin menyertakan aktivasi lewat keyboard (Enter/Space pada tombol fokus).
- Tambahkan unit test sederhana untuk fungsi util atau snapshot komponen.

---

Jika mau saya commit file ini dan membuat PR, beri tahu — atau mau saya ubah isi ringkasan sebelum disimpan?