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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")){
    console.error("Erro. É necessario ter um cadasstro de endereço")
}