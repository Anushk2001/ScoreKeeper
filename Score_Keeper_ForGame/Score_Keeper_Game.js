const p1button=document.querySelector('#p1Button');
const p2button=document.querySelector('#p2Button');

let p1Score = 0;
let p2Score = 0;
let isGameOver = false;
let winning = 3;

const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const Reset = document.querySelector('#Reset');
const winningScoreSelect = document.querySelector('#Playto');
p1Button.addEventListener('click',function(){
    if(!isGameOver)
          {
            p1Score++;
            if(p1Score === winning)
            {
                isGameOver = true;
                p1Display.classList.add('winner');
                p2Display.classList.add('looser');
                p1Button.disabled=true;
                p2Button.disabled=true;
            }
            p1Display.textContent = p1Score;
          }
})

p2Button.addEventListener('click',function(){
        if(!isGameOver)
          {
            p2Score++;
            if(p2Score === winning)
            {
                isGameOver = true;
                p2Display.classList.add('winner');
                p1Display.classList.add('looser');
                p1Button.disabled=true;
                p2Button.disabled=true;
            }
            p2Display.textContent = p2Score;
          }
})
function PleaseReset(){
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner','looser');
    p2Display.classList.remove('winner','looser');
    p1Button.disabled=false;
    p2Button.disabled=false;
}
Reset.addEventListener('click' ,PleaseReset)

winningScoreSelect.addEventListener('change' ,function(){
    winning = parseInt(this.value);
     PleaseReset();
})
