// Data program yang sudah dibersihkan dan dirapikan
const programs = [
  { category: 'whv', title: 'Writing Task 1 — General Training', mode: 'offline', price: 500000, priceStr: 'IDR 500.000', description: 'Kursus singkat dan praktis buat nulis Task 1 (General Training).', target: 'Peserta WHV atau yang butuh perbaikan cepat di Task 1' },
  { category: 'whv', title: 'Private Class', mode: 'hybrid', price: 100000, priceStr: 'Rp 100.000/jam', description: 'Kelas privat 1:1, materi disesuaikan kebutuhanmu.', target: 'Peserta yang mau perhatian guru 1:1' },
  { category: 'whv', title: 'Writing Task 2 — Fast-Track', mode: 'offline', price: 450000, priceStr: 'IDR 450.000', description: 'Program cepat untuk meningkatkan kemampuan Task 2 (Essay).', target: 'Peserta yang perlu peningkatan cepat untuk esai' },
  { category: 'whv', title: 'Reading & Listening — Fast-Track', mode: 'offline', price: 400000, priceStr: 'IDR 400.000', description: 'Pelatihan gabungan Reading & Listening untuk kecepatan dan akurasi.', target: 'Peserta yang perlu meningkatkan R & L' },
  { category: 'whv', title: 'Practice Speaking', mode: 'offline', price: 200000, priceStr: 'IDR 200.000', description: 'Sesi latihan speaking fokus ke kelancaran dan confidence.', target: 'Peserta yang ingin latihan speaking intensif' },
  { category: 'whv', title: 'IELTS Basic', mode: 'offline', price: 500000, priceStr: 'IDR 500.000', description: 'Paket pengantar untuk memahami format IELTS dan strategi dasar.', target: 'Pemula' },

  { category: 'akademis', title: 'Writing Task 2 — Intensif', mode: 'offline', price: 700000, priceStr: 'IDR 700.000', description: 'Deep-dive buat nulis esai akademik yang kuat dan terstruktur.', target: 'Mahasiswa atau profesional' },
  { category: 'akademis', title: 'Reading & Listening — Intensif', mode: 'offline', price: 650000, priceStr: 'IDR 650.000', description: 'Latihan untuk teks dan audio tingkat akademik.', target: 'Yang butuh menangani teks akademik' },
  { category: 'akademis', title: 'Writing Task 1 — Academic', mode: 'offline', price: 650000, priceStr: 'IDR 650.000', description: 'Latihan menulis laporan/analisis grafik dengan gaya akademik.', target: 'Kandidat Academic' },
  { category: 'akademis', title: 'Practice Speaking', mode: 'offline', price: 200000, priceStr: 'IDR 200.000', description: 'Latihan lisan untuk Academic Speaking.', target: 'Peserta Academic' },
  { category: 'akademis', title: 'IELTS Basic', mode: 'offline', price: 500000, priceStr: 'IDR 500.000', description: 'Paket dasar untuk calon peserta Academic.', target: 'Pemula Academic' },

  { category: 'online', title: 'Writing Task 1 — Academic Intensif (Online)', mode: 'online', price: 1000001, priceStr: 'IDR 1.000.001', description: 'Program intensif online untuk Writing Task 1 Academic.', target: 'Peserta yang butuh intensif online' },
  { category: 'online', title: 'Reading & Listening — Intensif (Online)', mode: 'online', price: 1000003, priceStr: 'IDR 1.000.003', description: 'Pelatihan intensif Reading & Listening online.', target: 'Peserta online' },
  { category: 'online', title: 'Writing Task 1 — Academic Fast (Online)', mode: 'online', price: 600000, priceStr: 'IDR 600.000', description: 'Versi fast-track online untuk Writing Task 1 Academic.', target: 'Peserta online dengan waktu terbatas' },
  { category: 'online', title: 'Reading & Listening — Fast (Online)', mode: 'online', price: 600000, priceStr: 'IDR 600.000', description: 'Fast-track online untuk Reading & Listening.', target: 'Peserta online' },
  { category: 'online', title: 'IELTS Basic (Online)', mode: 'online', price: 600000, priceStr: 'IDR 600.000', description: 'Paket dasar online untuk IELTS.', target: 'Pemula online' },
  { category: 'online', title: 'Writing Task 2 — Intensif (Online)', mode: 'online', price: 1000002, priceStr: 'IDR 1.000.002', description: 'Program intensif online untuk Writing Task 2.', target: 'Peserta yang butuh intensif online' },
  { category: 'online', title: 'Writing Task 2 — Fast-Track (Online)', mode: 'online', price: 675000, priceStr: 'IDR 675.000', description: 'Fast-track online untuk Task 2.', target: 'Peserta yang butuh hasil cepat secara online' },
  { category: 'online', title: 'Practice Speaking (Online)', mode: 'online', price: 200000, priceStr: 'IDR 200.000', description: 'Sesi speaking online.', target: 'Peserta yang butuh latihan speaking jarak jauh' },
  { category: 'online', title: 'Academic IELTS Simulation (Online)', mode: 'online', price: 150000, priceStr: 'IDR 150.000', description: 'Simulasi tes online (kuota terbatas).', target: 'Siap-siap sebelum tes' },

  { category: 'simulation', title: 'Academic IELTS Simulation (Offline)', mode: 'offline', price: 150000, priceStr: 'IDR 150.000', description: 'Simulasi tes offline, suasana mirip tes asli.', target: 'Peserta yang butuh pengalaman tes' }
];

