var pageLogo = require('./src/wog/pages/pageLogo');
var pageCreateAccount = require('./src/wog/pages/pageCreateAccount');
var websocket = require('./src/libs/websocket');

function init() {
	tabris.ui.set('displayMode', 'fullscreen');
	tabris.ui.set('toolbarVisible', false);
	pageCreateAccount.open();
	/*pageLogo.open();*/
	/*console.log(typeof websocket.myWogVar);*/
	/*websocket.init();*/
}

init();