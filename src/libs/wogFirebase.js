// Private ------------------------------------------------------------------------------------

var _ = require('./underscore');
var firebase = require('./firebase');

var config = {
    apiKey: "AIzaSyBX1fmu6jsH5LdU6EkkeFAqhMTyjsoZk_U",
    authDomain: "wog-magic.firebaseapp.com",
    databaseURL: "https://wog-magic.firebaseio.com",
    storageBucket: "wog-magic.appspot.com",
    messagingSenderId: "653545847498"
};
var _public = {};

// Public -------------------------------------------------------------------------------------

_public.init = function() {
	firebase.initializeApp(config);
};

module.exports = _public;