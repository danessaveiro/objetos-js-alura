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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto)

if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. É necessário ter um endereço cadastrado.")
}