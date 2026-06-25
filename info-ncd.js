// info-ncd.js
// 📜 ENJIN PUSAT SUMBER NCD: AUTO-MAPPING SEMUA KATEGORI SPREADSHEET, LIVE SEARCH & PAGINATION

// Pembolehubah Global (Menyimpan Status Keadaan Aplikasi)
let currentCategory = 'all';
let currentProgram = 'all';
let sortMethod = 'default';
let currentPage = 1;
const itemsPerPage = 12; 
let filteredList = [];

// Dipicu secara automatik sebaik sahaja paparan fail selesai dimuatkan oleh pelayar
window.onload = () => {
    applyFilterAndRender();
};

// 1. ENJIN LOGIK PENAPISAN BERKEMBAR (FILTERING ENGINE)
function applyFilterAndRender() {
    const searchInput = document.getElementById("searchInput");
    const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : "";

    // LANGKAH A: Menapis Data Mengikut Kategori, Program & Kata Kunci Carian Teks
    filteredList = resourcesData.filter(item => {
        
        // AUTO-MAPPING: Menukarkan apa sahaja kategori dari resources-data.js kepada 3 kumpulan dropdown utama
        let mappedCategory = 'all';
        let itemCat = item.category ? item.category.toLowerCase().trim() : '';

        // GANTIKAN KEPADA BLOK KOD INI:
        if (itemCat === 'infografik' || itemCat === 'logo') {
            mappedCategory = 'image_info'; 
        } else if (itemCat === 'video') {
            mappedCategory = 'video';      
        } else if (itemCat === 'latihan' || itemCat === 'modul_latihan') {
            // 📚 TAMBAHAN BARU: Memetakan kategori data latihan terus ke pilihan dropdown
            mappedCategory = 'latihan';   
        } else {
            mappedCategory = 'document';   
        }

        const matchesCategory = (currentCategory === 'all' || mappedCategory === currentCategory);
        const matchesProgram = (currentProgram === 'all' || item.program === currentProgram);
        
        const matchTitle = item.title ? item.title.toLowerCase().includes(searchQuery) : false;
        const matchDesc = item.desc ? item.desc.toLowerCase().includes(searchQuery) : false;
        const matchesSearch = (matchTitle || matchDesc);

        return matchesCategory && matchesProgram && matchesSearch;
    });

    // LANGKAH B: Menjalankan Sistem Isihan (Sorting A-Z / Z-A)
    if (sortMethod === "az") {
        filteredList.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
    } else if (sortMethod === "za") {
        filteredList.sort((a, b) => (b.title || '').localeCompare(a.title || ''));
    }

    // LANGKAH C: Mengemas Kini Angka Pada Kaunter Bilangan Bahan
    const countDisplay = document.getElementById("materialCount");
    if (countDisplay) {
        countDisplay.innerHTML = `Menampilkan: <span class="text-[#101e33] font-extrabold">${filteredList.length}</span> bahan`;
    }

    // Suntik data ke paparan grid dan bina kawalan muka surat semula
    renderGrid();
    renderPaginationControls();
}

// 2. PENGENDALI EVENT DROPDOWN (DROPDOWN EVENT LISTENERS)
function handleCategoryChange() {
    const categorySelect = document.getElementById("categorySelect");
    if (categorySelect) {
        currentCategory = categorySelect.value;
        currentPage = 1;
        applyFilterAndRender();
    }
}

// Dipanggil apabila pengguna menukar Dropdown Program
function handleProgramChange() {
    const programSelect = document.getElementById("programSelect");
    if (programSelect) {
        currentProgram = programSelect.value;
        currentPage = 1;
        applyFilterAndRender();
    }
}

// Dipanggil apabila pengguna menukar Dropdown Isihan
function handleSortChange() {
    const sortSelect = document.getElementById("sortSelect");
    if (sortSelect) {
        sortMethod = sortSelect.value;
        currentPage = 1;
        applyFilterAndRender();
    }
}

// Dipanggil apabila ada huruf ditaip pada kotak carian
function handleSearch() {
    currentPage = 1;
    applyFilterAndRender();
}

