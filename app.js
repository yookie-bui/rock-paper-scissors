const btns = document.querySelectorAll('button');
const user = document.getElementById('player-weapon');
const computer = document.getElementById('computer-weapon');
const userScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const gameText = document.getElementById('game-text');
const weaponList = ['Rock', 'Paper', 'Scissors'];

const getComputerWeapon = () => {
    let weapon = ['Rock', 'Paper', 'Scissors'];
    let index = Math.floor(Math.random()*3);
    let computerWeapon = weapon[index];
    computer.innerHTML = computerWeapon;
    return computerWeapon;
}

const playground = (user) => {
    let computer = getComputerWeapon();
    let user_score = parseInt(userScore.innerHTML);
    let computer_score = parseInt(computerScore.innerHTML);
    let weapons = [user, computer];
    let scores = [user_score, computer_score];
    console.log(user);
    console.log(weapons.indexOf(user));
    if (weapons[0] === weapons[1]) {
        gameText.innerHTML = "DRAW!!!"
    } else {
        let userWeaponIndex = weaponList.indexOf(user);
        let computerWeaponIndex = weaponList.indexOf(computer);
        let indexes = [userWeaponIndex, computerWeaponIndex];
        if (indexes.toString == '[1,3]') {
            user_score += 1;
            gameText.innerHTML = "You Win";
        } else if (indexes.toString == '[3,1]') {
            computer_score += 1;
            gameText.innerHTML = "You Lose";
        } else {
            let maxIndex = Math.max(...indexes);
            let indexOfMax = indexes.indexOf(maxIndex);;
            if (indexOfMax == 0) {
                user_score += 1;
                gameText.innerHTML = "You Win";
            } else {
                computer_score += 1;
                gameText.innerHTML = "You Lose";
            }
        }
    }
    userScore.innerHTML = user_score;
    computerScore.innerHTML = computer_score;
    

}

btns.forEach(btn => {
    btn.addEventListener ('click', () => {
        // Get user weapon
        let userWeapon = btn.value;
        user.innerHTML = userWeapon;
        playground(userWeapon);
    })
});
