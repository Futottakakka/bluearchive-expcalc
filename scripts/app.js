/**
 * Blue Archive Sensei Account & Student Bond EXP Calculator
 * Modern, reactive, lightweight client application.
 */

// ==========================================
// 1. DATA DEFINITIONS
// ==========================================

const SENSEI_EXP_DATA = [
  { level: 1, exp: 8 },
  { level: 2, exp: 10 },
  { level: 3, exp: 15 },
  { level: 4, exp: 21 },
  { level: 5, exp: 28 },
  { level: 6, exp: 36 },
  { level: 7, exp: 45 },
  { level: 8, exp: 55 },
  { level: 9, exp: 66 },
  { level: 10, exp: 79 },
  { level: 11, exp: 93 },
  { level: 12, exp: 108 },
  { level: 13, exp: 124 },
  { level: 14, exp: 141 },
  { level: 15, exp: 159 },
  { level: 16, exp: 178 },
  { level: 17, exp: 198 },
  { level: 18, exp: 219 },
  { level: 19, exp: 241 },
  { level: 20, exp: 265 },
  { level: 21, exp: 288 },
  { level: 22, exp: 312 },
  { level: 23, exp: 337 },
  { level: 24, exp: 363 },
  { level: 25, exp: 390 },
  { level: 26, exp: 418 },
  { level: 27, exp: 447 },
  { level: 28, exp: 477 },
  { level: 29, exp: 508 },
  { level: 30, exp: 581 },
  { level: 31, exp: 656 },
  { level: 32, exp: 734 },
  { level: 33, exp: 814 },
  { level: 34, exp: 897 },
  { level: 35, exp: 982 },
  { level: 36, exp: 1069 },
  { level: 37, exp: 1159 },
  { level: 38, exp: 1251 },
  { level: 39, exp: 1346 },
  { level: 40, exp: 1443 },
  { level: 41, exp: 1543 },
  { level: 42, exp: 1645 },
  { level: 43, exp: 1750 },
  { level: 44, exp: 1857 },
  { level: 45, exp: 1966 },
  { level: 46, exp: 2078 },
  { level: 47, exp: 2192 },
  { level: 48, exp: 2309 },
  { level: 49, exp: 2428 },
  { level: 50, exp: 2550 },
  { level: 51, exp: 2674 },
  { level: 52, exp: 2800 },
  { level: 53, exp: 2929 },
  { level: 54, exp: 3060 },
  { level: 55, exp: 3194 },
  { level: 56, exp: 3330 },
  { level: 57, exp: 3469 },
  { level: 58, exp: 3610 },
  { level: 59, exp: 3754 },
  { level: 60, exp: 3900 },
  { level: 61, exp: 4048 },
  { level: 62, exp: 4199 },
  { level: 63, exp: 4352 },
  { level: 64, exp: 4508 },
  { level: 65, exp: 4666 },
  { level: 66, exp: 4831 },
  { level: 67, exp: 5007 },
  { level: 68, exp: 5186 },
  { level: 69, exp: 5369 },
  { level: 70, exp: 5556 },
  { level: 71, exp: 5747 },
  { level: 72, exp: 5942 },
  { level: 73, exp: 6141 },
  { level: 74, exp: 6344 },
  { level: 75, exp: 6552 },
  { level: 76, exp: 6768 },
  { level: 77, exp: 6989 },
  { level: 78, exp: 7216 },
  { level: 79, exp: 7449 },
  { level: 80, exp: 7682 },
  { level: 81, exp: 7915 },
  { level: 82, exp: 8148 },
  { level: 83, exp: 8381 },
  { level: 84, exp: 8883 },
  { level: 85, exp: 9460 },
  { level: 86, exp: 10614 },
  { level: 87, exp: 12922 },
  { level: 88, exp: 17538 },
  { level: 89, exp: 26770 }
];

