const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

const PORT = process.env.SERVER_PORT || 3050;

app.use(cors());
app.use(morgan("dev"));

app.use(require("./Routes/categories.js"));

app.get("/", (req, res) => {
  res.send({ message: "OK", code: 200 });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
