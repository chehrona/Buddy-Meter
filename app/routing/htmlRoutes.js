module.exports = function(path, app) {
    app.get("/survey", function(req, res) {
        res.sendFile(path.resolve(__dirname, "../public/survey.html"));
    });

    app.get("/style.css", function(req, res) {
        res.sendFile(path.resolve(__dirname, "../public/style.css"));
    });

    app.get("/home.css", function(req, res) {
        res.sendFile(path.resolve(__dirname, "../public/home.css"));
    }); 

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}