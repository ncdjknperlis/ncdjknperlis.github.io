let dataTable;
let mesyuaratTable;
let globalData = []; 
let globalMesyuaratData = [];
let activeCourseId = null;
let currentAppTahun = ""; 
let currentAppTajuk = ""; 

window.onload = function() { 
   checkAdminStatus(); 
   loadData(); 
   fetchCalendar();
   fetchDashboardExtras();
   makeDraggable(document.getElementById("floatingNotif"));
};

// ==========================================
// LOGIK LOG IN & ADMIN ACCESS
// ==========================================
function checkAdminStatus() {
  const isAdmin = sessionStorage.getItem('isAdmin') === 'true';
  const addBtn = document.getElementById('addCourseBtn');
  const dLBtn = document.getElementById('downloadExcelBtn');
  const authText = document.getElementById('authText');
  const authIcon = document.getElementById('authIcon');
  const calAdminNotice = document.getElementById('calAdminNotice');
  const announcementFooter = document.getElementById('announcementFooter');
  const cardMesyuarat = document.getElementById('cardMesyuarat');

  if (isAdmin) {
    addBtn.style.display = 'inline-block'; dLBtn.style.display = 'inline-block';
    authText.innerText = 'LOGOUT'; authIcon.className = 'fas fa-sign-out-alt me-1';
    calAdminNotice.style.display = 'inline-block'; announcementFooter.style.display = 'flex'; 
    cardMesyuarat.style.display = 'block'; 
  } else {
    addBtn.style.display = 'none'; dLBtn.style.display = 'none';
    authText.innerText = 'LOGIN'; authIcon.className = 'fas fa-lock me-1';
    calAdminNotice.style.display = 'none'; announcementFooter.style.display = 'none';
    cardMesyuarat.style.display = 'none'; 
    if(document.getElementById('viewMesyuarat').style.display === 'block') { showView('Katalog'); }
  }
  if (dataTable) dataTable.column(7).visible(isAdmin);
}

function toggleAuth() {
  const isAdmin = sessionStorage.getItem('isAdmin') === 'true';
  if (isAdmin) {
    sessionStorage.setItem('isAdmin', 'false');
    checkAdminStatus();
    Swal.fire({ toast: true, position: 'top-end', icon: 'info', title: 'Daftar keluar berjaya', showConfirmButton: false, timer: 2000 });
  } else {
    new bootstrap.Modal(document.getElementById('loginModal')).show();
  }
}

document.getElementById('loginForm').onsubmit = function(e) {
  e.preventDefault();
  const pwd = this.password.value;
  const btn = this.querySelector('button[type="submit"]');
  btn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status"></span> Verifying...';
  btn.disabled = true;

  callGAS('verifyAdmin', { password: pwd }).then(res => {
      btn.innerHTML = 'Log Masuk'; btn.disabled = false;
      if(res.success) {
        sessionStorage.setItem('isAdmin', 'true');
        bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
        this.reset(); checkAdminStatus();
        Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: 'Akses Admin Berjaya', showConfirmButton: false, timer: 2000 });
      } else {
        Swal.fire({ title: 'Akses Ditolak', text: res.message, icon: 'error', confirmButtonColor: '#1e3a8a' });
        this.reset();
      }
  }).catch(err => { btn.innerHTML = 'Log Masuk'; btn.disabled = false; handleSystemError(err); });
};

// ==========================================
// LOGIK KATALOG KURSUS & PEMOHON
// ==========================================
function loadData() {
  showLoading();
  callGAS('getCourseData').then(res => {
       renderTable(res);
       return callGAS('getMesyuaratData');
  }).then(res2 => {
       renderMesyuaratTable(res2);
       hideLoading();
  }).catch(handleSystemError);
}

