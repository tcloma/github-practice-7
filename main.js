const centerText = document.querySelector("#center-text")
const pageBody = document.querySelector("#page-body")

centerText.addEventListener('click', () => {
    centerText.style.color = 'white';
    pageBody.style.backgroundColor = 'violet';
})