const listOfTipButton = document.querySelectorAll(".btn-tip");
let previousSelectedBtn;
let tipAmount="";
const billAmount = document.getElementById("in-bill");
const amountOfPeople = document.getElementById("in-amountOfPeople");
const resetButton = document.getElementById("reset-btn");

billAmount.addEventListener("change", function () {
    isDataCollected();
})

listOfTipButton.forEach(button => {
    button.addEventListener("click", function (event) {
        if (previousSelectedBtn) {
            previousSelectedBtn.classList.remove("selected");
            tipAmount = "";
        }
        previousSelectedBtn = event.target;
        if (previousSelectedBtn.nodeName === "INPUT") {
            if (previousSelectedBtn.value !== "") {
                tipAmount = Number(previousSelectedBtn.value);
            } else {
                previousSelectedBtn.addEventListener("change", function () {
                    tipAmount = Number(previousSelectedBtn.value);
                })
            }
        } else {
            previousSelectedBtn.classList.add("selected");
            tipAmount = Number(previousSelectedBtn.id);
        }
        isDataCollected();
    });
});

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

