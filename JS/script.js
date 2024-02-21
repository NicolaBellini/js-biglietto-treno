const trip= parseInt(prompt("Inserire il numero di chilometri da percorrere")) //prompt

const age= parseInt(prompt("Inserire l' età")) 

const price= 0.21

let total = (trip * price);

roundedPrice = total.toFixed(2)

// roundedPrice = Math.round((total * 100) / 100);

if(age < 18){
  roundedPrice = ((roundedPrice * 0.80).toFixed(2));
  message = roundedPrice
}else if(age > 65){
  roundedPrice = ((roundedPrice * 0.60).toFixed(2)) ;
}

document.getElementById("output").innerHTML += roundedPrice +"\u20AC"



console.log(roundedPrice);



