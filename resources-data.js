// resources-data.js
const resourcesData = [
    // INDEX 0: CPG Diabetes
    {
        category: "cpg",
        badgeText: "Bahan Kursus / CPG",
        badgeColorClass: "text-sky-600 bg-sky-50",
        title: "Management of Type 2 Diabetes Mellitus (CPG)",
        desc: "Garis panduan rasmi kementerian edisi ke-6 untuk rujukan rawatan dan pengurusan pesakit Diabetes di klinik kesihatan.",
        infoText: "Format: PDF (4.2 MB)",
        imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
        pdfUrl: "documents/cpg-diabetes.pdf",
        actionText: "Muat Turun ↓",
        isDownload: true
    },
    // INDEX 1: CPG Hipertensi
    {
        category: "cpg",
        badgeText: "Bahan Kursus / CPG",
        badgeColorClass: "text-sky-600 bg-sky-50",
        title: "Clinical Practice Guidelines: Management of Hypertension",
        desc: "Edisi terkini bagi pengurusan, diagnosis, and strategi rawatan farmakologi untuk pesakit tekanan darah tinggi (Hipertensi).",
        infoText: "Format: PDF (3.8 MB)",
        imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=600&q=80",
        pdfUrl: "documents/cpg-hypertension.pdf",
        actionText: "Muat Turun ↓",
        isDownload: true
    },
    // INDEX 2: Infografik Gula
    {
        category: "infografik",
        badgeText: "Infografik Kesedaran",
        badgeColorClass: "text-emerald-600 bg-emerald-50",
        title: "Kandungan Gula Tersembunyi Dalam Minuman",
        desc: "Poster kesedaran visual tentang jumlah sudu gula di dalam minuman kegemaran rakyat Malaysia untuk kempen kesedaran komuniti.",
        infoText: "Format: Lihat Gambar",
        imageUrl: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=600&q=80",
        imgUrl: "info-gula.webp", 
        actionText: "Papar Poster ↗"
    },
    // INDEX 3: Infografik Strok
    {
        category: "infografik",
        badgeText: "Infografik Kesedaran",
        badgeColorClass: "text-emerald-600 bg-emerald-50",
        title: "Tanda-Tanda Awal Serangan Strok",
        desc: "Infografik interaktif bagi mengenal pasti gejala strok dengan pantas menggunakan kaedah F.A.S.T untuk orang awam.",
        infoText: "Format: Lihat Gambar",
        imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
        imgUrl: "info-strok.webp",
        actionText: "Papar Poster ↗"
    },
    // INDEX 4: Video Senaman
    {
        category: "video",
        badgeText: "Video Promosi",
        badgeColorClass: "text-rose-600 bg-rose-50",
        title: "Teknik Senaman Ringkas di Pejabat",
        desc: "Panduan video 3 minit regangan ringan bagi mencegah sindrom sedentari di kalangan kakitangan tempat kerja.",
        infoText: "Durasi: 03:15 Minit",
        imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
        videoUrl: "video-01.mp4", 
        actionText: "Tonton Video ➔"
    },
    // INDEX 5: Video Suku Suku Separuh
    {
        category: "video",
        badgeText: "Video Promosi",
        badgeColorClass: "text-rose-600 bg-rose-50",
        title: "Gaya Hidup Suku Suku Separuh Perlis",
        desc: "Video kempen cara penyediaan hidangan sihat harian mengikut saranan Bahagian Pemakanan Kementerian Kesihatan Malaysia.",
        infoText: "Durasi: 05:40 Minit",
        imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
        videoUrl: "video-02.mp4",
        actionText: "Tonton Video ➔"
    },
    // INDEX 6: Pakej Kapsul CPG
    {
        category: "cpg",
        badgeText: "Koleksi Kapsul",
        badgeColorClass: "text-purple-600 bg-purple-50",
        title: "Arsip Semua Dokumen CPG NCD Perlis",
        desc: "Klik untuk melihat senarai penuh dan memuat turun kompilasi dokumen Clinical Practice Guidelines (CPG) rasmi.",
        infoText: "Mengandungi 3 Dokumen",
        imageUrl: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=600&q=80",
        isPackage: true,
        materials: [
            { name: "CPG Diabetes Mellitus Type 2 (Edisi 6)", url: "documents/cpg-diabetes.pdf", type: "PDF", thumb: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=80&q=80" },
            { name: "CPG Management of Hypertension (Edisi 5)", url: "documents/cpg-hypertension.pdf", type: "PDF", thumb: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=80&q=80" },
            { name: "CPG Management of Ischemic Heart Disease", url: "#", type: "PDF", thumb: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=80&q=80" }
        ],
        actionText: "Buka Pakej ➔"
    },
    // INDEX 7: Pakej Kapsul Obesiti
    {
        category: "infografik",
        badgeText: "Koleksi Kapsul",
        badgeColorClass: "text-purple-600 bg-purple-50",
        title: "Kit Promosi Sihat: Kempen Anti-Obesiti",
        desc: "Klik untuk akses folder kompilasi infografik, brosur digital, dan risalah pemakanan sihat JKN Perlis.",
        infoText: "Mengandungi 2 Bahan",
        imageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80",
        isPackage: true,
        materials: [
            { name: "Poster Suku Suku Separuh Perlis.webp", url: "play-image.html?id=2", type: "Imej", thumb: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=80&q=80" },
            { name: "Brosur Panduan Kalori Makanan Khas.pdf", url: "#", type: "PDF", thumb: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=80&q=80" }
        ],
        actionText: "Buka Pakej ➔"
    }
];