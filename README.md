# Blue Archive Sensei & Student Bond EXP Calculator

A sleek, modern, live-reactive web tool for Blue Archive players to estimate Account (Sensei) level progression time and optimize Student Bond / Relationship gifting paths.

🔗 **Live Tool**: [https://sensei.lol](https://sensei.lol)

---

## Features

### 🌟 Sensei Account EXP Calculator
- Calculates exact EXP needed from Level 1 to 90 (current cap).
- Real-time daily AP breakdown:
  - **Base AP (450 AP/day)**: 240 natural regeneration + 150 daily missions + 50 weekly mission average (350/7) + 10 club check-in.
  - **Cafe Generation**: Up to Cafe Rank 10 (+740 AP/day).
  - **Tactical Challenge (PvP) Shop**: 0–4 daily stamina drink purchases (+360 AP/day).
  - **Pyroxene AP Refills**: 0–20 refills with real-time Pyroxene cost calculation.
  - **Custom AP Input**: For monthly packs, web events, and event hoardings.
- Instant estimates for total days, weeks, months, and projected completion calendar date.

### ❤️ Student Bond / Relationship Calculator
- Calculates exact Bond EXP required between Ranks 1 to 100.
- Quick milestone targets: Rank 20 (Unique Item T1 / L2D), Rank 25 (Unique Item T2), Rank 50 (Max Stat Cap), Rank 100.
- Detailed single-gift requirements with reaction tiers (Normal, Liked, Favorite, Beloved), exact item count, and wasted EXP.
- Automated optimal gifting path calculation.
- Options to filter 3★ gifts and Cafe check-ins.

### 📊 In-Game Reference Tables
- Pyroxene AP Refresh pricing tiers (1–20 refreshes with cumulative Pyroxene costs).
- Academy Lesson / Schedule Favor EXP and bonus chance tables.

---

## Tech Stack & Design
- **Vanilla HTML5 / CSS3 / ES6+ JavaScript**: Zero heavy build tooling, instant loading, fully responsive.
- **Sleek Minimalist Aesthetic**: Subtle glassmorphism, refined borders, and seamless Dark/Light theme switching with `localStorage` persistence.
- **Data Sources**: [ba-data](https://github.com/aizawey479/ba-data), [Wikiru EXP Table](https://bluearchive.wikiru.jp/?%E7%B5%8C%E9%A8%93%E5%80%A4%E8%A1%A8), and [Blue Archive Wiki](https://bluearchive.fandom.com/wiki/Affection).
