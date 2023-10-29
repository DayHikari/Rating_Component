//  Variables
// Star buttons
const starButtons = document.querySelectorAll(".star-button");

// Submit button
const submitButton = document.querySelector("#submit");

// Submit buttons a tag
const submitLink = document.querySelector("#submit-link")

// Selected score variable
let score = "";

//  Event listeners
// Star button click event listener
starButtons.forEach(element => {
    element.addEventListener("click", function () {
        starButtons.forEach(all => {
            all.className = "star-button";
        })
        element.className = "selected-star-button"
        score = element.textContent;
        submitLink.setAttribute("href", "thank-you.html");
        localStorage.setItem('rating', score)
    })
});

// Submit button click event listener
submitButton.addEventListener("click", function () {
    if (score === "") {
        alert("Please select a score")
    } 
})
