var cronometro;
var contSeg;
var sudokuSeleccionadoM = sudoku1;
var i = 0;
var data = {};

var sudoku1 = [
    [{ id: "a1", num: 5 }, { id: "a2", num: 3 }, { id: "a3", num: 4 }, { id: "a4", num: 6 }, { id: "a5", num: 7 }, { id: "a6", num: 8 }, { id: "a7", num: 9 }, { id: "a8", num: 1 }, { id: "a9", num: 2 }],
    [{ id: "b1", num: 6 }, { id: "b2", num: 7 }, { id: "b3", num: 2 }, { id: "b4", num: 1 }, { id: "b5", num: 9 }, { id: "b6", num: 5 }, { id: "b7", num: 3 }, { id: "b8", num: 4 }, { id: "b9", num: 8 }],
    [{ id: "c1", num: 1 }, { id: "c2", num: 9 }, { id: "c3", num: 8 }, { id: "c4", num: 3 }, { id: "c5", num: 4 }, { id: "c6", num: 2 }, { id: "c7", num: 5 }, { id: "c8", num: 6 }, { id: "c9", num: 7 }],
    [{ id: "d1", num: 8 }, { id: "d2", num: 5 }, { id: "d3", num: 9 }, { id: "d4", num: 7 }, { id: "d5", num: 6 }, { id: "d6", num: 1 }, { id: "d7", num: 4 }, { id: "d8", num: 2 }, { id: "d9", num: 3 }],
    [{ id: "e1", num: 4 }, { id: "e2", num: 2 }, { id: "e3", num: 6 }, { id: "e4", num: 8 }, { id: "e5", num: 5 }, { id: "e6", num: 3 }, { id: "e7", num: 7 }, { id: "e8", num: 9 }, { id: "e9", num: 1 }],
    [{ id: "f1", num: 7 }, { id: "f2", num: 1 }, { id: "f3", num: 3 }, { id: "f4", num: 9 }, { id: "f5", num: 2 }, { id: "f6", num: 4 }, { id: "f7", num: 8 }, { id: "f8", num: 5 }, { id: "f9", num: 6 }],
    [{ id: "g1", num: 9 }, { id: "g2", num: 6 }, { id: "g3", num: 1 }, { id: "g4", num: 5 }, { id: "g5", num: 3 }, { id: "g6", num: 7 }, { id: "g7", num: 2 }, { id: "g8", num: 8 }, { id: "g9", num: 4 }],
    [{ id: "h1", num: 2 }, { id: "h2", num: 8 }, { id: "h3", num: 7 }, { id: "h4", num: 4 }, { id: "h5", num: 1 }, { id: "h6", num: 9 }, { id: "h7", num: 6 }, { id: "h8", num: 3 }, { id: "h9", num: 5 }],
    [{ id: "i1", num: 3 }, { id: "i2", num: 4 }, { id: "i3", num: 5 }, { id: "i4", num: 2 }, { id: "i5", num: 8 }, { id: "i6", num: 6 }, { id: "i7", num: 1 }, { id: "i8", num: 7 }, { id: "i9", num: 9 }]
];