const BOND_EXP_DATA = [
  { rank: 1, nextLevelExp: 15, totalExp: 0 },
  { rank: 2, nextLevelExp: 30, totalExp: 15 },
  { rank: 3, nextLevelExp: 30, totalExp: 45 },
  { rank: 4, nextLevelExp: 35, totalExp: 75 },
  { rank: 5, nextLevelExp: 35, totalExp: 110 },
  { rank: 6, nextLevelExp: 35, totalExp: 145 },
  { rank: 7, nextLevelExp: 40, totalExp: 180 },
  { rank: 8, nextLevelExp: 40, totalExp: 220 },
  { rank: 9, nextLevelExp: 40, totalExp: 260 },
  { rank: 10, nextLevelExp: 60, totalExp: 300 },
  { rank: 11, nextLevelExp: 90, totalExp: 360 },
  { rank: 12, nextLevelExp: 105, totalExp: 450 },
  { rank: 13, nextLevelExp: 120, totalExp: 555 },
  { rank: 14, nextLevelExp: 140, totalExp: 675 },
  { rank: 15, nextLevelExp: 160, totalExp: 815 },
  { rank: 16, nextLevelExp: 180, totalExp: 975 },
  { rank: 17, nextLevelExp: 205, totalExp: 1155 },
  { rank: 18, nextLevelExp: 230, totalExp: 1360 },
  { rank: 19, nextLevelExp: 255, totalExp: 1590 },
  { rank: 20, nextLevelExp: 285, totalExp: 1845 },
  { rank: 21, nextLevelExp: 315, totalExp: 2130 },
  { rank: 22, nextLevelExp: 345, totalExp: 2445 },
  { rank: 23, nextLevelExp: 375, totalExp: 2790 },
  { rank: 24, nextLevelExp: 410, totalExp: 3165 },
  { rank: 25, nextLevelExp: 445, totalExp: 3575 },
  { rank: 26, nextLevelExp: 480, totalExp: 4020 },
  { rank: 27, nextLevelExp: 520, totalExp: 4500 },
  { rank: 28, nextLevelExp: 560, totalExp: 5020 },
  { rank: 29, nextLevelExp: 600, totalExp: 5580 },
  { rank: 30, nextLevelExp: 645, totalExp: 6180 },
  { rank: 31, nextLevelExp: 690, totalExp: 6825 },
  { rank: 32, nextLevelExp: 735, totalExp: 7515 },
  { rank: 33, nextLevelExp: 780, totalExp: 8250 },
  { rank: 34, nextLevelExp: 830, totalExp: 9030 },
  { rank: 35, nextLevelExp: 880, totalExp: 9860 },
  { rank: 36, nextLevelExp: 930, totalExp: 10740 },
  { rank: 37, nextLevelExp: 985, totalExp: 11670 },
  { rank: 38, nextLevelExp: 1040, totalExp: 12655 },
  { rank: 39, nextLevelExp: 1095, totalExp: 13695 },
  { rank: 40, nextLevelExp: 1155, totalExp: 14790 },
  { rank: 41, nextLevelExp: 1215, totalExp: 15945 },
  { rank: 42, nextLevelExp: 1275, totalExp: 17160 },
  { rank: 43, nextLevelExp: 1335, totalExp: 18435 },
  { rank: 44, nextLevelExp: 1400, totalExp: 19770 },
  { rank: 45, nextLevelExp: 1465, totalExp: 21170 },
  { rank: 46, nextLevelExp: 1530, totalExp: 22635 },
  { rank: 47, nextLevelExp: 1600, totalExp: 24165 },
  { rank: 48, nextLevelExp: 1670, totalExp: 25765 },
  { rank: 49, nextLevelExp: 1740, totalExp: 27435 },
  { rank: 50, nextLevelExp: 1815, totalExp: 29175 },
  { rank: 51, nextLevelExp: 1890, totalExp: 30990 },
  { rank: 52, nextLevelExp: 1965, totalExp: 32880 },
  { rank: 53, nextLevelExp: 2040, totalExp: 34845 },
  { rank: 54, nextLevelExp: 2120, totalExp: 36885 },
  { rank: 55, nextLevelExp: 2200, totalExp: 39005 },
  { rank: 56, nextLevelExp: 2280, totalExp: 41205 },
  { rank: 57, nextLevelExp: 2365, totalExp: 43485 },
  { rank: 58, nextLevelExp: 2450, totalExp: 45850 },
  { rank: 59, nextLevelExp: 2535, totalExp: 48300 },
  { rank: 60, nextLevelExp: 2625, totalExp: 50835 },
  { rank: 61, nextLevelExp: 2715, totalExp: 53460 },
  { rank: 62, nextLevelExp: 2805, totalExp: 56175 },
  { rank: 63, nextLevelExp: 2895, totalExp: 58980 },
  { rank: 64, nextLevelExp: 2990, totalExp: 61875 },
  { rank: 65, nextLevelExp: 3085, totalExp: 64865 },
  { rank: 66, nextLevelExp: 3180, totalExp: 67950 },
  { rank: 67, nextLevelExp: 3280, totalExp: 71130 },
  { rank: 68, nextLevelExp: 3380, totalExp: 74410 },
  { rank: 69, nextLevelExp: 3480, totalExp: 77790 },
  { rank: 70, nextLevelExp: 3585, totalExp: 81270 },
  { rank: 71, nextLevelExp: 3690, totalExp: 84855 },
  { rank: 72, nextLevelExp: 3795, totalExp: 88545 },
  { rank: 73, nextLevelExp: 3900, totalExp: 92340 },
  { rank: 74, nextLevelExp: 4010, totalExp: 96240 },
  { rank: 75, nextLevelExp: 4120, totalExp: 100250 },
  { rank: 76, nextLevelExp: 4230, totalExp: 104370 },
  { rank: 77, nextLevelExp: 4345, totalExp: 108600 },
  { rank: 78, nextLevelExp: 4460, totalExp: 112945 },
  { rank: 79, nextLevelExp: 4575, totalExp: 117405 },
  { rank: 80, nextLevelExp: 4695, totalExp: 121980 },
  { rank: 81, nextLevelExp: 4815, totalExp: 126675 },
  { rank: 82, nextLevelExp: 4935, totalExp: 131490 },
  { rank: 83, nextLevelExp: 5055, totalExp: 136425 },
  { rank: 84, nextLevelExp: 5180, totalExp: 141480 },
  { rank: 85, nextLevelExp: 5305, totalExp: 146660 },
  { rank: 86, nextLevelExp: 5430, totalExp: 151965 },
  { rank: 87, nextLevelExp: 5560, totalExp: 157395 },
  { rank: 88, nextLevelExp: 5690, totalExp: 162955 },
  { rank: 89, nextLevelExp: 5820, totalExp: 168645 },
  { rank: 90, nextLevelExp: 5955, totalExp: 174465 },
  { rank: 91, nextLevelExp: 6090, totalExp: 180420 },
  { rank: 92, nextLevelExp: 6225, totalExp: 186510 },
  { rank: 93, nextLevelExp: 6360, totalExp: 192735 },
  { rank: 94, nextLevelExp: 6500, totalExp: 199095 },
  { rank: 95, nextLevelExp: 6640, totalExp: 205595 },
  { rank: 96, nextLevelExp: 6780, totalExp: 212235 },
  { rank: 97, nextLevelExp: 6925, totalExp: 219015 },
  { rank: 98, nextLevelExp: 7070, totalExp: 225940 },
  { rank: 99, nextLevelExp: 7215, totalExp: 233010 },
  { rank: 100, nextLevelExp: 7365, totalExp: 240225 }
];

