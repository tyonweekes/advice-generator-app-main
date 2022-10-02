const adviceId = document.querySelector('.advice-id');
const adviceText = document.querySelector('.advice-text');
const diceButton = document.querySelector('.dice-button');

diceButton.addEventListener('click', () => {
    getAdvice();
});

window.onload = () => {
    getAdvice();
};

function getAdvice() {
    fetch('https://api.adviceslip.com/advice').then(response => {
        return response.json();
    }).then(adviceData => {
        const adviceObject = adviceData.slip;
        adviceText.textContent = `${adviceObject.advice}`;
        adviceId.textContent = `${adviceObject.id}`;
    }).catch(error => {
        console.log(error);
    });
};