const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["(11)2222-22222", "(11)3333-3333"],
};

cliente.enderecos = [
    {
    rua: "Ribeirinhos",
    numero: 34,
    apartamento: true,
    complemento: "apto 32",
    },
];

cliente.enderecos.push({
    rua: "Chaveirinhos",
    numero: 234,
    apartamento: false,
});

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === false
);

console.log(listaApenasApartamentos);