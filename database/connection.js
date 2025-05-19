//hami yeha database connection ko logic herxamr
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "postgresql://postgres.lxrszmolqtokgxbmrapw:12345678@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Authenticated vayo");
  })

  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.books = require("./models/book.model")(sequelize, DataTypes);
db.users = require("./models/user.model")(sequelize, DataTypes);
db.products = require("./models/product.model")(sequelize, DataTypes);

//migrate code
sequelize.sync({ alter: false }).then(() => {
  console.log("migrate vayooo");
});
 
module.exports = db;
