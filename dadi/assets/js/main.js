var btnPlay = document.getElementById("btn_play");

btnPlay.addEventListener('click', function() {
  var numeroDadoUtente = Math.floor(Math.random() *5) + 1;
  var numeroDadoComputer = Math.floor(Math.random() *5) + 1;

  if (numeroDadoUtente > numeroDadoComputer) {
    console.log("Complimenti hai visto");
  } else if(numeroDadoUtente < numeroDadoComputer){
    console.log("Mi dispiace hai perso");
  } else{
    console.log("Un pareggio");
  }
});
