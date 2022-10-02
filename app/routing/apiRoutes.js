let surveyData = require("../data/friends").surveyData;

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        return res.json(surveyData);
    });

    app.post("/api/friends", function(req, res) {
        let newUser = req.body;

        surveyData.push(newUser);

        res.json(newUser);
    });
}
