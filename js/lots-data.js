// Villas at Speaking Rock — Interactive Plat & Availability Engine
// Verified against Official Approved Preliminary Plat FP-23-0129 (Rao's Consulting Engineers)

const SPEAKING_ROCK_LOTS = [
  {
    id: 'Lot 1',
    num: 1,
    acreage: '0.71 AC',
    status: 'available',
    street: 'Bella Vita Street',
    desc: 'Premier elevated parcel along the northeast perimeter (0.71 Acres) with sweeping Hill Country horizon views.',
    x: 70.0,
    y: 29.5
  },
  {
    id: 'Lot 2',
    num: 2,
    acreage: '0.54 AC',
    status: 'available',
    street: 'Bella Vita Street',
    desc: 'Generous east-boundary homesite (0.54 Acres) flanked by mature natural tree preservation buffer.',
    x: 70.0,
    y: 38.5
  },
  {
    id: 'Lot 3',
    num: 3,
    acreage: '0.33 AC',
    status: 'available',
    street: 'Bella Vita Street',
    desc: 'East-facing homesite (0.33 Acres) with gentle building grade and optimal morning light.',
    x: 70.0,
    y: 48.5
  },
  {
    id: 'Lot 4',
    num: 4,
    acreage: '0.27 AC',
    status: 'available',
    street: 'Bella Vita Street',
    desc: 'Efficient estate footprint (0.27 Acres) with prime direct frontage on Bella Vita Street.',
    x: 70.0,
    y: 55.0
  },
  {
    id: 'Lot 5',
    num: 5,
    acreage: '0.32 AC',
    status: 'available',
    street: 'Bella Vita Street',
    desc: 'Well-proportioned rectangular parcel (0.32 Acres) with quiet street frontage and mature live oaks.',
    x: 70.0,
    y: 61.0
  },
  {
    id: 'Lot 6',
    num: 6,
    acreage: '0.36 AC',
    status: 'available',
    street: 'Capri Milano Street',
    desc: 'Private homesite footprint (0.36 Acres) situated at the bend of Capri Milano Street.',
    x: 70.0,
    y: 66.5
  },
  {
    id: 'Lot 7',
    num: 7,
    acreage: '0.53 AC',
    status: 'available',
    street: 'Capri Milano Street',
    desc: 'Substantial 0.53-acre parcel positioned along the southeast curve near the south cul-de-sac.',
    x: 69.0,
    y: 73.0
  },
  {
    id: 'Lot 8',
    num: 8,
    acreage: '0.44 AC',
    status: 'available',
    street: 'Capri Milano Street',
    desc: 'Secluded southeast estate homesite (0.44 Acres) with deep building envelope and natural privacy.',
    x: 66.5,
    y: 79.5
  },
  {
    id: 'Lot 9',
    num: 9,
    acreage: '0.31 AC',
    status: 'available',
    street: 'Capri Milano Street',
    desc: 'Southernmost private estate parcel (0.31 Acres) adjoining dedicated landscape and drainage buffer.',
    x: 66.5,
    y: 86.5
  },
  {
    id: 'Lot 10',
    num: 10,
    acreage: '0.60 AC',
    status: 'available',
    street: 'Capri Milano Street',
    desc: 'Substantial 0.60-acre south parcel with expansive building footprint and gentle topography.',
    x: 53.5,
    y: 77.5
  },
  {
    id: 'Lot 11',
    num: 11,
    acreage: '0.45 AC',
    status: 'available',
    street: 'Corso Venezia Court',
    desc: 'Interior cul-de-sac homesite (0.45 Acres) with zero through-traffic and excellent oak tree canopy.',
    x: 42.0,
    y: 78.0
  },
  {
    id: 'Lot 12',
    num: 12,
    acreage: '0.42 AC',
    status: 'available',
    street: 'Corso Venezia Court',
    desc: 'West cul-de-sac parcel (0.42 Acres) adjoining natural open space buffer zone.',
    x: 33.0,
    y: 77.0
  },
  {
    id: 'Lot 13',
    num: 13,
    acreage: '0.52 AC',
    status: 'available',
    street: 'Bella Vita Street',
    desc: 'Centrally positioned estate parcel (0.52 Acres) overlooking the main tree-lined avenue.',
    x: 52.5,
    y: 63.5
  },
  {
    id: 'Lot 14',
    num: 14,
    acreage: '0.59 AC',
    status: 'available',
    street: 'Bella Vita Street',
    desc: 'West perimeter homesite (0.59 Acres) framed by natural limestone outcroppings and heritage oaks.',
    x: 32.5,
    y: 62.5
  },
  {
    id: 'Lot 15',
    num: 15,
    acreage: '0.49 AC',
    status: 'available',
    street: 'Bella Vita Street',
    desc: 'Prime frontage parcel (0.49 Acres) along Bella Vita Street near Corso Venezia Court.',
    x: 44.5,
    y: 53.0
  },
  {
    id: 'Lot 16',
    num: 16,
    acreage: '0.44 AC',
    status: 'available',
    street: 'Corso Venezia Court',
    desc: 'West boundary estate parcel (0.44 Acres) surrounded by mature foliage with generous building envelope.',
    x: 28.0,
    y: 53.5
  },
  {
    id: 'Lot 17',
    num: 17,
    acreage: '0.43 AC',
    status: 'available',
    street: 'Napoli Toscana Court',
    desc: 'Northwest enclave parcel (0.43 Acres) with dedicated private driveway access.',
    x: 26.0,
    y: 48.5
  },
  {
    id: 'Lot 19',
    num: 19,
    acreage: '0.62 AC',
    status: 'available',
    street: 'Napoli Toscana Court',
    desc: 'Premier north cul-de-sac enclave estate (0.62 Acres) with deep building depth and total privacy.',
    x: 45.0,
    y: 36.0
  },
  {
    id: 'Lot 20',
    num: 20,
    acreage: '0.56 AC',
    status: 'available',
    street: 'Napoli Toscana Court',
    desc: 'Quiet north cul-de-sac location (0.56 Acres) with dedicated masonry perimeter wall preservation.',
    x: 55.5,
    y: 39.5
  }
];