function renderTable(data) {
  globalData = data; 
  if ($.fn.DataTable.isDataTable('#courseTable')) $('#courseTable').DataTable().destroy();

  dataTable = $('#courseTable').DataTable({
      data: data, 
      columns: [
          { data: 'Tajuk Kursus', render: function(data, type, row) { 
              if(row['Status Kursus'] === 'Buka' || row['Status Kursus'] === 'Tutup') { return `<a onclick="viewCourseDetails('${row.id}')" class="course-link text-uppercase">${data}</a>`; } 
              else { return `<span class="course-inactive text-uppercase">${data}</span>`; }
          }},
          { data: 'Penganjur', render: function(data) { return data; } }, { data: 'Bidang', render: function(data) { return data; } },
          { data: 'Kumpulan Sasaran', render: function(data) { return data; } }, { data: 'Tarikh Mula', render: function(data) { return data; } },
          { data: 'Tarikh Tamat', render: function(data) { return data; } },
          { data: 'Status Kursus', render: function(data) {
              let badgeClass = '';
              if(data === 'Buka') badgeClass = 'badge-buka status-blink';
              else if (data === 'Tutup') badgeClass = 'badge-tutup';
              else badgeClass = 'badge-akandatang';
              return `<span class="badge-soft ${badgeClass}">${data}</span>`;
          }},
          { data: 'id', orderable: false, render: function(data, type, row) {
              return `
              <div class="d-flex gap-1 justify-content-center">
                <button class="btn btn-sm btn-outline-primary shadow-sm rounded-0 px-2" onclick="openEditModal('${data}')" title="Kemaskini Rekod"><i class="fas fa-edit"></i></button>
                <button class="btn btn-sm btn-outline-success shadow-sm rounded-0 px-2" onclick="openApplicantsModal('${data}')" title="Senarai Pemohon"><i class="fas fa-users"></i></button>
                <button class="btn btn-sm btn-outline-danger shadow-sm rounded-0 px-2" onclick="confirmDeleteCourse('${data}')" title="Hapus Kursus"><i class="fas fa-trash"></i></button>
              </div>`;
          }},
          { data: 'Tahun', visible: false }, { data: 'Bulan', visible: false }
      ],
      language: { emptyTable: "Tiada rekod dijumpai.", lengthMenu: "Papar _MENU_ rekod" }, pageLength: 10, ordering: false, responsive: false, 
      dom: 'rt<"row align-items-center mt-4"<"col-md-4"l><"col-md-4 text-center text-muted small"i><"col-md-4"p>>'
  });

  $('#customSearch').on('keyup', function() { dataTable.search(this.value).draw(); });
  $('#filterTahun').on('change', function() { dataTable.column(8).search(this.value).draw(); });
  $('#filterBulan').on('change', function() { dataTable.column(9).search(this.value).draw(); });
  checkAdminStatus(); 
}

function viewCourseDetails(id) {
  activeCourseId = id; 
  const rowData = globalData.find(row => row.id === id);
  if(!rowData) return;

  document.getElementById('dtl-tajuk').innerText = rowData['Tajuk Kursus'];
  document.getElementById('dtl-tarikh').innerText = `${rowData['Tarikh Mula']} - ${rowData['Tarikh Tamat']} (08:00 - 17:00)`;
  document.getElementById('dtl-tempat').innerText = rowData['Tempat'];
  document.getElementById('dtl-sasaran').innerText = rowData['Kumpulan Sasaran'];
  document.getElementById('dtl-pengajar').innerText = rowData['Pengajar'];
  document.getElementById('dtl-penerangan').innerText = rowData['Penerangan'];
  document.getElementById('dtl-pegawai').innerText = rowData['Pegawai'];
  document.getElementById('dtl-emel').innerText = rowData['Emel'];
  document.getElementById('dtl-telefon').innerText = rowData['Telefon'];
  
  const isTutup = rowData['Status Kursus'] === 'Tutup';
  const statusBadge = document.getElementById('dtl-status');
  const btnMohon = document.getElementById('btnMohon');
  const labelTutup = document.getElementById('labelTutup');

  if(isTutup) {
      statusBadge.className = "badge-soft badge-tutup";
      statusBadge.innerText = "Tutup";
      btnMohon.style.display = 'none'; 
      labelTutup.style.display = 'block';
  } else {
      statusBadge.className = "badge-soft badge-buka status-blink";
      statusBadge.innerText = "Buka";
      btnMohon.style.display = 'inline-block'; 
      labelTutup.style.display = 'none';
  }
  new bootstrap.Modal(document.getElementById('detailsModal')).show();
}

function openApplyModal() {
  const rowData = globalData.find(row => row.id === activeCourseId);
  bootstrap.Modal.getInstance(document.getElementById('detailsModal')).hide();
  document.getElementById('applyForm').reset();
  
  document.getElementById('katStaf').checked = true;
  toggleKategori();
  
  document.getElementById('tajukMohonInput').value = rowData['Tajuk Kursus'];
  document.getElementById('tahunMohonInput').value = rowData['Tahun'];
  new bootstrap.Modal(document.getElementById('applyModal')).show();
}

