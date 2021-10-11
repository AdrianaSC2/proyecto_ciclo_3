const SaleSchema = require('../models/venta')

const getVenta = async (req, res) => {
    if (typeof req.body != 'undefined') {
        try {
            let venta = await SaleSchema.findById(req.body.id);
            res.json({ venta });
        }
        catch (err) {
            console.log(err);
        }
    } else {
        res.json({ msg: "No se puede obtener la venta sin el id" })
    }
}

const getVentas = async (req, res) => {
    try {
        let ventas = await SaleSchema.find();
        res.json({ ventas });
    }
    catch (err) {
        console.log(err);
    }
}

const createVenta = async (req, res) => {
    if (typeof req.body != 'undefined') {
        let venta = new SaleSchema(req.body);
        try {
            await venta.save();
            res.json({ msg: 'Se ha creado la venta ' + venta.id });
        }
        catch (err) {
            console.log(err);
        }
    } else {
        res.json({ msg: "No se puede crear la venta, revisar los parametros" })
    }
}

const updateVenta = async (req, res) => {
    if (typeof req.body != 'undefined') {
        try {
            await SaleSchema.findOneAndUpdate(
                { _id: req.body.id },
                {
                    valor: req.body.valor,
                    fecha: req.body.fecha,
                    documentoCliente: req.body.documentoCliente,
                    nombreCliente: req.body.nombreCliente,
                    documentoVendedor: req.body.documentoVendedor,
                  
                }
            );
            res.json({ msg: 'Se ha actualizado la venta ' + req.body.id })
        }
        catch (err) {
            console.log(err);
        }
    } else {
        res.json({ msg: "No se puede actualizar la venta, revisar los parametros" })
    }
}

const deleteVenta = async (req, res) => {
    if (typeof req.body != 'undefined') {
        try {
            await SaleSchema.findOneAndRemove(req.body.id);
            res.json({ msg: 'Se ha eliminado la venta ' + req.body.id });
        }
        catch (err) {
            console.log(err);
        }
    } else {
        res.json({ msg: "No se puede eliminar la venta sin el id" })
    }
}

module.exports.getVenta = getVenta;
module.exports.getVentas = getVentas;
module.exports.createVenta = createVenta;
module.exports.updateVenta = updateVenta;
module.exports.deleteVenta = deleteVenta;