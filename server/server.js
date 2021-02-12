const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
require("dotenv").config();

const db = require("./models/index");
const Role = db.role;

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop database and resync");
  initial();
});

const PORT = process.env.SERVER_PORT;

const corsOption = {
  origin: "http://localhost:8080",
};
function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "admin",
  });
}
app.use(morgan("dev"));
app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

require("./routes/works.routes")(app);
require("./routes/category.routes")(app);
require("./routes/user.routes")(app);
require("./routes/companies.routes")(app);
require("./routes/auth.routes")(app);