document.getElementById('applyForm').onsubmit = function(e) {
  e.preventDefault();
  const isAwam = document.getElementById('katAwam').checked;
  const formData = {
    'Tajuk Kursus': this.tajukMohon.value,
    'Kategori': document.querySelector('input[name="kategori"]:checked').value,
    'Nama Penuh': this.nama.value.toUpperCase(),
    'No Kad Pengenalan': this.ic.value,
    'Jawatan': isAwam ? "-" : this.jawatan.value.toUpperCase(),
    'Gred': isAwam ? "-" : this.gred.value.toUpperCase(),
    'Tempat Bekerja': isAwam ? "-" : this.tempatKerja.value.toUpperCase(),
    'Tahun': this.tahunMohon.value
  };
  
  bootstrap.Modal.getInstance(document.getElementById('applyModal')).hide();
  showLoading();
  
  callGAS('submitApplication', { formData: formData }).then(res => {
      if(res.success) { 
         Swal.fire({ icon: 'success', title: 'Berjaya!', text: res.message, confirmButtonColor: '#1e3a8a' }).then(() => {
             fetchDashboardExtras(); 
         }); 
      } 
      else { Swal.fire({ icon: 'error', title: 'Ralat', text: res.message, confirmButtonColor: '#1e3a8a' }); }
  }).catch(handleSystemError);
};

// ==========================================
// LOGIK STATUS PERMOHONAN PEMOHON
// ==========================================
function semakStatusPermohonan() {
  const ic = document.getElementById('checkIcInput').value;
  if(!ic || ic.length < 5) {
     Swal.fire({ icon: 'warning', title: 'Maklumat Tidak Lengkap', text: 'Sila masukkan Nombor Kad Pengenalan.', confirmButtonColor: '#1e3a8a'});
     return;
  }
  showLoading();
  callGAS('checkStatusPermohonan', { ic: ic }).then(res => {
       hideLoading();
       if(res.success) {
          document.getElementById('statusEmptyContainer').style.display = 'none';
          document.getElementById('statusResultContainer').style.display = 'block';
          document.getElementById('resIc').innerText = res.data.user.ic;
          document.getElementById('resNama').innerText = res.data.user.nama;
          document.getElementById('resTempat').innerText = res.data.user.tempatKerja;
          const tbody = document.getElementById('resTableBody');
          tbody.innerHTML = '';
          
          res.data.applications.forEach((app, index) => {
             let badgeColor = app.status === 'Permohonan Berjaya' ? 'bg-success' : (app.status === 'Ditolak' ? 'bg-danger' : 'bg-secondary');
             
             let sijilBtn = '<span class="badge bg-light text-muted border rounded-0 px-2 py-1">Dalam Proses</span>';
             if(app.status === 'Permohonan Berjaya' && app.kehadiran === 'Selesai') {
                 sijilBtn = `
                   <span class="badge bg-success rounded-0 me-1" style="font-size:0.75rem;">Hadir</span>
                   <span class="badge bg-danger rounded-0" style="cursor:pointer; font-size:0.75rem;" onclick="downloadSijil('${res.data.user.nama}', '${app.kursus}', '${app.mula}', '${app.tamat}')" title="Muat Turun Sijil PDF">
                     <i class="fas fa-file-pdf"></i>
                   </span>
                 `;
             }
             
             tbody.innerHTML += `
               <tr>
                 <td>${index + 1}</td>
                 <td class="text-primary fw-bold text-uppercase">${app.kursus}</td>
                 <td>${app.mula}</td>
                 <td>${app.tamat}</td>
                 <td><span class="badge ${badgeColor} rounded-0" style="font-size:0.75rem;">${app.status}</span></td>
                 <td class="text-center">${sijilBtn}</td>
               </tr>
             `;
          });
       } else {
          document.getElementById('statusResultContainer').style.display = 'none';
          document.getElementById('statusEmptyContainer').style.display = 'block';
       }
  }).catch(handleSystemError);
}

