//Controladores são objetos.

const productController ={
    //list retorna renderização
    
    //lista dos produtos. Pode retornar uma pagina ou não.
    index: (req,res)=>{
        return res.render('products',{title:'Lista de produtos'})
    },

    //mostra um produto. Pode retornar uma pagina ou não
    show:(req,res)=>{},

    //Retorna para criar produto
    create:(req,res)=>{},
    
    //Cria o produto. Não retorna pagina.
    store:(req,res)=>{},

    //Pagina para editar um produto.
    edit:(req,res)=>{},

    //Edita o produto. Não retorna pagina
    update:(req,res)=>{},

    //delete:(req,res)=>{},
    //Deleta o produto. Não retorna pagina.
    delete:(req,res)=>{},
};

module.exports =productController;