var sudoku2 = [
    [{ id: "a1", num: 8 }, { id: "a2", num: 3 }, { id: "a3", num: 5 }, { id: "a4", num: 4 }, { id: "a5", num: 1 }, { id: "a6", num: 6 }, { id: "a7", num: 9 }, { id: "a8", num: 2 }, { id: "a9", num: 7 }],
    [{ id: "b1", num: 2 }, { id: "b2", num: 9 }, { id: "b3", num: 6 }, { id: "b4", num: 8 }, { id: "b5", num: 5 }, { id: "b6", num: 7 }, { id: "b7", num: 4 }, { id: "b8", num: 3 }, { id: "b9", num: 1 }],
    [{ id: "c1", num: 4 }, { id: "c2", num: 1 }, { id: "c3", num: 7 }, { id: "c4", num: 2 }, { id: "c5", num: 9 }, { id: "c6", num: 3 }, { id: "c7", num: 6 }, { id: "c8", num: 5 }, { id: "c9", num: 8 }],
    [{ id: "d1", num: 5 }, { id: "d2", num: 6 }, { id: "d3", num: 9 }, { id: "d4", num: 1 }, { id: "d5", num: 3 }, { id: "d6", num: 4 }, { id: "d7", num: 7 }, { id: "d8", num: 8 }, { id: "d9", num: 2 }],
    [{ id: "e1", num: 1 }, { id: "e2", num: 2 }, { id: "e3", num: 3 }, { id: "e4", num: 6 }, { id: "e5", num: 7 }, { id: "e6", num: 8 }, { id: "e7", num: 5 }, { id: "e8", num: 4 }, { id: "e9", num: 9 }],
    [{ id: "f1", num: 7 }, { id: "f2", num: 4 }, { id: "f3", num: 8 }, { id: "f4", num: 5 }, { id: "f5", num: 2 }, { id: "f6", num: 9 }, { id: "f7", num: 1 }, { id: "f8", num: 6 }, { id: "f9", num: 3 }],
    [{ id: "g1", num: 6 }, { id: "g2", num: 5 }, { id: "g3", num: 2 }, { id: "g4", num: 7 }, { id: "g5", num: 8 }, { id: "g6", num: 1 }, { id: "g7", num: 3 }, { id: "g8", num: 9 }, { id: "g9", num: 4 }],
    [{ id: "h1", num: 9 }, { id: "h2", num: 8 }, { id: "h3", num: 1 }, { id: "h4", num: 3 }, { id: "h5", num: 4 }, { id: "h6", num: 5 }, { id: "h7", num: 2 }, { id: "h8", num: 7 }, { id: "h9", num: 6 }],
    [{ id: "i1", num: 3 }, { id: "i2", num: 7 }, { id: "i3", num: 4 }, { id: "i4", num: 9 }, { id: "i5", num: 6 }, { id: "i6", num: 2 }, { id: "i7", num: 8 }, { id: "i8", num: 1 }, { id: "i9", num: 5 }]
];

var sudoku3 = [
    [{ id: "a1", num: 3 }, { id: "a2", num: 7 }, { id: "a3", num: 1 }, { id: "a4", num: 2 }, { id: "a5", num: 8 }, { id: "a6", num: 9 }, { id: "a7", num: 5 }, { id: "a8", num: 4 }, { id: "a9", num: 6 }],
    [{ id: "b1", num: 4 }, { id: "b2", num: 8 }, { id: "b3", num: 6 }, { id: "b4", num: 1 }, { id: "b5", num: 3 }, { id: "b6", num: 5 }, { id: "b7", num: 9 }, { id: "b8", num: 7 }, { id: "b9", num: 2 }],
    [{ id: "c1", num: 2 }, { id: "c2", num: 9 }, { id: "c3", num: 5 }, { id: "c4", num: 4 }, { id: "c5", num: 7 }, { id: "c6", num: 6 }, { id: "c7", num: 8 }, { id: "c8", num: 3 }, { id: "c9", num: 1 }],
    [{ id: "d1", num: 7 }, { id: "d2", num: 3 }, { id: "d3", num: 2 }, { id: "d4", num: 6 }, { id: "d5", num: 9 }, { id: "d6", num: 8 }, { id: "d7", num: 1 }, { id: "d8", num: 5 }, { id: "d9", num: 4 }],
    [{ id: "e1", num: 8 }, { id: "e2", num: 6 }, { id: "e3", num: 9 }, { id: "e4", num: 5 }, { id: "e5", num: 1 }, { id: "e6", num: 4 }, { id: "e7", num: 3 }, { id: "e8", num: 2 }, { id: "e9", num: 7 }],
    [{ id: "f1", num: 5 }, { id: "f2", num: 1 }, { id: "f3", num: 4 }, { id: "f4", num: 7 }, { id: "f5", num: 2 }, { id: "f6", num: 3 }, { id: "f7", num: 6 }, { id: "f8", num: 9 }, { id: "f9", num: 8 }],
    [{ id: "g1", num: 9 }, { id: "g2", num: 4 }, { id: "g3", num: 3 }, { id: "g4", num: 8 }, { id: "g5", num: 6 }, { id: "g6", num: 7 }, { id: "g7", num: 2 }, { id: "g8", num: 1 }, { id: "g9", num: 5 }],
    [{ id: "h1", num: 6 }, { id: "h2", num: 2 }, { id: "h3", num: 7 }, { id: "h4", num: 9 }, { id: "h5", num: 5 }, { id: "h6", num: 1 }, { id: "h7", num: 4 }, { id: "h8", num: 8 }, { id: "h9", num: 3 }],
    [{ id: "i1", num: 1 }, { id: "i2", num: 5 }, { id: "i3", num: 8 }, { id: "i4", num: 3 }, { id: "i5", num: 4 }, { id: "i6", num: 2 }, { id: "i7", num: 7 }, { id: "i8", num: 6 }, { id: "i9", num: 9 }]
];

