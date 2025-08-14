import express, {Request, Response} from 'express';


interface IUser {
    id: number
    name:string
    email:string
}

let users:IUser[] = [                            
    {id:1, name:"Jonathan", email:"email@email",}, 
    {id:2, name:"Segundo nome", email:"email.com",},
    {id:3, name:"Terceiro nome", email:"email",},
]

const app = express();
const port: number = 3000;

app.use(express.json());
	
app.listen(port, () => {
    console.log("Api iniciada na porta: " + port);
});


// enviar dados para o github

