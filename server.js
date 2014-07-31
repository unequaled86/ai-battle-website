var express = require('express');
var app = express();

var port = process.env.port || 8080;

// serve up files in public folder
app.use('/', express.static(__dirname + '/public'));

// if ( !process.env.mode ) {
app.use('/tests', express.static(__dirname + '/test'));
// }

var router = express.Router();

router.get('/gameData/:turn', function(req, res){
	var gameData = {};
  gameData.board = {};
  gameData.board.length = 5;
  gameData.board.tiles = [
	  [req.params.turn,0,0,0,0],
	  [0,req.params.turn,0,0,0],
	  [0,0,req.params.turn,0,0],
	  [0,0,0,req.params.turn,0],
	  [0,0,0,0,req.params.turn]
  ];
  
  // respond with gameData in JSON format
	res.json(gameData);
});

// set root route for app's data
app.use('/api', router);

app.listen(port);
console.log('Listening on port: ', port);

// for ServerSpec.js to work must export app
module.exports = app;