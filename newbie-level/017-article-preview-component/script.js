shareBtn = document.querySelector(".share");
popUp = document.querySelector(".popup");
shareBtn.addEventListener("click", () => {
    shareBtn.classList.toggle("active");
    popUp.classList.toggle("active");
})