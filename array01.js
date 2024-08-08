let carro1 = "fusca";
let carro2 = "brasilia";
let carro3 = "fiesta";

const carro = [];
carro[0] = "celta";
carro[1] = "corsa";
carro[2] = "fusca";
carro[3] = "brasilia";
carro[4] = "fiesta";
carro[5] = "ka";

const frutas = ["uva", "maçã", "banana", "morango"];

console.table(frutas);

frutas.pop();

console.table(frutas);

console.log(carro);
console.table(carro);
console.log(carro.length);
console.log();

let carrocopia1 = [...carro];
console.log(carro);
console.log(carrocopia1);
console.log(carro == carrocopia1);

let carrocopia2 = carro.slice;
let carrocopia3 = [].concat(carro);
let carrocopia4 = array.from(carro);