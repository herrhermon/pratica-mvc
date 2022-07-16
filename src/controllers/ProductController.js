//Criado um objeto com objetos para simular um banco de dados
const products=[
    {
        id:1,
        nome:'Blusa Azul',
        preco:89.99,
        tamanho:"G",
    },
    {
        id:2,
        nome:'Camisa Flamengo 21/22',
        preco:239.00,
        tamanho:"M",
    },
    {
        id:3,
        nome:'Camisa Flamengo 20/21',
        preco:130.00,
        tamanho:"P",
    },
    {
        id:4,
        nome:'Camisa Brasil Copa',
        preco:300,
        tamanho:"G",
    },
]


//Controladores são objetos.

const productController ={
    //list retorna renderização
    
    //lista dos produtos. Pode retornar uma pagina ou não.
    index: (req,res)=>{
        return res.render('products',{title:'Lista de produtos',listProducts:products})
    },

    //mostra um produto. Pode retornar uma pagina ou não
    show:(req,res)=>{
        const{id}=req.params // Esse valor é string
        const productResult = products.find(product =>product.id ===parseInt(id))//converte o id para inteiro embora seja um string
        if(!productResult){
            //res.send('Erro . Produto não encontrado')//Mostra o texto
            res.render('error', {title:'Pagina não encontratada',message:"Produto não encontrado"})
        }
        return res.render('product',{title:'Visualizar Produto', product: productResult})

        //Diferença entre send e render. No send mostra algo na tela, o render renderiza uma view na tela.

    },

    //Retorna para criar produto
    create:(req,res)=>{
        return res.render('product-create',{title:'Criar Produto'})
    },
    
    //Cria o produto. Não retorna pagina.
    store:(req,res)=>{
        const{nome,preco,tamanho}=req.body;
        if(!nome||!preco||!tamanho){
            return res.render('product-create',{
                title:'Criar Produto',
                error:{
                    message:"Preencha todos os campos"
                }
        })
        }
        const newProduct={
            id:products.length+1,
            nome:nome,
            preco:preco,
            tamanho:tamanho,
        }
        products.push(newProduct);
        return res.render('product-create',{
            title:'Criar Produto',
            error:{
                message:"Produto criado com sucesso"
            }
    })

        
    },

    //Pagina para editar um produto.
    edit:(req,res)=>{
        const{id}=req.params // Esse valor é string
        const productResult = products.find(product =>product.id ===parseInt(id))//converte o id para inteiro embora seja um string
        if(!productResult){
            //res.send('Erro . Produto não encontrado')//Mostra o texto
            res.render('error', {title:'Erro',message:"Produto não encontrado"})
        }
        return res.render('product-edit',{
            title:'Editar Produto',
            product:productResult,
        })
    },

    //Edita o produto. Não retorna pagina
    update:(req,res)=>{},

    //delete:(req,res)=>{},
    //Deleta o produto. Não retorna pagina.
    delete:(req,res)=>{},
};

module.exports =productController;