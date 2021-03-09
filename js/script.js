// Dichiaro le variabili
var listRandomNumbers = [];
var listPlayerNumbers = [];
var n = 0;

// Creo la funzione che genera 16 numeri random tra 1 e 100 (che non sono duplicati)
function randomNumbers(n, listRandomNumbers) {
  do {
    n = Math.floor(Math.random() * 100) + 1;
    if (listRandomNumbers.includes(n) == false) {
      listRandomNumbers.push(n);
    }
  } while (listRandomNumbers.length <= 16);

  return listRandomNumbers;
}

// Chiamo la funzione randomNumbers
randomNumbers(n, listRandomNumbers);

// creo la funzione che fa aggiungere numeri (non duplicati) dall'utente finchè non "sbaglia" o finchè non finisce i tentativi
function playerNumbers(n, listPlayerNumbers) {
  do {
    n = parseInt(prompt("Inserisci un numero tra 1 e 100: "));
    if ((listPlayerNumbers.includes(n) == false) && (n <= 100) && (n > 0)) {
      listPlayerNumbers.push(n);
    } else {
      alert("Numero già inserito oppure numero non in range!");
    }
  } while ((listRandomNumbers.includes(n) == false) && (listPlayerNumbers.length <= 82));

  return listPlayerNumbers;
}

// Chiamo la funzione playerNumbers
playerNumbers(n, listPlayerNumbers);

// Creo la funzione che controlla se l'utente ha vinto o perso e fa uscire un messaggio
function checkLength(listPlayerNumbers, listRandomNumbers) {
  if (listPlayerNumbers.length == 82) {
    console.log("Complimenti, hai vinto!")
    console.log("Lista Numeri Utente: " + listPlayerNumbers);
    console.log("Lista Numeri Random: " + listRandomNumbers);
  } else {
    console.log("Hai inserito un numero che era presente nella lista dei numeri random. Hai perso!")
    if (listPlayerNumbers.length == 1) {
      console.log("Hai inserito solamente 1 numero.")
    } else {
      console.log("Hai inserito " + listPlayerNumbers.length + " numeri.")
    }
    console.log("Lista Numeri Utente: " + listPlayerNumbers);
    console.log("Lista Numeri Random: " + listRandomNumbers);
  }
}

// Chiamo la funzione
checkLength(listPlayerNumbers, listRandomNumbers);
