"use strict"
//relogio 

function atualizarHora(){
   
   const horario = new Date()
   const hora = String(horario.getHours()).padStart(2,"0")
   const minutos = String(horario.getMinutes()).padStart(2,"0")
   
   document.getElementById("data").innerHTML = `${hora}:${minutos}`
   
}
setInterval(atualizarHora, 1000)