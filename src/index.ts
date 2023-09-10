import express from "express";
const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "hello there!!",
  });
});

app.listen(8000, () => {
  console.log("App running on port 8000");
});
