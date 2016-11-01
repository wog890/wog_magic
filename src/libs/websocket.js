// Private ------------------------------------------------------------------------------------

var _ = require('./underscore.js');
var pageLogin = require('../wog/pages/pageLogin');
var isOpen = false;
var webSocket;

function checkConnection() {
	var networkState = navigator.connection.type;
	if (networkState === Connection.UNKNOWN || networkState === Connection.NONE) {
		return false;
	}
	return true;
};

// Public -------------------------------------------------------------------------------------

var _public = {};
_public.checkConnection = checkConnection;

_public.init = function() {
	if (checkConnection) {
		webSocket = new WebSocket('ws://wog-magic-alpha-225034.nitrousapp.com:8080', 'echo-protocol');
		webSocket.onclose = function(event) {
			isOpen = false;
			navigator.notification.alert('Client failed to connect to server!', function(){}, 'Error');
			console.log((new Date()) + ' Client disconnected from server');
		}
		webSocket.onmessage = function(event) {

		}
		webSocket.onopen = function(event) {
			isOpen = true;
			console.log((new Date()) + ' Client connected to server');
			pageLogin.open();
		}
	}
	else {

	}
};

_public.send = function(message) {
	webSocket.send(message);
};

_public.sendJSON = function(message) {
	webSocket.send(JSON.stringify(message));
};

module.exports = _public;