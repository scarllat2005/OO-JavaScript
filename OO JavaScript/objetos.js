const objetoPessoa = {
    nome:"Jose", 
    idade:32
};

const cliente = {
    nome:"Andre",
    idade:32
    cpf:"111222333",
    email:"andre@gmail.com"
};

console.log(`O nome do cliente é ${cliente.nome}  
    e essa pessoa tem ${cliente.idade} anos.`);
    console.log(`Os 3primeiros digitos do CPF são ${clente.cpf.subtring(0,3)}`);