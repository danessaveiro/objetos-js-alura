const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["(11)2222-22222", "(11)3333-3333"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if(valor > this.saldo ) {
            console.log("Saldo Insufuciente");
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        }
    }
};

cliente.efetuaPagamento(25);