const GIFTS_CATALOG = [
  {
    id: 'loved3Star',
    name: '3★ Beloved (Amazing)',
    rarity: 3,
    reaction: 'love',
    reactionText: 'Beloved (+240)',
    exp: 240,
    icon: 'img/Amazing_Effect.webp'
  },
  {
    id: 'favorite3Star',
    name: '3★ Favorite (Great)',
    rarity: 3,
    reaction: 'fav',
    reactionText: 'Favorite (+180)',
    exp: 180,
    icon: 'img/Great_Effect.webp'
  },
  {
    id: 'likeGift3Star',
    name: '3★ Liked (Normal)',
    rarity: 3,
    reaction: 'like',
    reactionText: 'Liked (+120)',
    exp: 120,
    icon: 'img/Normal_Effect.webp'
  },
  {
    id: 'loved2Star',
    name: '2★ Beloved (Amazing)',
    rarity: 2,
    reaction: 'love',
    reactionText: 'Beloved (+80)',
    exp: 80,
    icon: 'img/Amazing_Effect.webp'
  },
  {
    id: 'favorite2Star',
    name: '2★ Favorite (Great)',
    rarity: 2,
    reaction: 'fav',
    reactionText: 'Favorite (+60)',
    exp: 60,
    icon: 'img/Great_Effect.webp'
  },
  {
    id: 'likeGift2Star',
    name: '2★ Liked (Normal)',
    rarity: 2,
    reaction: 'like',
    reactionText: 'Liked (+40)',
    exp: 40,
    icon: 'img/Normal_Effect.webp'
  },
  {
    id: 'mehGift2Star',
    name: '2★ Normal (Small)',
    rarity: 2,
    reaction: 'meh',
    reactionText: 'Normal (+20)',
    exp: 20,
    icon: 'img/Small_Effect.webp'
  },
  {
    id: 'checkIn',
    name: 'Cafe Headpat / Check-In',
    rarity: 1,
    reaction: 'meh',
    reactionText: 'Check-In (+15)',
    exp: 15,
    icon: 'img/Headpat_Icon.webp'
  }
];

