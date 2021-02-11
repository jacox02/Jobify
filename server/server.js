const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
require("dotenv").config();

const db = require("./models/index");
db.sequelize.sync({ force: false, syncOnAssociation: false }).then(() => {
  console.log("Drop database and resync");
});

const PORT = process.env.SERVER_PORT;

const corsOption = {
  origin: "http://localhost:8081",
};

app.use(morgan("dev"));
app.use(cors(corsOption));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "Working server",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
require("./routes/works.routes")(app);
require("./routes/category.routes")(app);
require("./routes/user.routes")(app);
require("./routes/companies.routes")(app);
