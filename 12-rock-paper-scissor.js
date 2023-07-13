let score =
JSON.parse (localStorage.getItem('score')) ||  {
wins:0,
loses:0,
ties:0
};
updatescore();

/* 
if(score === null)
{
score= {
wins:0,
loses:0,
ties:0
};
}*/
let isAutoplay=false;
let intervalid;

function autoplay()
{
  if (!isAutoplay)
  {
  intervalid= setInterval(() => {
      const playerMove=pickComputerMove();
      playGame(playerMove);
      
    }, 1000);
    isAutoplay=true;
  }
  else{
clearInterval(intervalid);
isAutoplay=false;

  }
  
}


function updatescore()
{
document.querySelector('.js-score').innerHTML=`Wins:${score.wins},Lose:${score.loses},Tie:${score.ties}`;
}


document.querySelector('.js-rock-button').addEventListener('click',()=>
{
  playGame('rock');
});

document.body.addEventListener('keydown',(event)=>
{
  if(event.key==='r')
  {
    playGame('rock');

  }
  else if(event.key==='p')
  {
    playGame('paper');
  }
  else if(event.key==='s')
  {
    playGame('scissors');
  }

}

);
document.querySelector('.js-paper-button').addEventListener('click',()=>
{
  playGame('paper');
});


document.querySelector('.js-scissor-button').addEventListener('click',()=>
{
  playGame('scissors');
});



function playGame(playerMove) {
const computerMove = pickComputerMove();

let result = '';

if (playerMove === 'scissors') {
  if (computerMove === 'rock') {
    result = 'You lose.';
  } else if (computerMove === 'paper') {
    result = 'You win.';
  } else if (computerMove === 'scissors') {
    result = 'Tie.';
  }

} else if (playerMove === 'paper') {
  if (computerMove === 'rock') {
    result = 'You win.';
  } else if (computerMove === 'paper') {
    result = 'Tie.';
  } else if (computerMove === 'scissors') {
    result = 'You lose.';
  }
  
} else if (playerMove === 'rock') {
  if (computerMove === 'rock') {
    result = 'Tie.';
  } else if (computerMove === 'paper') {
    result = 'You lose.';
  } else if (computerMove === 'scissors') {
    result = 'You win.';
  }
}
if(result==='You win.')

{
score.wins+=1;

}
else if(result==='You lose.')

{
score.loses+=1;

}else if(result==='Tie.')

{
score.ties+=1;

}
//localStorage.setItem('message','hello');
localStorage.setItem('score',JSON.stringify(score));

updatescore();


document.querySelector('.js-result').innerHTML=result;

document.querySelector('.js-move').innerHTML=`You <img src="img/${playerMove}-emoji.png" class="rock">  <img src="img/${computerMove}
-emoji.png" class="rock" >computer`;

}

function pickComputerMove() {
const randomNumber = Math.random();

let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1 / 3) {
  computerMove = 'rock';
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
  computerMove = 'paper';
} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
  computerMove = 'scissors';
}

return computerMove;
}