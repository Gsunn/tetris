var canvas;
var ctx; //contexto
const FPS = 50;

const anchoCanvas = 400;
const altoCanvas = 640;

// const anchoFicha = 40;
// const altoFicha = 40;

const t_ficha = 40;

const margenSuperior = 4;

const anchoTablero = 10;
const altoTablero = 16 + margenSuperior;

//COLORES DE LAS FICHAS
const rojo = "#FF0000";
const morado = "#800080";
const naranja = "#FF8C00";
const amarillo = "#FFD700";
const verde = "#008000";
const cyan = "#00CED1";
const azul = "#0000CD";

//12x17  -> (10x16)
var tablero = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

const tableroInicio = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]


var cuadrado = [
    [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
    ],
    [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
    ],
    [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
    ],
    [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
    ]
]

var recta = [
    [
        [0, 0, 0, 0],
        [2, 2, 2, 2],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],

    [
        [0, 0, 2, 0],
        [0, 0, 2, 0],
        [0, 0, 2, 0],
        [0, 0, 2, 0]
    ],

    [
        [0, 0, 0, 0],
        [2, 2, 2, 2],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],

    [
        [0, 0, 2, 0],
        [0, 0, 2, 0],
        [0, 0, 2, 0],
        [0, 0, 2, 0]
    ]
]

var ese = [
    [
        [0, 0, 0, 0],
        [0, 0, 3, 3],
        [0, 3, 3, 0],
        [0, 0, 0, 0]
    ],

    [
        [0, 0, 3, 0],
        [0, 0, 3, 3],
        [0, 0, 0, 3],
        [0, 0, 0, 0]
    ],

    [
        [0, 0, 0, 0],
        [0, 0, 3, 3],
        [0, 3, 3, 0],
        [0, 0, 0, 0]
    ],

    [
        [0, 0, 3, 0],
        [0, 0, 3, 3],
        [0, 0, 0, 3],
        [0, 0, 0, 0]
    ]
]

var zeta = [
    [
        [0, 0, 0, 0],
        [0, 4, 4, 0],
        [0, 0, 4, 4],
        [0, 0, 0, 0]
    ],

    [
        [0, 0, 0, 4],
        [0, 0, 4, 4],
        [0, 0, 4, 0],
        [0, 0, 0, 0]
    ],

    [
        [0, 0, 0, 0],
        [0, 4, 4, 0],
        [0, 0, 4, 4],
        [0, 0, 0, 0]
    ],

    [
        [0, 0, 0, 4],
        [0, 0, 4, 4],
        [0, 0, 4, 0],
        [0, 0, 0, 0]
    ]
]

var l1 = [
    [
        [0, 0, 0, 0],
        [0, 5, 5, 5],
        [0, 5, 0, 0],
        [0, 0, 0, 0]
    ],

    [
        [0, 0, 5, 0],
        [0, 0, 5, 0],
        [0, 0, 5, 5],
        [0, 0, 0, 0]
    ],

    [
        [0, 0, 0, 5],
        [0, 5, 5, 5],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],

    [
        [0, 5, 5, 0],
        [0, 0, 5, 0],
        [0, 0, 5, 0],
        [0, 0, 0, 0]
    ]
]

var l2 = [
    [
        [0, 0, 0, 0],
        [0, 6, 6, 6],
        [0, 0, 0, 6],
        [0, 0, 0, 0]
    ],

    [
        [0, 0, 6, 6],
        [0, 0, 6, 0],
        [0, 0, 6, 0],
        [0, 0, 0, 0]
    ],

    [
        [0, 6, 0, 0],
        [0, 6, 6, 6],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],

    [
        [0, 0, 6, 0],
        [0, 0, 6, 0],
        [0, 6, 6, 0],
        [0, 0, 0, 0]
    ]
]

var te = [
    [
        [0, 0, 0, 0],
        [0, 7, 7, 7],
        [0, 0, 7, 0],
        [0, 0, 0, 0]
    ],

    [
        [0, 0, 7, 0],
        [0, 0, 7, 7],
        [0, 0, 7, 0],
        [0, 0, 0, 0]
    ],

    [
        [0, 0, 7, 0],
        [0, 7, 7, 7],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],

    [
        [0, 0, 7, 0],
        [0, 7, 7, 0],
        [0, 0, 7, 0],
        [0, 0, 0, 0]
    ]
]

//DIBUJO DE LAS PIEZAS (Matriz de 4 dimensiones)
// fichaGrafico [Pieza] [Posición/rotación] [y] [x]
var fichas = [cuadrado, recta, ese, zeta, l1, l2, te]



var pieza;

class objPieza {
    constructor() {
        this.tipo = Math.floor(Math.random() * 7); //pieza aleatoria
        this.y = 0;
        this.x = 4;
        this.angulo = 0;
        this.tipo = 2;
        this.retraso = FPS;
        this.fotograma = 0;
    }

    nueva() {
        this.tipo = Math.floor(Math.random() * 7); //pieza aleatoria
        this.y = 0;
        this.x = 4;
    }

    dibuja() {
        for (let py = 0; py < 4; py++) {
            for (let px = 0; px < 4; px++) {
                if (fichas[this.tipo][this.angulo][py][px] != 0) {
                    switch (fichas[this.tipo][this.angulo][py][px]) {
                        case 1:
                            ctx.fillStyle = rojo;
                            break;
                        case 2:
                            ctx.fillStyle = morado;
                            break;
                        case 3:
                            ctx.fillStyle = naranja;
                            break;
                        case 4:
                            ctx.fillStyle = amarillo;
                            break;
                        case 5:
                            ctx.fillStyle = verde;
                            break;
                        case 6:
                            ctx.fillStyle = cyan;
                            break;
                        case 7:
                            ctx.fillStyle = azul;
                            break;
                    }
                    ctx.fillRect((this.x + px - 1) * t_ficha, (this.y + py - margenSuperior) * t_ficha, t_ficha, t_ficha);
                }
            }
        }
    }

