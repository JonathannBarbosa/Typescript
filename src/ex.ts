
interface iUser {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
    
}

interface IProduct {
    id: number;
    name: string;
    price: number;
    inStock: Boolean;
    categories: string[]
}

type userRole = {
    permissao: "admin" | "user";
}

interface iAdminUser extends iUser {
    role: userRole;
}

interface newUser extends iUser {
    id: 1;
    name: "Jonathan"
    email: "email@email"
    isActive: true
}

interface newProduct extends IProduct {
    id: 1;
    name: "Notebook";
    price: 1000;
    inStock: true
    categories: []

}

interface newUser extends iAdminUser,iUser{
    id: 1;
    name: "Jonathan"
    email: "email@email" 
    isActive: true
    permissao: "admin"
}

function exibirUsuario(usuario:newUser){
    console.log("O Nome do usuario é " + usuario.name)
}


// exercicio 4 

function getData<T>(items: T[]): T[]{
    return items;
}

const resultado1 = getData<string>(["Inserir string1", "inserir string2"]);
const resultado2 = getData<number>([10, 20, 30, 40]);


function getById<T extends { id: number }>(items: T[], id: number): T | undefined {
    return items.find(items => items.id === id)
}

const users:iUser[]= [                               // acessar e fazer a verificação de usuário
    {id:1, name:"Jonathan", email:"email@email", isActive:true}, 
    {id:2, name:"Segundo nome", email:"email.com", isActive:false},
    {id:3, name:"Terceiro nome", email:"email", isActive:false},
]


const userEncontrado = getById(users,1)       // exibira resultado encontrado do id cadastrado
    console.log("Usuário encontrado:", userEncontrado);

const userNaoEncontrado = getById(users,15)   //  resultado de sáida deverá ser undefined
    console.log("Usuário não encontrado:", userNaoEncontrado);


