
const timer = document.querySelector('.timer');
const resultDisplay = document.querySelector('.result_display');
const firstPlayer = document.querySelector('.first_player');
const wordForm = document.querySelector('#word_input_form');
const wordInput = document.querySelector('#word_input');
const showWordArea = document.querySelector('.show_word_area');
const fillIn = document.querySelector('.fill_in');
const totalChar = document.querySelector('.total_char');
const realWord = document.querySelector('.real_word');
const thumbsUp = document.querySelector('.thumbs_up');
const thumbsDown = document.querySelector('.thumbs_down');
const arrOfWords = document.querySelector('.arr_of_words');
const wordDisplay = document.querySelector('.word_display');
const guessWord = document.querySelector('.guess_word');
const playerToChooseWord = document.querySelector('.player_to_choose_word');
const player1NameForScore = document.querySelector('.player_1_name_for_score');
const winnerDisplay = document.querySelector('.winner_display');
const playerWinner = document.querySelector('.player_winner');
const sidePoints = document.querySelector('.side_points');
const playerPointsDisplay = document.querySelector('.player_points_display');
const playerBox = document.querySelector('.player')
let player1Score = document.querySelector('.player_1_score');
let currentRound = document.querySelector('.current_round');
let contestantName = localStorage.getItem('player1') || "player1"
let wordInputValue;
let word;
let listOfWords = JSON.parse(localStorage.getItem('wordList'));

init();


function init(){

guessWord.style.display="none";
wordForm.style.display="none";
playerToChooseWord.innerText=contestantName;
player1NameForScore.innerText = contestantName;
firstPlayer.innerText=contestantName;
playerWinner.innerText=contestantName;
player1Score.innerText="";
currentRound.innerText=1;
winnerDisplay.style.display="none";
wordDisplay.style.display="block";
sidePoints.innerText=0;
playerBox.classList.remove('green');

}




function likeDislikeFunction(e){
  let action;

  if(e.target.classList.contains('thumbs_up')){
     action="like";
  }
  else if(e.target.classList.contains('thumbs_down')){
    action="dislike";
  }


  showWordArea.innerHTML += ` <div class="written_words">
  <p class="written_by">${contestantName} ${action} the drawing</p><span class="word_line"></span>
</div>`


thumbsUp.style.display="none";
thumbsDown.style.display="none";
}

thumbsUp.addEventListener('click',likeDislikeFunction)
thumbsDown.addEventListener('click',likeDislikeFunction)




function wordInputSubmit(e){
  e.preventDefault();
  let greenClass;
  if(wordInput.value==word){
    wordInputValue="You guess the right word";
    let scr = Number(player1Score.innerText);
   scr+=15;
   player1Score.innerText="";
   sidePoints.innerText="";
    if(scr>0){
      player1Score.classList.add('score_green')
    }else{
      player1Score.classList.remove('score_green')
    }
    player1Score.innerText+=scr;
    sidePoints.innerText+=scr;
    playerBox.classList.add('green');

    greenClass="green";
  }else{
    wordInputValue=wordInput.value;
    greenClass=""
    
  }


  showWordArea.innerHTML += ` <div class="written_words  ${greenClass}">
  <p class="written_by ${greenClass}">${contestantName}:</p><span class="word_line">${wordInputValue}</span>
</div>`
  



  wordInput.value="";
}

function arrayWordFunction(e){
  word=e.target.innerText.trim();
  wordDisplay.style.display="none";
  guessWord.style.display="block";
  wordForm.style.display="block";
  fillIn.innerText=""; 

  for(let i=0; i<word.length;i++){
   fillIn.innerHTML+="_"+'&#32';
 }

totalChar.innerText=word.length;
fillIn.innerHTML+=totalChar.innerText;
realWord.innerText = word;
playerBox.classList.remove('green');


let time=30;
let timeCountDown = setInterval(()=>{
timer.innerText=time--;



if(time<9){
   timer.style.left="8%";
}
 if(time<0){
   clearInterval(timeCountDown);
   resultDisplay.style.display = "block";
   fillIn.innerHTML=word;


   setTimeout(()=>{
     resultDisplay.style.display = "none";
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     fillIn.innerHTML="";
     for(let i=0; i<word.length;i++){
       
       fillIn.innerHTML+="_"+'&#32';
     }
     totalChar.innerText=word.length;

     fillIn.innerHTML+=totalChar.innerText;
     wordDisplay.style.display="block";

     let round=Number(currentRound.innerText);
     round++;

     currentRound.innerText=round;

     guessWord.style.display="none";
     if(round>3){
      currentRound.innerText=1;
      wordDisplay.style.display="none";
      resultDisplay.style.display = "none";
      winnerDisplay.style.display="block";

      setTimeout(()=>{
        init(); 
      },3000)
        
     }
   },3000);



 }
},1000);



}



for(let i=0; i<listOfWords.length;i++){
  let newSpan= document.createElement('span');
  newSpan.setAttribute('class', "words_to_display")
  newSpan.innerText=listOfWords[i]+" "
  arrOfWords.append(newSpan)
}


arrOfWords.addEventListener('click', arrayWordFunction)
wordForm.addEventListener('submit',wordInputSubmit);




