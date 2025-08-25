const BASE_YEAR = 2025;
const dayNames = [
  "Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy",
];
const shortDow = ["T2","T3","T4","T5","T6","T7","CN"];
const pad = (n) => String(n).padStart(2, '0');
const formatVNDate = (d) => `${dayNames[d.getDay()]}, ${pad(d.getDate())}/${pad(d.getMonth()+1)}/${d.getFullYear()}`;
const getDaysInMonth = (year, month) => new Date(year, month, 0).getDate();
const firstDayIndexMondayStart = (year, month) => {
  const js = new Date(year, month-1, 1).getDay();
  return (js + 6) % 7;
};
function monthMatrix(year, month){
  const days = getDaysInMonth(year, month);
  const lead = firstDayIndexMondayStart(year, month);
  const cells = Array(lead).fill(null).concat(Array.from({length: days}, (_,i)=> i+1));
  while (cells.length % 7 !== 0) cells.push(null);
  while (cells.length < 42) cells.push(null);
  return cells;
}
const hasEvents = (m, d) => !!(scheduleData[m] && scheduleData[m][d] && scheduleData[m][d].length);
const eventsOf = (m, d) => (scheduleData[m] && scheduleData[m][d]) || [];

// ===== DOM =====
const today = new Date();
const todayY = today.getFullYear();
const todayM = today.getMonth()+1;
const todayD = today.getDate();
const monthTitleEl = document.getElementById('monthTitle');
const monthSelectEl = document.getElementById('monthSelect');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const gridEl = document.getElementById('calendarGrid');
const todayTextEl = document.getElementById('todayText');
const detailTitle = document.getElementById('detailTitle');
const detailSub = document.getElementById('detailSub');
const detailList = document.getElementById('detailList');
todayTextEl.textContent = formatVNDate(today);
const clamp = (v,min,max) => Math.max(min, Math.min(max, v));
const initialMonth = clamp(todayM, 8, 12);
let state = {
  month: initialMonth,
  selectedDay: (todayY === BASE_YEAR && todayM >= 8 && todayM <= 12) ? todayD : null,
};
for (let m=8; m<=12; m++){
  const opt = document.createElement('option');
  opt.value = m;
  opt.textContent = `Tháng ${m}/${BASE_YEAR}`;
  monthSelectEl.appendChild(opt);
}
monthSelectEl.value = String(state.month);
prevBtn.addEventListener('click', () => {
  state.month = clamp(state.month - 1, 8, 12);
  render();
});
nextBtn.addEventListener('click', () => {
  state.month = clamp(state.month + 1, 8, 12);
  render();
});
monthSelectEl.addEventListener('change', (e) => {
  state.month = parseInt(e.target.value, 10);
  render();
});
function render(){
  const { month } = state;
  const isTodayVisible = (todayY === BASE_YEAR && month === todayM);
  monthTitleEl.textContent = `Tháng ${month}/${BASE_YEAR}`;
  gridEl.innerHTML = '';
  const matrix = monthMatrix(BASE_YEAR, month);
  matrix.forEach((d) => {
    const btn = document.createElement('button');
    btn.className = 'cell';
    if (d == null){
      btn.setAttribute('disabled', '');
      gridEl.appendChild(btn);
      return;
    }
    const isToday = isTodayVisible && d === todayD;
    if (isToday) btn.classList.add('today');
    const row = document.createElement('div');
    row.className = 'date-row';
    const n = document.createElement('div');
    n.className = 'date-number';
    n.textContent = d;
    row.appendChild(n);
    const has = hasEvents(month, d);
    if (has){
      const b = document.createElement('span');
      b.className = 'badge';
      b.textContent = `${eventsOf(month, d).length} lớp`;
      row.appendChild(b);
    }
    btn.appendChild(row);
    if (has){
      const sn = document.createElement('div');
      sn.className = 'snippet';
      eventsOf(month, d).slice(0,2).forEach((ev) => {
        const line = document.createElement('div');
        line.className = 'item-line';
        line.innerHTML = `<span class="item-time">${ev.time}</span> · ${ev.name}`;
        sn.appendChild(line);
      });
      const extra = eventsOf(month, d).length - 2;
      if (extra > 0){
        const more = document.createElement('div');
        more.className = 'item-line';
        more.style.color = '#6b7280';
        more.textContent = `+ ${extra} lớp nữa`;
        sn.appendChild(more);
      }
      btn.appendChild(sn);
    }
    if (isToday){
      const tag = document.createElement('div');
      tag.className = 'tag-homnay';
      tag.textContent = 'Hôm nay';
      btn.appendChild(tag);
    }
    btn.addEventListener('click', () => {
      state.selectedDay = d;
      renderDetail();
    });
    gridEl.appendChild(btn);
  });
  if (!state.selectedDay || !hasEvents(state.month, state.selectedDay)){
    renderDetail();
  } else {
    renderDetail();
  }
}
function renderDetail(){
  const d = state.selectedDay;
  if (!d){
    detailTitle.textContent = 'Chọn một ngày trên lịch';
    detailSub.textContent = '';
    detailList.innerHTML = '';
    return;
  }
  detailTitle.textContent = `Ngày ${pad(d)}/${pad(state.month)}/${BASE_YEAR}`;
  detailSub.textContent = formatVNDate(new Date(BASE_YEAR, state.month-1, d));
  const list = eventsOf(state.month, d);
  detailList.innerHTML = '';
  if (!list.length){
    const li = document.createElement('li');
    li.textContent = 'Không có lịch học.';
    detailList.appendChild(li);
    return;
  }
  list.forEach((ev) => {
    const li = document.createElement('li');
    const row = document.createElement('div');
    row.className = 'row';
    const left = document.createElement('div');
    const t = document.createElement('div'); t.className = 'title'; t.textContent = ev.name; left.appendChild(t);
    const c = document.createElement('div'); c.className = 'code'; c.textContent = ev.code; left.appendChild(c);
    const right = document.createElement('div'); right.style.fontSize = '14px'; right.style.fontWeight = '600'; right.textContent = ev.time;
    row.appendChild(left); row.appendChild(right);
    li.appendChild(row);
    const meta = document.createElement('div'); meta.className = 'meta';
    const m1 = document.createElement('span'); m1.textContent = `📍 ${ev.location}`; meta.appendChild(m1);
    const m2 = document.createElement('span'); m2.textContent = `👤 ${ev.teacher}`; meta.appendChild(m2);
    const m3 = document.createElement('span'); m3.textContent = `🎓 ${ev.credits} tín chỉ`; meta.appendChild(m3);
    li.appendChild(meta);
    detailList.appendChild(li);
  });
}
render();
if (state.selectedDay){ renderDetail(); }
