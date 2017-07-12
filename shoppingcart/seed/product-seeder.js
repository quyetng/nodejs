var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/fishstore');
var products = [
	new Product({
		imagePath: '/images/fish.png',
		title: 'Happy Fish',
		description: 'Wonderful happy fish!!!',
		price: 10
	}),
	new Product({
		imagePath: '/images/fish.png',
		title: 'Happy Fish',
		description: 'Wonderful happy fish!!!',
		price: 12
	}),
	new Product({
		imagePath: '/images/fish.png',
		title: 'Happy Fish',
		description: 'Wonderful happy fish!!!',
		price: 14
	}),
	new Product({
		imagePath: '/images/fish.png',
		title: 'Happy Fish',
		description: 'Wonderful happy fish!!!',
		price: 16
	}),
	new Product({
		imagePath: '/images/fish.png',
		title: 'Happy Fish',
		description: 'Wonderful happy fish!!!',
		price: 18
	}),
	new Product({
		imagePath: '/images/fish.png',
		title: 'Happy Fish',
		description: 'Wonderful happy fish!!!',
		price: 20
	}),
];

var done = 0;
for (var i = 0; i < products.length; i++){
	products[i].save(function(err, result){
		done++;
		if (done === products.length) {
			exit();
		}
	});
}
function exit() {
	mongoose.disconnect();
}
