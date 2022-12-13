const config = require("../config");

module.exports = {
    //aca se escribe todo en un json 
    getAllapartment: async function(req, res) {
        var results = await config.getAllapartment(req, res);
        console.log("-----------------------------------------------------------------------------------------------")
        console.log(results);
        res.send(results);
    },
}