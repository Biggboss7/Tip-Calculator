const listOfTipButton = document.querySelectorAll(".btn-tip");
let previousSelectedBtn;
let tipAmount;
const billAmount = document.getElementById("in-bill");
const amountOfPeople = document.getElementById("in-amountOfPeople");

amountOfPeople.addEventListener("change", function () {
    if (Number(amountOfPeople.value) === 0) {
        amountOfPeople.parentElement.classList.add("error");
    } else {
        amountOfPeople.parentElement.classList.remove("error");
    }
    isResetAvail();
})

function isResetAvail() {
    if (billAmount.value === "" || amountOfPeople.value === "" || tipAmount ==="") {
        resetButton.disabled = true;
    } else {
        resetButton.disabled = false
    }
};

