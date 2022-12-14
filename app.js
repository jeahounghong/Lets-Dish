const express = require("express");
const mongoose = require('mongoose');
const users = require("./routes/api/users")
const ingredients = require("./routes/api/ingredients")
const countries = require("./routes/api/countries")
const recipes = require("./routes/api/recipes")

const app = express();
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));




app.get("/", (req, res) => res.send("yer"));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
    
app.use("/api/users", users)
app.use("/api/ingredients", ingredients)
app.use("/api/countries", countries)
app.use("/api/recipes", recipes)