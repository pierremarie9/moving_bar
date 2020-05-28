let bar = document.querySelector('#bar');
let ball = document.querySelector('#ball');
var moveByBar = 10;
var moveByBall = 5

window.addEventListener('load', ()=>{
    bar.style.position = 'absolute';
    ball.style.position = 'absolute';
    bar.style.left = window.innerWidth/2 - 30 + 'px';
    bar.style.top = 0;
    ball.style.left = window.innerWidth/2 - 10 + 'px';
    ball.style.top = window.innerHeight/2 - 10 + 'px';
});

window.addEventListener('keydown', (e)=>{
    switch(e.key){
        case 'ArrowLeft':
            if(parseInt(bar.style.left) > 0){
                bar.style.left = parseInt(bar.style.left) - moveByBar +'px';
            }
            break;
        case 'ArrowRight':
            if(parseInt(bar.style.left) < window.innerWidth - 60){
                bar.style.left = parseInt(bar.style.left) + moveByBar +'px';
            }
            break;
        // case 'ArrowUp':
        //     bar.style.top = parseInt(bar.style.top) - moveBy +'px';
        //     break;
        // case 'ArrowDown':
        //     bar.style.top = parseInt(bar.style.top) + moveBy +'px';
        //     break;
        case ' ':
            move(ball);
            break;
    }
});


function move(item){
    var moveDown = true;
    var moveUp = false;
    var moveSide = generateStep();
    var id = setInterval(()=>{

        if(moveDown == true && parseInt(item.style.top)< window.innerHeight - 25){
            item.style.top = parseInt(item.style.top) + moveByBall + 'px';
            item.style.left = parseInt(item.style.left) + moveSide + 'px';
            if(parseInt(item.style.left) < 0){
                moveSide = -moveSide;
            }
            else if(parseInt(item.style.left) > window.innerWidth - 23){
                moveSide = -moveSide;
            }
        }
        else if(moveDown == true){
                moveDown = false;
                moveUp = true;
        };

        if(moveUp == true && parseInt(item.style.top)> 24){
            item.style.top = parseInt(item.style.top) - moveByBall + 'px';
            item.style.left = parseInt(item.style.left) + moveSide + 'px';
            if(parseInt(item.style.left) < 0){
                moveSide = -moveSide;
            }
            else if(parseInt(item.style.left) > window.innerWidth - 23){
                moveSide = -moveSide;
            }
        }
        else if(moveUp == true && parseInt(item.style.left ) >= parseInt(bar.style.left) && parseInt(item.style.left) <= parseInt(bar.style.left) + 40){
                moveUp = false;
                moveDown = true;
                moveSide = generateStep();
        }
        else if(moveUp == true){
            let lose = document.createElement('div');
            lose.textContent = "You lost loser !";
            lose.style.color = "white";
            document.body.append(lose);
            clearInterval(id);
        };
        
    }, 18);

};

function generateStep(){
    randomOne = Math.random();
    randomTwo = Math.random();

    if(randomOne < 0.5){
        return - (randomTwo*7);
    }
    else{
        return randomTwo*7;
    }

}