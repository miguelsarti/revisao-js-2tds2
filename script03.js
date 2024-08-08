let intensidade = 20;
let palmas = "";

for (let i = 1; i < intensidade; i++ ) {
    palmas += "👏";
    if(i  % 5 === 0){
    palmas += "🥳";
    }
}
console.log(palmas);