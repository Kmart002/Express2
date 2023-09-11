const express = require("express");
const dotenv = require("dotenv");
const {router} = require("./routes/product");
const cors =require("cors")
const app = express();
app.use(cors());
app.set("view engine", "ejs");

app.get("/", (req, res)=>{
const person = {
    firstName: "Mathew",
    lastName:"Abey"
};

res.render("index", {person})
});

app.use("/api/v1/", router)
dotenv.config()

const port = process.env.PORT || 3000;

 app.listen(port, () => {
    console.log(`server running on port ${port}`);
 })



