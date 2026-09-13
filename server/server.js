const express = require("express");
const app = express();

app.use(express.json());

// GET: Retrieve resource(s) from the server
app.get("/", (req, res) => {
  res.send("Hello, server is running!");
});

// POST: Create a new resource on the server
app.post("/echo", (req, res) => {
  console.log(req.body);
  res.json({ youSent: req.body });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});