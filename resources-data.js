// resources-data.js
// FAIL PANGKALAN DATA BERPUSAT (VERSI TAJUK BERSIH TANPA NOMBOR)

const resourcesData = [
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
            { name: "CPG Diabetes (Edisi 6)", url: "documents/cpg-diabetes.pdf", type: "PDF", thumb: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=80&q=80" },
            { name: "CPG Hypertension (Edisi 5)", url: "documents/cpg-hypertension.pdf", type: "PDF", thumb: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=80&q=80" }
        ],
        actionText: "Buka Pakej ➔"
    },
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
            { name: "Poster Gula.webp", url: "play-image.html?id=2", type: "Imej", thumb: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=80&q=80" }
        ],
        actionText: "Buka Pakej ➔"
    },
    {
        category: "cpg",
        badgeText: "Bahan Kursus / CPG",
        badgeColorClass: "text-sky-600 bg-sky-50",
        title: "CPG Management of Ischemic Heart Disease",
        desc: "Bahan rujukan klinikal rawatan komprehensif bagi pesakit jantung iskemia kronik untuk pengurusan kes di hospital & klinik.",
        infoText: "Format: PDF (5.1 MB)",
        imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=600&q=80",
        pdfUrl: "#",
        actionText: "Muat Turun ↓"
    },
    {
        category: "infografik",
        badgeText: "Infografik Kesedaran",
        badgeColorClass: "text-emerald-600 bg-emerald-50",
        title: "Bahaya Garam Berlebihan Dalam Diet",
        desc: "Panduan visual grafik interaktif mengenai implikasi pengambilan natrium tinggi terhadap tekanan darah dan kesihatan buah pinggang.",
        infoText: "Format: Lihat Gambar",
        imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
        imgUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
        actionText: "Papar Poster ↗"
    },
    {
        category: "video",
        badgeText: "Video Promosi",
        badgeColorClass: "text-rose-600 bg-rose-50",
        title: "Kepentingan Saringan Kesihatan Berkala",
        desc: "Pesanan khidmat masyarakat digital mengenai pengesanan awal faktor risiko NCD melalui pemeriksaan kesihatan tahunan.",
        infoText: "Durasi: 02:45 Minit",
        imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80",
        videoUrl: "video-01.mp4",
        actionText: "Tonton Video ➔"
    },
    {
        category: "cpg",
        badgeText: "Bahan Kursus / CPG",
        badgeColorClass: "text-sky-600 bg-sky-50",
        title: "CPG Management of Chronic Kidney Disease",
        desc: "Garis panduan amalan klinikal bagi pencegahan, diagnosis awal, dan rawatan melambatkan perkembangan penyakit buah pinggang kronik.",
        infoText: "Format: PDF (4.5 MB)",
        imageUrl: "https://images.unsplash.com/photo-1584515903407-1c10470c8969?auto=format&fit=crop&w=600&q=80",
        pdfUrl: "#",
        actionText: "Muat Turun ↓"
    },
    {
        category: "infografik",
        badgeText: "Infografik Kesedaran",
        badgeColorClass: "text-emerald-600 bg-emerald-50",
        title: "Hidup Aktif: 10,000 Langkah Sehari",
        desc: "Poster tips dan strategi santai meningkatkan aktiviti fizikal harian di rumah atau tempat kerja demi jantung yang sihat.",
        infoText: "Format: Lihat Gambar",
        imageUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=600&q=80",
        imgUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1200&q=80",
        actionText: "Papar Poster ↗"
    },
    {
        category: "video",
        badgeText: "Video Promosi",
        badgeColorClass: "text-rose-600 bg-rose-50",
        title: "Mitos vs Fakta Mengenai Insulin",
        desc: "Video penjelasan interaktif bersama pakar perubatan bagi merubuhkan tanggapan salah masyarakat mengenai terapi insulin diabetes.",
        infoText: "Durasi: 04:20 Minit",
        imageUrl: "https://images.unsplash.com/photo-1584036561566-baf241830990?auto=format&fit=crop&w=600&q=80",
        videoUrl: "video-02.mp4",
        actionText: "Tonton Video ➔"
    },
    {
        category: "cpg",
        badgeText: "Bahan Kursus / CPG",
        badgeColorClass: "text-sky-600 bg-sky-50",
        title: "Panduan Kaunseling Pemakanan Saringan NCD",
        desc: "Slaid modul latihan interaktif bagi kegunaan anggota paramedik semasa mengendalikan sesi pendidikan kesihatan diet.",
        infoText: "Format: PDF (2.9 MB)",
        imageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80",
        pdfUrl: "#",
        actionText: "Muat Turun ↓"
    },
    {
        category: "infografik",
        badgeText: "Infografik Kesedaran",
        badgeColorClass: "text-emerald-600 bg-emerald-50",
        title: "Kenali Indeks Jisim Tubuh (BMI) Anda",
        desc: "Grafik formula ringkas pengiraan status berat badan serta klasifikasi tahap risiko penyakit kardiovaskular terkait.",
        infoText: "Format: Lihat Gambar",
        imageUrl: "https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?auto=format&fit=crop&w=600&q=80",
        imgUrl: "https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?auto=format&fit=crop&w=1200&q=80",
        actionText: "Papar Poster ↗"
    },
    {
        category: "video",
        badgeText: "Video Promosi",
        badgeColorClass: "text-rose-600 bg-rose-50",
        title: "Bahaya Merokok & Hubungannya Dengan NCD",
        desc: "Video kempen impak pendedahan asap rokok dan vape terhadap peningkatan mendadak risiko serangan jantung serta kanser.",
        infoText: "Durasi: 03:50 Minit",
        imageUrl: "https://images.unsplash.com/photo-1527137341206-e7de0080313c?auto=format&fit=crop&w=600&q=80",
        videoUrl: "video-01.mp4",
        actionText: "Tonton Video ➔"
    },
    {
        category: "cpg",
        badgeText: "Koleksi Kapsul",
        badgeColorClass: "text-purple-600 bg-purple-50",
        title: "Kompilasi Slaid Kursus NCD JKN Perlis 2026",
        desc: "Akses arkib luaran bagi memuat turun himpunan nota ceramah, slaid presentation pembentang, dan kertas kerja siri seminar.",
        infoText: "Mengandungi 4 Bahan",
        imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
        isPackage: true,
        materials: [
            { name: "Slaid Pengenalan Epidemiologi NCD.pdf", url: "#", type: "PDF", thumb: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=80&q=80" }
        ],
        actionText: "Buka Pakej ➔"
    }
];