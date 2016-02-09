var express = require('express');
var app = express();

app.use(express.static(__dirname+'/WebContent'));

function toNormalDate(date){
	var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var d = new Date(date);
	return monthName[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
}

app.get('/:date', function(req, res){
	var date = Date.parse(req.params.date);
	if(isNaN(date)){
		res.send({unix: null, natural: null});
	} else {
		res.send({unix: date, natural: toNormalDate(date)});
	}
});

app.listen(8080);