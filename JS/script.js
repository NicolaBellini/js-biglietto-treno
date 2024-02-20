const trip= 300 //prompt

const age= 12

const price= 0.21

let total = (trip * price);

roundedPrice = total.toFixed(2)

// roundedPrice = Math.round((total * 100) / 100);

if(age < 18){
  roundedPrice = ((roundedPrice * 0.80).toFixed(2)) ;
}else if(age > 65){
  roundedPrice = ((roundedPrice * 0.60).toFixed(2)) ;
}else{
  total
}



console.log(roundedPrice);


console.log("ciao");

