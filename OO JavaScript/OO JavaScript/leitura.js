const dado = require("./cliente.json");

console.log(dado);
console.log(typeof dado);

const clienteEmStrig = JSON.stringify (dado);

console.log(clienteEmStrig);
console.log(typeof clienteEmStrig);

console.log(clienteEmStrig.nome);

console.log(objetoCliente);