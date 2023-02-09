let secretNumber = Math.floor(Math.random() * 100) + 1;
console.log(secretNumber);



let score = 20;

const check = document.querySelector('.check');


check.addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = "⛔️ No number!"

    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = " 🎉 Correct Number!"
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('.highscore').textContent = score;


        document.body.style.backgroundColor = "#60b347";
        document.querySelector('.check').disabled = true;
        document.querySelector('.guess').disabled = true;

    } else if (guess != secretNumber) {
        if (score > 1) {
            let lives = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
            document.querySelector('.message').textContent = lives;
            document.querySelector('.score').textContent = score;
            --score;


        } else if (score == 1) {
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.check').disabled = true;
            document.querySelector('.guess').disabled = true;
            document.querySelector('.score').textContent = score;


        }
    }
})


document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.floor(Math.random() * 100) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});