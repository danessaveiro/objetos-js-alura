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

function ligaParaCliente (telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
};

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
};

console.log(encomenda);