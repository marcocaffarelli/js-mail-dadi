var btnPlay = document.getElementById("btn_play");
var risultato = document.getElementById("Risultato_dadi");
var numeroUtente = document.getElementById("numero_utente");
var numeroComputer = document.getElementById("numero_computer");
btnPlay.addEventListener('click', function() {
  var numeroDadoUtente = Math.floor(Math.random() *6) + 1;
  // console.log(numeroDadoUtente);
  numeroUtente.innerHTML = numeroDadoUtente + " Il Tuo Numero"
  var numeroDadoComputer = Math.floor(Math.random() *6) + 1;
  // console.log(numeroDadoComputer);
  numeroComputer.innerHTML = numeroDadoComputer + " Numero Computer"
  if (numeroDadoUtente > numeroDadoComputer) {
    // console.log( "Complimenti hai visto");
    messaggioRisultato = "Complimenti hai vinto"
  } else if(numeroDadoUtente < numeroDadoComputer){
    // console.log("Mi dispiace hai perso");
    messaggioRisultato = "Mi dispiace hai perso"
  } else{
    // console.log("Un pareggio");
    messaggioRisultato = "Un pareggio"
  }
  risultato.innerHTML = messaggioRisultato
});
