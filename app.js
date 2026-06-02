// ── STATE ─────────────────────────────────────────────────────────────────────
const byId = {};
S.forEach(s => (byId[s.id] = s));

let sel = null, activeEl = null;
let jActive = false, jPaused = false, jIdx = 0, jTimer = null;
let gf = '', ef = '';
const activeLines = new Set(Object.keys(LM));
const JDUR = 9000; // ms per station in journey mode

function getFiltered() {
  return S.filter(s =>
    activeLines.has(s.lg) &&
    (!gf || s.genres.includes(gf)) &&
    (!ef || s.eras.includes(ef))
  );
}

// ── MAP INIT ──────────────────────────────────────────────────────────────────
const map = L.map('map', {
  center: [40.72, -73.95],
  zoom: 11,
  zoomControl: false,
  attributionControl: true,
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  maxZoom: 19,
  subdomains: 'abcd',
  attribution: '© <a href="https://carto.com/">Carto</a> © <a href="https://openstreetmap.org/">OSM</a>',
}).addTo(map);

L.control.zoom({ position: 'bottomleft' }).addTo(map);
setTimeout(() => map.invalidateSize(), 300);

// ── POLYLINES ─────────────────────────────────────────────────────────────────
const polylines = {};
Object.entries(ROUTES).forEach(([lg, ids]) => {
  const coords = ids
    .map(id => byId[id])
    .filter(Boolean)
    .map(s => [s.lat, s.lng]);

  polylines[lg] = L.polyline(coords, {
    color: LM[lg].color,
    weight: 3.5,
    opacity: 0.78,
    lineCap: 'round',
    lineJoin: 'round',
  }).addTo(map);
});

// ── MARKERS ───────────────────────────────────────────────────────────────────
const dots = {};
S.forEach(s => {
  const icon = L.divIcon({
    className: '',
    html: `<div class="sdot" style="background:${LM[s.lg].color};border:2.5px solid rgba(255,255,255,.92);width:12px;height:12px"></div>`,
    iconSize: [12, 12],
    iconAnchor: [6, 6],
  });

  const marker = L.marker([s.lat, s.lng], { icon })
    .addTo(map)
    .bindTooltip(s.name, { direction: 'top', offset: [0, -10] });

  marker.on('click', () => pick(s));
  dots[s.id] = marker;
});

// ── STATION PANEL ─────────────────────────────────────────────────────────────
function pick(s) {
  sel = s;

  // Reset previous active dot
  if (activeEl) {
    activeEl.style.transform = '';
    activeEl.style.boxShadow = '';
  }

  // Highlight selected dot
  const el = dots[s.id].getElement()?.querySelector('.sdot');
  if (el) {
    el.style.transform = 'scale(1.65)';
    el.style.boxShadow = `0 0 0 5px ${LM[s.lg].color}33`;
    activeEl = el;
  }

  map.flyTo([s.lat, s.lng], 14, { duration: 1.1 });
  renderPanel(s);
  document.getElementById('empty').style.display = 'none';
  document.getElementById('panel').classList.add('open');
}

function renderPanel(s) {
  const lm = LM[s.lg];

  // Header badges
  document.getElementById('pname').textContent = s.name;
  document.getElementById('pbadges').innerHTML =
    s.lines
      .map(l => `<span class="bl" style="background:${lm.color};color:${lm.tc}">${l}</span>`)
      .join('') +
    s.genres
      .map(g => `<span class="bg">${g}</span>`)
      .join('') +
    `<span class="be">${s.eras[0]}</span>`;

  // Panel body
  document.getElementById('pbody').innerHTML = `
    <div class="sl">Featured Track</div>
    <div class="track-meta">
      <span class="track-title">"${s.song}"</span>
      <span class="track-credit"><strong>${s.trackArtist}</strong> · ${s.year}</span>
    </div>
    <div class="sw">
      <iframe
        src="https://open.spotify.com/embed/track/${s.sid}?utm_source=generator&theme=0"
        height="80"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy">
      </iframe>
    </div>
    <div class="sl">Neighborhood</div>
    <div class="st">${s.desc}</div>
    <div class="sl">Genre History</div>
    <div class="st">${s.hist}</div>
    <div class="sl">Defining Artists</div>
    <div class="ats">
      ${s.artists.map(a => `<span class="ac">${a}</span>`).join('')}
    </div>`;
}

document.getElementById('xbtn').addEventListener('click', () => {
  document.getElementById('panel').classList.remove('open');
  document.getElementById('empty').style.display = 'flex';
  if (activeEl) {
    activeEl.style.transform = '';
    activeEl.style.boxShadow = '';
    activeEl = null;
  }
  sel = null;
});

