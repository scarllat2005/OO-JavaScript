const cliente =  {
    nome :"João",
    idade : 24,
    email:"João@Larissa.com",
    telefone:["(41) 9999-0000", "(41) 9988-0000"],
};

cliente.enderecos = [
{
    rua : "R. Joseph Climber",
    numero : 1337,
    apartamento : true,
    complemento :"Ap 934",
},
];

function LigaParaCliente (telefoneComercial,telefoneResidencial){
    console.log (`Ligando para ${telefoneComercial}`);
    console.log (`Ligando para ${telefoneResidencial}`);
}

LigaParaCliente(...cliente.telefone);

const encomenda ={
    destinatario : cliente.nome,
    enderecos : cliente.enderecos[0].rua,
    numero : cliente.enderecos[0].numero,
}

console.log(encomenda);