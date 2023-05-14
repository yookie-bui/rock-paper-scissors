const btns = document.querySelectorAll('button');
const user = document.getElementById('player-weapon');
const computer = document.getElementById('computer-weapon');
const userScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const gameText = document.getElementById('game-text');
const weaponList = ['Rock', 'Paper', 'Scissors'];
const resetButton = document.getElementById('reset-button');
resetButton.disabled = true;


const getComputerWeapon = () => {
    let weapon = ['Rock', 'Paper', 'Scissors'];
    let index = Math.floor(Math.random()*3);
    let computerWeapon = weapon[index];
    computer.innerHTML = computerWeapon;
    return computerWeapon;
}

const getUserWeapon = (btn) => {
    if(resetButton.disabled == true) {
        user.innerHTML = btn.value;
        playground(btn.value);
    }  
}

const playground = (user) => {
    let computer = getComputerWeapon();
    let user_score = parseInt(userScore.innerHTML);
    let computer_score = parseInt(computerScore.innerHTML);
    let weapons = [user, computer];
    let targetScore = document.getElementById('scores-select').value;
    if (weapons[0] === weapons[1]) {
        gameText.innerHTML = "DRAW!!!"
    } else {
        let userWeaponIndex = weaponList.indexOf(user);
        let computerWeaponIndex = weaponList.indexOf(computer);
        let indexes = [userWeaponIndex, computerWeaponIndex];
        if (indexes.toString == '[1,3]') {
            user_score += 1;
            gameText.innerHTML = "Hurray!!!";
        } else if (indexes.toString == '[3,1]') {
            computer_score += 1;
            gameText.innerHTML = "It's a back luck.";
        } else {
            let maxIndex = Math.max(...indexes);
            let indexOfMax = indexes.indexOf(maxIndex);;
            if (indexOfMax == 0) {
                user_score += 1;
                gameText.innerHTML = "Hurray!!!";
            } else {
                computer_score += 1;
                gameText.innerHTML = "It's a back luck";
            }
        }
    }
    userScore.innerHTML = user_score;
    computerScore.innerHTML = computer_score;
    let scores = [user_score, computer_score];
    if (scores.includes(parseInt(targetScore))) {
        let indexOfWinner = scores.indexOf(parseInt(targetScore));
        if (indexOfWinner == 0) {
            gameText.innerHTML = "You Win!!!";
            gameText.style.color = "green";
            userScore.style.color = "green";
            userScore.style.borderColor = "green";
            computerScore.style.color = "red";
            computerScore.style.borderColor = "red";
        } else {{
            gameText.innerHTML = "You Lose!!!";
            gameText.style.color = "red";
            userScore.style.color = "red";
            userScore.style.borderColor = "red";
            computerScore.style.color = "green";
            computerScore.style.borderColor = "green";
        }}
        resetButton.disabled = false;
    }
}

btns.forEach(btn => {
    btn.addEventListener ('click',() => {getUserWeapon(btn)}, "")
});

resetButton.addEventListener('click', () => {
    userScore.innerHTML = 0;
    computerScore.innerHTML = 0;
    gameText.innerHTML = "Get Your Weapon";
    user.innerHTML = "";
    computer.innerHTML = "";
    resetButton.disabled = !resetButton.disabled;
    gameText.style.color = "black";
    userScore.style.color = "black";
    userScore.style.borderColor = "black";
    computerScore.style.color = "black";
    computerScore.style.borderColor = "black";
    resetButton.disabled == true;
})
