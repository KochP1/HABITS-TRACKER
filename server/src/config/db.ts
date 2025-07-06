import mysql2 from 'mysql2/promise'
import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'test_db',
    logging: false, 
});

sequelize.authenticate().then(() => console.log('Conexion exitosa')).catch(err => console.error('Error al conectar a la base de datos:', err));

export default sequelize