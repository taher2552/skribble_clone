const player1 = document.querySelector('#player_name_input');
const playButton = document.querySelector('#play_button');
const roomButton = document.querySelector('#room_button');

const circle1 = document.querySelector('#circle1')
const circle2 = document.querySelector('#circle2')
const circle3 = document.querySelector('#circle3')
const circle4 = document.querySelector('#circle4')
const circle5 = document.querySelector('#circle5')

const instrctImg1 = document.querySelector('.instruct_img1');
const instrctImg2 = document.querySelector('.instruct_img2');
const instrctImg3 = document.querySelector('.instruct_img3');
const instrctImg4 = document.querySelector('.instruct_img4');
const instrctImg5 = document.querySelector('.instruct_img5');
let wordArray=['tree', 'ball', 'water', 'cricket','bat'];

function playFunction(){
 
    localStorage.setItem("player1", player1.value);
    player1.value="";

    let wordsList = JSON.parse(localStorage.getItem('wordList')) ?? wordArray;
     
    localStorage.setItem("wordList", JSON.stringify(wordsList));

    window.location.href="html/play.html";

}
function roomFunction(){
 
    localStorage.setItem("player1", player1.value);
    player1.value="";
    window.location.href="html/room.html";

}

function circleFunction1(){
 circle1.classList.add('active');
 circle3.classList.remove('active');
 circle4.classList.remove('active');
 circle5.classList.remove('active');
 circle2.classList.remove('active');
 instrctImg1.style.display="block";
 instrctImg3.style.display="none";
 instrctImg4.style.display="none";
 instrctImg5.style.display="none";
 instrctImg2.style.display="none";
}

function circleFunction2(){
 circle1.classList.remove('active');
 circle3.classList.remove('active');
 circle4.classList.remove('active');
 circle5.classList.remove('active');
 circle2.classList.add('active');
 instrctImg1.style.display="none";
 instrctImg3.style.display="none";
 instrctImg4.style.display="none";
 instrctImg5.style.display="none";
 instrctImg2.style.display="block";
}

function circleFunction3(){
 circle1.classList.remove('active');
 circle3.classList.add('active');
 circle4.classList.remove('active');
 circle5.classList.remove('active');
 circle2.classList.remove('active');
 instrctImg1.style.display="none";
 instrctImg3.style.display="block";
 instrctImg4.style.display="none";
 instrctImg5.style.display="none";
 instrctImg2.style.display="none";
}

function circleFunction4(){
 circle1.classList.remove('active');
 circle3.classList.remove('active');
 circle4.classList.add('active');
 circle5.classList.remove('active');
 circle2.classList.remove('active');
 instrctImg1.style.display="none";
 instrctImg3.style.display="none";
 instrctImg4.style.display="block";
 instrctImg5.style.display="none";
 instrctImg2.style.display="none";
}
function circleFunction5(){
 circle1.classList.remove('active');
 circle3.classList.remove('active');
 circle4.classList.remove('active');
 circle5.classList.add('active');
 
 instrctImg1.style.display="none";
 instrctImg3.style.display="none";
 instrctImg4.style.display="none";
 instrctImg5.style.display="block";
 instrctImg2.style.display="none";
}




playButton.addEventListener('click', playFunction);
roomButton.addEventListener('click',roomFunction)
circle1.addEventListener('click', circleFunction1)
circle2.addEventListener('click', circleFunction2)
circle3.addEventListener('click', circleFunction3)
circle4.addEventListener('click', circleFunction4)
circle5.addEventListener('click', circleFunction5);



// first page js ends here





