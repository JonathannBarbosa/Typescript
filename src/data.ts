// exercício 2
let produto: string;
let preco: number;
let estoque: boolean;

interface Produto {
    nome:string;
    preco:number;
}

// valores fixos de acordo com os parametros passado
let coordenada: [number, number] = [10,10];


// utilização do enum para definir valores fixos. Acessamos apenas o que está descrito em enum
enum statusPedido {
    Pendente,
    Processando,
    Entregue,
    Cancelado,
}
let status: statusPedido = statusPedido.Entregue;

// função com com parametros string e number
function mostrarValores(produto:string, preco:number){
    return produto
}


