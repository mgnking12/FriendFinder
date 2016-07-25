var friendsData = require("../data/friends.js");
var path = require("path");
var bodyParser = require("body-parser");

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friendsData);
    })

    app.post('/api/friends', function(req, res) {
        var addFriend = req.body;
        var difference = 50;
        var friendMatch;
        friendsData.forEach(function(apiFriends) {
            var diff = 0;
            for (var i = 0; i < apiFriends.scores.length; i++) {
                diff += Math.abs(apiFriends.scores[i] - addFriend.scores[i]);
            }
            if (diff <= difference) {
                difference = diff;
                friendMatch = apiFriends;
            }
        })
        res.json(friendMatch);
        friendsData.push(addFriend);
    })
}