// Pyro refresh pricing tiers (count -> pyro cost per refill)
const PYRO_REFRESH_COSTS = [
  30, 30, 30,        // 1-3
  60, 60, 60,        // 4-6
  100, 100, 100,     // 7-9
  150, 150, 150,     // 10-12
  200, 200, 200,     // 13-15
  300, 300, 300, 300, 300 // 16-20
];

// ==========================================
// 2. THEME CONTROLLER
// ==========================================

function initTheme() {
  const savedTheme = localStorage.getItem('ba_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  setTheme(theme);

  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      setTheme(next);
    });
  }
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('ba_theme', theme);
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    const isDark = theme === 'dark';
    themeToggle.innerHTML = isDark 
      ? '<span>☀️</span> Light Mode'
      : '<span>🌙</span> Dark Mode';
  }
}

// ==========================================
// 3. TAB CONTROLLER & ROUTING
// ==========================================

function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');

  function switchTab(targetId) {
    tabBtns.forEach(btn => {
      const isTarget = btn.getAttribute('data-tab') === targetId;
      btn.classList.remove('active-schale', 'active-bond', 'active-ref');
      if (isTarget) {
        if (targetId === 'sensei') btn.classList.add('active-schale');
        else if (targetId === 'bond') btn.classList.add('active-bond');
        else if (targetId === 'reference') btn.classList.add('active-ref');
      }
    });

    panels.forEach(panel => {
      panel.classList.toggle('active', panel.id === `tab-${targetId}`);
    });
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tab = btn.getAttribute('data-tab');
      window.location.hash = tab;
      switchTab(tab);
    });
  });

  // Handle URL hash on load or change
  function handleHash() {
    const hash = window.location.hash.replace('#', '') || 'sensei';
    if (['sensei', 'bond', 'reference'].includes(hash)) {
      switchTab(hash);
    } else {
      switchTab('sensei');
    }
  }

  window.addEventListener('hashchange', handleHash);
  handleHash();
}

// ==========================================
// 4. SENSEI EXP CALCULATOR LOGIC
// ==========================================

function initSenseiCalc() {
  const curLevelInput = document.getElementById('currentLevel');
  const curExpInput = document.getElementById('currentLevelExp');
  const targetLevelInput = document.getElementById('targetLevel');
  const cafeRankSelect = document.getElementById('cafeRank');
  const apRefreshesSelect = document.getElementById('numApRefreshes');
  const tcCoinSelect = document.getElementById('TCCoinAP');
  const customApInput = document.getElementById('customApExtra');

  // Input listeners for live updates
  const inputs = [curLevelInput, curExpInput, targetLevelInput, cafeRankSelect, apRefreshesSelect, tcCoinSelect, customApInput];
  inputs.forEach(el => {
    if (!el) return;
    el.addEventListener('input', updateSenseiCalculation);
    el.addEventListener('change', updateSenseiCalculation);
  });

  // Preset buttons
  document.querySelectorAll('[data-sensei-preset]').forEach(btn => {
    btn.addEventListener('click', () => {
      const preset = btn.getAttribute('data-sensei-preset');
      const curVal = parseInt(curLevelInput.value) || 1;
      if (preset === 'plus1') {
        targetLevelInput.value = Math.min(90, curVal + 1);
      } else if (preset === '85') {
        targetLevelInput.value = 85;
      } else if (preset === '90') {
        targetLevelInput.value = 90;
      }
      updateSenseiCalculation();
    });
  });

  updateSenseiCalculation();
}

