let bar = document.querySelector('#bar');
let moveBy = 10;

window.addEventListener('load', ()=>{
    bar.style.position = 'absolute';
    bar.style.left = window.innerWidth/2 - 30 + 'px';
    bar.style.top = 0;
})

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
    }
});