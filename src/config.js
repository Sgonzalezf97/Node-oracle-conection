const base = require('../src/conexion/conexion');

module.exports= {
    //realiza la funcion y trae los resultados que los envia a controller
    getAllapartment: async function(req, res) {
        var result = await base.getAllapartment(req, res);
        return result;
    },
}