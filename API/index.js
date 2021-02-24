const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
});

const PORT = process.env.SERVER_PORT || 3050;

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession);

app.use(require("./Routes/works"));
app.use(require("./Routes/categories"));
app.use(require("./Routes/usersRoutes"));
app.use(require("./Routes/auth"));

app.get("/", (req, res) => {
  res.send({ message: "OK", code: 200 });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
