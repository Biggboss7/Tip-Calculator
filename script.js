const amountOfPeople = document.getElementById("in-amountOfPeople");

amountOfPeople.addEventListener("change", function () {
    if (Number(amountOfPeople.value) === 0) {
        amountOfPeople.parentElement.classList.add("error");
    } else {
        amountOfPeople.parentElement.classList.remove("error");
    }
})