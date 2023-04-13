const submitBtn = document.querySelector(".submit-btn");
const rateBtns = document.querySelectorAll(".rate-btn");

const ratingSection = document.querySelector(".rating-section");
const thankYouSection = document.querySelector(".thankYou-section");
const rateDisplay = document.querySelector(".rate");

let finalRate = 0;

for (let rateBtn of rateBtns) {
    rateBtn.addEventListener("click", () => {
        finalRate = rateBtn.value;
    })
}

submitBtn.addEventListener("click", () => {
    ratingSection.classList.add("display-none");
    thankYouSection.classList.remove("display-none");
    rateDisplay.textContent = finalRate;
})









