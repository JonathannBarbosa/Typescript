"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// exercício 2
let produto;
let preco;
let estoque;
// valores fixos de acordo com os parametros passado
let coordenada = [10, 10];
// utilização do enum para definir valores fixos. Acessamos apenas o que está descrito em enum
var statusPedido;
(function (statusPedido) {
    statusPedido[statusPedido["Pendente"] = 0] = "Pendente";
    statusPedido[statusPedido["Processando"] = 1] = "Processando";
    statusPedido[statusPedido["Entregue"] = 2] = "Entregue";
    statusPedido[statusPedido["Cancelado"] = 3] = "Cancelado";
})(statusPedido || (statusPedido = {}));
let status = statusPedido.Entregue;
// função com com parametros string e number
function mostrarValores(produto, preco) {
    return produto;
}
//# sourceMappingURL=data.js.map