function updateSenseiCalculation() {
  const curLevelInput = document.getElementById('currentLevel');
  const curExpInput = document.getElementById('currentLevelExp');
  const targetLevelInput = document.getElementById('targetLevel');
  const cafeRankSelect = document.getElementById('cafeRank');
  const apRefreshesSelect = document.getElementById('numApRefreshes');
  const tcCoinSelect = document.getElementById('TCCoinAP');
  const customApInput = document.getElementById('customApExtra');

  let curLvl = parseInt(curLevelInput?.value) || 1;
  let curExp = parseInt(curExpInput?.value) || 0;
  let targetLvl = parseInt(targetLevelInput?.value) || 90;

  // Bounds enforcement
  curLvl = Math.max(1, Math.min(89, curLvl));
  targetLvl = Math.max(curLvl + 1, Math.min(90, targetLvl));
  
  const maxExpForCurrent = SENSEI_EXP_DATA[curLvl - 1]?.exp || 8;
  curExp = Math.max(0, Math.min(maxExpForCurrent - 1, curExp));

  // Sync inputs
  if (curLevelInput) curLevelInput.value = curLvl;
  if (targetLevelInput) targetLevelInput.value = targetLvl;
  if (curExpInput) {
    curExpInput.max = maxExpForCurrent - 1;
    const maxHint = document.getElementById('curExpMaxHint');
    if (maxHint) maxHint.textContent = `(0 to ${(maxExpForCurrent - 1).toLocaleString()})`;
  }

  // Calculate EXP needed
  let rawExpNeeded = 0;
  for (let i = curLvl - 1; i < targetLvl - 1; i++) {
    rawExpNeeded += SENSEI_EXP_DATA[i].exp;
  }
  const totalExpNeeded = Math.max(0, rawExpNeeded - curExp);

  // AP Calculation
  const baseAp = 450; // 150 daily + 50 weekly avg + 240 regen + 10 club
  const cafeAp = parseInt(cafeRankSelect?.value) || 740;
  const numPyroRefills = parseInt(apRefreshesSelect?.value) || 0;
  const pyroAp = numPyroRefills * 120;
  const tcPurchases = parseInt(tcCoinSelect?.value) || 0;
  const tcAp = tcPurchases * 90;
  const customAp = parseInt(customApInput?.value) || 0;

  const totalDailyAp = baseAp + cafeAp + pyroAp + tcAp + customAp;

  // Pyro cost calculation
  let totalPyroCost = 0;
  for (let i = 0; i < numPyroRefills; i++) {
    totalPyroCost += PYRO_REFRESH_COSTS[i] || 300;
  }

  // Time estimations
  const daysNeeded = totalDailyAp > 0 ? Math.ceil(totalExpNeeded / totalDailyAp) : 0;
  const weeksNeeded = (daysNeeded / 7).toFixed(1);
  const monthsNeeded = (daysNeeded / 30.44).toFixed(1);

  const finishDate = new Date();
  finishDate.setDate(finishDate.getDate() + daysNeeded);
  const dateFormatted = finishDate.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  // Render UI
  const elTotalExp = document.getElementById('senseiTotalExp');
  const elDays = document.getElementById('senseiDays');
  const elWeeks = document.getElementById('senseiWeeks');
  const elMonths = document.getElementById('senseiMonths');
  const elFinishDate = document.getElementById('senseiFinishDate');
  const elDailyAp = document.getElementById('senseiDailyAp');

  if (elTotalExp) elTotalExp.textContent = totalExpNeeded.toLocaleString();
  if (elDays) elDays.textContent = `${daysNeeded.toLocaleString()} Days`;
  if (elWeeks) elWeeks.textContent = `${weeksNeeded} wks`;
  if (elMonths) elMonths.textContent = `~${monthsNeeded} mo`;
  if (elFinishDate) elFinishDate.textContent = `Est. Completion: ${dateFormatted}`;
  if (elDailyAp) elDailyAp.textContent = `${totalDailyAp.toLocaleString()} AP/day`;

  // Render AP breakdown items
  renderApBreakdown({
    baseAp,
    cafeAp,
    tcAp,
    tcPurchases,
    pyroAp,
    numPyroRefills,
    totalPyroCost,
    customAp,
    totalDailyAp
  });
}