const indexedDB = window.indexedDB;

if(indexedDB){
    let db;
    const request = indexedDB.open('Sudoku',2020);

    request.onsuccess = () => {
        db = request.result;
    }

    request.onupgradeneeded = () => {
        db = request.result;
        const objectStore = db.createObjectStore('Sudokus',{
            keyPath: 'Nivel'
        });
    }

    request.onerror = () => {
        console.log('Error', error);
    }

    var addData = (data) => {
        const transaction = db.transaction(['Sudokus'],'readwrite');
        const objectStore = transaction.objectStore('Sudokus');
        const request = objectStore.add(data);
    }
}

class Partida {
    constructor() {
        this.cronometro = 0;
        this.contSeg = 0;
        this.sudokuSeleccionadoM = sudoku1;
        this.dificultad = 2;
    }

    setSudoku(s) {
        this.sudokuSeleccionadoM = s;
    }

    getSudoku() {
        console.log(this.sudokuSeleccionadoM);
        return this.sudokuSeleccionadoM;
    }

    setCronometro(c) {
        this.cronometro = c;
    }

    getCronometro() {
        return this.cronometro;
    }

    setContSeg(c) {
        this.contSeg = c;
    }

    getContSeg() {
        return this.contSeg;
    }

    setDificultadFacil() {
        this.dificultad = 2;
    }

    setDificultadMedio() {
        this.dificultad = 4;
    }

    setDificultadDificil() {
        this.dificultad = 6;
    }

    getDificultad() {
        return this.dificultad;
    }
}

var partida1 = new Partida();

const inicio = {
    data: function () {
        if(i != 0) {
            app.setInicioB(true);
            window.location.reload();
        } 
        i = 1;
        return {
            inicio: ""
        };
    },
    template: `
    <div>
        <transition name="view" appear enter-active-class="animated flash delay" leave-active-class="animated flash">
            <h1 class="number">Guillem & Oscar's SUDOKU</h1>
        </transition>
    </div>
    `
}

Vue.component('facil', {
    data: function () {
        partida1.setSudoku(sudoku1);
        app.setSudoku(sudoku1, 2);
        app.setInicioB(false);
        data = {
            Nivel: "Fácil",
            Sudoku: sudoku1
        };
        return {
            sudokuSeleccionado: sudoku1
        };
    },
    template: `
    <div>
        <transition name="view" appear enter-active-class="animated slideInLeft delay" leave-active-class="animated slideOutRight">
            <h1 class="number">Nivel FÁCIL</h1>
        </transition>
    </div>
    `
});

const facil = {
    template: `
    <facil></facil>
    `
}

Vue.component('medio', {
    data: function () {
        partida1.setSudoku(sudoku2);
        app.setSudoku(sudoku2, 4);
        app.setInicioB(false);
        data = {
            Nivel: "Medio",
            Sudoku: sudoku2
        };
        return {
            sudokuSeleccionado: sudoku2
        };
    },
    template: `
    <div>
    <transition name="view" appear enter-active-class="animated slideInLeft delay" leave-active-class="animated slideOutRight">
        <h1 class="number">Nivel MEDIO</h1>
    </transition>
    </div>    
    `
});

