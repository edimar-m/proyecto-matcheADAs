// ***declaraciones generales // General declarations***

//General
//Contenedor de la grilla 
const grid = document.getElementById('grid');
//Items de la grilla 
const emojis = ['🦁','🦋','🦒','🐘','🌺','🐦']; 
 //Button info
const infoButton = document.getElementById('info'); 
//Button restart
const restartButton = document.getElementById('restart'); 

//Temporizador // Timer
const timer = document.getElementById("timer");
let time ;
let remainingTime;

//Opciones para iniciar el juego // Select difficult options
let optionWelcome = true;

//Creación de la grilla

let nuevoArr = [''];
let level = 0;

const createGrid = ()=>{
  time = 30;
  timer.innerHTML = `00:${time}`
  nuevoArr = [''];
  grid.innerHTML = '';
  for(i=0; i < level; i++ ){
    for(j=0; j < level; j++){
      nuevoArr.push(emojis[(Math.random() * (emojis.length -1)).toFixed(0)]);
    }; 
  };
  
  for(i=1; i < nuevoArr.length; i++){
    const square = document.createElement('div');
    square.style.width = `${500/level}px`;
    square.style.height = `${500/level}px`;
    square.innerHTML = nuevoArr[i];
    grid.appendChild(square)
    twemoji.parse(document.body);
  };
  remainingTime = setInterval(myTimer, 1000);
  return level
};  
  
// Mostrar modal de bienvenida //Show welcome modal
  window.onload = swallModalWelcom();

// Botones información y restart //Buttons info and restart
  infoButton.addEventListener('click', swallModalWelcom);
  restartButton.addEventListener('click', swalRestartGame);

//Temporizador //Timer

const myTimer = () =>{
  if(time <= 30 && time >0){
    time =  time -1
    let seconds = time % 60;
    let minutes = ((time - seconds) / 60) % 60; 
    let txtSeconds = seconds < 10 ? '0' + seconds : seconds
    let txtMinutes = minutes < 10 ? '0' + minutes : minutes
    timer.innerHTML = `${txtMinutes}:${txtSeconds}`

  } else {
      swalGameOver();
    }
};

function stopTimer() {
  clearInterval(remainingTime);
}

/*************************************************************************************************/
