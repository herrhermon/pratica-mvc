// Configuração basica de rotas

const express=require('express');

//Atribui a configuração de roteamento a variavel.
const router = express.Router();

//Importar o controlador
const productController=require('../controllers/ProductController')


router.get("/create",productController.create)

router.get("/",productController.index)
router.get("/:id",productController.show)

module.exports =router;