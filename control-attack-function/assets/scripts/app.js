let maxHealth = 200;
let playerAttackValue = 0;
let monsterAttackValue = 0;
let playCurrentHealth = maxHealth;
let monsterCurrentHealth = maxHealth;
let strongAttachAction = false;
let bonusLifeFlag = false;

adjustHealthBars(maxHealth);

function attackHandler() {
  calculateAttack('ATTACK');
  setPlayersHealth(playerAttackValue,monsterAttackValue);
  evaluateWinner(monsterCurrentHealth,playCurrentHealth);
}

function strongAttackHandler() {
  //strongAttachAction = true;
  calculateAttack('STRONGATTACK');
  setPlayersHealth(playerAttackValue,monsterAttackValue);
  evaluateWinner(monsterCurrentHealth,playCurrentHealth);
}

function calculateAttack(mode) {
  if (mode === 'ATTACK') {
    playerAttackValue = 10;
    monsterAttackValue = 20;
  } else if (mode === 'STRONGATTACK') {
    playerAttackValue = 20;
    monsterAttackValue = 20;
  }
}

function setPlayersHealth(playerAttackValue,monsterAttackValue) {
  const monsterDamage = dealMonsterDamage(playerAttackValue);
  monsterCurrentHealth = monsterCurrentHealth - monsterDamage;
  const playerDamage = dealPlayerDamage(monsterAttackValue);
  playCurrentHealth = playCurrentHealth - playerDamage;
  console.log(playerDamage,monsterDamage);
}

function evaluateWinner(monsterCurrentHealth,playCurrentHealth) {
  if ( monsterCurrentHealth <= 0 && playCurrentHealth > 0) {
    alert('You Won!!!!YaY Congratulation');
    resetGame(maxHealth);
  } else if (playCurrentHealth <= 0 && monsterCurrentHealth > 0) {
    alert('You Lost!!!! Try Again');
    resetGame(maxHealth);
  } else if (playCurrentHealth === 0 && monsterCurrentHealth === 0) {
    alert('Its a Draw!!!! Try Again');
    resetGame(maxHealth);
  } else if (playCurrentHealth <= 0 && monsterCurrentHealth <= 0) {
    alert('Its a Draw!!!! Try Again');
    resetGame(maxHealth);
  }
}

function healPlayer() {
  const increaseHealth = 10;
  increasePlayerHealth(increaseHealth);
  playCurrentHealth = playerHealthBar.value
  attackHandler();
}

function bonusLife() {
  const increaseHealth = 50;
  if (!bonusLifeFlag) {
    increasePlayerHealth(increaseHealth);
    bonusLifeFlag = true;
  } 
}

attackBtn.addEventListener('click',attackHandler);
strongAttackBtn.addEventListener('click',strongAttackHandler);
healBtn.addEventListener('click',healPlayer);
bonusLifeEl.addEventListener('click',bonusLife);