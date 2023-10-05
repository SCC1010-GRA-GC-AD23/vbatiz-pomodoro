let tiempo = 1 //Aquí se indican los minutos del temporizador
let tiempoSegundos = tiempo * 60

function preload() {
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(800,800)
  textFont("Roboto")
  textAlign(CENTER, CENTER)
  frameRate(1)
}

function draw() {
  // put drawing code here
  background(146,83,116)
  //rect(100,100,200,200)
  if (tiempoSegundos == 0) {
    noLoop()
    textSize(32)
    text("¡Es hora de descansar!", 400, 100)
  }

  let m = nf(Math.floor(tiempoSegundos / 60), 2)
  let s = nf(tiempoSegundos % 60, 2)
  translate(width / 2, height / 2)
  fill(252,238,161)
  textSize(100)
  text(m + ":" + s, 0, 0)
  tiempoSegundos-- //tiempoSegundos = tiempoSegundos - 1


}