// 3. ENJIN SUNTIKAN REKA BENTUK KAD GRID (GRID RENDERING ENGINE) - DIKEMASKINI UNTUK MOBILE COMPACT
function renderGrid() {
    const grid = document.getElementById("resourceGrid");
    if(!grid) return;
    grid.innerHTML = "";
    
    // Kekal sistem grid 1 kolum di mobile dan md:grid-cols-6 di desktop view
    grid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4";

    // Kira lingkungan indeks pagination muka surat
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToRender = filteredList.slice(startIndex, endIndex);

    // Keadaan jika tiada data langsung yang sepadan dengan kriteria tapis
    if(itemsToRender.length === 0) {
        grid.innerHTML = `
            <div class='col-span-full text-center py-16 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm w-full'>
                <span class='text-2xl inline-block mb-2'>📂</span>
                <p class='text-xs font-bold text-gray-700'>Tiada bahan ditemui</p>
                <p class='text-[11px] text-gray-400 font-light mt-0.5'>Cuba semak padanan kategori atau program penyakit yang lain.</p>
            </div>`;
        return;
    }

    // Memulakan kitaran suntikan HTML kad mengikut klasifikasi jenis bahan
    itemsToRender.forEach(item => {
        let cardHtml = "";
        const defaultImg = "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80";
        const finalImgUrl = item.imageUrl || defaultImg;
        const originalIndex = resourcesData.indexOf(item);
        let itemCat = item.category ? item.category.toLowerCase().trim() : '';

        // --------------------------------------------------
        // KEADAAN A: JIKALAU BAHAN ADALAH JENIS PAKEJ / ALBUM BERSIRI
        // --------------------------------------------------
        if (itemCat === 'package' || itemCat === 'pakej') {
            // BIJAK: Kenali sama ada ia adalah Album Imej Bersiri atau Pakej Campuran
            // Jika badgeText mengandungi perkataan 'Siri' atau 'Album', hantar ke play-album.html
            const isAlbum = item.badgeText && (item.badgeText.includes("Siri") || item.badgeText.includes("Album"));
            const targetPlayPage = isAlbum ? "play-album.html" : "play-package.html";
            const btnText = isAlbum ? "Buka Album" : "Buka Pakej";

            cardHtml = `
                <div class="bg-white border border-purple-100 rounded-xl shadow-sm md:hover:shadow-md md:hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-row md:flex-col justify-between h-28 md:h-72">
                    <div class="w-28 md:w-full h-full md:h-28 overflow-hidden bg-purple-50/50 relative flex-shrink-0 flex items-center justify-center">
                        <img src="${finalImgUrl}" alt="${item.title}" loading="lazy" referrerpolicy="no-referrer" class="w-full h-full object-cover">
                        <span class="absolute top-2 left-2 text-[8px] font-bold ${item.badgeColorClass || 'text-purple-600 bg-purple-50'} px-2 py-0.5 rounded uppercase tracking-wider z-10">${item.badgeText || 'Pakej Kapsul'}</span>
                    </div>
                    <div class="p-2.5 md:p-3 flex-1 flex flex-col justify-between min-w-0">
                        <div class="space-y-0.5">
                            <h3 class="text-xs font-bold text-[#101e33] leading-tight line-clamp-2" title="${item.title}">${item.title}</h3>
                            <p class="hidden md:block text-[11px] text-gray-500 font-light mt-1 line-clamp-2">${item.desc || ''}</p>
                        </div>
                        <div class="pt-1.5 md:pt-2 border-t border-purple-50 flex justify-between items-center flex-shrink-0 mt-1">
                            <span class="text-[9px] md:text-[10px] text-purple-400 font-medium">${item.infoText || 'Koleksi Berangkai'}</span>
                            <a href="${targetPlayPage}?id=${originalIndex}" class="py-1 px-2 md:px-2.5 bg-purple-600 text-white text-[9px] md:text-[10px] font-bold rounded hover:bg-purple-700 transition-colors active:scale-95 shadow-sm whitespace-nowrap">
                                ${btnText}
                            </a>
                        </div>
                    </div>
                </div>`;
        }
        else if (itemCat === 'video') {
            cardHtml = `
                <!-- DIUBAH: h-28 di mobile (flex-row) & md:h-72 di desktop (flex-col) -->
                <div class="bg-white border border-gray-100 rounded-xl shadow-sm md:hover:shadow-md md:hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-row md:flex-col justify-between h-28 md:h-72">
                    <!-- Image Container: Lebar tetap w-28 di mobile, automatik penuh di desktop -->
                    <div class="w-28 md:w-full h-full md:h-28 overflow-hidden bg-gray-100 relative flex-shrink-0">
                        <img src="${finalImgUrl}" alt="${item.title}" loading="lazy" referrerpolicy="no-referrer" class="w-full h-full object-cover">
                        <span class="absolute top-2 left-2 text-[8px] font-bold ${item.badgeColorClass || 'text-rose-600 bg-rose-50'} px-2 py-0.5 rounded uppercase tracking-wider z-10">${item.badgeText || 'Video'}</span>
                        <div class="absolute inset-0 bg-black/10 flex items-center justify-center">
                            <span class="w-6 h-6 md:w-8 md:h-8 bg-white/90 backdrop-blur-sm text-[#101e33] rounded-full flex items-center justify-center font-bold text-[10px] md:text-xs shadow-md pl-0.5">▶</span>
                        </div>
                    </div>
                    <!-- Text Content Container -->
                    <div class="p-2.5 md:p-3 flex-1 flex flex-col justify-between min-w-0">
                        <div class="space-y-0.5">
                            <h3 class="text-xs font-bold text-[#101e33] leading-tight line-clamp-2" title="${item.title}">${item.title}</h3>
                            <!-- Deskripsi: hidden di mobile, dipaparkan semula (md:block) di desktop -->
                            <p class="hidden md:block text-[11px] text-gray-500 font-light mt-1 line-clamp-2">${item.desc || ''}</p>
                        </div>
                        <div class="pt-1.5 md:pt-2 border-t border-gray-50 flex justify-between items-center flex-shrink-0 mt-1">
                            <span class="text-[9px] md:text-[10px] text-gray-400 font-medium">${item.infoText || 'Format: MP4'}</span>
                            <a href="play-video.html?id=${originalIndex}" class="py-1 px-2 md:px-2.5 bg-rose-600 text-white text-[9px] md:text-[10px] font-bold rounded hover:bg-rose-700 transition-colors active:scale-95 shadow-sm whitespace-nowrap">
                                Tonton Video
                            </a>
                        </div>
                    </div>
                </div>`;
        } else if (itemCat === 'infografik' || itemCat === 'logo') {
            const currentButtonBg = itemCat === 'logo' ? 'bg-amber-500 hover:bg-amber-600' : 'bg-emerald-600 hover:bg-emerald-700';
            cardHtml = `
                <!-- DIUBAH: h-28 di mobile (flex-row) & md:h-72 di desktop (flex-col) -->
                <div class="bg-white border border-gray-100 rounded-xl shadow-sm md:hover:shadow-md md:hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-row md:flex-col justify-between h-28 md:h-72">
                    <!-- Image Container: Lebar tetap w-28 di mobile, automatik penuh di desktop -->
                    <div class="w-28 md:w-full h-full md:h-28 overflow-hidden bg-gray-50 relative flex-shrink-0 ${itemCat === 'logo' ? 'p-3 md:p-4 flex items-center justify-center' : ''}">
                        <img src="${finalImgUrl}" alt="${item.title}" loading="lazy" referrerpolicy="no-referrer" class="${itemCat === 'logo' ? 'max-w-full max-h-full object-contain' : 'w-full h-full object-cover'}">
                        <span class="absolute top-2 left-2 text-[8px] font-bold ${item.badgeColorClass || 'text-emerald-600 bg-emerald-50'} px-2 py-0.5 rounded uppercase tracking-wider z-10">${item.badgeText || 'Imej'}</span>
                    </div>
                    <!-- Text Content Container -->
                    <div class="p-2.5 md:p-3 flex-1 flex flex-col justify-between min-w-0">
                        <div class="space-y-0.5">
                            <h3 class="text-xs font-bold text-[#101e33] leading-tight line-clamp-2" title="${item.title}">${item.title}</h3>
                            <!-- Deskripsi: hidden di mobile, dipaparkan semula (md:block) di desktop -->
                            <p class="hidden md:block text-[11px] text-gray-500 font-light mt-1 line-clamp-2">${item.desc || ''}</p>
                        </div>
                        <div class="pt-1.5 md:pt-2 border-t border-gray-50 flex justify-between items-center flex-shrink-0 mt-1">
                            <span class="text-[9px] md:text-[10px] text-gray-400 font-medium">${item.infoText || 'Format: PNG/JPG'}</span>
                            <a href="play-image.html?id=${originalIndex}" class="py-1 px-2 md:px-2.5 text-white text-[9px] md:text-[10px] font-bold rounded transition-colors active:scale-95 shadow-sm whitespace-nowrap ${currentButtonBg}">
                                ${itemCat === 'logo' ? 'Papar Logo' : 'Papar Poster'}
                            </a>
                        </div>
                    </div>
                </div>`;
        } else if (itemCat === 'modul_latihan' || itemCat === 'latihan'){
            cardHtml = `
                <!-- DIUBAH: h-28 di mobile (flex-row) & md:h-72 di desktop (flex-col) -->
                <div class="bg-white border border-gray-100 rounded-xl shadow-sm md:hover:shadow-md md:hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-row md:flex-col justify-between h-28 md:h-72">
                    <!-- Image Container: Lebar tetap w-28 di mobile, automatik penuh di desktop -->
                    <div class="w-28 md:w-full h-full md:h-28 overflow-hidden bg-gray-150 relative flex-shrink-0">
                        <img src="${finalImgUrl}" alt="${item.title}" loading="lazy" referrerpolicy="no-referrer" class="w-full h-full object-cover">
                        <span class="absolute top-2 left-2 text-[8px] font-bold ${item.badgeColorClass || 'text-sky-600 bg-sky-50'} px-2 py-0.5 rounded uppercase tracking-wider z-10">${item.badgeText || 'Dokumen'}</span>
                    </div>
                    <!-- Text Content Container -->
                    <div class="p-2.5 md:p-3 flex-1 flex flex-col justify-between min-w-0">
                        <div class="space-y-0.5">
                            <h3 class="text-xs font-bold text-[#101e33] leading-tight line-clamp-2" title="${item.title}">${item.title}</h3>
                            <!-- Deskripsi: hidden di mobile, dipaparkan semula (md:block) di desktop -->
                            <p class="hidden md:block text-[11px] text-gray-500 font-light mt-1 line-clamp-2">${item.desc || ''}</p>
                        </div>
                        <div class="pt-1.5 md:pt-2 border-t border-gray-50 flex justify-between items-center flex-shrink-0 mt-1">
                            <span class="text-[9px] md:text-[10px] text-gray-400 font-medium">${item.infoText || 'Format: PDF'}</span>
                            <a href="play-image.html?id=${originalIndex}" class="py-1 px-2 md:px-2.5 bg-[#101e33] text-white text-[9px] md:text-[10px] font-bold rounded hover:bg-[#1d3557] transition-colors active:scale-95 shadow-sm whitespace-nowrap">
                                Buka Fail
                            </a>
                        </div>
                    </div>
                </div>`;
        } else {
            cardHtml = `
                <!-- DIUBAH: h-28 di mobile (flex-row) & md:h-72 di desktop (flex-col) -->
                <div class="bg-white border border-gray-100 rounded-xl shadow-sm md:hover:shadow-md md:hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-row md:flex-col justify-between h-28 md:h-72">
                    <!-- Image Container: Lebar tetap w-28 di mobile, automatik penuh di desktop -->
                    <div class="w-28 md:w-full h-full md:h-28 overflow-hidden bg-gray-150 relative flex-shrink-0">
                        <img src="${finalImgUrl}" alt="${item.title}" loading="lazy" referrerpolicy="no-referrer" class="w-full h-full object-cover">
                        <span class="absolute top-2 left-2 text-[8px] font-bold ${item.badgeColorClass || 'text-sky-600 bg-sky-50'} px-2 py-0.5 rounded uppercase tracking-wider z-10">${item.badgeText || 'Dokumen'}</span>
                    </div>
                    <!-- Text Content Container -->
                    <div class="p-2.5 md:p-3 flex-1 flex flex-col justify-between min-w-0">
                        <div class="space-y-0.5">
                            <h3 class="text-xs font-bold text-[#101e33] leading-tight line-clamp-2" title="${item.title}">${item.title}</h3>
                            <!-- Deskripsi: hidden di mobile, dipaparkan semula (md:block) di desktop -->
                            <p class="hidden md:block text-[11px] text-gray-500 font-light mt-1 line-clamp-2">${item.desc || ''}</p>
                        </div>
                        <div class="pt-1.5 md:pt-2 border-t border-gray-50 flex justify-between items-center flex-shrink-0 mt-1">
                            <span class="text-[9px] md:text-[10px] text-gray-400 font-medium">${item.infoText || 'Format: PDF'}</span>
                            <a href="play-image.html?id=${originalIndex}" class="py-1 px-2 md:px-2.5 bg-[#101e33] text-white text-[9px] md:text-[10px] font-bold rounded hover:bg-[#1d3557] transition-colors active:scale-95 shadow-sm whitespace-nowrap">
                                Buka Fail
                            </a>
                        </div>
                    </div>
                </div>`;
        }
        grid.innerHTML += cardHtml;
    });
}

