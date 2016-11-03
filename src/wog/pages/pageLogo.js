var pagesAPI = require('../../libs/pagesAPI');

exports.create = function() {

	// PRIVATE --------------------------------------------------------------------------------

	var _page;

	function _createPage() {
		_page = new tabris.Page({
			background: '#73068F',
			id: 'pgLogo',
			title: 'Logo',
			topLevel: true
		});
		new tabris.ImageView({
			image: {src: './src/imgs/my_logo.png'},
			layoutData: {top: tabris.device.get('screenHeight')/4, centerX: 0},
			scaleMode: 'auto'
		}).appendTo(_page);
	}

	// PUBLIC ---------------------------------------------------------------------------------

	// INIT -----------------------------------------------------------------------------------

	_createPage();

	return _page;

};