const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["(11)2222-22222", "(11)3333-3333"],
};

cliente.enderecos = [
    {
    rua: "Rua Ribeirinhos",
    numero: 34,
    apartamento: true,
    complemento: "apto 32",
    },
];

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== 'function')
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
}