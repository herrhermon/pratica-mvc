// Configuração basica de rotas

const express=require('express');

//Atribui a configuração de roteamento a variavel.
const router = express.Router();

//Importar o controlador
const productController=require('../controllers/ProductController')

router.get("/",productController.index)

module.exports =router;