const medio = {
    template: `
    <medio></medio>
    `
}

Vue.component('dificil', {
    data: function () {
        partida1.setSudoku(sudoku3);
        app.setSudoku(sudoku3, 6);
        app.setInicioB(false);
        data = {
            Nivel: "Difícil",
            Sudoku: sudoku3
        };
        return {
            sudokuSeleccionado: sudoku3
        };
    },
    template: `
    <div>
    <transition name="view" appear enter-active-class="animated slideInLeft delay" leave-active-class="animated slideOutRight">
        <h1 class="number">Nivel DIFÍCIL</h1>
    </transition>
    </div>  
    `
});

const dificil = {
    template: `
    <dificil></dificil>
    `
}

const rutas = {
    '#/': inicio,
    '#/facil': facil,
    '#/medio': medio,
    '#/dificil': dificil
};

var mixin = {
    methods: {
        empezarPartida: function () {
            if(!this.partidaEmpezada){
                this.sudokuSeleccionado = partida1.getSudoku();
                localStorage.setItem('matriz', JSON.stringify(this.sudokuSeleccionado));

                this.sudoku = this.sudokuSeleccionado;

                for (var i = 0; i < this.sudoku.length; i++) {
                    for (var k = 0; k < this.numDificultad; k++) {
                        var randomColumnIndex = Math.floor(Math.random() * this.sudoku[i].length);
                        this.sudoku[i][randomColumnIndex].num = "";
                    }
                }

                this.empezarPartidaText = "Volver al inicio";
                this.partidaEmpezada = true;
                
                addData(data);
            }else{
                window.location.reload();
            }
            
        }
    }
}

Vue.component('tiempo', {
    data: function () {
        return {
            text: 'Tiempo transcurrido: '
        };
    },
    template: `
    <div>
      <p>{{text}}<br></p>
    </div>
    `
});

Vue.component('puntuacions', {
    data: function () {
        let puntuaciones = localStorage.getItem('puntuaciones').split(',').sort();
        return {
            tiempos: puntuaciones
        };
    },
    template: `
    <div>
        <transition name="view" appear enter-active-class="animated flash delay" leave-active-class="animated flash ">
        <div>
            <h3>Puntuaciones:</h3>
            <div v-for="(tiempo, index) in tiempos">
                <h3>{{index+1}} - {{tiempo}} segundos</h3>
            </div>
        </div>
        </transition>
    </div>
    `
});

Vue.component('missatgeGuanyador', {
    props: ['message'],
    data: function () {
        let tiempo = localStorage.getItem('puntuaciones').split(',');
        return {
            text2: tiempo[tiempo.length - 1]
        };
    },
    template: `
    <div>
      <h2>{{message}}</h2>
      <h1>Has resuelto el sudoku en:</h1>
      <h1>{{text2}} segundos</h1>
    </div>
    `
});

let menu = new Vue({
    el: '#menu',
    data: {
        rutaActual: '#/',
        rutes: rutas
    },
    methods: {
        navegar: function ($event) {
            this.rutaActual = $event.target.hash;
        }
    },
    computed: {
        vistaActual: function () {
            return this.rutes[this.rutaActual] || error;
        }
    },
    template: `
    <div>
    <header>
    <nav class="menu">
    <ul>
        <li>
        <a href="#/" 
            v-on:click="navegar">
            Inicio
        </a>
        </li>
        <li>
        <a href="#/facil" 
            v-on:click="navegar">
            Facil
        </a>
        </li>
        <li>
        <a href="#/medio" 
            v-on:click="navegar">
            Medio
        </a>
        </li>
        <li>
        <a href="#/dificil" 
            v-on:click="navegar">
            Dificil
        </a>
        </li>
    </ul>
    </nav>
    </header>
    <div v-bind:is="vistaActual">        
    </div>
      `
});

