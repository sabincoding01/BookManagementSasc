//bookName,bookPrice,bookAuthor,bookGenre

//const { INTEGER, Model } = require("sequelize")

const bookModel = (sequelize, DataTypes) => {
  sequelize.define("book", {
    bookName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bookAuthor: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    bookGenre: {
      type: DataTypes.STRING,
    },
  });

  return bookModel;
};

module.exports = bookModel;
