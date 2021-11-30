const http = require('http');
const port = 3000;
const fs = require('fs');
const {error} = require('console');

const server = http.createServer(function(req, res){
	res.writeHead(200);
	fs.readFile('./src/index.html', function(error, date){
		if(error){
			res.writeHead(404);
			res.write('File NOTFOUND...');
		}else {
			res.write(date);
		}
		res.end();
	});
});

server.listen(port, function(error){
	if(error){
		console.log(`Sorry for the error: ${ error }...`);
	}else {
		console.log(`Server is listening at port: ${port}...`);
	}
});


