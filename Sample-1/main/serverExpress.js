const express = require("express");
const app = express();

// parse JSON and URL-encoded bodies BEFORE defining/using routes
app.use(express.json({ type: "application/json" })); // enables req.body for JSON
app.use(express.urlencoded({ extended: true })); // enables req.body for form submissions

// create a Router instance (call the function)
const router = express.Router();

// POST /src handler — reads values from req.body
app.post("/", (req, res) => {
  const { numberOne, numberTwo } = req.body;
  // console.log("numberOne, numberTwo :", numberOne, numberTwo);
  const result = numberOne + numberTwo;
  res.status(200).json({
    data: result,
  });
  // res.send("Post");
  return;
});

// mount router (order after middleware and route definitions is fine)
app.use(router);

app.get("/", (req, res) => {
  res.send("x");
});

// simple GET /
app.get("/", (req, res) => {
  res.send("Server is running");
});

// start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
