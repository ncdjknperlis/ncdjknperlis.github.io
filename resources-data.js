// resources-data.js
// 📂 TEMPLAT MASTER PUSAT SUMBER MULTIMEDIA NCD (PLUG-AND-PLAY)
// 📢 CARA GUNA: Salin blok dlm kategori pilihan, tampal di bawahnya, dan isi maklumat fail anda.

const resourcesData = [

    // =========================================================================
    // TEMPLAT KATEGORI 1: 🎨 IMEJ / INFOGRAFIK / LOGO
    // (Bahan di bawah kumpulan ini akan dibuka di fail: play-image.html)
    // =========================================================================
    {
        title: "Nama Tajuk Poster / Infografik / Logo Anda Di Sini",
        category: "infografik", // Guna 'infografik' atau 'logo' (Kedua-duanya masuk tab Imej)
        program: "mental",      // Pilihan program: mental / diabetes / hpt / hpl
        desc: "Tuliskan penerangan ringkas atau sinopsis ringkas berkenaan kandungan poster atau logo ini di sini.",
        imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80", // Gambar hiasan kad grid luar
        imgUrl: "https://drive.google.com/file/d/MASUKKAN_ID_DRIVE_DI_SINI/preview", // Pautan pratonton Google Drive
        badgeText: "Infografik", // Teks kecil pada kad (Contoh: Infografik / Poster / Logo)
        badgeColorClass: "text-emerald-600 bg-emerald-50", // Warna badge hijau (Guna 'text-amber-600 bg-amber-50' jika logo)
        infoText: "Format: Imej Drive"
    },
    {
        title: "Contoh Bahan Kedua (Imej/Infografik)",
        category: "infografik",
        program: "mental",
        desc: "Penerangan bagi bahan kedua anda.",
        imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
        imgUrl: "https://drive.google.com/file/d/MASUKKAN_ID_DRIVE_DI_SINI/preview",
        badgeText: "Poster",
        badgeColorClass: "text-emerald-600 bg-emerald-50",
        infoText: "Format: Imej Drive"
    },


    // =========================================================================
    // TEMPLAT KATEGORI 2: 🎬 VIDEO PROMOSI / KAPSUL RELAKSASI
    // (Bahan di bawah kumpulan ini akan dibuka di fail: play-video.html)
    // =========================================================================
    {
        title: "Nama Tajuk Video Promosi / Terapi Anda Di Sini",
        category: "video",     // Mesti kekal perkataan 'video'
        program: "mental",     // Pilihan program: mental / diabetes / hpt / hpl
        desc: "Tuliskan sinopsis atau deskripsi ringkas mengenai video kesedaran, montaj, atau klip animasi ini.",
        imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80", // Gambar hiasan kad grid luar
        videoUrl: "https://drive.google.com/file/d/MASUKKAN_ID_DRIVE_DI_SINI/preview", // Pautan pemain video Google Drive
        badgeText: "Video",     // Teks kecil pada kad
        badgeColorClass: "text-rose-600 bg-rose-50", // Warna badge merah muda khas video
        infoText: "Format: Video Drive"
    },
    {
        title: "Contoh Bahan Kedua (Video)",
        category: "video",
        program: "mental",
        desc: "Penerangan bagi bahan video kedua anda.",
        imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
        videoUrl: "https://drive.google.com/file/d/MASUKKAN_ID_DRIVE_DI_SINI/preview",
        badgeText: "Video Kapsul",
        badgeColorClass: "text-rose-600 bg-rose-50",
        infoText: "Format: Video Drive"
    },


    // =========================================================================
    // TEMPLAT KATEGORI 3: 📄 DOKUMEN / RISALAH / BUNTING / MODUL / MERCHANDISE
    // (Bahan di bawah kumpulan ini akan dibuka di fail: play-image.html sebagai PDF iframe)
    // =========================================================================
    {
        title: "Nama Tajuk Dokumen / Risalah / Bunting / Buku Poket Anda Di Sini",
        category: "cpg",        // Kekalkan perkataan 'cpg' (Enjin JS auto-map ini masuk tab Dokumen)
        program: "mental",      // Pilihan program: mental / diabetes / hpt / hpl
        desc: "Tuliskan huraian ringkas mengenai naskah modul, buku garis panduan, brosur lipat tiga, atau pelan bunting di sini.",
        imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80", // Gambar hiasan kad grid luar
        imgUrl: "https://drive.google.com/file/d/MASUKKAN_ID_DRIVE_DI_SINI/preview", // Pautan pembaca PDF Google Drive
        badgeText: "Risalah",    // Teks kecil pada kad (Contoh: Risalah / Modul / Bunting / Buku)
        badgeColorClass: "text-sky-600 bg-sky-50", // Warna badge biru khas dokumen
        infoText: "Format: PDF Drive"
    },
    {
        title: "Contoh Bahan Kedua (Dokumen/Bunting)",
        category: "cpg",
        program: "mental",
        desc: "Penerangan bagi bahan dokumen kedua anda.",
        imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80",
        imgUrl: "https://drive.google.com/file/d/MASUKKAN_ID_DRIVE_DI_SINI/preview",
        badgeText: "Bunting",
        badgeColorClass: "text-sky-600 bg-sky-50",
        infoText: "Format: PDF Drive"
    }

];

// Memastikan objek data berjaya dieksport ke memori global pelayar web
window.resourcesData = resourcesData;