// Initialize Interactive Plat Viewer
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('platHotspots');
  const tooltip = document.getElementById('lotTooltip');
  const filterBtns = document.querySelectorAll('.plat-filter-btn');
  const lotPillsContainer = document.getElementById('lotPillsContainer');
  const interestSelect = document.getElementById('interest');

  if (!container || !tooltip) return;

  // Render Hotspots onto Plat Map
  const renderHotspots = (filter = 'all') => {
    container.innerHTML = '';
    const filteredLots = filter === 'all' 
      ? SPEAKING_ROCK_LOTS 
      : SPEAKING_ROCK_LOTS.filter(l => l.status === filter);

    filteredLots.forEach(lot => {
      const pin = document.createElement('div');
      pin.className = `lot-hotspot status-${lot.status}`;
      pin.style.left = `${lot.x}%`;
      pin.style.top = `${lot.y}%`;
      pin.setAttribute('data-lot-id', lot.id);

      pin.innerHTML = `<div class="lot-hotspot-pin">${lot.num}</div>`;

      // Event Listeners for Tooltip
      pin.addEventListener('mouseenter', () => showTooltip(lot, pin));
      pin.addEventListener('click', (e) => {
        e.stopPropagation();
        showTooltip(lot, pin);
        highlightLotInForm(lot.id);
      });

      container.appendChild(pin);
    });
  };

  // Show Floating Tooltip
  const showTooltip = (lot, targetPin) => {
    const statusLabels = {
      available: 'Available &bull; Priority Access',
      pending: 'Pending / Reserved',
      sold: 'Sold'
    };

    const statusClasses = {
      available: 'badge-available',
      pending: 'badge-pending',
      sold: 'badge-sold'
    };

    tooltip.innerHTML = `
      <div class="lot-tooltip-header">
        <div>
          <div class="lot-tooltip-title">${lot.id}</div>
          <div class="lot-tooltip-acreage">${lot.acreage} &bull; ${lot.street}</div>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="lot-tooltip-badge ${statusClasses[lot.status]}">${statusLabels[lot.status]}</span>
          <button type="button" class="lot-tooltip-close" onclick="closeTooltip(event)" aria-label="Close details">&times;</button>
        </div>
      </div>
      <div class="lot-tooltip-desc">${lot.desc}</div>
      ${lot.status !== 'sold' 
        ? `<button type="button" class="lot-tooltip-cta" onclick="selectLotAndScroll('${lot.id}')">Inquire on ${lot.id} &rarr;</button>` 
        : '<span style="font-size:0.75rem; color:#909399; font-style:italic;">This homesite is already spoken for.</span>'
      }
    `;

    tooltip.hidden = false;

    // Highlight corresponding pin
    document.querySelectorAll('.lot-hotspot').forEach(p => p.classList.remove('active'));
    if (targetPin) targetPin.classList.add('active');

    // Highlight corresponding pill
    document.querySelectorAll('.lot-pill').forEach(p => {
      if (p.dataset.lot === lot.id) p.classList.add('active');
      else p.classList.remove('active');
    });
  };

  window.closeTooltip = (e) => {
    if (e) e.stopPropagation();
    tooltip.hidden = true;
    document.querySelectorAll('.lot-hotspot').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.lot-pill').forEach(p => p.classList.remove('active'));
  };

  // Pre-fill Form and Scroll
  window.selectLotAndScroll = (lotId) => {
    highlightLotInForm(lotId);
    const contactSec = document.getElementById('contact');
    if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const highlightLotInForm = (lotId) => {
    if (interestSelect) {
      for (let opt of interestSelect.options) {
        if (opt.value === lotId || opt.text.includes(lotId)) {
          interestSelect.value = opt.value;
          break;
        }
      }
    }
  };

  // Render Filter Buttons Counts
  filterBtns.forEach(btn => {
    const filter = btn.dataset.filter;
    const count = filter === 'all' 
      ? SPEAKING_ROCK_LOTS.length 
      : SPEAKING_ROCK_LOTS.filter(l => l.status === filter).length;
    
    const countSpan = btn.querySelector('.count');
    if (countSpan) countSpan.textContent = count;

    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderHotspots(filter);
    });
  });

  // Render Lot Pills Bar with Status Dots
  if (lotPillsContainer) {
    lotPillsContainer.innerHTML = '';
    SPEAKING_ROCK_LOTS.forEach(lot => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lot-pill';
      btn.setAttribute('data-lot', lot.id);
      btn.innerHTML = `
        <span class="lot-pill-status status-${lot.status}"></span>
        <span class="lot-pill-num">${lot.num}</span> 
        ${lot.id} &middot; ${lot.acreage}
      `;

      btn.addEventListener('click', () => {
        const pin = document.querySelector(`.lot-hotspot[data-lot-id="${lot.id}"]`);
        showTooltip(lot, pin);
      });

      lotPillsContainer.appendChild(btn);
    });
  }

  // Dual-View Mode Switcher
  const modeBtns = document.querySelectorAll('.plat-mode-btn');
  const platMapContainers = document.querySelectorAll('.plat-map-container');
  
  modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.mode;
      modeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      platMapContainers.forEach(container => {
        container.classList.remove('mode-luxury', 'mode-official', 'mode-xray', 'is-scanning');
        container.classList.add(`mode-${mode}`);

        if (mode === 'xray') {
          container.classList.add('is-scanning');
        } else {
          // Trigger a quick 1.6s scan wave transition on mode change
          container.classList.add('is-scanning');
          setTimeout(() => {
            if (!container.classList.contains('mode-xray')) {
              container.classList.remove('is-scanning');
            }
          }, 1600);
        }
      });
    });
  });

  // Initial render
  renderHotspots('all');
  platMapContainers.forEach(container => {
    container.classList.remove('mode-luxury', 'mode-official', 'mode-xray');
    container.classList.add('mode-official');
  });
  
  // Start with tooltip hidden so user can freely explore the clean plat map
  tooltip.hidden = true;
});
