const alunos = [
    { nome: "Gabriel", nota: 9 },
    { nome: "Maria", nota: 8 },
    { nome: "Rosa", nota: 3 },
    { nome: "Ana", nota: 5 },
    { nome: "Carlos", nota: 7 },
    { nome: "Júnior", nota: 1.5 },
    { nome: "Amanda", nota: 10 }
];

function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

console.log(alunosAprovados(alunos));