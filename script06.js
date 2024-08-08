let armas = ['serra elétrica', 'laser', 'mísseis', 'sabre de luz', 'lança granadas'];
let ataques = [];


ataques.push("Max Steel");
ataques.push(armas[0]);
ataques.push(armas[1]);
ataques.push(armas[2]);
ataques.push(armas[3]);
ataques.push(armas[4]); 

    for(let i = 0; i < ataques.length; i++) {
        if (i == 0) {
            console.log('nome do robô: ' + ataques[i]);
        } else {
        console.log('ataques' + [i] + ': ' + ataques[i]);
    }
}