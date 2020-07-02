const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Media = require('./media');

const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    slug: {
        type: DataTypes.STRING,
        unique: true,
    },
    type: DataTypes.STRING,
    tag: DataTypes.STRING,
    price: DataTypes.INTEGER,
    oPrice: DataTypes.INTEGER,
    description: DataTypes.STRING,
    inStock: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    }
});
Product.hasMany(Media, {
    as: 'images',
    foreignKey: 'referenceId',
    onDelete: 'CASCADE',
    scope: { reference: 'product' },
})
Product.sync();

module.exports = Product;