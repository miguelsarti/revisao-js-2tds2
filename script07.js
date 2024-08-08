let metaLivros = [7];
let livrosLidos= ['O nome do vento', 'Meu nome era Eileen'];

for (let i = 0; i < livrosLidos.length; i++) {
    console.log(livrosLidos[i]);
}

let quantidade = metaLivros - livrosLidos.length;

console.log('');

if (livrosLidos.length < metaLivros) {
console.log("Você está progredindo! Faltam " + quantidade +  " livros para atingir sua meta.");
} else {
    console.log("Parabéns! Você atingiu sua meta de leitura!")
}