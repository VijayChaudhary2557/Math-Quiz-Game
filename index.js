let myGame = document.querySelector('.top');

let localData = {
    myWin : 0,  
};

let myData = JSON.parse(localStorage.getItem('Win'));

if (myData !== null && myData.myWin !== undefined)
{
    localData.myWin = myData.myWin;
    console.log(localData.myWin);
}


let score = document.createElement('div');
score.setAttribute('class','score-text');

let best = document.createElement('div');
best.setAttribute('class','best-text');

let h1 = document.createElement('h2');
let p1 = document.createElement('h2');
p1.innerHTML = '0'
let h2 = document.createElement('h2');
let p2 = document.createElement('h2');
p2.innerHTML = '0';
h1.textContent = 'Score:-';
h2.textContent = 'Best:-';
myGame.appendChild(score);
score.appendChild(h1);
score.appendChild(p1);
myGame.appendChild(best);
best.appendChild(h2);
best.appendChild(p2);
                                            
let main = document.querySelector('.my-game');
let logo = document.createElement('h2');
logo.setAttribute('class','logo');
logo.textContent = "Maths Calculation Game";
let startBtn = document.createElement('button');
startBtn.setAttribute('class','startBtn my-button');
startBtn.setAttribute('onclick','startGame(this)');
startBtn.textContent = 'Start Game';
main.appendChild(logo);
main.appendChild(startBtn);

let ans;

function startGame(ele)
{
    localStorage.setItem('Win',JSON.stringify(localData));
    
    if (ele!=undefined)
    {
        console.log(ele);
        ele.previousElementSibling.remove();
        ele.remove();
    }
    
    function getRandomNumber(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    let num1 = getRandomNumber(1, 10);
    let num2 = getRandomNumber(1, 10);
    if (num1 == num2)
    {
        num2++;
    }
    
    ans = num1+num2;
    let mySet = new Set();

    mySet.add(ans);
    while(mySet.size!=3)
    {
            console.log('Yes')
            let n1 = getRandomNumber(1, 10);
            mySet.add(n1);
    }

    console.log(mySet);

    let option = Array.from(mySet);

    option.sort();  
    
    console.log(num1 + "  " + num2);
    console.log(option);
    
    let question = document.querySelector('.question');
    question.textContent = num1 + " + " + num2 + " = " + "?";

    let gammer = document.querySelector('.my-game');
    let option1 = document.createElement('div');
    option1.setAttribute('class','same');
    let myOption1 = document.createElement('button');
    myOption1.setAttribute('class','option1 text btn');
    myOption1.setAttribute('onclick','ansCheck(this)');
    gammer.appendChild(option1);
    option1.appendChild(myOption1);
    myOption1.textContent = option[0];
    
    let option2 = document.createElement('div');
    option2.setAttribute('class','same');
    let myOption2 = document.createElement('button');
    myOption2.setAttribute('class','option2 text btn');
    myOption2.setAttribute('onclick','ansCheck(this)');
    gammer.appendChild(option2);
    option2.appendChild(myOption2);
    myOption2.textContent = option[1];
    
    let option3 = document.createElement('div');
    option3.setAttribute('class','same');
    let myOption3 = document.createElement('button');
    myOption3.setAttribute('class','option3 text btn');
    myOption3.setAttribute('onclick','ansCheck(this)');
    gammer.appendChild(option3);
    option3.appendChild(myOption3);
    myOption3.textContent = option[2];
}

let win = 0;
let myAnswer = document.querySelector('.answer');
let ansDiv = myAnswer.parentNode;
function ansCheck(ele) {
    let myAns = ele.textContent
    if (ans==myAns)
    {
        myAnswer.textContent = ++win;

        if (p1.textContent==p2.textContent)
        {
            p1.textContent = win;
            p2.textContent = win;
            localData.myWin = win;
        }
        else if ( p1.textContent!=p2.textContent)
        {
            p1.textContent = win;
        }
        removeContent();
        localStorage.setItem('Win',JSON.stringify(localData));
    }
    else
    {
        myAnswer.textContent = 'Wrong';
        myAnswer.setAttribute('class','wrong')
        ansDiv.setAttribute('class','ansDiv')

        let myBtns = document.querySelectorAll('.same');
        for (let i of myBtns)
        {
            i.firstElementChild.disabled = true;
        }
        let question = document.querySelector('.question');
        let restart = document.createElement('button');
        restart.setAttribute('class','restartBtn');
        restart.setAttribute('onclick','reset(this)');
        restart.textContent = 'Restart';
        question.appendChild(restart);
    }    
}

function reset(ele)
{
    p1.innerHTML = '0';
    win=0;
    ele.remove();
    removeContent();
    myAnswer.textContent = '';
    myAnswer.classList.remove('wrong');
}

function removeContent()
{
    let que = document.querySelector('.question');
    que.textContent = '';
    let myBtns = document.querySelectorAll('.same');
    for (let i of myBtns)
    {
        i.remove();
    }
    startGame();
}
window.onload = function()
{
    let myData = JSON.parse(localStorage.getItem('Win'));
    let wins = myData.myWin;
    console.log(wins);
    p2.textContent = wins;
}
