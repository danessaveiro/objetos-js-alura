const cliente = {
    nome: "André",
    idade: 32,
    cpf: "11122233300",
    email: "andre@dominio.com.br",
};

console.log(`O nome do cliente é ${cliente.nome} e ele tem ${cliente.idade} anos.`);

console.log(`Os três primeiros dígitos do CPF do cliente são ${cliente.cpf.substring(0, 3)}`);