let app = new Vue({
    el: '#app',
    mixins: [mixin],
    data: {
        sudoku: [],
        sudokuSeleccionado: [],
        empezarPartidaText: "Empezar",
        comprobarText: "Comprobar",
        partidaEmpezada: false,
        partidaAcabada: false,
        showTitle: true,
        numDificultad: 1,
        inicioB: true
    },
    template: `
            <div>
            <transition name="fade">
            <div id="graellaSudoku" style="display: inline-block;" v-if="partidaEmpezada" class="grid-sudoku">
                <div v-for="row in sudoku"  class="grid-row">
                    <div v-for="cell in row" :key="cell.id" class="grid-cell">
                        <div v-if='cell.num==""'>
                            <input type="number" style="height=35px;" min="0" max="9" v-bind:key="cell.num" v-model="cell.num" class="grid-cell-editor" />
                        </div>
                        <div v-else>
                            <p><b>{{cell.num}}</b></p>
                        </div>
                    </div>
                </div>
            </div>
            </transition>
            <br><br>
            <button class="button" id="initializeBtn" v-if="!inicioB" v-on:click="empezarPartida()" v-on:click="time()"><span>{{ empezarPartidaText }}</span></button>
            <puntuacions v-if="!partidaEmpezada && inicioB" class="number"></puntuacions>
            <transition name="fade">
            <div v-if="partidaEmpezada">
                <button id="evaluateBtn" style="display: block;" class="button" v-on:click="comprobar()" v-if="partidaEmpezada"><span>{{ comprobarText }}</span></button>
            </div>
            </transition>
            <transition name="view" appear enter-active-class="animated flipInX delay" leave-active-class="animated flipOutX ">
            <div id="number" class="number" v-if="partidaEmpezada">
                <tiempo v-if="partidaEmpezada"></tiempo>
                <p>
                    <span id="segundos">0 segundos</span>
                </p>
            </div>
            </transition>
            <div v-if="partidaAcabada">
                <transition name="slide-fade">
                    <missatgeGuanyador message="Enhorabuena has ganado!!!" class="missatge"></missatgeGuanyador>
                    <button class="button" id="initializeBtn" v-if="!inicioB" v-on:click="empezarPartida()" v-on:click="time()"><span>Volver al inicio</span></button>
                </transition>
            </div>
        </div>
        `,

    methods: {
        comprobar() {
            var contAciertos = 0;
            var contFallos = 0;
            this.sudokuSeleccionado = JSON.parse(localStorage.getItem("matriz"));
            console.log("patata");
            console.log(this.sudokuSeleccionado);
            for (var i = 0; i < this.sudokuSeleccionado.length; i++) {
                for (var j = 0; j < this.sudokuSeleccionado[i].length; j++) {
                    if (this.sudokuSeleccionado[i][j].num == this.sudoku[i][j].num) {
                        contAciertos++;
                    } else {
                        contFallos++;
                    }
                }
            }
            console.log(contAciertos);
            console.log(contFallos);

            if (contAciertos == 81) {
                document.getElementById("graellaSudoku").style.display = "none";
                document.getElementById("evaluateBtn").style.display = "none";
                document.getElementById("initializeBtn").style.display = "none";
                document.getElementById("number").style.display = "none";
                this.partidaAcabada = true;
                var tiempo = contSeg;
                if (localStorage.getItem('puntuaciones') != null) {
                    let tiempos = localStorage.getItem('puntuaciones').split(',');
                    tiempos.push(tiempo);
                    let join = tiempos.join(',');
                    localStorage.setItem('puntuaciones', join);
                } else {
                    localStorage.setItem('puntuaciones', tiempo);
                }
            } else {
                alert("Tienes " + contFallos + " errores. Sigue intentándolo!");

            }
        },
        setSudoku(sudokuPasado, dificultad) {
            this.sudokuSeleccionado = sudokuPasado;
            this.numDificultad = dificultad;
        },
        setInicioB(v) {
            this.inicioB = v;
        },
        time() {
            clearInterval(cronometro);
            contSeg = 0;
            cronometro = setInterval(function () {
                document.getElementById("segundos").innerHTML = contSeg + " segundos";
                contSeg++;
            }, 1000);
        }
    }
});