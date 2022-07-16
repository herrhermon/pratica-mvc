// Configuração basica para criar um servidor com express


//etapa 1
//Importa o express e o atribui a variavel express
const express = require("express");

//Inicializa o express
const app = express();

//numero da porta que irá rodar o servidor
const port = 3000;

// Etapa 2 
//Cria a pasta publica, que poderá ser visualizada por qualquer usuário, ou seja, pode ser vista por fora. Nesta pasta vem os .css's. Os arquivos da pasta publica não precisa de rotas.
// Pasta que estão dentro da aplicação (No src) precisam de rotas para serem acessadas.

//Etapa4
//Importa o pacote method-override
const methodOverride = require("method-override");

//Etapa3 - Importação da rota. Atribui o conteudo do productRoute a variavel.
const productRoute=require('./src/routes/productRoute');

//__dirname retorna o nome do caminho inteiro da pasta que está o arquivo app.js.
// Isso garante que em qualquer maquina os arquivos vão sempre seguir o mesmo caminho.
app.use(express.static(__dirname+'/public'))

app.set('view engine','ejs') // muda a engine do padrão para o template engine ejs.

app.set('views',__dirname +'/src/views')//altera a configuração inicial do express do caminho de views para o caminho de views definido para este projeto.

app.use(methodOverride("_method"));

app.use(express.json())//Converte o body do req para objeto, ou seja, em json. Serve para usar conseguir fazer a desestruturação de objeto usando o req.body.

// .use()trazer uma configuração adicional ao express
// .set() alterar uma configuração que já existe por padrão no express

//Converte corpo da requisição para forma que o url aceita
app.use(express.urlencoded({extended:false}))

//____________________________________________________________________


//Etapa3
app.use("/product",productRoute)

//Etapa 4- rota de erro
app.use('*',(req,res)=>{
    res.send("404")
})






//____________________________________________________________________
app.listen(port,()=>{
    console.log(`Servidor rodando na porta : ${port}`)
})

// rodar o comando node start e verificar se está funcionando.