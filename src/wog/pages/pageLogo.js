// Private ------------------------------------------------------------------------------------
var _ = require('../../libs/underscore');
var page = new tabris.Page({
	background: '#73068F',
	title: 'Logo',
	topLevel: true
});

var logo = new tabris.ImageView({
	image: {src: './src/imgs/my_logo.png'},
	layoutData: {top: tabris.device.get('screenHeight')/4, centerX: 0},
	scaleMode: 'auto'
}).appendTo(page);

// Public -------------------------------------------------------------------------------------

module.exports = page;