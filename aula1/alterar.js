const pessoa = {
    nome: "Luma", 
    profissao: "Engenheira",
};

console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = "(11)2222-3333"

console.log(pessoa.telefone);

pessoa.nome = "Luma Silva";

delete pessoa.profissao;

console.log(pessoa);