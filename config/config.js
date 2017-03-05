/**
 * Created by Carlos Leonardo Camilo Vargas Huamán on 3/2/17.
 */

module.exports = {
    port : 8123,
    db : {
        host: process.env.DATABASE_HOST || '127.0.0.1',
        database: "CHIRINOS",
        user: "users_service",
        password: "123",
        port: 3306
    }
};
