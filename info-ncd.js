// info-ncd.js
let currentCategory = 'all';
let itemsToShow = 6;
let filteredList = [];

window.onload = () => {
    applyFilterAndRender();
};

function changeCategory(cat) {
    currentCategory = cat;
    itemsToShow = 6;
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
    if (currentCategory === 'all') {
        filteredList = resourcesData;
    } else {
        filteredList = resourcesData.filter(item => item.category === currentCategory);
    }
    renderGrid();
}

function renderGrid() {
    const grid = document.getElementById("resourceGrid");
    if(!grid) return;
    grid.innerHTML = "";

    const itemsToRender = filteredList.slice(0, itemsToShow);

    if(itemsToRender.length === 0) {
        grid.innerHTML = `<div class='col-span-full text-center py-12 text-gray-400 font-light text-sm'>Tiada bahan dijumpai buat masa ini.</div>`;
        document.getElementById("loadMoreBtn").classList.add("hidden");
        return;
    }

    itemsToRender.forEach(item => {
        let cardHtml = "";
        const defaultImg = "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80";
        const finalImgUrl = item.imageUrl || defaultImg;
        const originalIndex = resourcesData.indexOf(item);

        if (item.isPackage) {
            cardHtml = `
                <div class="bg-white border border-purple-100 hover:border-purple-300 rounded-2xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col justify-between h-80">
                    <div class="h-36 overflow-hidden bg-purple-50 relative flex-shrink-0">
                        <img src="${finalImgUrl}" alt="${item.title}" loading="lazy" class="w-full h-full object-cover">
                        <span class="absolute top-3 left-3 text-[9px] font-bold ${item.badgeColorClass} px-2.5 py-1 rounded-md uppercase tracking-wider z-10">${item.badgeText}</span>
                    </div>
                    <div class="p-5 flex-1 flex flex-col justify-between">
                        <div>
                            <h3 class="text-base font-bold text-[#101e33] leading-tight line-clamp-1">${item.title}</h3>
                            <p class="text-xs text-gray-500 font-light mt-1.5 line-clamp-2">${item.desc}</p>
                        </div>
                        <div class="pt-3 border-t border-purple-100 bg-purple-50/20 -mx-5 -mb-5 p-5 flex justify-between items-center flex-shrink-0">
                            <span class="text-[11px] text-purple-600 font-bold">${item.infoText}</span>
                            <a href="play-package.html?id=${originalIndex}" class="py-1.5 px-3.5 bg-purple-600 text-white text-xs font-bold rounded-lg hover:bg-purple-700 transition-colors shadow-sm active:scale-95">
                                ${item.actionText}
                            </a>
                        </div>
                    </div>
                </div>`;
        } else if (item.category === 'video') {
            cardHtml = `
                <div class="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col justify-between h-80">
                    <div class="h-36 overflow-hidden bg-gray-100 relative flex-shrink-0">
                        <img src="${finalImgUrl}" alt="${item.title}" loading="lazy" class="w-full h-full object-cover">
                        <span class="absolute top-3 left-3 text-[9px] font-bold ${item.badgeColorClass} px-2.5 py-1 rounded-md uppercase tracking-wider z-10">${item.badgeText}</span>
                        <div class="absolute inset-0 bg-black/10 flex items-center justify-center">
                            <span class="w-10 h-10 bg-white/90 backdrop-blur-sm text-[#101e33] rounded-full flex items-center justify-center font-bold text-xs shadow-md pl-0.5">▶</span>
                        </div>
                    </div>
                    <div class="p-5 flex-1 flex flex-col justify-between">
                        <div>
                            <h3 class="text-base font-bold text-[#101e33] leading-tight line-clamp-1">${item.title}</h3>
                            <p class="text-xs text-gray-500 font-light mt-1.5 line-clamp-2">${item.desc}</p>
                        </div>
                        <div class="pt-3 border-t border-gray-50 flex justify-between items-center mt-2 flex-shrink-0">
                            <span class="text-[11px] text-gray-400 font-medium">${item.infoText}</span>
                            <a href="play-video.html?id=${originalIndex}" class="py-1.5 px-3.5 bg-rose-600 text-white text-xs font-bold rounded-lg hover:bg-rose-700 transition-colors active:scale-95 shadow-sm">
                                ${item.actionText}
                            </a>
                        </div>
                    </div>
                </div>`;
        } else if (item.category === 'infografik') {
            cardHtml = `
                <div class="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col justify-between h-80">
                    <div class="h-36 overflow-hidden bg-gray-100 relative flex-shrink-0">
                        <img src="${finalImgUrl}" alt="${item.title}" loading="lazy" class="w-full h-full object-cover">
                        <span class="absolute top-3 left-3 text-[9px] font-bold ${item.badgeColorClass} px-2.5 py-1 rounded-md uppercase tracking-wider z-10">${item.badgeText}</span>
                    </div>
                    <div class="p-5 flex-1 flex flex-col justify-between">
                        <div>
                            <h3 class="text-base font-bold text-[#101e33] leading-tight line-clamp-1">${item.title}</h3>
                            <p class="text-xs text-gray-500 font-light mt-1.5 line-clamp-2">${item.desc}</p>
                        </div>
                        <div class="pt-3 border-t border-gray-50 flex justify-between items-center mt-2 flex-shrink-0">
                            <span class="text-[11px] text-gray-400 font-medium">${item.infoText}</span>
                            <a href="play-image.html?id=${originalIndex}" class="py-1.5 px-3.5 bg-emerald-600 text-white text-xs font-bold rounded-lg hover:bg-emerald-700 transition-colors active:scale-95 shadow-sm">
                                ${item.actionText}
                            </a>
                        </div>
                    </div>
                </div>`;
        } else {
            cardHtml = `
                <div class="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col justify-between h-80">
                    <div class="h-36 overflow-hidden bg-gray-150 relative flex-shrink-0">
                        <img src="${finalImgUrl}" alt="${item.title}" loading="lazy" class="w-full h-full object-cover">
                        <span class="absolute top-3 left-3 text-[9px] font-bold ${item.badgeColorClass} px-2.5 py-1 rounded-md uppercase tracking-wider z-10">${item.badgeText}</span>
                    </div>
                    <div class="p-5 flex-1 flex flex-col justify-between">
                        <div>
                            <h3 class="text-base font-bold text-[#101e33] leading-tight line-clamp-1">${item.title}</h3>
                            <p class="text-xs text-gray-500 font-light mt-1.5 line-clamp-2">${item.desc}</p>
                        </div>
                        <div class="pt-3 border-t border-gray-50 flex justify-between items-center mt-2 flex-shrink-0">
                            <span class="text-[11px] text-gray-400 font-medium">${item.infoText}</span>
                            <a href="${item.pdfUrl}" ${item.isDownload ? 'download' : 'target="_blank"'} class="py-1.5 px-3.5 bg-[#101e33] text-white text-xs font-bold rounded-lg hover:bg-[#1d3557] transition-colors active:scale-95 shadow-sm">
                                ${item.actionText}
                            </a>
                        </div>
                    </div>
                </div>`;
        }
        grid.innerHTML += cardHtml;
    });

    const loadMoreBtn = document.getElementById("loadMoreBtn");
    if(loadMoreBtn) {
        if (filteredList.length > itemsToShow) { loadMoreBtn.classList.remove("hidden"); } 
        else { loadMoreBtn.classList.add("hidden"); }
    }
}
function renderMore() { itemsToShow += 6; renderGrid(); }