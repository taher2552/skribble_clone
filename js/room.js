const linkSection = document.querySelector('.link')
const hoverOnMe = document.querySelector('.hover_on_me');
const hoverLink = document.querySelector('.hover_link');
const firstPlayer = document.querySelector('.first_player');
const roomOwner = document.querySelector('.room_owner');
const createWord = document.querySelector('#create_word');
const startButton = document.querySelector('.start_btn');


function copyFunction(){
    textToCopy=hoverLink.innerText;
    navigator.clipboard.writeText(textToCopy);
}

function startFunction(){
    wordArray = createWord.value.split(',') ;
    
    alert("words created successfully")
    localStorage.setItem("wordList", JSON.stringify(wordArray));
}



linkSection.addEventListener('mouseover', ()=>{
    hoverLink.style.display="block";
    hoverOnMe.style.display="none";
});
linkSection.addEventListener('mouseout', ()=>{
    hoverLink.style.display="none";
    hoverOnMe.style.display="block";
});

startButton.addEventListener('click', startFunction)



let firstPlayerName = localStorage.getItem("player1");

roomOwner.innerText= firstPlayerName || "player1";

firstPlayer.innerText= firstPlayerName || "Player 1";



