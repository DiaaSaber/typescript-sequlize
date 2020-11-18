import {Sequelize} from "sequelize-typescript"

export const sequlize = new Sequelize('EasyKash', 'root', '', {
   host: 'localhost',
   dialect: 'mysql',
   models: [__dirname + '/models'] 
});