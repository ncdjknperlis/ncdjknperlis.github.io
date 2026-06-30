// info-ncd.js
// 📜 ENJIN PUSAT SUMBER NCD: AUTO-MAPPING SEMUA KATEGORI SPREADSHEET, LIVE SEARCH & PAGINATION

let currentCategory = 'all';
let currentProgram = 'all';
let sortMethod = 'default';
let currentPage = 1;
const itemsPerPage = 12; 
let filteredList = [];

window.onload = () => {
    applyFilterAndRender();
};

function applyFilterAndRender() {
    const searchInput = document.getElementById("searchInput");
    const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : "";

    filteredList = resourcesData.filter(item => {
        let mappedCategory = 'all';
        let itemCat = item.category ? item.category.toLowerCase().trim() : '';

        if (itemCat === 'infografik' || itemCat === 'logo') {
            mappedCategory = 'image_info'; 
        } else if (itemCat === 'video') {
            mappedCategory = 'video';      
        } else if (itemCat === 'latihan' || itemCat === 'modul_latihan') {
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

    if (sortMethod === "az") {
        filteredList.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
    } else if (sortMethod === "za") {
        filteredList.sort((b, a) => (b.title || '').localeCompare(a.title || ''));
    }

    const countDisplay = document.getElementById("materialCount");
    if (countDisplay) {
        countDisplay.innerHTML = `Menampilkan: <span class="text-[#101e33] font-extrabold">${filteredList.length}</span> bahan`;
    }

    renderGrid();
    renderPaginationControls();
}

function handleCategoryChange() {
    const categorySelect = document.getElementById("categorySelect");
    if (categorySelect) {
        currentCategory = categorySelect.value;
        currentPage = 1;
        applyFilterAndRender();
    }
}

function handleProgramChange() {
    const programSelect = document.getElementById("programSelect");
    if (programSelect) {
        currentProgram = programSelect.value;
        currentPage = 1;
        applyFilterAndRender();
    }
}

function handleSortChange() {
    const sortSelect = document.getElementById("sortSelect");
    if (sortSelect) {
        sortMethod = sortSelect.value;
        currentPage = 1;
        applyFilterAndRender();
    }
}

function handleSearch() {
    currentPage = 1;
    applyFilterAndRender();
}

// 3. ENJIN GRID: KAD LEBIH PADAT (h-24 md:h-52) & FULL CARD CLICKABLE (TERJAMIN AMAN)
function renderGrid() {
    const grid = document.getElementById("resourceGrid");
    if(!grid) return;
    grid.innerHTML = "";
    
    grid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4";

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToRender = filteredList.slice(startIndex, endIndex);

    if(itemsToRender.length === 0) {
        grid.innerHTML = `
            <div class='col-span-full text-center py-16 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm w-full'>
                <span class='text-2xl inline-block mb-2'>📂</span>
                <p class='text-xs font-bold text-gray-700'>Tiada bahan ditemui</p>
                <p class='text-[11px] text-gray-400 font-light mt-0.5'>Cuba semak padanan kategori atau program penyakit yang lain.</p>
            </div>`;
        return;
    }

    itemsToRender.forEach(item => {
        let cardHtml = "";
        const defaultImg = "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80";
        const finalImgUrl = item.imageUrl || defaultImg;
        const originalIndex = resourcesData.indexOf(item);
        let itemCat = item.category ? item.category.toLowerCase().trim() : '';

        // Tentukan destinasi halaman berdasarkan kategori asal data
        let targetPage = "view-document.html";
        if (itemCat === 'package' || itemCat === 'pakej') {
            const isAlbum = item.badgeText && (item.badgeText.includes("Siri") || item.badgeText.includes("Album"));
            targetPage = isAlbum ? "play-album.html" : "play-package.html";
        } else if (itemCat === 'video') {
            targetPage = "play-video.html";
        } else if (itemCat === 'infografik' || itemCat === 'logo') {
            targetPage = "play-image.html";
        }

        // Struktur pembungkus luar dikekalkan sebagai <div> supaya MutationObserver berfungsi 100%
        cardHtml = `
            <div class="group bg-white border border-gray-100 rounded-xl shadow-xs md:hover:shadow-md md:hover:scale-[1.03] transition-all duration-300 overflow-hidden flex flex-row md:flex-col justify-between h-24 md:h-52 relative">
                <a href="${targetPage}?id=${originalIndex}" class="absolute inset-0 z-20 cursor-pointer text-transparent select-none" aria-label="Buka bahan">Buka</a>
                
                <div class="w-24 md:w-full h-full md:h-24 overflow-hidden bg-gray-50 relative flex-shrink-0 flex items-center justify-center">
                    <img src="${finalImgUrl}" alt="${item.title}" loading="lazy" referrerpolicy="no-referrer" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                    <span class="absolute top-2 left-2 text-[8px] font-bold ${item.badgeColorClass || 'text-sky-600 bg-sky-50'} px-2 py-0.5 rounded uppercase tracking-wider z-10">${item.badgeText || 'Bahan'}</span>
                    ${itemCat === 'video' ? '<div class="absolute inset-0 bg-black/10 flex items-center justify-center z-10"><span class="w-6 h-6 md:w-7 md:h-7 bg-white/90 backdrop-blur-sm text-[#101e33] rounded-full flex items-center justify-center font-bold text-[9px] md:text-xs shadow-md pl-0.5 group-hover:bg-rose-600 group-hover:text-white transition-colors">▶</span></div>' : ''}
                </div>
                
                <div class="p-2.5 flex-1 flex flex-col justify-between min-w-0 z-10 pointer-events-none">
                    <div class="space-y-0.5">
                        <h3 class="text-xs font-bold text-[#101e33] leading-tight line-clamp-2 group-hover:text-sky-600 transition-colors" title="${item.title}">${item.title}</h3>
                        <p class="hidden md:block text-[11px] text-gray-400 font-light line-clamp-2 mt-0.5">${item.desc || ''}</p>
                    </div>
                    <div class="pt-1 border-t border-gray-100 flex justify-between items-center flex-shrink-0 mt-1">
                        <span class="text-[9px] md:text-[10px] text-gray-400 font-medium">${item.infoText || 'Format Semasa'}</span>
                        <span class="text-[9px] font-bold text-[#101e33] opacity-0 group-hover:opacity-100 transition-opacity">Akses ↗</span>
                    </div>
                </div>
            </div>`;

        grid.innerHTML += cardHtml;
    });
}

function renderPaginationControls() {
    let pantiContainer = document.getElementById("paginationContainer");
    if (!pantiContainer) return;

    pantiContainer.className = "flex items-center justify-center space-x-2 mt-12 mb-8 py-6 w-full";
    pantiContainer.innerHTML = "";
    
    const totalPages = Math.ceil(filteredList.length / itemsPerPage);

    if (totalPages <= 1) {
        pantiContainer.classList.add("hidden");
        return;
    } else {
        pantiContainer.classList.remove("hidden");
    }

    const prevBtn = document.createElement("button");
    prevBtn.innerHTML = "← Prev";
    prevBtn.className = `px-4 py-2 rounded-xl text-xs font-bold border transition-all ${currentPage === 1 ? 'bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300 active:scale-95 shadow-sm'}`;
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => { if(currentPage > 1) { currentPage--; renderGrid(); renderPaginationControls(); window.scrollTo({top: 320, behavior: 'smooth'}); } };
    pantiContainer.appendChild(prevBtn);

    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement("button");
        pageBtn.innerText = i;
        pageBtn.className = `w-10 h-10 rounded-xl text-xs font-bold border transition-all flex items-center justify-center ${currentPage === i ? 'bg-gray-50 border-gray-300 font-extrabold text-[#101e33] ring-1 ring-gray-300 shadow-inner' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300 active:scale-95 shadow-sm'}`;
        pageBtn.onclick = () => { currentPage = i; renderGrid(); renderPaginationControls(); window.scrollTo({top: 320, behavior: 'smooth'}); };
        pantiContainer.appendChild(pageBtn);
    }

    const nextBtn = document.createElement("button");
    nextBtn.innerHTML = "Next →";
    nextBtn.className = `px-4 py-2 rounded-xl text-xs font-bold border transition-all ${currentPage === totalPages ? 'bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300 active:scale-95 shadow-sm'}`;
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => { if(currentPage < totalPages) { currentPage++; renderGrid(); renderPaginationControls(); window.scrollTo({top: 320, behavior: 'smooth'}); } };
    pantiContainer.appendChild(nextBtn);
}