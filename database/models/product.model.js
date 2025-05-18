// models/product.model.js

const ProductModel = (sequelize, DataTypes) => {
  const products = sequelize.define("Product", {
    ProductName: {
      type: DataTypes.STRING,
    },
    productPrice: {
      type: DataTypes.STRING,
    },
  });

  return products;
};

module.exports = ProductModel;
