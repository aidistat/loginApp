var express = require('express');
var router = express.Router();

var users = []

router.get('/main', function(req, res, next) {
	res.render('main', { });
});

router.get('/', function(req, res, next) {
	res.render('index', { message: null });
});

router.get('/login', function(req, res, next) {
	res.render('login', {});
});

router.get('/register', function(req, res, next) {
	res.render('register', {});
});

router.post('/register', function(req, res, next) {
	let found = false
	for(let i = 0; i < users.length; i++) {
		if(users[i].login == req.body.login) {
			found = true
			res.render('index', {message: 'This user exist'})
		}
	}
	if(!found) { //found == false
		users.push({
			login: req.body.login,
			pass: req.body.pass
		})
		res.render('index', {message: 'You are registered'})
	}
});

router.post('/login', function(req, res, next) {
	let found = false
	for(let i = 0; i < users.length; i++) {
		if(users[i].login == req.body.login && users[i].pass == req.body.pass) {
			found = true
			res.render('index', {message: 'You are logged in!'})
		}
	}
	if(!found) { //found == false
		res.render('index', {message: 'This user is not exists'})
	}
});


module.exports = router;