// Helpers
const qs = sel => document.querySelector(sel);
const qsa = sel => Array.from(document.querySelectorAll(sel));

function formatPrice(p){
  if(!p) return '-';
  return p.toLocaleString('id-ID', {style:'currency', currency:'IDR', maximumFractionDigits:0}).replace('Rp', 'IDR');
}

// Render list
function render(list){
  const root = qs('#programList');
  root.innerHTML = '';
  if(!list.length){
    root.innerHTML = '<p>Tidak ada program yang cocok.</p>';
    return;
  }
  list.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';

    const h = document.createElement('h3');
    h.textContent = p.title;

    const price = document.createElement('div');
    price.className = 'price';
    price.textContent = p.priceStr || formatPrice(p.price);

    const badges = document.createElement('div');
    badges.innerHTML = `<span class="badge">${p.category.toUpperCase()}</span><span class="badge">${p.mode}</span>`;

    const desc = document.createElement('p');
    desc.textContent = p.description;

    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.innerHTML = `<small class="muted">Target: ${p.target}</small>`;

    card.appendChild(h);
    card.appendChild(price);
    card.appendChild(badges);
    card.appendChild(desc);
    card.appendChild(meta);

    root.appendChild(card);
  });
}

// Initial render
render(programs);

// Filters
qs('#search').addEventListener('input', e => applyFilters());
qs('#categoryFilter').addEventListener('change', e => applyFilters());
qs('#modeFilter').addEventListener('change', e => applyFilters());

function applyFilters(){
  const q = qs('#search').value.trim().toLowerCase();
  const category = qs('#categoryFilter').value;
  const mode = qs('#modeFilter').value;

  const filtered = programs.filter(p => {
    if(category !== 'all' && p.category !== category) return false;
    if(mode !== 'all'){
      if(mode === 'private' && p.mode !== 'hybrid') return false; // private class mapped to hybrid
      if(mode !== 'private' && p.mode !== mode) return false;
    }
    if(!q) return true;
    const hay = `${p.title} ${p.description} ${p.target} ${p.priceStr} ${p.price}`.toLowerCase();
    return hay.includes(q);
  });
  render(filtered);
}

// CSV export
qs('#exportCsv').addEventListener('click', ()=>{
  const rows = programs.map(p => ({
    kategori: p.category,
    nama: p.title,
    mode: p.mode,
    harga: p.priceStr || p.price,
    deskripsi: p.description,
    target: p.target
  }));

  const csv = toCsv(rows);
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'programs.csv';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

function toCsv(arr){
  if(!arr.length) return '';
  const keys = Object.keys(arr[0]);
  const lines = [keys.join(',')];
  arr.forEach(r => {
    lines.push(keys.map(k => `"${String(r[k]||'').replace(/"/g,'""')}"`).join(','));
  });
  return lines.join('\n');
}

// Small UX: click card copies title
qs('#programList').addEventListener('click', e=>{
  const card = e.target.closest('.card');
  if(!card) return;
  const title = card.querySelector('h3').textContent;
  navigator.clipboard?.writeText(title).then(()=>{
    const old = card.style.boxShadow;
    card.style.boxShadow = '0 8px 24px rgba(37,99,235,0.15)';
    setTimeout(()=> card.style.boxShadow = old, 700);
  }).catch(()=>{});
});