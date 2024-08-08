//Verificar se a idade do aluno é maior que 7 anos.

let idadeAluno = 9;

if(idadeAluno > 7 && idadeAluno < 13) {
    console.log("aluno pode se matricular na categoria infantil");
} else if (idadeAluno > 12 && idadeAluno < 18) {
console.log("aluno pode se matricular na categoria adolescente");
} else if (idadeAluno > 17) {
    console.log("aluno pode se matricular na categoria adulto");
} else {
    console.log("aluno nao pode se matricular");
}