    limpiaFila() {
        let completa;
        for (let py = margenSuperior; py < altoTablero; py++) {
            completa = true;
            for (let px = 1; px < anchoTablero + 1; px++) {
                if (tablero[py][px] == 0) {
                    completa = false;
                }
            }
            if (completa) {
                //borra la fila y reindexa
                tablero.splice(py, 1);
                // añade una fila al principio dela matriz
                tablero.unshift([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
            }
        }
    }

    pierde() {
        let pierdePartida = false;
        for (let px = 1; px < anchoTablero + 1; px++) {
            if (tablero[2][px] > 0) {
                pierdePartida = true;
            }
        }
        return pierdePartida;
    }

    colision(anguloNuevo, xNueva, yNueva) {
        let colisionPieza = false;
        for (let py = 0; py < 4; py++) {
            for (let px = 0; px < 4; px++) {
                if (fichas[this.tipo][anguloNuevo][py][px]) {
                    if (tablero[yNueva + py][xNueva + px] > 0) {
                        colisionPieza = true;
                        console.log('colisionPieza');
                    }
                }
            }
        }
        return colisionPieza;
    }

    caer() {
        if (this.fotograma < this.retraso) {
            this.fotograma++;
        }
        else {
            if (!this.colision(this.angulo, this.x, this.y + 1)) {
                this.y++;
            }
            else {
                if (this.pierde()) {
                    //reset partida
                    resetTablero();
                }
                else {
                    this.fijarPieza();
                    this.limpiaFila();
                    this.nueva();
                }
            }
            this.fotograma = 0;
        }
    }

    fijarPieza() {
        for (let py = 0; py < 4; py++) {
            for (let px = 0; px <= 4; px++) {
                if (fichas[this.tipo][this.angulo][py][px] > 0) {
                    tablero[this.y + py][this.x + px] = fichas[this.tipo][this.angulo][py][px];
                }
            }
        }
    }

    rotar() {
        let anguloNuevo = this.angulo;
        if (anguloNuevo < 3) {
            anguloNuevo++;
        }
        else {
            anguloNuevo = 0;
        }
        if (!this.colision(anguloNuevo, this.x, this.y)) {
            // console.log('rotar');
            this.angulo = anguloNuevo;
        }
    }

    abajo() {
        if (!this.colision(this.angulo, this.x, this.y + 1)) {
            //console.log('abajo');
            this.y++;
        }
    }

    izquierda() {
        if (!this.colision(this.angulo, this.x - 1, this.y)) {
            //console.log('izquierda');
            this.x--;
        }
    }

    derecha() {
        if (!this.colision(this.angulo, this.x + 1, this.y)) {
            //console.log('derecha');
            this.x++;
        }
    }

}


function resetTablero(){
    console.log('reset tablero')
    tablero = tableroInicio;
}

//DIBUJA EL TABLERO CON TODAS LAS FICHAS QUE YA HAN CAÍDO
function dibujaTablero(){
   //console.log('tablero')
    for (let py = margenSuperior; py < altoTablero; py++) {
        for (let px = 1; px <= anchoTablero + 1; px++) {

            if (tablero[py][px] > 0) {
                switch(tablero[py][px]){
                    case 1:
                        ctx.fillStyle = rojo;
                        break;
                    case 2:
                        ctx.fillStyle = morado;
                        break;
                    case 3:
                        ctx.fillStyle = naranja;
                        break;
                    case 4:
                        ctx.fillStyle = amarillo;
                        break;
                    case 5:
                        ctx.fillStyle = verde;
                        break;
                    case 6:
                        ctx.fillStyle = cyan;
                        break;
                    case 7:
                        ctx.fillStyle = azul;
                        break;
                }

                //A la posición this.py le restamos el margen superior para que dibuje en la zona de la pantalla física que toque
                ctx.fillRect( ((px - 1) * t_ficha), ( (py - margenSuperior) * t_ficha), t_ficha, t_ficha);
            }
        }
    }
}

function teclado() {
    document.addEventListener('keydown', (tecla) => {
        console.log(tecla.keyCode);

        switch (tecla.keyCode) {
            case 32:
                //console.log('rotar');
                pieza.rotar();
                break;
            case 38:
                //console.log('arriba');
                break;
            case 40:
                //console.log('abajo');
                pieza.abajo();
                break;
            case 37:
                //console.log('izquierda');
                pieza.izquierda();
                break;
            case 39:
                //console.log('derecha');
                pieza.derecha();
                break;
            // case 39: 
            //     console.log('derecha')
            //     break;
        }
    })
}

function inicializa() {

    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d'); //contexto

    canvas.width = anchoCanvas;
    canvas.height = altoCanvas;

    teclado();

    dibujaTablero();
    console.log(tablero);
    pieza = new objPieza();
    pieza.caer();
    pieza.dibuja();

    Animacion();

}

function borraCanvas() {
    canvas.width = anchoCanvas;
    canvas.height = altoCanvas;
}


function Animacion() {
    setTimeout(function () {

        window.requestAnimationFrame(Animacion);
        // código que genera una fotograma

        borraCanvas();

        dibujaTablero();
        pieza.caer();
        pieza.dibuja();


    }, 1000 / FPS);
}

