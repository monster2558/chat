
var app = require('express')(); 
var server = require('http').Server(app);
var io = require ('socket.io')(server); 


//express.set('view engine' , 'view.js') ; 

var fs = require ('fs')

app.get('/' , function(req,res)
	{
     res.sendFile(__dirname + '/index.html');
	});



io.sockets.on('connection',function(socket){
		console.log('client has been connected');
		socket.emit('message', function(message){
			console.log('test');
			console.log('message:  ' + message);
		});

 
});

server.listen(8080);

