const express = require("express");
const students = require("./data");
const app = express();
app.use(express.json());
app.listen(8080, () => {
  console.log("running on port 8080");
});

app.get("/", (req, res) => {
  res.json({ message: "Api is working fine" });
});

app.get("/api/students", (req, res) => {
  res.json(students);
});

app.post("/api/students", (req, res) => {
  if (!req.body.userId) {
    res.status(400);
    return res.json({ message: "email is required" });
  }
  const user = {
    userId: req.body.userId,
    ethAddress: req.body.ethAddress,
    facebookId: req.body.facebookId,
    twitterHandle: req.body.twitterHandle,
  };
  students.push(user);
  console.log(req.body);
  res.json(user);
});
