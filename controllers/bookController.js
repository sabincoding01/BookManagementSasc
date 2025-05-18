const { books } = require("../database/connection");

exports.fetchBooks = async (req, res) => {
  const datas = await books.findAll();
  res.json({
    message: "books fetched successfully",
    datas,
  });
};

exports.addBooks = async (req, res) => {
  const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;
  await books.create({
    bookName: bookName,
    bookPrice: bookPrice,
    bookAuthor: bookAuthor,
    bookGenre: bookGenre,
  });

  res.json({
    message: "Data posted successfully",
  });
};

exports.deleteBooks = (req, res) => {
  res.json({
    message: "delete book successfully",
  });
};

exports.editBooks = (req, res) => {
  res.json({
    message: "Book edit successfully",
  });
};

exports.singleFetchBook = async(req, res) => {
  const id = req.params.id;
 const datas = await books.findByPK(id)
 res.json({
    messege:"Single book fetched",
 })
};

//aba yo functions haru lai export garnu paryo so dherai tarika xa

// module.exports={fetchBooks,addBooks,deleteBooks,editBooks}
