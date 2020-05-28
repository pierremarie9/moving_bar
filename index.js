let bar = document.querySelector('#bar');
let ball = document.querySelector('#ball');
let moveBy = 10;

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
                bar.style.left = parseInt(bar.style.left) - moveBy +'px';
            }
            break;
        case 'ArrowRight':
            if(parseInt(bar.style.left) < window.innerWidth - 60){
                bar.style.left = parseInt(bar.style.left) + moveBy +'px';
            }
            break;
        // case 'ArrowUp':
        //     bar.style.top = parseInt(bar.style.top) - moveBy +'px';
        //     break;
        // case 'ArrowDown':
        //     bar.style.top = parseInt(bar.style.top) + moveBy +'px';
        //     break;
        case ' ':
            document.body.style.backgroundColor = 'red';
            move(ball);
            break;
    }
});


function move(item){
    var id = setInterval(()=>{
        if(parseInt(item.style.top)< window.innerHeight - 25){
            item.style.top = parseInt(item.style.top) + moveBy + 'px';
        }
    }, 100);

}