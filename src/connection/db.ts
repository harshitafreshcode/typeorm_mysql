import { Employee } from "../entity/Employee";
import { Photo } from "../entity/Photo";
import { Project } from "../entity/Project";

var connection = require("typeorm")

var datasource = new connection.DataSource({
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "typeorm_mysql",
    port:3306,
    synchronize: true,
    entities: [Employee,Project,Photo],
    // entities: ['src/entity/*.ts'],  
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
