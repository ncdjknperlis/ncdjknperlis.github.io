// info-ncd.js
// ENJIN 5-KOLUM DENGAN PAGINATION, INSTANT SEARCH, KAUNTER & ADVANCED SORTING

let currentCategory = 'all';
let currentPage = 1;
const itemsPerPage = 15; 
let filteredList = [];
let searchQuery = ""; 
let sortMethod = "default"; // Menyimpan kaedah isihan semasa

window.onload = () => {
    applyFilterAndRender();
};

function handleSearch() {
    const input = document.getElementById("searchInput");
    if (input) {
        searchQuery = input.value.toLowerCase().trim();
        currentPage = 1; 
        applyFilterAndRender();
    }
}

// Fungsi pemicu apabila pengguna menukar pilihan dropdown sorting
function handleSortChange() {
    const select = document.getElementById("sortSelect");
    if (select) {
        sortMethod = select.value;
        currentPage = 1; // Reset ke halaman 1 setiap kali cara susunan berubah
        applyFilterAndRender();
    }
}

function changeCategory(cat) {
    currentCategory = cat;
    currentPage = 1;
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('bg-[#101e33]', 'text-white');
        btn.classList.add('bg-white', 'text-gray-600', 'border', 'border-gray-200');
    });
    const activeTab = document.getElementById(`tab-${cat}`);
    if(activeTab) {
        activeTab.classList.remove('bg-white', 'text-gray-600', 'border', 'border-gray-200');
        activeTab.classList.add('bg-[#101e33]', 'text-white');
    }
    applyFilterAndRender();
}

function applyFilterAndRender() {
    // FASA 1: Tapis mengikut Kategori Tab
    if (currentCategory === 'all') {
        filteredList = [...resourcesData]; // Gunakan spread operator supaya data asal tidak rosak
    } else {
        filteredList = resourcesData.filter(item => item.category === currentCategory);
    }

    // FASA 2: Tapis mengikut Kata Kunci Carian
    if (searchQuery !== "") {
        filteredList = filteredList.filter(item => {
            const matchTitle = item.title ? item.title.toLowerCase().includes(searchQuery) : false;
            const matchDesc = item.desc ? item.desc.toLowerCase().includes(searchQuery) : false;
            const matchBadge = item.badgeText ? item.badgeText.toLowerCase().includes(searchQuery) : false;
            return matchTitle || matchDesc || matchBadge;
        });
    }

    // =========================================================================
    // FASA 3: LOGIK BARU - ISIH DATA (ADVANCED SORTING)
    // =========================================================================
    if (sortMethod === "az") {
        // Susun A ke Z berdasarkan Abjad Tajuk
        filteredList.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortMethod === "za") {
        // Susun Z ke A
        filteredList.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortMethod === "type-cpg") {
        // CPG ditolak ke atas, jenis lain di bawah
        filteredList.sort((a, b) => (b.category === "cpg") - (a.category === "cpg"));
    } else if (sortMethod === "type-infografik") {
        // Infografik ditolak ke atas
        filteredList.sort((a, b) => (b.category === "infografik") - (a.category === "infografik"));
    } else if (sortMethod === "type-video") {
        // Video ditolak ke atas
        filteredList.sort((a, b) => (b.category === "video") - (a.category === "video"));
    }
    // =========================================================================

    // FASA 4: Kemas Kini Kaunter
    const countDisplay = document.getElementById("materialCount");
    if (countDisplay) {
        countDisplay.innerHTML = `Menampilkan: <span class="text-[#101e33] font-extrabold">${filteredList.length}</span> bahan`;
    }

    renderGrid();
    renderPaginationControls();
}

