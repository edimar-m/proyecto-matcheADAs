//Selección del nivel // Level-Game function

const levelGame = () => {
    if(optionWelcome === false){
        remainingTime = setInterval(myTimer, 1000);
       return;
    }
    optionWelcome = false;

    swal({
        title: "Nuevo Juego",
        text: `Selecciona una dificultad`,
        buttons: {
            facil: {
                text: "Fácil",
                value: "facil"
            },
            medio: {
                text: "Medio",
                value: "medio"
            },
            dificil: {
                text: "Difícil",
                value: "dificil"
            },
        },
        closeOnClickOutside: false,
        closeOnEsc: false,
    })
        .then((value) => {
            switch (value) {
                case "facil":
                    level = 9;
                    break;
                case "medio":
                    level = 8;
                    break;

                case "dificil":
                    level = 7;
                    break;
                default:
            }
            createGrid();
        });
};

//Modal de bienvenida // Welcome modal

const swallModalWelcom = () => {
    stopTimer();
    swal({
        title: "¡Bienvenida!",
        text: `En MatcheADAs tu objetivo es juntar tres o más ítems del mismo tipo,
          ya sea en fila o columna. Para eso, selecciona un ítem y a
          continuación un ítem adyacente para intercambiarlos de lugar.
  
          Si se forma un grupo, esos ítems se eliminarán y ganarás puntos. ¡Sigue armando grupos de 3 o más antes de que se acabe el tiempo!
  
          CONTROLES
          Click izquierdo: selección
          Enter o Espacio: selección
          Flechas o WASD: movimiento e intercambio`,
        button: "A Jugar",
        closeOnClickOutside: false,
        closeOnEsc: false,

    })
        .then(levelGame)
};

//Modal de reiniciar y seleccionar nuevo nivel //Restart Game and choose new level modal

const swalRestartGame = () => {
    optionWelcome = true;
stopTimer();
    swal({
        title: "¿Reiniciar el juego?",
        text: `Perderás todo tu puntaje acumulado`,
        buttons: {
            cancel: "Cancelar",
            confirm: "Nuevo Juego",
        },
        closeOnClickOutside: false,
        closeOnEsc: false,
    })
    .then((value) => {
        switch (value) {
            case null:
                remainingTime = setInterval(myTimer, 1000);
            break;
            case true:
                levelGame();
            break;
        }
    })
};

// Modal juego terminado, puntaje final // Game Over y points modal

let puntajeFinal;
const swalGameOver = () => {
    swal({
        title: "¡Juego Terminado!",
        text: `Puntaje Final: ${puntajeFinal}`,
        buttons: {
            newGame: {
                text: "Nuevo Juego",
                value: "nuevoJuego"
            },
            restart: {
                text: "Reiniciar",
                value: "reiniciar"
            },
        },
        closeOnClickOutside: false,
        closeOnEsc: false,
    })
        .then((value) => {
            switch (value) {
                case "nuevoJuego":
                    optionWelcome = true;
                    levelGame();
                    break;
                case "reiniciar":
                    createGrid(level);

                    break;
                default:
            };
        });
    stopTimer();
};

