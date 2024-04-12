clearTimeout(temporizadorID);

// setInterval - ejecuta una función CADA cierto tiempo

let number = 5;
let lanzamiento = setInterval(()=>{
  console.log(`lanzamiento en ${number} segundos`);
  number--;
  if (number == 0){
    clearInterval(lanzamiento);
  }
}, 1000);

// setTimeout anidado
let numero = 0;

let incrementoID = setTimeout(function incremento(){
  console.log(numero);
  numero++
  incrementoID = setTimeout(incremento,1000);
},1000);