const getrock = document.getElementById('rock'),
      getpaper = document.getElementById('paper'),
      getscissors = document.getElementById('scissors');
const getplayer = document.querySelector('.player'),
      getbot = document.querySelector('.bot');
const getresult = document.querySelector('.result');
const getspantag = document.querySelector('span');
const getbotchoice = document.querySelector('.botchoice');
const getfinalresult = document.querySelector('.finalresult');

const botchoices = ['rock','paper','scissors'];
let min = 0;
let max = 3;
colors = ['red','green'];

let playerscore = 0;
let botscore = 0;

getspantag.style.display = 'none';

getrock.addEventListener('click', function(){
    // console.log(this.id);
    player = this.id;
    bot = botchoices[Math.floor(Math.random(max + min) * 3)];
    if(player === bot){
        getresult.innerHTML = `<span>Its a Tie</span>`;
        getbotchoice.innerHTML = `<em>Bot Choose: ${bot}</em>`
    }else if(bot === 'paper'){
        getresult.innerHTML = `<span style="background-color:${colors[0]};">You lose</span>`;
        botscore++;
        getbot.innerHTML = `BOT:${botscore}`;
        getbotchoice.innerHTML = `<em>Bot Choose: ${bot}</em>`
    }else{
        getresult.innerHTML = `<span style="background-color:${colors[1]};">You win</span>`;
        playerscore++;
        getplayer.innerHTML = `PLAYER:${playerscore}`;
        getbotchoice.innerHTML = `<em>Bot Choose: ${bot}</em>`
    }

    // if(playerscore === 2){
    //     getfinalresult.style.display = 'block';
    //     let ptag = document.createElement('p');
    //     console.log(ptag);
    //     ptag.textContent = "Game Over!You WIN the Game!Yipeee!";
    // }
});

getpaper.addEventListener('click', function(){
    player = this.id;
    bot = botchoices[Math.floor(Math.random(max + min) * 3)];
    if(player === bot){
        getresult.innerHTML = `<span>Its a Tie</span>`;
        getbotchoice.innerHTML = `<em>Bot Choose: ${bot}</em>`
    }else if(bot === 'scissors'){
        getresult.innerHTML = `<span style="background-color:${colors[0]};">You lose</span>`;
        botscore++;
        getbot.innerHTML = `BOT:${botscore}`;
        getbotchoice.innerHTML = `<em>Bot Choose: ${bot}</em>`
    }else{
        getresult.innerHTML = `<span style="background-color:${colors[1]};">You win</span>`;
        playerscore++;
        getplayer.innerHTML = `PLAYER:${playerscore}`;
        getbotchoice.innerHTML = `<em>Bot Choose: ${bot}</em>`
    }
});

getscissors.addEventListener('click', function(){
    player = this.id;
    bot = botchoices[Math.floor(Math.random(max + min) * 3)];
    console.log(bot);
    if(player === bot){
        getresult.innerHTML = `<span>Its a Tie</span>`;
        getbotchoice.innerHTML = `<em>Bot Choose: ${bot}</em>`
    }else if(bot === 'rock'){
        getresult.innerHTML = `<span style="background-color:${colors[0]};">You lose</span>`;
        botscore++;
        getbot.innerHTML = `BOT:${botscore}`;
        getbotchoice.innerHTML = `<em>Bot Choose: ${bot}</em>`
    }else{
        getresult.innerHTML = `<span style="background-color:${colors[1]};">You win</span>`;
        playerscore++;
        getplayer.innerHTML = `PLAYER:${playerscore}`;
        getbotchoice.innerHTML = `<em>Bot Choose: ${bot}</em>`
    }
});