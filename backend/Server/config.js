require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.MYSQLDATABASE || 'salesforce',
  process.env.MYSQLUSER || 'root',
  process.env.MYSQLPASSWORD || '',
  {
    host: process.env.MYSQLHOST || 'localhost',
    port: process.env.MYSQLPORT || 3306,
    dialect: 'mysql',
    logging: false,
  }
);

module.exports = sequelize;
