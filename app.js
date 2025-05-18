const express = require("express");

const bookRoutes = require("./router/bookRoute");
const app = express();

require("./database/connection");
app.use(express.json());

app.use("/api/", bookRoutes);

app.listen(5000, function () {
  console.log("Books backend started");
});
