var pageLogo = require('./src/wog/pages/pageLogo.js');
var websocket = require('./src/libs/websocket.js');

function init() {
	tabris.ui.set('displayMode', 'fullscreen');
	tabris.ui.set('toolbarVisible', false);
	pageLogo.open();
	console.log(typeof websocket.myWogVar);
	websocket.init();
}

init();