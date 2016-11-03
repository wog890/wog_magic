var _firebase = require('./src/libs/wogFirebase');
var _pagesAPI = require('./src/libs/pagesAPI');
var _pageCreateAccount = require('./src/wog/pages/pageCreateAccount').create();
var _pageLogin = require ('./src/wog/pages/pageLogin').create();
var _pageLogo = require('./src/wog/pages/pageLogo').create();
var _websocket = require('./src/libs/websocket');

function init() {
	tabris.ui.set('displayMode', 'fullscreen');
	tabris.ui.set('toolbarVisible', false);
	_pagesAPI.init({
		pageCreateAccount: _pageCreateAccount,
		pageLogin: _pageLogin,
		pageLogo: _pageLogo
	});
	_pagesAPI.open('pageLogo');
	_firebase.init();
	_websocket.init().then(
		function() {
			_pagesAPI.open('pageLogin');
		},
		function(err) {
			switch(err) {
				case 'WebSocket Error': navigator.notification.alert('Error connection to server', function(){}, 'Error'); break;
				case 'Network Error': navigator.notification.alert('No internet connection', function(){}, 'Error'); break;
			}
		}
	);
}

init();