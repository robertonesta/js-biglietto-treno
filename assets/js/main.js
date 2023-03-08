//Richieste esercizio

//chiedere numero km da compiere.
//chiedere età del passeggero.
// prezzo del biglietto = €0.21/km
//sconto per minorenni 20%
//sconto per over 65 40%
//prezzo finale da arrotondare fino ai centesimi di euro.

//Passaggi

//usare prompt per chiedere numero km e età del passeggero
//if else sull'età in modo da scontare o meno il prezzo del biglietto
//arrotondamento del prezzo con math.round

//usare prompt per chiedere numero km e età del passeggero
const kilometers = prompt("quanti chilometri percorrerai?")
console.log(kilometers);

const userAge = prompt("inserire qui la tua età")
console.log(userAge);

// prezzo del biglietto = €0.21/km 

let ticketprice = (kilometers * 0.21).toFixed(2);
console.log (`ticket price: €${ticketprice}`)

//if else sull'età in modo da scontare o meno il prezzo del biglietto (arrotondato fino agli €cent)

const minorsprice = (ticketprice * 0.8).toFixed(2);
const over65price = (ticketprice * 0.6).toFixed(2);

if (userAge < 18) {
    ticketprice = minorsprice;
    console.log (`Il tuo prezzo col 20% di sconto: €${minorsprice}`);
} else if (userAge >=65) {
    ticketprice = over65price;
    console.log (`Il tuo prezzo col 40% di sconto: €${over65price}`);
}
else{
    console.log (`Il tuo prezzo: €${ticketprice}`)
}

const price = document.getElementById("price");
price.innerHTML = `<p>Km: ${kilometers}</p>
<p>Età: ${userAge}</p>
<p>Prezzo: €${ticketprice} </p>`