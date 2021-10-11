const {Router} = require('express');
const router = Router();
const { productosController } = require('../controllers');
const { body } = require('express-validator');

router.get('/:id', productosController.getProduct);


router.get('/', productosController.getProducts);

//escribiendo las reglas que deben cumplir los parametros para crear un producto
router.post('/',
    body('valor', 'El valor del producto es requerido y debe ser numerico').exists().isNumeric(),
    body('descripcion', 'La descripción del producto es requerida').exists(),
    body('estado', 'El estado del producto es requerido(true/false)').isBoolean().exists()
    , productosController.createProduct);

//escribiendo las reglas que deben cumplir los parametros para actualizar un producto               
router.put('/:id',
    body('valor', 'El valor del producto es requerido y debe ser numerico').exists().isNumeric(),
    body('descripcion', 'La descripción del producto es requerida').exists(),
    body('estado', 'El estado del producto es requerido(true/false)').isBoolean().exists()
    , productosController.updateProduct);

router.delete('/:id', productosController.deleteProduct);

module.exports = router;