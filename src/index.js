const express = require("express");
const connectDB = require("./db/db");
const seeds = require("./utils/seeds");

const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

seeds.defaultUser();
seeds.defaultPlaylists();

app.all("*", require("./routes/index"));

connectDB();

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
