let previousBtn;
$(".btn-tip").click(function (event) {
    if (previousBtn !== undefined) {
        previousBtn.removeClass("selected");
    }
    previousBtn = $(this);
    previousBtn[0].nodeName === "INPUT"
        ? true
        : $(this).addClass("selected");
});