const cliente = {
    nome: "João",
    idade: 24,
    email:"joao@larissa.com",
    telefone:["(41) 9999-0000","(41) 9988-0000"],
};

cliente.endereco = [
{
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "Ap 934",
},
];

cliente.endereco.push({
    rua:"R. Joseph Ladder",
    numero: 404,
    apartamento:false,
});

const listaApenasApartamento =  cliente.endereco.filter(
    (endereco) => endereco.apartamento === true
);
console.log(listaApenasApartamentos);