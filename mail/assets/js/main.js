var mail = prompt("Inserisci la tua e-mail");
// // console.log("mail");

var listMail = ["Andrea@booleanmail.it","Antonio@booleanmail.it","Alfredo@booleanmail.it","Alberto@booleanmail.it","Alex@booleanmail.it","Arianna@booleanmail.it","Assunta@booleanmail.it","Aristide@booleanmail.it","Amerigo@booleanmail.it","Asia@booleanmail.it","Ania@booleanmail.it","Alessandro@booleanmail.it"]

// console.log(listMail[0]);
// console.log(listMail[1]);
// console.log(listMail[2]);
// console.log(listMail[3]);
// console.log(listMail[4]);
// console.log(listMail[5]);
// console.log(listMail[6]);
// console.log(listMail[7]);
// console.log(listMail[8]);
// console.log(listMail[9]);
// console.log(listMail[10]);
// console.log(listMail[11]);

 // var invitato = listMail[1];
 // console.log(invitato);

for (var i = 0; i < listMail.length; i++){
  console.log(listMail[i]);

var invitato = listMail[i];

if (mail == invitato){
  console.log("Sei nella lista Benvenuto");
}else{
  console.log("Mi dispiace non sei nella lista non puoi entrare")
}

}
