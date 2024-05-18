const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "html/index.html"));
})

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "html/about.html"))
})

app.get("/number-sense", (req, res) => {
    res.sendFile(path.join(__dirname, "html/events/number-sense/number-sense.html"))
})


app.get("/number-sense/memorization/squares", (req, res) => {
    res.sendFile(path.join(__dirname, "html/events/number-sense/memorization/squares.html"))
})

//host folders
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use("/css", express.static(path.join(__dirname, "css")));

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})