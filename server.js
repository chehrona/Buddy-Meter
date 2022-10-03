let express = require("express");
let path = require("path");
let PORT = process.env.PORT || 3000;
let apiRoutes = require("./app/routing/apiRoutes");
let htmlRoutes = require("./app/routing/htmlRoutes");

let app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

apiRoutes(app);
htmlRoutes(path, app);

app.all("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.listen(PORT, function() {
    console.log("Listening on PORT:", PORT);
});