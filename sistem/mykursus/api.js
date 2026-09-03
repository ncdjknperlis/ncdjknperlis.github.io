// ==========================================
// PAUTAN APPS SCRIPT WEB APP INTEGRATION
// ==========================================
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxtjsCp37Uj31YcABi2DSJZcKuhWto1fcBr-1WzFSlVwsycqANvjPXNckQA7koXdZ7J/exec";

// Fungsi Pembantu Fetch HTTP
async function callGAS(actionName, payload = {}) {
  try {
    const response = await fetch(WEB_APP_URL, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action: actionName, ...payload })
    });
    return await response.json();
  } catch(err) {
    throw new Error(err.message || 'Gagal menyambung ke server Google Apps Script.');
  }
}

function showLoading() { Swal.fire({ title: 'Sila Tunggu...', allowOutsideClick: false, showConfirmButton: false, didOpen: () => { Swal.showLoading(); }}); }
function hideLoading() { Swal.close(); }

function handleSystemError(error) {
  hideLoading();
  Swal.fire({ title: 'Ralat Sistem', text: error.message || 'Gagal untuk disambungkan ke Google Sheets.', icon: 'error', confirmButtonColor: '#1e3a8a' });
}

function showView(viewName) {
  document.getElementById('viewKatalog').style.display = 'none';
  document.getElementById('viewStatus').style.display = 'none';
  document.getElementById('viewKalendar').style.display = 'none';
  document.getElementById('viewMesyuarat').style.display = 'none';
  
  document.getElementById('view' + viewName).style.display = 'block';
  if(viewName === 'Katalog' && window.dataTable) { window.dataTable.columns.adjust().draw(); }
  if(viewName === 'Mesyuarat' && window.mesyuaratTable) { window.mesyuaratTable.columns.adjust().draw(); }
}

function toggleNotif(e) {
  if (e) e.stopPropagation(); 
  const box = document.getElementById('floatingNotif');
  const icon = document.getElementById('notifToggleIcon');
  if(box.classList.contains('minimized')) {
      box.classList.remove('minimized');
      icon.className = 'fas fa-chevron-down';
  } else {
      box.classList.add('minimized');
      icon.className = 'fas fa-chevron-up';
  }
}

function makeDraggable(elmnt) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  const header = document.getElementById("floatingNotifHeader");
  if (header) { header.onmousedown = dragMouseDown; }

  function dragMouseDown(e) {
    e = e || window.event;
    if (e.target.id === 'notifToggleIcon') return; 
    e.preventDefault();
    if(elmnt.style.top === "") {
        elmnt.style.top = elmnt.offsetTop + "px";
        elmnt.style.bottom = "auto";
    }
    pos3 = e.clientX; pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event; e.preventDefault();
    pos1 = pos3 - e.clientX; pos2 = pos4 - e.clientY; pos3 = e.clientX; pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px"; elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  function closeDragElement() { document.onmouseup = null; document.onmousemove = null; }
}