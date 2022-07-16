// Configuração basica de rotas

const express=require('express');

//Atribui a configuração de roteamento a variavel.
const router = express.Router();

//Importar o controlador
const productController=require('../controllers/ProductController')


router.get("/create",productController.create)
router.post("/create",productController.store)

router.get("/edit/:id",productController.edit)
router.put("/edit/:id",productController.update) //Pode ser também um patch.

router.get("/delete/:id",productController.delete)

router.delete("/delete/:id", productController.destroy);

router.get("/",productController.index)
router.get("/:id",productController.show)



module.exports =router;