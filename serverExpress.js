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
  console.log("numberOne, numberTwo :", numberOne, numberTwo);
  res.send("Post");
});

// mount router (order after middleware and route definitions is fine)
app.use(router);

// simple GET /
app.get("/", (req, res) => {
  res.send("Server is running");
});

// start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
