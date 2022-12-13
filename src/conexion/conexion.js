const oracledb = require('oracledb')

// hr schema configuration DB
// se realiza la conexión a la base de datos y se realizan todas las peticiones para exportarlas y porder ser guardadas por config que atraves de routes lo lleva al controlador para mostrarlas
const config = {
    user: "Conjunto_admin",
    password: '1234',
    connectString: "localhost:1521/CONJUNTO_DBADMIN"
}
module.exports = {
    getAllapartment: async function(req, res) {
        let conn
        try {
            conn = await oracledb.getConnection(config);
            console.log("Successfully connected to BD");
            var result = await conn.execute('select * from APARTAMENTO');
            console.log(result.rows);
            return result.rows;
        } catch (err) {

            console.error(err.message);

        } finally {

            if (conn) {

                try {

                    // Always close connections

                    await conn.close();

                    console.log('close connection success');
                    return result;
                } catch (err) {

                    console.error(err.message);

                }

            }

        }

    },
}