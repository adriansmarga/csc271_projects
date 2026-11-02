var membershipName = "";
var membershipPrice = 0;
var months = 1;

var planSelect = document.getElementById("membership");
var planResult = document.getElementById("plan-result");
var totalPriceResult = document.getElementById("total-price");
var description = document.getElementById("calculator-description");
var calculateButton = document.getElementById("calculate");


calculateButton.addEventListener("click", function() {

    membershipPrice = planSelect.value;
    membershipName = planSelect.options[planSelect.selectedIndex].text;

    months = document.getElementById("months").value;

    var totalPrice = membershipPrice * months;

    planResult.textContent = "Selected plan: " + membershipName;

    totalPriceResult.innerHTML =
        "<strong>Total Price: $" + totalPrice.toFixed(2) + "</strong>";

    description.innerHTML =
        "<em>You selected " + months + " month(s) of membership!</em>";

});

