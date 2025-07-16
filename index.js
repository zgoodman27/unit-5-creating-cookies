const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.static("public"));
app.use(cookieParser());

const PORT = 3000;


app.get("/lightMode", (req, res) => {
  res.cookie("theme", "lightMode", { maxAge: 60 * 60 * 24});
  res.redirect("/");
});

app.get("/darkMode", (req, res) => {
  res.cookie("theme", "darkMode", { maxAge: 60 * 60 * 24});
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
