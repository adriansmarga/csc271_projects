let membershipName = "Basic";
let membershipPrice = 10;
let months = 1;

let planSelect = document.getElementById("membership");

let priceElements = document.getElementsByClassName("price-result");

let paragraphs = document.getElementsByTagName("p");

let calculateButton = document.querySelector("#calculate");

calculateButton.addEventListener("click", function() {

    membershipPrice = Number(planSelect.value);
    membershipName = planSelect.options[planSelect.selectedIndex].text;

    months = Number(document.getElementById("months").value);

    let totalPrice = membershipPrice * months;

    document.getElementById("plan-result").textContent =
        "Selected plan: " + membershipName;

    let resultText = "<strong>Total Price: $" +
        totalPrice.toFixed(2) + "</strong>";

    priceElements[0].innerHTML = resultText;

    paragraphs[2].innerHTML =
        "<em>You selected " + months +
        " month(s) of membership!</em>";

});
