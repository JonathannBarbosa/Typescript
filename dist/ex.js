"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exibirUsuario(usuario) {
    console.log("O Nome do usuario é " + usuario.name);
}
// exercicio 4 
function getData(items) {
    return items;
}
const resultado1 = getData(["Inserir string1", "inserir string2"]);
const resultado2 = getData([10, 20, 30, 40]);
function getById(items, id) {
    return items.find(items => items.id === id);
}
const users = [
    { id: 1, name: "Jonathan", email: "email@email", isActive: true },
    { id: 2, name: "Segundo nome", email: "email.com", isActive: false },
    { id: 3, name: "Terceiro nome", email: "email", isActive: false },
];
const userEncontrado = getById(users, 1); // exibira resultado encontrado do id cadastrado
console.log("Usuário encontrado:", userEncontrado);
const userNaoEncontrado = getById(users, 15); //  resultado de sáida deverá ser undefined
console.log("Usuário não encontrado:", userNaoEncontrado);
//# sourceMappingURL=ex.js.map