function renderApBreakdown(data) {
  const container = document.getElementById('senseiApBreakdown');
  if (!container) return;

  container.innerHTML = `
    <div class="breakdown-item">
      <span class="breakdown-item-name">Base AP (Regen + Missions + Club)</span>
      <span class="breakdown-item-value">+${data.baseAp} AP</span>
    </div>
    <div class="breakdown-item">
      <span class="breakdown-item-name">Cafe Production</span>
      <span class="breakdown-item-value">+${data.cafeAp} AP</span>
    </div>
    ${data.tcAp > 0 ? `
    <div class="breakdown-item">
      <span class="breakdown-item-name">Tactical Challenge (${data.tcPurchases}x Drink Refreshes)</span>
      <span class="breakdown-item-value">+${data.tcAp} AP</span>
    </div>` : ''}
    ${data.pyroAp > 0 ? `
    <div class="breakdown-item">
      <span class="breakdown-item-name">Pyroxene Refills (${data.numPyroRefills}x / ${data.totalPyroCost} Pyroxenes)</span>
      <span class="breakdown-item-value">+${data.pyroAp} AP</span>
    </div>` : ''}
    ${data.customAp > 0 ? `
    <div class="breakdown-item">
      <span class="breakdown-item-name">Additional / Event AP</span>
      <span class="breakdown-item-value">+${data.customAp} AP</span>
    </div>` : ''}
    <div class="breakdown-item" style="border-top: 1px solid var(--border-strong); font-weight: 700;">
      <span class="breakdown-item-name" style="color: var(--text-primary);">Total AP Gained Per Day</span>
      <span class="breakdown-item-value" style="color: var(--accent-schale); font-size: 1rem;">${data.totalDailyAp.toLocaleString()} AP</span>
    </div>
  `;
}

// ==========================================
// 5. STUDENT BOND EXP CALCULATOR LOGIC
// ==========================================

function initBondCalc() {
  const startRankInput = document.getElementById('startRank');
  const targetRankInput = document.getElementById('targetRank');
  const exclude3StarCheckbox = document.getElementById('exclude3Star');
  const excludeCheckInCheckbox = document.getElementById('excludeCheckIn');

  const inputs = [startRankInput, targetRankInput, exclude3StarCheckbox, excludeCheckInCheckbox];
  inputs.forEach(el => {
    if (!el) return;
    el.addEventListener('input', updateBondCalculation);
    el.addEventListener('change', updateBondCalculation);
  });

  // Preset buttons
  document.querySelectorAll('[data-bond-preset]').forEach(btn => {
    btn.addEventListener('click', () => {
      const preset = btn.getAttribute('data-bond-preset');
      if (preset === '20') targetRankInput.value = 20;
      else if (preset === '25') targetRankInput.value = 25;
      else if (preset === '50') targetRankInput.value = 50;
      else if (preset === '100') targetRankInput.value = 100;
      updateBondCalculation();
    });
  });

  updateBondCalculation();
}

function updateBondCalculation() {
  const startRankInput = document.getElementById('startRank');
  const targetRankInput = document.getElementById('targetRank');
  const exclude3StarCheckbox = document.getElementById('exclude3Star');
  const excludeCheckInCheckbox = document.getElementById('excludeCheckIn');

  let startRank = parseInt(startRankInput?.value) || 1;
  let targetRank = parseInt(targetRankInput?.value) || 20;
  const exclude3Star = exclude3StarCheckbox?.checked || false;
  const excludeCheckIn = excludeCheckInCheckbox?.checked || false;

  // Bounds
  startRank = Math.max(1, Math.min(99, startRank));
  targetRank = Math.max(startRank + 1, Math.min(100, targetRank));

  if (startRankInput) startRankInput.value = startRank;
  if (targetRankInput) targetRankInput.value = targetRank;

  const startTotal = BOND_EXP_DATA[startRank - 1]?.totalExp || 0;
  const targetTotal = BOND_EXP_DATA[targetRank - 1]?.totalExp || 0;
  const totalBondExpNeeded = Math.max(0, targetTotal - startTotal);

  // Render hero
  const elBondTotal = document.getElementById('bondTotalExp');
  const elBondSubtext = document.getElementById('bondHeroSubtext');
  if (elBondTotal) elBondTotal.textContent = totalBondExpNeeded.toLocaleString();
  if (elBondSubtext) {
    elBondSubtext.textContent = `Rank ${startRank} (${startTotal.toLocaleString()} EXP) → Rank ${targetRank} (${targetTotal.toLocaleString()} EXP)`;
  }

  // Filter gifts
  const availableGifts = GIFTS_CATALOG.filter(gift => {
    if (exclude3Star && gift.rarity === 3) return false;
    if (excludeCheckIn && gift.id === 'checkIn') return false;
    return true;
  });

  // Render individual gift counts
  renderGiftCards(totalBondExpNeeded, availableGifts);

  // Render optimal gift mix
  renderOptimalGifts(totalBondExpNeeded, availableGifts);
}

