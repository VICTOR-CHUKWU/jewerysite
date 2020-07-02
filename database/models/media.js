const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Media = sequelize.define('Media', {
    path: DataTypes.STRING,
    reference: DataTypes.STRING,
    referenceId: DataTypes.INTEGER,
    type: DataTypes.STRING,
});
Media.sync();

module.exports = Media;