function downloadSijil(nama, kursus, mula, tamat) {
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
        doc.setLineWidth(2); doc.setDrawColor(30, 58, 138); doc.rect(10, 10, 277, 190);
        doc.setLineWidth(0.5); doc.rect(12, 12, 273, 186);

        doc.setFont("helvetica", "bold"); doc.setTextColor(30, 58, 138); doc.setFontSize(38);
        doc.text("SIJIL PENYERTAAN", 148.5, 45, { align: "center" });

        doc.setFont("helvetica", "normal"); doc.setTextColor(51, 65, 85); doc.setFontSize(16);
        doc.text("Dengan ini disahkan bahawa", 148.5, 75, { align: "center" });

        doc.setFont("helvetica", "bold"); doc.setTextColor(0, 0, 0); doc.setFontSize(28);
        doc.text(nama.toUpperCase(), 148.5, 95, { align: "center" });

        doc.setFont("helvetica", "normal"); doc.setTextColor(51, 65, 85); doc.setFontSize(14);
        doc.text("telah menghadiri dengan jayanya dalam program:", 148.5, 115, { align: "center" });

        doc.setFont("helvetica", "bold"); doc.setTextColor(30, 58, 138); doc.setFontSize(20);
        doc.text(kursus.toUpperCase(), 148.5, 135, { align: "center", maxWidth: 240 });

        doc.setFont("helvetica", "normal"); doc.setTextColor(51, 65, 85); doc.setFontSize(14);
        let tarikh = (mula === tamat) ? mula : `${mula} hingga ${tamat}`;
        doc.text(`Tarikh: ${tarikh}`, 148.5, 155, { align: "center" });

        doc.setFont("helvetica", "bold"); doc.setFontSize(14);
        doc.text("Unit NCD, JKN Perlis", 148.5, 175, { align: "center" });

        doc.save(`Sijil_Penyertaan_${nama.replace(/\s+/g, '_')}.pdf`);
    } catch(e) { Swal.fire('Ralat Penjanaan Sijil', 'Gagal memuat turun Sijil.', 'error'); }
}

// ==========================================
// LOGIK KALENDAR & NOTIFIKASI DASHBOARD
// ==========================================
function fetchCalendar() {
   callGAS('getCalendarId').then(calId => {
       if(calId) {
           const iframe = document.getElementById('calendarIframe');
           iframe.src = "https://calendar.google.com/calendar/embed?src=" + encodeURIComponent(calId) + "&ctz=Asia/Kuala_Lumpur&hl=ms";
           iframe.onload = function() {
               document.getElementById('calLoadingContainer').style.display = 'none';
               iframe.style.display = 'block';
           };
       } else { document.getElementById('calLoadingContainer').innerHTML = "<p class='text-danger'>Gagal memuatkan Kalendar.</p>"; }
   }).catch(err => {
      document.getElementById('calLoadingContainer').innerHTML = "<p class='text-danger'>Gagal sambungan ke Kalendar.</p>";
   });
}

function fetchDashboardExtras() {
   callGAS('getDashboardExtras').then(res => {
      if(res.success) {
         document.getElementById('announcementText').innerText = res.announcement;
         document.getElementById('announcementEditArea').value = res.announcement;
         
         const marquee = document.getElementById('notifMarquee');
         if(res.logs && res.logs.length > 0) {
            let html = '';
            res.logs.forEach(log => { html += `<div class="log-item"><i class="fas fa-check-circle text-success me-2"></i>${log}</div>`; });
            marquee.innerHTML = html;
         } else { marquee.innerHTML = `<div class="text-center text-muted mt-3" style="font-style:italic;">Tiada permohonan baru direkodkan.</div>`; }
      }
   }).catch(err => {
      document.getElementById('notifMarquee').innerHTML = `<div class="text-center text-muted mt-3" style="font-style:italic;">Gagal memuatkan notifikasi.</div>`;
   });
}

