// resources-data.js
// FAIL PANGKALAN DATA BERPUSAT (VERSI SEMUA KAD BERGAMBAR)

const resourcesData = [
    // =========================================================================
    // KATEGORI 1: BAHAN KURSUS & CPG (SEKARANG ADA GAMBAR)
    // =========================================================================
    {
        category: "cpg",
        badgeText: "Bahan Kursus / CPG",
        badgeColorClass: "text-sky-600 bg-sky-50",
        title: "Management of Type 2 Diabetes Mellitus (CPG)",
        desc: "Garis panduan rasmi kementerian edisi ke-6 untuk rujukan rawatan dan pengurusan pesakit Diabetes di klinik kesihatan.",
        infoText: "Format: PDF (4.2 MB)",
        imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80", // Gambar cover baru
        actionUrl: "documents/cpg-diabetes.pdf",
        actionText: "Muat Turun ↓",
        isDownload: true
    },
    {
        category: "cpg",
        badgeText: "Bahan Kursus / CPG",
        badgeColorClass: "text-sky-600 bg-sky-50",
        title: "Clinical Practice Guidelines: Management of Hypertension",
        desc: "Edisi terkini bagi pengurusan, diagnosis, and strategi rawatan farmakologi untuk pesakit tekanan darah tinggi (Hipertensi).",
        infoText: "Format: PDF (3.8 MB)",
        imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=600&q=80", // Gambar cover baru
        actionUrl: "documents/cpg-hypertension.pdf",
        actionText: "Muat Turun ↓",
        isDownload: true
    },

    // =========================================================================
    // KATEGORI 2: INFOGRAFIK KESIHATAN
    // =========================================================================
    {
        category: "infografik",
        badgeText: "Infografik Kesedaran",
        badgeColorClass: "text-emerald-600 bg-emerald-50",
        title: "Kandungan Gula Tersembunyi Dalam Minuman",
        desc: "Poster kesedaran visual tentang jumlah sudu gula di dalam minuman kegemaran rakyat Malaysia untuk kempen kesedaran komuniti.",
        infoText: "Format: Lihat Gambar",
        imageUrl: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=600&q=80",
        actionUrl: "play-image.html?img=info-gula.webp&title=Kandungan%20Gula%20Tersembunyi%20Dalam%20Minuman&desc=Poster%20kesedaran%20visual%20tentang%20jumlah%20sudu%20gula%20di%20dalam%20minuman%20kegemaran%20rakyat%20Malaysia%20untuk%20kempen%20kesedaran%20komuniti.",
        actionText: "Papar Poster ↗",
        isExternalImage: true
    },
    {
        category: "infografik",
        badgeText: "Infografik Kesedaran",
        badgeColorClass: "text-emerald-600 bg-emerald-50",
        title: "Tanda-Tanda Awal Serangan Strok",
        desc: "Infografik interaktif bagi mengenal pasti gejala strok dengan pantas menggunakan kaedah F.A.S.T untuk orang awam.",
        infoText: "Format: Lihat Gambar",
        imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
        actionUrl: "play-image.html?img=info-strok.webp&title=Tanda-Tanda%20Awal%20Serangan%20Strok&desc=Infografik%20interaktif%20bagi%20mengenal%20pasti%20gejala%20strok%20dengan%20pantas%20menggunakan%20kaedah%20F.A.S.T%20untuk%20orang%20awam.",
        actionText: "Papar Poster ↗",
        isExternalImage: true
    },

    // =========================================================================
    // KATEGORI 3: GALERI VIDEO
    // =========================================================================
    {
        category: "video",
        badgeText: "Video Promosi",
        badgeColorClass: "text-rose-600 bg-rose-50",
        title: "Teknik Senaman Ringkas di Pejabat",
        desc: "Panduan video 3 minit regangan ringan bagi mencegah sindrom sedentari di kalangan kakitangan tempat kerja.",
        infoText: "Durasi: 03:15 Minit",
        imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
        actionUrl: "play-video.html?v=video-01&title=Teknik%20Senaman%20Ringkas%20di%20Pejabat&desc=Panduan%20video%203%20minit%20regangan%20ringan%20bagi%20mencegah%20sindrom%20sedentari%20di%20kalangan%20kakitangan%20tempat%20kerja.",
        actionText: "Tonton Video ➔",
        isExternalVideo: true
    },
    {
        category: "video",
        badgeText: "Video Promosi",
        badgeColorClass: "text-rose-600 bg-rose-50",
        title: "Gaya Hidup Suku Suku Separuh Perlis",
        desc: "Video kempen cara penyediaan hidangan sihat harian mengikut saranan Bahagian Pemakanan Kementerian Kesihatan Malaysia.",
        infoText: "Durasi: 05:40 Minit",
        imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
        actionUrl: "play-video.html?v=video-02&title=Gaya%20Hidup%20Suku%20Suku%20Separuh%20Perlis&desc=Video%20kempen%20cara%20 penyediaan%20hidangan%20sihat%20harian%20mengikut%20saranan%20Bahagian%20Pemakanan%20Kementerian%20Kesihatan%20Malaysia.",
        actionText: "Tonton Video ➔",
        isExternalVideo: true
    },

    // =========================================================================
    // KATEGORI 4: KAD KUMPULAN / MULTI-MATERIALS (SEKARANG ADA GAMBAR)
    // =========================================================================
    {
        category: "cpg",
        badgeText: "Koleksi Kapsul",
        badgeColorClass: "text-purple-600 bg-purple-50",
        title: "Arsip Semua Dokumen CPG NCD Perlis",
        desc: "Klik untuk melihat senarai penuh dan memuat turun kompilasi dokumen Clinical Practice Guidelines (CPG) rasmi.",
        infoText: "Mengandungi 3 Dokumen",
        imageUrl: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=600&q=80", // Gambar cover baru
        isPackage: true,
        actionUrl: "play-package.html?title=Arsip%20Semua%20Dokumen%20CPG%20NCD%20Perlis&desc=Kompilasi%20dokumen%20Clinical%20Practice%20Guidelines%20(CPG)%20rasmi%20Unit%20NCD%20Perlis.&materials=" + encodeURIComponent(JSON.stringify([
            { name: "CPG Diabetes Mellitus Type 2 (Edisi 6)", url: "documents/cpg-diabetes.pdf", type: "PDF", thumb: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=80&q=80" },
            { name: "CPG Management of Hypertension (Edisi 5)", url: "documents/cpg-hypertension.pdf", type: "PDF", thumb: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=80&q=80" },
            { name: "CPG Management of Ischemic Heart Disease", url: "#", type: "PDF", thumb: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=80&q=80" }
        ])),
        actionText: "Buka Pakej ➔"
    },
    {
        category: "infografik",
        badgeText: "Koleksi Kapsul",
        badgeColorClass: "text-purple-600 bg-purple-50",
        title: "Kit Promosi Sihat: Kempen Anti-Obesiti",
        desc: "Klik untuk akses folder kompilasi infografik, brosur digital, dan risalah pemakanan sihat JKN Perlis.",
        infoText: "Mengandungi 2 Bahan",
        imageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80", // Gambar cover baru
        isPackage: true,
        actionUrl: "play-package.html?title=Kit%20Promosi%20Sihat%3A%20Kempen%20Anti-Obesiti&desc=Koleksi%20infografik%2C%20brosur%20digital%2C%20dan%20risalah%20pemakanan%20sihat%20JKN%20Perlis.&materials=" + encodeURIComponent(JSON.stringify([
            { name: "Poster Suku Suku Separuh Perlis.webp", url: "play-image.html?img=info-gula.webp", type: "Imej", thumb: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=80&q=80" },
            { name: "Brosur Panduan Kalori Makanan Khas.pdf", url: "#", type: "PDF", thumb: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=80&q=80" }
        ])),
        actionText: "Buka Pakej ➔"
    },
    {
        category: "cpg",
        badgeText: "Bahan Kursus/Bengkel/Seminar",
        badgeColorClass: "text-blue-600 bg-blue-50",
        title: "Clinical Practice Guidelines (CPG) Hipertensi",
        desc: "Klik untuk melihat senarai penuh dan memuat turun kompilasi dokumen.",
        infoText: "Mengandungi berapa ya? Dokumen",
        imageUrl: "images/card-info/card-info-hpt.png", // Gambar cover baru
        isPackage: true,
        actionUrl: "play-package.html?title=Clinical%20Practice%20Guidelines%20(CPG)%20Hipertensi&desc=Klik%20untuk%20melihat%20senarai%20penuh%20dan%20memuat%20turun%20kompilasi%20dokumen.&materials=" + encodeURIComponent(JSON.stringify([
            { name: "CPG Diabetes Mellitus Type 2 (Edisi 6)", url: "documents/cpg-diabetes.pdf", type: "PDF", thumb: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=80&q=80" },
            { name: "CPG Management of Hypertension (Edisi 5)", url: "documents/cpg-hypertension.pdf", type: "PDF", thumb: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=80&q=80" },
            { name: "CPG Management of Ischemic Heart Disease", url: "#", type: "PDF", thumb: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=80&q=80" }
        ])),
        actionText: "Buka Pakej ➔"
    }
];