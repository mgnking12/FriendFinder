var dataFriends = require('../data/friends.js');

//Exports to the express app
module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(dataFriends);

        // for (var i = 0; i < friends.length; i++) {
        //     res.json(friends[i]);
        //     return;
        // }

        // res.json(false);

    });

    // Create New Friend - takes in JSON input
    app.post('/api/friends', function(req, res) {

        // req.body hosts is equal to the JSON post sent from the user
        var newfriend = req.body;
        newFriend.friendID = newFriend.friendName.replace(/\s+/g, '').toLowerCase();
        // We then add the json the user sent to the character array
        friendArr.push(newfriend);

        // We then display the JSON to the users
        res.json(newfriend);
        // res.json(friendArr);
    });

}