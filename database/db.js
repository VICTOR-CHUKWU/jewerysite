const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('jewel', 'root', '', {
    dialect: 'mariadb',
    // dialectOptions: {
    //   // Your mysql2 options here
    // }
  });

  module.exports = sequelize;
