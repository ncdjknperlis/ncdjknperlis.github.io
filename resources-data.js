// resources-data.js
// 📂 TEMPLAT MASTER PUSAT SUMBER MULTIMEDIA NCD (PLUG-AND-PLAY)
// 📢 CARA GUNA: Salin blok dlm kategori pilihan, tampal di bawahnya, dan isi maklumat fail anda.

const resourcesData = [

    // =========================================================================
    // TEMPLAT KATEGORI 1: 🎨 IMEJ / INFOGRAFIK / LOGO
    // (Bahan di bawah kumpulan ini akan dibuka di fail: play-image.html)
    // =========================================================================
    {
        title: "Ambil Tahu Bacaan Tekanan Darah Anda",
        category: "infografik", // Guna 'infografik' atau 'logo' (Kedua-duanya masuk tab Imej)
        program: "hpt",      // Pilihan program: mental / diabetes / hpt / hpl
        desc: "Tuliskan penerangan ringkas atau sinopsis ringkas berkenaan kandungan poster atau logo ini di sini.",
        imageUrl: "https://drive.google.com/thumbnail?sz=w600&id=1GtEfcYyz7qP8ipYh66fWnTC6lUfzg93w", // Gambar hiasan kad grid luar
        imgUrl: "https://drive.google.com/file/d/1GtEfcYyz7qP8ipYh66fWnTC6lUfzg93w/preview", // Pautan pratonton Google Drive
        badgeText: "Infografik", // Teks kecil pada kad (Contoh: Infografik / Poster / Logo)
        badgeColorClass: "text-emerald-600 bg-emerald-50", // Warna badge hijau (Guna 'text-amber-600 bg-amber-50' jika logo)
        infoText: "Format: Imej Drive"
    },
    {
        title: "Bagaimana Garam Meningkatkan Tekanan Darah",
        category: "infografik",
        program: "hpt",
        desc: "Penerangan bagi bahan kedua anda.",
        imageUrl: "https://drive.google.com/thumbnail?sz=w600&id=1tOyRc7RbZ46jSau-Bc8m_3xBPinnqqPs",
        imgUrl: "https://drive.google.com/file/d/1tOyRc7RbZ46jSau-Bc8m_3xBPinnqqPs/preview",
        badgeText: "Infografik",
        badgeColorClass: "text-emerald-600 bg-emerald-50",
        infoText: "Format: Imej Drive"
    },
    {
        title: "Bagaimana Mencegah Hipertensi",
        category: "infografik",
        program: "hpt",
        desc: "Penerangan bagi bahan kedua anda.",
        imageUrl: "https://drive.google.com/thumbnail?sz=w600&id=1mUZ39TwYS-qgook0BPpJeau5lsxmrs3P",
        imgUrl: "https://drive.google.com/file/d/1mUZ39TwYS-qgook0BPpJeau5lsxmrs3P/preview",
        badgeText: "Infografik",
        badgeColorClass: "text-emerald-600 bg-emerald-50",
        infoText: "Format: Imej Drive"
    },
    {
        title: "Cara ke Arah 5g Sehari",
        category: "infografik",
        program: "hpt",
        desc: "Penerangan bagi bahan kedua anda.",
        imageUrl: "https://drive.google.com/thumbnail?sz=w600&id=1TX1Wwb-tsAUWa-BwFtovSoWdllhRUhH3",
        imgUrl: "https://drive.google.com/file/d/1TX1Wwb-tsAUWa-BwFtovSoWdllhRUhH3/preview",
        badgeText: "Infografik",
        badgeColorClass: "text-emerald-600 bg-emerald-50",
        infoText: "Format: Imej Drive"
    },
    {
        title: "Hari Hipertensi Sedunia 2026",
        category: "video",
        program: "hpt",
        desc: "Penerangan bagi bahan kedua anda.",
        imageUrl: "https://drive.google.com/thumbnail?sz=w600&id=1nEzpxluFsO30Vt4_000HcZrbhr9Nl87m",
        videoUrl: "https://drive.google.com/file/d/1nEzpxluFsO30Vt4_000HcZrbhr9Nl87m/preview",
        badgeText: "Video",
        badgeColorClass: "text-rose-600 bg-rose-50",
        infoText: "Format: Video Drive"
    },
    {
        title: "Kesan Pengambilan Garam Berlebihan",
        category: "infografik",
        program: "hpt",
        desc: "Penerangan bagi bahan kedua anda.",
        imageUrl: "https://drive.google.com/thumbnail?sz=w600&id=1v43h8t0qj97IumfS1joB8V6SIK-CfDAl",
        imgUrl: "https://drive.google.com/file/d/1v43h8t0qj97IumfS1joB8V6SIK-CfDAl/preview",
        badgeText: "Infografik",
        badgeColorClass: "text-emerald-600 bg-emerald-50",
        infoText: "Format: Imej Drive"
    },
    {
        title: "Periksa Tekanan Darah Anda",
        category: "video",
        program: "hpt",
        desc: "Penerangan bagi bahan kedua anda.",
        imageUrl: "https://drive.google.com/thumbnail?sz=w600&id=1yIJyWL2kG9i4aEk0FPQqh11yB7X-vo82",
        videoUrl: "https://drive.google.com/file/d/1yIJyWL2kG9i4aEk0FPQqh11yB7X-vo82/preview",
        badgeText: "Video",
        badgeColorClass: "text-rose-600 bg-rose-50",
        infoText: "Format: Video Drive"
    },

    // =========================================================================
    // TEMPLAT KATEGORI 2: 🎬 VIDEO PROMOSI / KAPSUL RELAKSASI
    // (Bahan di bawah kumpulan ini akan dibuka di fail: play-video.html)
    // =========================================================================
    {
        title: "Kekal Sihat di Hari Raya",
        category: "video",     // Mesti kekal perkataan 'video'
        program: "umum",     // Pilihan program: mental / diabetes / hpt / hpl
        desc: "Memaparkan tip untuk kekal sihat semasa musim perayaan Aidiladha.",
        imageUrl: "https://lh3.googleusercontent.com/d/1hdtS8p1ojGpCary6NiMCP8My8GyE4N3i=w600?authuser=0",
        videoUrl: "https://drive.google.com/file/d/1hdtS8p1ojGpCary6NiMCP8My8GyE4N3i/preview", // Pautan pemain video Google Drive
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
    // (Bahan di bawah kumpulan ini akan dibuka di fail: view-material.html sebagai PDF iframe)
    // =========================================================================
    {
        title: "CPG Type 2 Diabetes Mellitus",
        category: "cpg",        // Kekalkan perkataan 'cpg' (Enjin JS auto-map ini masuk tab Dokumen)
        program: "diabetes",      // Pilihan program: mental / diabetes / hpt / hpl
        desc: "Tuliskan huraian ringkas mengenai naskah modul, buku garis panduan, brosur lipat tiga, atau pelan bunting di sini.",
        imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80", // Gambar hiasan kad grid luar
        imgUrl: "https://drive.google.com/file/d/1QhGaygUGyCo_fwKUqFYyDLEzs3zTexdg/view", // Pautan pembaca PDF Google Drive
        badgeText: "Dokumen",    // Teks kecil pada kad (Contoh: Risalah / Modul / Bunting / Buku)
        badgeColorClass: "text-sky-600 bg-sky-50", // Warna badge biru khas dokumen
        infoText: "Format: PDF Drive"
    },
    {
        title: "Rujukan Pantas CPG Type 2 Diabetes Mellitus",
        category: "cpg",
        program: "diabetes",
        desc: "Penerangan bagi bahan dokumen kedua anda.",
        imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80",
        imgUrl: "https://drive.google.com/file/d/1a9UbXlYaEn1dz-GW_Kv_7fBwR6cD90f8/preview",
        badgeText: "Dokumen",
        badgeColorClass: "text-sky-600 bg-sky-50",
        infoText: "Format: PDF Drive"
    },
    {
        title: "Diabetes Education Manual 2020",
        category: "cpg",
        program: "diabetes",
        desc: "Penerangan bagi bahan dokumen kedua anda.",
        imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80",
        imgUrl: "https://drive.google.com/file/d/18YwYlZIGYuYcBmznAGDNpt27F5lea_0w/preview",
        badgeText: "Dokumen",
        badgeColorClass: "text-sky-600 bg-sky-50",
        infoText: "Format: PDF Drive"
    },
    {
        title: "Diabetes Mellitus: SIQ Investigation",
        category: "cpg",
        program: "diabetes",
        desc: "Penerangan bagi bahan dokumen kedua anda.",
        imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80",
        imgUrl: "https://drive.google.com/file/d/1IdvZ1YbkSQtsMEnTxXpXyljzdZquobjU/preview",
        badgeText: "Dokumen",
        badgeColorClass: "text-sky-600 bg-sky-50",
        infoText: "Format: PDF Drive"
    },
    {
        title: "Lembaran Fakta Hari Diabetes Sedunia 2024",
        category: "cpg",
        program: "diabetes",
        desc: "Penerangan bagi bahan dokumen kedua anda.",
        imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80",
        imgUrl: "https://drive.google.com/file/d/1NzIsicLXdglhfI7VsPG6aHPL-GBBCV2A/preview",
        badgeText: "Dokumen",
        badgeColorClass: "text-sky-600 bg-sky-50",
        infoText: "Format: PDF Drive"
    },
    {
        title: "Clinical Practice Guidelines (CPG) Management of Hypertension 5th Edition (2018)",
        category: "cpg",
        program: "hpt",
        desc: "Penerangan bagi bahan dokumen kedua anda.",
        imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80",
        imgUrl: "https://drive.google.com/file/d/106rfF9KxDF9u61ypkjyWUTU5DKshbra3/preview",
        badgeText: "Dokumen",
        badgeColorClass: "text-sky-600 bg-sky-50",
        infoText: "Format: PDF Drive"
    },
    {
        title: "Clinical Practice Guidelines (CPG) Management of Hypertension 4th Edition",
        category: "cpg",
        program: "hpt",
        desc: "Penerangan bagi bahan dokumen kedua anda.",
        imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80",
        imgUrl: "https://drive.google.com/file/d/1FIzk8IZBVQNS3KgaNwf7iUsuNPfeQ3fY/preview",
        badgeText: "Dokumen",
        badgeColorClass: "text-sky-600 bg-sky-50",
        infoText: "Format: PDF Drive"
    },
    {
        title: "Rujukan Pantas (Quick Reference) Hipertensi Perlis",
        category: "cpg",
        program: "hpt",
        desc: "Penerangan bagi bahan dokumen kedua anda.",
        imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80",
        imgUrl: "https://drive.google.com/file/d/1EmefzUyxHh0FwdwRRsqkUD4RJgYrukh8/preview",
        badgeText: "Dokumen",
        badgeColorClass: "text-sky-600 bg-sky-50",
        infoText: "Format: PDF Drive"
    },
    {
        title: "Lembaran Fakta Hipertensi 2025",
        category: "cpg",
        program: "hpt",
        desc: "Penerangan bagi bahan dokumen kedua anda.",
        imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80",
        imgUrl: "https://drive.google.com/file/d/1bjiO-NCRef0iz6W-tHPqZWfm87GBc7vk/preview",
        badgeText: "Dokumen",
        badgeColorClass: "text-sky-600 bg-sky-50",
        infoText: "Format: PDF Drive"
    },
    {
        title: "Lembaran Fakta Hari Hipertensi & Minggu Kesedaran Garam Sedunia 2024",
        category: "cpg",
        program: "hpt",
        desc: "Penerangan bagi bahan dokumen kedua anda.",
        imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80",
        imgUrl: "https://drive.google.com/file/d/1JKl1rN08aGEBXcyQqElt8Y5rbio0e_17/preview",
        badgeText: "Dokumen",
        badgeColorClass: "text-sky-600 bg-sky-50",
        infoText: "Format: PDF Drive"
    },
    {
        title: "Clinical Practice Guidelines (CPG) Management of Dyslipidemia 6th Edition (2023)",
        category: "cpg",
        program: "hpl",
        desc: "Penerangan bagi bahan dokumen kedua anda.",
        imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80",
        imgUrl: "https://drive.google.com/file/d/1AjhI2W7zQ9gS8f2zJNaKSe00eLfJv2NH/preview",
        badgeText: "Dokumen",
        badgeColorClass: "text-sky-600 bg-sky-50",
        infoText: "Format: PDF Drive"
    },
    {
        title: "Contoh Modul Latihan DM",
        category: "latihan",
        program: "diabetes",
        desc: "Penerangan bagi bahan dokumen kedua anda.",
        imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80",
        imgUrl: "https://drive.google.com/file/d/1AjhI2W7zQ9gS8f2zJNaKSe00eLfJv2NH/preview",
        badgeText: "Dokumen",
        badgeColorClass: "text-sky-600 bg-sky-50",
        infoText: "Format: PDF Drive"
    },
    {
        title: "Management of E-Cigarette or Vaping Product Use-Associated Lung Injury (EVALI)",
        category: "cpg",
        program: "rokok",
        desc: "Penerangan bagi bahan dokumen kedua anda.",
        imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80",
        imgUrl: "https://www.moh.gov.my/images/04-penerbitan/penerbitan-klinikal/panduan-amalan-klinikal/e-CPG_Management_of_EVALI_for_Online_Publication.pdf",
        badgeText: "Dokumen",
        badgeColorClass: "text-sky-600 bg-sky-50",
        infoText: "Format: PDF Drive"
    },

    // TAMBAH INI DI DALAM FILE resources-data.js
    {
        title: "Koleksi Kapsul Kesihatan Hari Raya",
        category: "package",  // MESTI TAIP 'package' ATAU 'pakej'
        program: "diabetes",  // Pilih program yang sesuai
        desc: "Himpunan kompilasi video tip pemakanan sihat, poster panduan kurangkan gula, dan risalah kalori juadah sempena Aidilfitri.",
        imageUrl: "https://drive.google.com/thumbnail?sz=w600&id=ID_GAMBAR_COVER_DRIVE", // Gambar hiasan kad luar
        badgeText: "Kapsul Raya",
        badgeColorClass: "text-purple-600 bg-purple-50", // Tema ungu premium khas untuk pakej
        infoText: "3 Bahan Digital",
        materials: [
            {
                name: "Video Panduan Kalori Rendah Kuih Raya",
                type: "🎬 Video",
                url: "https://drive.google.com/file/d/ID_VIDEO_1/view?usp=sharing",
                thumb: "https://drive.google.com/thumbnail?sz=w100&id=ID_VIDEO_1"
            },
            {
                name: "Poster Tip Suku-Suku Separuh Di Rumah Terbuka",
                type: "🎨 Poster",
                url: "https://drive.google.com/file/d/ID_POSTER_2/view?usp=sharing",
                thumb: "https://drive.google.com/thumbnail?sz=w100&id=ID_POSTER_2"
            }
        ]
    },

    // TAMBAH BLOK INI DI DALAM FAIL resources-data.js
    {
        title: "Siri Infografik Diabetes & Ramadan: Pantau Gula, Kawal Ubat, Ibadah Berkat",
        category: "package",  // Mengekalkan kategori package supaya dikesan oleh enjin JS
        program: "diabetes",  // Ditapis di bawah program Diabetes
        desc: "Koleksi infografik berkenaan maklumat asas yang perlu diketahui oleh pesakit Diabetes Mellitus atau kencing manis berkenaan ibadah puasa di bulan Ramadan.",
        // Gunakan ID Poster Siri 1 sebagai gambar hiasan kad utama di luar
        imageUrl: "https://drive.google.com/thumbnail?sz=w600&id=10jX9hA4kTlbUz63MP4WYvo_apNXoPTNQ",
        badgeText: "Album Infografik", // Label tersuai untuk membezakannya dengan pakej video/fail biasa
        badgeColorClass: "text-purple-600 bg-purple-50", 
        infoText: "6 Siri Infografik",
        materials: [
            {
                name: "Infografik 1: Tajuk",
                type: "🎨 Poster",
                url: "https://drive.google.com/file/d/10jX9hA4kTlbUz63MP4WYvo_apNXoPTNQ/preview",
                thumb: "https://drive.google.com/thumbnail?sz=w100&id=10jX9hA4kTlbUz63MP4WYvo_apNXoPTNQ"
            },
            {
                name: "Infografik 2: Sentiasa Pantau Bacaan Gula dalam Darah semasa Berpuasa",
                type: "🎨 Poster",
                url: "https://drive.google.com/file/d/1qniv3uY7L1O2VjymETh6QNqLSF0sFSqu/preview",
                thumb: "https://drive.google.com/thumbnail?sz=w100&id=1qniv3uY7L1O2VjymETh6QNqLSF0sFSqu"
            },
            {
                name: "Infografik 3: Panduan Pengambilan Ubat dan Insulin semasa Berpuasa",
                type: "🎨 Poster",
                url: "https://drive.google.com/file/d/1TUyk8skDGI1iVae-yfDE_LFcuQ4CHtgz/preview",
                thumb: "https://drive.google.com/thumbnail?sz=w100&id=1TUyk8skDGI1iVae-yfDE_LFcuQ4CHtgz"
            },
            {
                name: "Infografik 4: Bila Perlu Buka Puasa Serta-merta?",
                type: "🎨 Poster",
                url: "https://drive.google.com/file/d/1s2opkI2iozB21L2mkKHd7VjlxltlyRKb/preview",
                thumb: "https://drive.google.com/thumbnail?sz=w100&id=1s2opkI2iozB21L2mkKHd7VjlxltlyRKb"
            },
            {
                name: "Infografik 5: Tip Pengambilan Diet Sahur dan Iftar semasa Berpuasa",
                type: "🎨 Poster",
                url: "https://drive.google.com/file/d/1RNbO5hksenWp1lnRxiOiX9jatgJR_h0C/preview",
                thumb: "https://drive.google.com/thumbnail?sz=w100&id=1RNbO5hksenWp1lnRxiOiX9jatgJR_h0C"
            },
            {
                name: "Infografik 6: Kekal Hidrasi semasa Berpuasa",
                type: "🎨 Poster",
                url: "https://drive.google.com/file/d/1y0mOa3Kx164p3eU1KHROQxfItQF_zMCf/preview",
                thumb: "https://drive.google.com/thumbnail?sz=w100&id=1y0mOa3Kx164p3eU1KHROQxfItQF_zMCf"
            }
        ]
    },

    {
        title: "Siri Infografik Sambutan Hari Diabetes Sedunia 2024",
        category: "package",  // Mengekalkan kategori package supaya dikesan oleh enjin JS
        program: "diabetes",  // Ditapis di bawah program Diabetes
        desc: "Koleksi infografik berkenaan fakta dan statistik berkenaan Hari Diabetes Sedunia 2024.",
        imageUrl: "https://drive.google.com/thumbnail?sz=w600&id=1Gm06FvVVBsK0ysU06-IY9hekcXjxIDfG",
        badgeText: "Album Infografik", // Label tersuai untuk membezakannya dengan pakej video/fail biasa
        badgeColorClass: "text-purple-600 bg-purple-50", 
        infoText: "6 Siri Infografik",
        materials: [
            {
                name: "Infografik 1: Tajuk",
                type: "🎨 Poster",
                url: "https://drive.google.com/file/d/1Gm06FvVVBsK0ysU06-IY9hekcXjxIDfG/preview",
                thumb: "https://drive.google.com/thumbnail?sz=w100&id=1Gm06FvVVBsK0ysU06-IY9hekcXjxIDfG"
            },
            {
                name: "Infografik 2: Fakta Diabetes",
                type: "🎨 Poster",
                url: "https://drive.google.com/file/d/12Ha03XzbosRWyBww6OxAmVRJfQKEf263/preview",
                thumb: "https://drive.google.com/thumbnail?sz=w100&id=12Ha03XzbosRWyBww6OxAmVRJfQKEf263"
            },
            {
                name: "Infografik 3: Faktor Risiko Diabetes",
                type: "🎨 Poster",
                url: "https://drive.google.com/file/d/15jetGKOFpkij8LvmZgiJ9Beg-ENH3XnC/preview",
                thumb: "https://drive.google.com/thumbnail?sz=w100&id=15jetGKOFpkij8LvmZgiJ9Beg-ENH3XnC"
            },
            {
                name: "Infografik 4: Tanda dan Gejala Diabetes",
                type: "🎨 Poster",
                url: "https://drive.google.com/file/d/1txxAPF1a89_red6pMw2aGvzY3IeCGcE-/preview",
                thumb: "https://drive.google.com/thumbnail?sz=w100&id=1txxAPF1a89_red6pMw2aGvzY3IeCGcE-"
            },
            {
                name: "Infografik 5: Tip Pencegahan Diabetes",
                type: "🎨 Poster",
                url: "https://drive.google.com/file/d/1eBoe9ik1VdG4-pTuuAmARLLfhjOldc2S/preview",
                thumb: "https://drive.google.com/thumbnail?sz=w100&id=1eBoe9ik1VdG4-pTuuAmARLLfhjOldc2S"
            },
            {
                name: "Infografik 6: Tip Penjagaan Diabetes",
                type: "🎨 Poster",
                url: "https://drive.google.com/file/d/1ZjnSNVpa4Nb_YMc73SGUcObe_RYGRuOI/preview",
                thumb: "https://drive.google.com/thumbnail?sz=w100&id=1ZjnSNVpa4Nb_YMc73SGUcObe_RYGRuOI"
            }
        ]
    },

    {
        title: "Siri Infografik Sambutan Hari Diabetes Sedunia 2025",
        category: "package",  // Mengekalkan kategori package supaya dikesan oleh enjin JS
        program: "diabetes",  // Ditapis di bawah program Diabetes
        desc: "Koleksi infografik berkenaan fakta dan statistik berkenaan Hari Diabetes Sedunia 2025.",
        imageUrl: "https://drive.google.com/thumbnail?sz=w600&id=12DqTY_Uw36ueANPSKohgdzr-G8Q-c3wj",
        badgeText: "Album Infografik", // Label tersuai untuk membezakannya dengan pakej video/fail biasa
        badgeColorClass: "text-purple-600 bg-purple-50", 
        infoText: "5 Siri Infografik",
        materials: [
            {
                name: "Infografik 1: Tajuk",
                type: "🎨 Poster",
                url: "https://drive.google.com/file/d/12DqTY_Uw36ueANPSKohgdzr-G8Q-c3wj/preview",
                thumb: "https://drive.google.com/thumbnail?sz=w100&id=12DqTY_Uw36ueANPSKohgdzr-G8Q-c3wj"
            },
            {
                name: "Infografik 2: Negara Ke-5 Tertinggi Diabetes",
                type: "🎨 Poster",
                url: "https://drive.google.com/file/d/11bFjyVZr38jVnBrRqeUVSbU8BCR-_O9o/preview",
                thumb: "https://drive.google.com/thumbnail?sz=w100&id=11bFjyVZr38jVnBrRqeUVSbU8BCR-_O9o"
            },
            {
                name: "Infografik 3: Pengesanan Awal Diabetes",
                type: "🎨 Poster",
                url: "https://drive.google.com/file/d/1G63XzzK4AZek41N_IUBOW9Q5HInJvpXE/preview",
                thumb: "https://drive.google.com/thumbnail?sz=w100&id=1G63XzzK4AZek41N_IUBOW9Q5HInJvpXE"
            },
            {
                name: "Infografik 4: Komplikasi Diabetes",
                type: "🎨 Poster",
                url: "https://drive.google.com/file/d/1rtHdIs_Dr0hpoDNCGY-nE9qQvMwCUvP-/preview",
                thumb: "https://drive.google.com/thumbnail?sz=w100&id=1rtHdIs_Dr0hpoDNCGY-nE9qQvMwCUvP-"
            },
            {
                name: "Infografik 5: 4 Strategi Lawan Diabetes",
                type: "🎨 Poster",
                url: "https://drive.google.com/file/d/1qoHzDsBiXu9OF1xy5n2maLB-9xmfWSv2/preview",
                thumb: "https://drive.google.com/thumbnail?sz=w100&id=1qoHzDsBiXu9OF1xy5n2maLB-9xmfWSv2"
            }
        ]
    },
    {
        title: "Siri Infografik Kawalan Kolesterol",
        category: "package",  // Mengekalkan kategori package supaya dikesan oleh enjin JS
        program: "hpl",  // Ditapis di bawah program Diabetes
        desc: "Koleksi infografik berkenaan fakta dan statistik berkenaan kawalan kolesterol atau dislipidemia.",
        imageUrl: "https://drive.google.com/thumbnail?sz=w600&id=1Ms8VGda-wgEO_88lq3hTyxKN2__XnVfq",
        badgeText: "Album Infografik", // Label tersuai untuk membezakannya dengan pakej video/fail biasa
        badgeColorClass: "text-purple-600 bg-purple-50", 
        infoText: "4 Siri Infografik",
        materials: [
            {
                name: "Infografik 1: Apa Itu Lemak dalam Darah?",
                type: "🎨 Poster",
                url: "https://drive.google.com/file/d/1Ms8VGda-wgEO_88lq3hTyxKN2__XnVfq/preview",
                thumb: "https://drive.google.com/thumbnail?sz=w100&id=1Ms8VGda-wgEO_88lq3hTyxKN2__XnVfq"
            },
            {
                name: "Infografik 2: Bertindak Sekarang: Gaya Hidup dan Rawatan",
                type: "🎨 Poster",
                url: "https://drive.google.com/file/d/190w7TQC5QGgMODXqY0BcYejEI0YBWvwU/preview",
                thumb: "https://drive.google.com/thumbnail?sz=w100&id=190w7TQC5QGgMODXqY0BcYejEI0YBWvwU"
            },
            {
                name: "Infografik 3: Kawal Lemak, Lindungi Jantung",
                type: "🎨 Poster",
                url: "https://drive.google.com/file/d/1kcrDbxu2pDsSgQ3mFgMHTp05Nt-_94Uf/preview",
                thumb: "https://drive.google.com/thumbnail?sz=w100&id=1kcrDbxu2pDsSgQ3mFgMHTp05Nt-_94Uf"
            },
            {
                name: "Infografik 5: Trigliserida: Simpanan Tenaga atau Ancaman?",
                type: "🎨 Poster",
                url: "https://drive.google.com/file/d/1IphDdsKtWm7MqdAYjFTQXfS_x7Ds66i8/preview",
                thumb: "https://drive.google.com/thumbnail?sz=w100&id=1IphDdsKtWm7MqdAYjFTQXfS_x7Ds66i8"
            }
        ]
    },
];

// Memastikan objek data berjaya dieksport ke memori global pelayar web
window.resourcesData = resourcesData;