function renderGrid() {
    const grid = document.getElementById("resourceGrid");
    if(!grid) return;
    grid.innerHTML = "";

    grid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4";

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToRender = filteredList.slice(startIndex, endIndex);

    if(itemsToRender.length === 0) {
        grid.innerHTML = `
            <div class='col-span-full text-center py-16 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm'>
                <span class='text-2xl inline-block mb-2'>📂</span>
                <p class='text-xs font-bold text-gray-700'>Tiada bahan ditemui</p>
                <p class='text-[11px] text-gray-400 font-light mt-0.5'>Cuba semak ejaan atau guna kata kunci yang lain.</p>
            </div>`;
        return;
    }

    itemsToRender.forEach(item => {
        let cardHtml = "";
        const defaultImg = "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80";
        const finalImgUrl = item.imageUrl || defaultImg;
        
        // AMBIL PERHATIAN: Kerana senarai filteredList kita sudah diisih (sort), 
        // kita mesti cari ID Index asal daripada resourcesData asal supaya pautan tidak salah hantar!
        const originalIndex = resourcesData.indexOf(item);

        if (item.isPackage) {
            cardHtml = `
                <div class="bg-white border border-purple-100 hover:border-purple-300 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col justify-between h-72">
                    <div class="h-28 overflow-hidden bg-purple-50 relative flex-shrink-0">
                        <img src="${finalImgUrl}" alt="${item.title}" loading="lazy" class="w-full h-full object-cover">
                        <span class="absolute top-2 left-2 text-[8px] font-bold ${item.badgeColorClass} px-2 py-0.5 rounded uppercase tracking-wider z-10">${item.badgeText}</span>
                    </div>
                    <div class="p-3 flex-1 flex flex-col justify-between">
                        <div>
                            <h3 class="text-xs font-bold text-[#101e33] leading-tight line-clamp-2" title="${item.title}">${item.title}</h3>
                            <p class="text-[11px] text-gray-500 font-light mt-1 line-clamp-2">${item.desc}</p>
                        </div>
                        <div class="pt-2 border-t border-purple-100 flex justify-between items-center flex-shrink-0">
                            <span class="text-[10px] text-purple-600 font-bold">${item.infoText}</span>
                            <a href="play-package.html?id=${originalIndex}" class="py-1 px-2.5 bg-purple-600 text-white text-[10px] font-bold rounded hover:bg-purple-700 transition-colors shadow-sm active:scale-95">
                                ${item.actionText.replace(' ➔', '')}
                            </a>
                        </div>
                    </div>
                </div>`;
        } else if (item.category === 'video') {
            cardHtml = `
                <div class="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col justify-between h-72">
                    <div class="h-28 overflow-hidden bg-gray-100 relative flex-shrink-0">
                        <img src="${finalImgUrl}" alt="${item.title}" loading="lazy" class="w-full h-full object-cover">
                        <span class="absolute top-2 left-2 text-[8px] font-bold ${item.badgeColorClass} px-2 py-0.5 rounded uppercase tracking-wider z-10">${item.badgeText}</span>
                        <div class="absolute inset-0 bg-black/10 flex items-center justify-center">
                            <span class="w-8 h-8 bg-white/90 backdrop-blur-sm text-[#101e33] rounded-full flex items-center justify-center font-bold text-xs shadow-md pl-0.5">▶</span>
                        </div>
                    </div>
                    <div class="p-3 flex-1 flex flex-col justify-between">
                        <div>
                            <h3 class="text-xs font-bold text-[#101e33] leading-tight line-clamp-2" title="${item.title}">${item.title}</h3>
                            <p class="text-[11px] text-gray-500 font-light mt-1 line-clamp-2">${item.desc}</p>
                        </div>
                        <div class="pt-2 border-t border-gray-50 flex justify-between items-center flex-shrink-0">
                            <span class="text-[10px] text-gray-400 font-medium">${item.infoText}</span>
                            <a href="play-video.html?id=${originalIndex}" class="py-1 px-2.5 bg-rose-600 text-white text-[10px] font-bold rounded hover:bg-rose-700 transition-colors active:scale-95 shadow-sm">
                                ${item.actionText.replace(' ➔', '')}
                            </a>
                        </div>
                    </div>
                </div>`;
        } else if (item.category === 'infografik') {
            cardHtml = `
                <div class="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col justify-between h-72">
                    <div class="h-28 overflow-hidden bg-gray-100 relative flex-shrink-0">
                        <img src="${finalImgUrl}" alt="${item.title}" loading="lazy" class="w-full h-full object-cover">
                        <span class="absolute top-2 left-2 text-[8px] font-bold ${item.badgeColorClass} px-2 py-0.5 rounded uppercase tracking-wider z-10">${item.badgeText}</span>
                    </div>
                    <div class="p-3 flex-1 flex flex-col justify-between">
                        <div>
                            <h3 class="text-xs font-bold text-[#101e33] leading-tight line-clamp-2" title="${item.title}">${item.title}</h3>
                            <p class="text-[11px] text-gray-500 font-light mt-1 line-clamp-2">${item.desc}</p>
                        </div>
                        <div class="pt-2 border-t border-gray-50 flex justify-between items-center flex-shrink-0">
                            <span class="text-[10px] text-gray-400 font-medium">${item.infoText}</span>
                            <a href="play-image.html?id=${originalIndex}" class="py-1 px-2.5 bg-emerald-600 text-white text-[10px] font-bold rounded hover:bg-emerald-700 transition-colors active:scale-95 shadow-sm">
                                ${item.actionText.replace(' ↗', '')}
                            </a>
                        </div>
                    </div>
                </div>`;
        } else {
            cardHtml = `
                <div class="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col justify-between h-72">
                    <div class="h-28 overflow-hidden bg-gray-150 relative flex-shrink-0">
                        <img src="${finalImgUrl}" alt="${item.title}" loading="lazy" class="w-full h-full object-cover">
                        <span class="absolute top-2 left-2 text-[8px] font-bold ${item.badgeColorClass} px-2 py-0.5 rounded uppercase tracking-wider z-10">${item.badgeText}</span>
                    </div>
                    <div class="p-3 flex-1 flex flex-col justify-between">
                        <div>
                            <h3 class="text-xs font-bold text-[#101e33] leading-tight line-clamp-2" title="${item.title}">${item.title}</h3>
                            <p class="text-[11px] text-gray-500 font-light mt-1 line-clamp-2">${item.desc}</p>
                        </div>
                        <div class="pt-2 border-t border-gray-50 flex justify-between items-center flex-shrink-0">
                            <span class="text-[10px] text-gray-400 font-medium">${item.infoText}</span>
                            <a href="${item.pdfUrl}" ${item.isDownload ? 'download' : 'target="_blank"'} class="py-1 px-2.5 bg-[#101e33] text-white text-[10px] font-bold rounded hover:bg-[#1d3557] transition-colors active:scale-95 shadow-sm">
                                ${item.actionText.replace(' ↓', '')}
                            </a>
                        </div>
                    </div>
                </div>`;
        }
        grid.innerHTML += cardHtml;
    });
}

