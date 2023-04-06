1. Download node packges
    npm init

2. Add migartion in table
    npx sequelize-cli db:migrate

3. Run app
    npm start


NOTR:MIGRATION RUN
---> npx typeorm-ts-node-commonjs migration:run -d src/connection/db.ts
For instance -->
typeorm migration:create ./src/migration/User
-->START SERVER
 sudo /opt/lampp/lampp start
