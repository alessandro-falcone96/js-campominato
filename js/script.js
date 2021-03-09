var listRandomNumbers = [];
var listPlayerNumbers = [];
var n = 0;


do {
  n = Math.floor(Math.random() * 100) + 1;
  if (listRandomNumbers.includes(n) == false) {
    listRandomNumbers.push(n);
  }
} while (listRandomNumbers.length <= 16);


do {
  n = parseInt(prompt("Inserisci un numero tra 1 e 100: "));
  if ((listPlayerNumbers.includes(n) == false) && (n <= 100) && (n > 0)) {
    listPlayerNumbers.push(n);
  } else {
    alert("Numero già inserito oppure numero non in range!");
  }
} while ((listRandomNumbers.includes(n) == false) && (listPlayerNumbers.length <= 82));


if (listPlayerNumbers.length == 82) {
  console.log("Complimenti, hai vinto!")
  console.log("Lista Numeri Utente: " + listPlayerNumbers);
  console.log("Lista Numeri Random: " + listRandomNumbers);
} else {
  console.log("Hai inserito un numero che era presente nella lista dei numeri random. Hai perso!")
  console.log("Lista Numeri Utente: " + listPlayerNumbers);
  console.log("Lista Numeri Random: " + listRandomNumbers);
}
