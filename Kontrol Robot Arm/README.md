# 🤖 4 DOF Robot Arm Control Panel

Proyek ini adalah antarmuka kontrol berbasis web (Dashboard) untuk mengoperasikan lengan robot dengan **4 Degree of Freedom (DOF)**. Sistem ini dirancang untuk memberikan kendali presisi terhadap motor servo pada setiap sendi robot melalui komunikasi serial atau protokol IoT.


## 🚀 Fitur Utama

* **Kontrol Interaktif**: Slider responsif untuk mengatur sudut *Base*, *Shoulder*, *Elbow*, dan *Gripper* secara mandiri.
* **Real-time Monitoring**: Tampilan derajat sudut yang diperbarui secara instan saat input berubah.
* **Sistem Preset**: Tombol otomatis untuk posisi *Home*, *Pick* (mengambil), dan *Release* (melepaskan).
* **Emergency Stop**: Fitur keamanan untuk menghentikan gerakan dan mengembalikan robot ke posisi aman (90°).
* **Desain Responsif**: Antarmuka modern dengan *Dark Mode* yang nyaman di mata dan kompatibel dengan perangkat mobile.

## 🛠️ Teknologi yang Digunakan

* **HTML5**: Untuk struktur dashboard.
* **CSS3**: Untuk styling UI (Flexbox, Grid, dan Custom Slider).
* **JavaScript (ES6+)**: Untuk logika manipulasi DOM dan manajemen *state* sudut.