function renderPaginationControls() {
    let pantiContainer = document.getElementById("paginationContainer");
    if (!pantiContainer) return;

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
    prevBtn.className = `px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${currentPage === 1 ? 'bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 active:scale-95'}`;
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => { if(currentPage > 1) { currentPage--; renderGrid(); renderPaginationControls(); window.scrollTo({top: 300, behavior: 'smooth'}); } };
    pantiContainer.appendChild(prevBtn);

    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement("button");
        pageBtn.innerText = i;
        pageBtn.className = `w-8 h-8 rounded-lg text-xs font-bold border transition-all ${currentPage === i ? 'bg-[#101e33] text-white border-[#101e33]' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 active:scale-95'}`;
        pageBtn.onclick = () => { currentPage = i; renderGrid(); renderPaginationControls(); window.scrollTo({top: 300, behavior: 'smooth'}); };
        pantiContainer.appendChild(pageBtn);
    }

    const nextBtn = document.createElement("button");
    nextBtn.innerHTML = "Next →";
    nextBtn.className = `px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${currentPage === totalPages ? 'bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 active:scale-95'}`;
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => { if(currentPage < totalPages) { currentPage++; renderGrid(); renderPaginationControls(); window.scrollTo({top: 300, behavior: 'smooth'}); } };
    pantiContainer.appendChild(nextBtn);
}