// 4. NAVIGASI MUKASURAT (PAGINATION CONTROLS)
function renderPaginationControls() {
    let pantiContainer = document.getElementById("paginationContainer");
    if (!pantiContainer) return;

    pantiContainer.className = "flex items-center justify-center space-x-2 mt-12 mb-8 py-6 w-full";
    pantiContainer.innerHTML = "";
    
    const totalPages = Math.ceil(filteredList.length / itemsPerPage);

    // Sembunyikan bahagian menu nombor jika data tidak melebihi saiz 1 muka surat
    if (totalPages <= 1) {
        pantiContainer.classList.add("hidden");
        return;
    } else {
        pantiContainer.classList.remove("hidden");
    }

    // Butang halaman Sebelumnya (Prev)
    const prevBtn = document.createElement("button");
    prevBtn.innerHTML = "← Prev";
    prevBtn.className = `px-4 py-2 rounded-xl text-xs font-bold border transition-all ${currentPage === 1 ? 'bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300 active:scale-95 shadow-sm'}`;
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => { if(currentPage > 1) { currentPage--; renderGrid(); renderPaginationControls(); window.scrollTo({top: 320, behavior: 'smooth'}); } };
    pantiContainer.appendChild(prevBtn);

    // Butang Angka Muka Surat (Saiz w-10 h-10 Selesa Dipicit)
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement("button");
        pageBtn.innerText = i;
        pageBtn.className = `w-10 h-10 rounded-xl text-xs font-bold border transition-all flex items-center justify-center ${currentPage === i ? 'bg-gray-50 border-gray-300 font-extrabold text-[#101e33] ring-1 ring-gray-300 shadow-inner' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300 active:scale-95 shadow-sm'}`;
        pageBtn.onclick = () => { currentPage = i; renderGrid(); renderPaginationControls(); window.scrollTo({top: 320, behavior: 'smooth'}); };
        pantiContainer.appendChild(pageBtn);
    }

    // Butang halaman Seterusnya (Next)
    const nextBtn = document.createElement("button");
    nextBtn.innerHTML = "Next →";
    nextBtn.className = `px-4 py-2 rounded-xl text-xs font-bold border transition-all ${currentPage === totalPages ? 'bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300 active:scale-95 shadow-sm'}`;
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => { if(currentPage < totalPages) { currentPage++; renderGrid(); renderPaginationControls(); window.scrollTo({top: 320, behavior: 'smooth'}); } };
    pantiContainer.appendChild(nextBtn);
}