// ==========================================
// LOGIK MESYUARAT & ADMIN MANAGEMENT
// ==========================================
function renderMesyuaratTable(data) {
  globalMesyuaratData = data; 
  populateFilters(globalData, data);

  if ($.fn.DataTable.isDataTable('#mesyuaratTable')) $('#mesyuaratTable').DataTable().destroy();

  mesyuaratTable = $('#mesyuaratTable').DataTable({
      data: data, 
      columns: [
          { data: 'Tajuk Mesyuarat', render: function(data) { return `<span class="fw-bold text-primary text-uppercase">${data}</span>`; }},
          { data: 'Masa Mula', render: function(data) { return formatDateTimeView(data); } }, 
          { data: 'Masa Tamat', render: function(data) { return formatDateTimeView(data); } },
          { data: 'Minit Mesyuarat', render: function(data, type, row) { 
              if(data.startsWith('http')) {
                  return `<a href="${data}" target="_blank" class="btn btn-sm btn-outline-info shadow-sm rounded-0 px-3"><i class="fas fa-external-link-alt"></i> Klik untuk lihat</a>`;
              }
              return `<button class="btn btn-sm btn-outline-info shadow-sm rounded-0 px-3" onclick="openMinitModal('${row.id}')" title="Bina Minit Digital"><i class="fas fa-file-signature"></i></button>`; 
          }},
          { data: 'id', orderable: false, render: function(data, type, row) {
              let wordBtn = '';
              if(row['Data Minit'] && row['Data Minit'] !== "") {
                  wordBtn = `<button class="btn btn-sm btn-outline-primary shadow-sm rounded-0 px-2" onclick="downloadWord('${data}')" title="Muat Turun MS Word"><i class="fas fa-file-word"></i></button>`;
              }
              return `
              <div class="d-flex gap-1 justify-content-center">
                ${wordBtn}
                <button class="btn btn-sm btn-outline-primary shadow-sm rounded-0 px-2" onclick="openEditMesyuaratModal('${data}')" title="Kemaskini Rekod"><i class="fas fa-edit"></i></button>
                <button class="btn btn-sm btn-outline-danger shadow-sm rounded-0 px-2" onclick="confirmDeleteMesyuarat('${data}')" title="Hapus Mesyuarat"><i class="fas fa-trash"></i></button>
              </div>`;
          }},
          { data: 'Tahun', visible: false }, { data: 'Bulan', visible: false }
      ],
      language: { emptyTable: "Tiada rekod dijumpai.", lengthMenu: "Papar _MENU_ rekod" }, pageLength: 10, ordering: false, responsive: false, 
      dom: 'rt<"row align-items-center mt-4"<"col-md-4"l><"col-md-4 text-center text-muted small"i><"col-md-4"p>>'
  });

  $('#mesyuaratSearch').on('keyup', function() { mesyuaratTable.search(this.value).draw(); });
  $('#filterMesyuaratTahun').on('change', function() { mesyuaratTable.column(5).search(this.value).draw(); });
  $('#filterMesyuaratBulan').on('change', function() { mesyuaratTable.column(6).search(this.value).draw(); });
}

function populateFilters(data, mesyuaratData) {
  const yearSelect = document.getElementById('filterTahun');
  const monthSelect = document.getElementById('filterBulan');
  const years = [...new Set(data.map(i => i.Tahun))].filter(y => y !== "-").sort().reverse();
  const months = [...new Set(data.map(i => i.Bulan))].filter(m => m !== "-");
  
  yearSelect.innerHTML = '<option value="">Semua Tahun</option>';
  monthSelect.innerHTML = '<option value="">Semua Bulan</option>';
  years.forEach(y => yearSelect.innerHTML += `<option value="${y}">${y}</option>`);
  months.forEach(m => monthSelect.innerHTML += `<option value="${m}">${m}</option>`);

  if(mesyuaratData) {
      const mYearSelect = document.getElementById('filterMesyuaratTahun');
      const mMonthSelect = document.getElementById('filterMesyuaratBulan');
      const mYears = [...new Set(mesyuaratData.map(i => i.Tahun))].filter(y => y !== "-").sort().reverse();
      const mMonths = [...new Set(mesyuaratData.map(i => i.Bulan))].filter(m => m !== "-");
      
      mYearSelect.innerHTML = '<option value="">Semua Tahun</option>';
      mMonthSelect.innerHTML = '<option value="">Semua Bulan</option>';
      mYears.forEach(y => mYearSelect.innerHTML += `<option value="${y}">${y}</option>`);
      mMonths.forEach(m => mMonthSelect.innerHTML += `<option value="${m}">${m}</option>`);
  }
}

function formatDateTimeView(isoString) {
    if(!isoString || isoString === "-") return "-";
    try {
       let d = new Date(isoString);
       return d.toLocaleDateString('ms-MY', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute:'2-digit' });
    } catch(e) { return isoString; }
}

function toggleKategori() {
  const isAwam = document.getElementById('katAwam').checked;
  const stafFieldsContainer = document.getElementById('stafFieldsContainer');
  const jawatanInput = document.getElementById('jawatanInput');
  const gredInput = document.getElementById('gredInput');
  const tempatKerjaInput = document.getElementById('tempatKerjaInput');

  if (isAwam) {
      stafFieldsContainer.style.display = 'none';
      jawatanInput.required = false; gredInput.required = false; tempatKerjaInput.required = false;
  } else {
      stafFieldsContainer.style.display = 'block';
      jawatanInput.required = true; gredInput.required = true; tempatKerjaInput.required = true;
  }
}