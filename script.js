var numbers = document.querySelectorAll(`.numbers`);
var submitBtn = document.querySelector(`.submitBtn`);
var card = document.querySelector(`.card`);
var ratingCard = document.querySelector(`.rating-card`);
var thankYou = document.querySelector(`.thank-you`);
var rating = document.querySelector(`.selectedRating`)
var selectedRating=""
numbers.forEach(number => {
    number.addEventListener(`click`, function () {
        numbers.forEach(num => {
            num.classList.remove(`rating-active`);
        })
        number.classList.add(`rating-active`);
        selectedRating = number.innerText

    });
});
submitBtn.addEventListener(`click`, function () {
    if (selectedRating) {
        ratingCard.style.display = "none"
        thankYou.style.display = "block"
        rating.innerText=`you selected ${selectedRating} out of 5`

    }
    else{
        alert(`Please select a rating before submit`)
    }


});
numbers.forEach(number=>{
    number.addEventListener(`mouseover`,function(){
        number.style.cursor="pointer"
    });
});
submitBtn.addEventListener(`mouseover`,function(){
    submitBtn.style.cursor="pointer"
})