const selectedScore = localStorage.getItem('rating')
const rating = document.querySelector('.rating');

rating.textContent = `You selected ${selectedScore} out of 5`
