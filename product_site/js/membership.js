function displayWelcome() {
    var welcomeMessage = document.getElementById("welcome-message");

    if (welcomeMessage) {
        welcomeMessage.textContent =
            "Find a workout partner and make fitness better together!";
    }
}
function calculateMembershipTotal(price, months) {
    return price * months;
}

function formatCurrency(amount) {
    return "$" + amount.toFixed(2);
}
function updateMembershipCalculator() {
    var planSelect = document.getElementById("membership");
    var monthsInput = document.getElementById("months");
    var planResult = document.getElementById("plan-result");
    var totalPriceResult = document.getElementById("total-price");
    var description = document.getElementById("calculator-description");

    if (!planSelect || !monthsInput || !planResult ||
        !totalPriceResult || !description) {
        return;
    }

    var membershipPrice = parseFloat(planSelect.value);
    var membershipName = planSelect.options[planSelect.selectedIndex].text;
    var months = parseInt(monthsInput.value, 10);

    if (isNaN(months) || months < 1) {
        planResult.textContent = "";
        totalPriceResult.textContent = "Please enter at least 1 month.";
        description.textContent = "";
        return;
    }

    var totalPrice = calculateMembershipTotal(membershipPrice, months);

    planResult.textContent = "Selected plan: " + membershipName;
    totalPriceResult.textContent = "Total Price: " + formatCurrency(totalPrice);
    description.textContent =
        "You selected " + months + " month(s) of membership!";
}

displayWelcome();

var calculateButton = document.getElementById("calculate");

if (calculateButton) {
    calculateButton.addEventListener("click", updateMembershipCalculator);
}