// ── LINE FILTER BAR ───────────────────────────────────────────────────────────
const linebar = document.getElementById('linebar');

Object.entries(LM).forEach(([key, meta]) => {
  const btn = document.createElement('button');
  btn.className = 'lg-btn';
  btn.dataset.lg = key;
  btn.innerHTML =
    meta.letters
      .map(l => `<span class="lc" style="background:${meta.color};color:${meta.tc}">${l}</span>`)
      .join('') +
    `<span class="lg-name">${meta.name}</span>`;
  btn.addEventListener('click', () => toggleLine(key, btn));
  linebar.appendChild(btn);
});

function toggleLine(key, btn) {
  if (activeLines.has(key)) {
    if (activeLines.size === 1) return; // keep at least one line active
    activeLines.delete(key);
    btn.classList.add('off');
    polylines[key]?.setStyle({ opacity: 0 });
  } else {
    activeLines.add(key);
    btn.classList.remove('off');
    polylines[key]?.setStyle({ opacity: 0.78, color: LM[key].color });
  }
  updateDots();
}

// ── GENRE / ERA FILTERS ───────────────────────────────────────────────────────
document.getElementById('gf').addEventListener('change', e => {
  gf = e.target.value;
  updateDots();
});
document.getElementById('ef').addEventListener('change', e => {
  ef = e.target.value;
  updateDots();
});

function updateDots() {
  const visible = new Set(getFiltered().map(s => s.id));
  S.forEach(s => {
    const el = dots[s.id].getElement()?.querySelector('.sdot');
    if (el) el.classList.toggle('dim', !visible.has(s.id));
  });
}

// ── JOURNEY MODE ─────────────────────────────────────────────────────────────
const jbtn = document.getElementById('jbtn');
jbtn.addEventListener('click', () => (jActive ? endJourney() : startJourney()));

function startJourney() {
  const f = getFiltered();
  if (!f.length) return;
  jActive = true;
  jPaused = false;
  jIdx = 0;
  jbtn.textContent = '✕ End Journey';
  document.getElementById('jc').classList.add('on');
  document.getElementById('jplay').textContent = '⏸ Pause';
  goTo(f, 0);
}

function goTo(f, i) {
  pick(f[i]);

  // Progress label
  document.getElementById('jlbl').textContent = `${i + 1} / ${f.length}`;
  document.getElementById('pfill').style.width = `${((i + 1) / f.length) * 100}%`;

  // Floating map bar
  const jbar = document.getElementById('jbar');
  jbar.innerHTML = `${i + 1} / ${f.length} &nbsp;—&nbsp; ${f[i].name} &nbsp;·&nbsp; <em>"${f[i].song}"</em>`;
  jbar.classList.add('on');

  clearTimeout(jTimer);
  if (!jPaused) {
    jTimer = setTimeout(() => {
      if (i + 1 < f.length) {
        jIdx = i + 1;
        goTo(f, jIdx);
      } else {
        endJourney();
      }
    }, JDUR);
  }
}

document.getElementById('jplay').addEventListener('click', () => {
  const f = getFiltered();
  if (jPaused) {
    jPaused = false;
    document.getElementById('jplay').textContent = '⏸ Pause';
    jTimer = setTimeout(() => {
      if (jIdx + 1 < f.length) {
        jIdx++;
        goTo(f, jIdx);
      } else {
        endJourney();
      }
    }, JDUR);
  } else {
    jPaused = true;
    document.getElementById('jplay').textContent = '▶ Play';
    clearTimeout(jTimer);
  }
});

document.getElementById('jprev').addEventListener('click', () => {
  const f = getFiltered();
  clearTimeout(jTimer);
  if (jIdx > 0) {
    jIdx--;
    goTo(f, jIdx);
  }
});

document.getElementById('jnext').addEventListener('click', () => {
  const f = getFiltered();
  clearTimeout(jTimer);
  if (jIdx < f.length - 1) {
    jIdx++;
    goTo(f, jIdx);
  } else {
    endJourney();
  }
});

function endJourney() {
  jActive = false;
  jPaused = false;
  clearTimeout(jTimer);
  jbtn.textContent = '▶ Start Journey';
  document.getElementById('jc').classList.remove('on');
  document.getElementById('jbar').classList.remove('on');
}

// ── HEIGHT FIX ────────────────────────────────────────────────────────────────
// Leaflet needs an explicit pixel height — recalculate on load and resize.
function fixHeight() {
  const hdrH = document.getElementById('hdr').offsetHeight;
  const lbH  = document.getElementById('linebar').offsetHeight;
  document.getElementById('main').style.height = (window.innerHeight - hdrH - lbH) + 'px';
}

fixHeight();
window.addEventListener('resize', () => {
  fixHeight();
  map.invalidateSize();
});
