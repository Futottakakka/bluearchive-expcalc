var levelData = [
    { "level": 1, "exp": 8 },
    { "level": 2, "exp": 10 },
    { "level": 3, "exp": 15 },
    { "level": 4, "exp": 21 },
    { "level": 5, "exp": 28 },
    { "level": 6, "exp": 36 },
    { "level": 7, "exp": 45 },
    { "level": 8, "exp": 55 },
    { "level": 9, "exp": 66 },
    { "level": 10, "exp": 79 },
    { "level": 11, "exp": 93 },
    { "level": 12, "exp": 108 },
    { "level": 13, "exp": 124 },
    { "level": 14, "exp": 141 },
    { "level": 15, "exp": 159 },
    { "level": 16, "exp": 178 },
    { "level": 17, "exp": 198 },
    { "level": 18, "exp": 219 },
    { "level": 19, "exp": 241 },
    { "level": 20, "exp": 265 },
    { "level": 21, "exp": 288 },
    { "level": 22, "exp": 312 },
    { "level": 23, "exp": 337 },
    { "level": 24, "exp": 363 },
    { "level": 25, "exp": 390 },
    { "level": 26, "exp": 418 },
    { "level": 27, "exp": 447 },
    { "level": 28, "exp": 477 },
    { "level": 29, "exp": 508 },
    { "level": 30, "exp": 581 },
    { "level": 31, "exp": 656 },
    { "level": 32, "exp": 734 },
    { "level": 33, "exp": 814 },
    { "level": 34, "exp": 897 },
    { "level": 35, "exp": 982 },
    { "level": 36, "exp": 1069 },
    { "level": 37, "exp": 1159 },
    { "level": 38, "exp": 1251 },
    { "level": 39, "exp": 1346 },
    { "level": 40, "exp": 1443 },
    { "level": 41, "exp": 1543 },
    { "level": 42, "exp": 1645 },
    { "level": 43, "exp": 1750 },
    { "level": 44, "exp": 1857 },
    { "level": 45, "exp": 1966 },
    { "level": 46, "exp": 2078 },
    { "level": 47, "exp": 2192 },
    { "level": 48, "exp": 2309 },
    { "level": 49, "exp": 2428 },
    { "level": 50, "exp": 2550 },
    { "level": 51, "exp": 2674 },
    { "level": 52, "exp": 2800 },
    { "level": 53, "exp": 2929 },
    { "level": 54, "exp": 3060 },
    { "level": 55, "exp": 3194 },
    { "level": 56, "exp": 3330 },
    { "level": 57, "exp": 3469 },
    { "level": 58, "exp": 3610 },
    { "level": 59, "exp": 3754 },
    { "level": 60, "exp": 3900 },
    { "level": 61, "exp": 4048 },
    { "level": 62, "exp": 4199 },
    { "level": 63, "exp": 4352 },
    { "level": 64, "exp": 4508 },
    { "level": 65, "exp": 4666 },
    { "level": 66, "exp": 4831 },
    { "level": 67, "exp": 5007 },
    { "level": 68, "exp": 5186 },
    { "level": 69, "exp": 5369 },
    { "level": 70, "exp": 5556 },
    { "level": 71, "exp": 5747 },
    { "level": 72, "exp": 5942 },
    { "level": 73, "exp": 6141 },
    { "level": 74, "exp": 6344 },
    { "level": 75, "exp": 6552 },
    { "level": 76, "exp": 6768 },
    { "level": 77, "exp": 6989 },
    { "level": 78, "exp": 7216 },
    { "level": 79, "exp": 7449 },
    { "level": 80, "exp": 7682 },
    { "level": 81, "exp": 7915 },
    { "level": 82, "exp": 8148 },
    { "level": 83, "exp": 8381 },
    { "level": 84, "exp": 8883 },
    { "level": 85, "exp": 9460 }
];

function calculateXP() {
    var currentLevel = parseInt(document.getElementById("currentLevel").value);
    var targetLevel = parseInt(document.getElementById("targetLevel").value);
    var currentLevelExp = parseInt(document.getElementById("currentLevelExp").value);

    if (isNaN(currentLevel) || isNaN(targetLevel) || isNaN(currentLevelExp)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    if (targetLevel <= currentLevel) {
        alert("Target level must be greater than current level.");
        return;
    }
    var expNeeded = 0;
    for (var i = currentLevel - 1; i < targetLevel - 1; i++) {
        expNeeded += levelData[i].exp;
    }
    document.getElementById("expNeeded").innerHTML = "XP needed: " + expNeeded;

    var expPerDay = parseInt(document.getElementById("expPerDay").value);
    var totalEXPNeeded = expNeeded - currentLevelExp;
    var daysNeeded = Math.ceil((totalEXPNeeded / expPerDay));
    var monthsNeeded = Math.ceil((daysNeeded / 30.44));

    document.getElementById("expNeeded").innerHTML = "Exp needed: " + totalEXPNeeded + ". Estimated time to reach target level: " + daysNeeded + " days (~" + monthsNeeded + " months).";
}
function updateExpPerDay() {
    const cafeRankSelect = document.getElementById("cafeRank");
    const apRefreshSelect = document.getElementById("numApRefreshes");
    const expPerDayInput = document.getElementById("expPerDay");
    const baseExpPerDay = 450; // Set the base value to 450 (Daily average without cafe)
    const selectedCafeRankAP = parseInt(cafeRankSelect.value);
    const selectedTCCoinPurchases = parseInt(TCCoinAP.value);
    const selectedPyroRefreshAP = parseInt(numApRefreshes.value);
    const updatedExpPerDay = baseExpPerDay + selectedCafeRankAP + selectedPyroRefreshAP;

    expPerDayInput.value = updatedExpPerDay;
}
function displayCalculationDetails() {
    const cafeBonus = parseInt(document.getElementById('cafeRank').value);
    const TCCoinAPBonus = parseInt(document.getElementById('TCCoinAP').value);
    const pyroRefresh = parseInt(document.getElementById('numApRefreshes').value);
    const dailyAmount = 450;
    const details = `Cafe Bonus: ${cafeBonus} + Daily Amount: ${dailyAmount} + Pyro Refresh AP: ${pyroRefresh} + TC Coin Purchases: ${TCCoinAPBonus}  = ${cafeBonus + dailyAmount + pyroRefresh + TCCoinAPBonus}`;
    document.getElementById('calculationDetails').innerText = details;
}
function updateExpPerDay() {
    document.getElementById('expPerDay').value = parseInt(document.getElementById('cafeRank').value) + 450 + parseInt(document.getElementById('numApRefreshes').value) + parseInt(document.getElementById('TCCoinAP').value);
    displayCalculationDetails();
}
window.addEventListener('load', () => {
    displayCalculationDetails();
});

//Theme Toggle Script
var themeToggle = document.getElementById('theme-toggle');
var themeStyle = document.getElementById('theme-style');

themeToggle.addEventListener('click', function () {
    if (themeStyle.getAttribute('href') === 'css/darktheme.css') {
        themeStyle.href = 'css/lighttheme.css';
        themeToggle.textContent = 'Dark Mode';
    } else {
        themeStyle.href = 'css/darktheme.css';
        themeToggle.textContent = 'Light Mode';
    }
});