var x = 0;
var y = 0;
var pepito; /* con var uno va indicando una variables con nombre "pepito", que con el x e y son los valores a contener*/
/* no pieden tener un npumero el inicio ni estacios*/
/* const variable no variable, es constante*/
/* let, es un var pero que se ocupa en un contexto determinado*/
/* el "=" se traduce como un "IF" con condificones
=0 significa que es este valor 
== 0 consultando si es 0
!== 0 consultando si es distinto a 0*/


function setup() { /* esta es una función que se ejecuta una única vez*/
  pepito = createCanvas(windowWidth, windowHeight); 
  pepito.parent("cuerpo"); /* le esta diciendo que el canvas se situe en el "cuerpo"*/
  pepito.position(0,0); /* en donde se pone una esquina*/
  pepito.style('z-index','-1'); /* en todo su ancho y largo*/;
  noStroke();
  frameRate(10); /* los "frames" por segundo*/
}

function draw() { /* ESTO ES UN LOOP: se va actualizando a cada segundo, así que si pongo el fondo acá no hace un alínea contante, solo lo sigue.*/
  background(map(mouseX, 0, windowWidth, 0, 360),map(mouseY,0,windowHeight, 0, 100), 100) /* en el map el primer valor significa el mínimo de la posición del mouse y el segundo el máximo, siendo el terceso y cuerto valor el rango de color a cambiar*/
  colorMode(HSB, 360, 100, 100); /* H=el color S=saturación B=Brilllo */
  x = lerp(x, mouseX, 1.1);
  y = lerp(y, mouseY, 1.1);
  fill("white");
  textSize (random(180,200));
  text("🍓",x,y);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
} /* este va ajustante el canvas segpun el tamaño de la ventana. */