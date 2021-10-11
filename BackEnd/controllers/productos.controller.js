const ProductSchema = require('../models/producto')

const getProducto = async (req, res) => {
    if (typeof req.body != 'undefined') {
        try {
            let pruduct = await ProductSchema.findById(req.body.id);
            res.json({ pruducto });
        }
        catch (err) {
            console.log(err);
        }
    } else {
        res.json({ msg: "No se puede obtener el producto sin el id" })
    }
}

const getProductos = async (req, res) => {
    try {
        let pruducts = await ProductSchema.find();
        res.json({ pruductos });
    }
    catch (err) {
        console.log(err);
    }
}

const createProducto = async (req, res) => {
    if (typeof req.body != 'undefined') {
        let producto = new ProductSchema(req.body);
        try {
            await producto.save();
            res.json({ msg: 'Se ha creado el producto ' + producto.id });
        }
        catch (err) {
            console.log(err);
        }
    } else {
        res.json({ msg: "No se puede crear el producto, revisar los parametros" })
    }
}

const updateProducto = async (req, res) => {
    if (typeof req.body != 'undefined') {
        try {
            await ProductSchema.findOneAndUpdate(
                { _id: req.body.id },
                {
                   valor: req.body.valor,
                   descripcion: req.body.descripcion,
                   estado: req.body.estado
                }
            );
            res.json({ msg: 'Se ha actualizado el producto ' + req.body.id })
        }
        catch (err) {
            console.log(err);
        }
    } else {
        res.json({ msg: "No se puede actualizar el producto, revisar los parametros" })
    }
}


const deleteProducto = async (req, res) => {
    if (typeof req.body != 'undefined') {
        try {
            await ProductSchema.findOneAndRemove(req.body.id);
            res.json({ msg: 'Se ha eliminado el producto ' + req.body.id });
        }
        catch (err) {
            console.log(err);
        }
    } else {
        res.json({ msg: "No se puede eliminar el producto sin el id" })
    }
}

module.exports.getProducto = getProducto;
module.exports.getProductos = getProductos;
module.exports.createProducto = createProducto;
module.exports.updateProducto = updateProducto;
module.exports.deleteProducto = deleteProducto;