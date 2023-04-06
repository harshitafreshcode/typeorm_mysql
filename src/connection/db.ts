
var connection = require("typeorm")

var datasource = new connection.DataSource({
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "password",
    database: "typeormMysql",
    port:3306,
    // synchronize: true,
    entities: ['src/entity/*.ts'],  //import entity name or entity file name
    migrations: ['src/migration/*.ts'],
    migrationsTableName:"migrations",
    cli: { 
        "migrationsDir": "./src/migration" 
     }
})  

datasource.initialize()
    .then(function () {
    console.log("Data Source has been initialized!");
})
    .catch(function (err:any) {
    console.error("Error during Data Source initialization", err);
});

export default datasource;