function renderGiftCards(expNeeded, gifts) {
  const container = document.getElementById('giftCardsGrid');
  if (!container) return;

  if (expNeeded <= 0) {
    container.innerHTML = `<p style="color: var(--text-muted); font-size: 0.875rem;">Target rank reached! No additional gifts needed.</p>`;
    return;
  }

  container.innerHTML = gifts.map(gift => {
    const qty = Math.ceil(expNeeded / gift.exp);
    const totalGained = qty * gift.exp;
    const wasted = totalGained - expNeeded;

    return `
      <div class="gift-card">
        <img src="${gift.icon}" alt="${gift.name}" class="gift-sprite">
        <div class="gift-details">
          <div class="gift-title">${gift.name}</div>
          <div class="gift-count">${qty.toLocaleString()} <span style="font-size: 0.8rem; font-weight: 500; color: var(--text-muted);">needed</span></div>
          <div class="gift-meta">Total: ${totalGained.toLocaleString()} EXP ${wasted > 0 ? `(+${wasted} waste)` : '(0 waste)'}</div>
        </div>
      </div>
    `;
  }).join('');
}

function renderOptimalGifts(expNeeded, gifts) {
  const container = document.getElementById('optimalGiftsContainer');
  if (!container) return;

  if (expNeeded <= 0) {
    container.innerHTML = '';
    return;
  }

  // Filter out check-in for gift optimization if other gifts are available
  const giftItems = gifts.filter(g => g.id !== 'checkIn');
  if (giftItems.length === 0) {
    container.innerHTML = `<p style="color: var(--text-muted); font-size: 0.85rem;">Only Cafe Check-ins selected.</p>`;
    return;
  }

  // Greedy with smallest waste approach
  // Sort gifts by value descending
  const sorted = [...giftItems].sort((a, b) => b.exp - a.exp);
  let remaining = expNeeded;
  const mix = [];

  for (let i = 0; i < sorted.length; i++) {
    const gift = sorted[i];
    const isSmallest = i === sorted.length - 1;
    
    if (isSmallest) {
      // Last item fills whatever is left
      const count = Math.ceil(remaining / gift.exp);
      if (count > 0) {
        mix.push({ gift, count, totalExp: count * gift.exp });
        remaining -= count * gift.exp;
      }
    } else {
      const count = Math.floor(remaining / gift.exp);
      if (count > 0) {
        mix.push({ gift, count, totalExp: count * gift.exp });
        remaining -= count * gift.exp;
      }
    }

    if (remaining <= 0) break;
  }

  const totalDelivered = mix.reduce((acc, item) => acc + item.totalExp, 0);
  const wastedExp = totalDelivered - expNeeded;

  container.innerHTML = `
    <div class="table-responsive" style="margin-top: 0.75rem;">
      <table class="data-table">
        <thead>
          <tr>
            <th>Gift Item</th>
            <th>Reaction Tier</th>
            <th>Quantity</th>
            <th>EXP Provided</th>
          </tr>
        </thead>
        <tbody>
          ${mix.map(item => `
            <tr>
              <td style="display: flex; align-items: center; gap: 0.6rem;">
                <img src="${item.gift.icon}" alt="${item.gift.name}" style="width: 24px; height: 24px; object-fit: contain;">
                <span>${item.gift.name}</span>
              </td>
              <td><span class="reaction-badge reaction-${item.gift.reaction}">${item.gift.reaction}</span></td>
              <td><strong>${item.count.toLocaleString()}x</strong></td>
              <td>+${item.totalExp.toLocaleString()} EXP</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    <div class="info-box bond-info" style="margin-top: 0.75rem;">
      <strong>Optimal Gifting Path:</strong> Delivers <strong>${totalDelivered.toLocaleString()} EXP</strong> with <strong>${wastedExp} wasted EXP</strong>.
    </div>
  `;
}

// ==========================================
// 6. ACCORDION CONTROLLER
// ==========================================

function initAccordions() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.parentElement;
      parent.classList.toggle('open');
    });
  });
}

// ==========================================
// 7. INITIALIZATION ON DOM READY
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTabs();
  initSenseiCalc();
  initBondCalc();
  initAccordions();
});
