// Private ------------------------------------------------------------------------------------

var _ = require('./underscore.js');
var _webSocket;

var pageLogin = require('../wog/pages/pageLogin');
var isOpen = false;

function checkConnection() {
	var networkState = navigator.connection.type;
	if (networkState === Connection.UNKNOWN || networkState === Connection.NONE) {
		return false;
	}
	return true;
};

// Public -------------------------------------------------------------------------------------

var _public = {};
_public.myWogVar = true;
_public.checkConnection = checkConnection;

_public.init = function() {
	if (checkConnection) {
		_webSocket = new WebSocket('ws://wog-magic-alpha-225034.nitrousapp.com:8080', 'echo-protocol');
		_webSocket.onclose = function(event) {
			isOpen = false;
			navigator.notification.alert('Client failed to connect to server!', function(){}, 'Error');
			console.log((new Date()) + ' Client disconnected from server');
		}
		_webSocket.onmessage = function(event) {

		}
		_webSocket.onopen = function(event) {
			isOpen = true;
			console.log((new Date()) + ' Client connected to server');
			pageLogin.open();
		}
	}
	else {

	}
};

_public.send = function(message) {
	_webSocket.send(message);
};

_public.sendJSON = function(message) {
	_webSocket.send(JSON.stringify(message));
};

module.exports = _public;