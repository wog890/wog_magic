// Private ------------------------------------------------------------------------------------

var MARGIN = tabris.device.get('screenWidth')/6;
var PADDING = 16;

var _ = require('../../libs/underscore');
var pagesAPI = require('../../libs/pagesAPI');
var websocket = require('../../libs/websocket');
var page = new tabris.Page({
	background: '#73068F',
	title: 'Create Account',
	topLevel: true
});

var createContainer = new tabris.Composite({
	background: '#819196',
	cornerRadius: 14,
	id: 'createContainer',
	layoutData: {left: MARGIN, top: 140, right: MARGIN}
}).appendTo(page);
var createContainerHeader = new tabris.Composite({
	background: '#555E61',
	cornerRadius: 14,
	id: 'createContainerHeader',
	layoutData: {left: 0, top: 0, right: 0}
}).appendTo(createContainer);
new tabris.TextView({
	alignment: 'center',
	font: 'bold 24px',
	layoutData: {left: 0, top: 8, right: 0, bottom: 8},
	text: 'Create Account'
}).appendTo(createContainerHeader);
var createContainerBody = new tabris.Composite({
	layoutData: {left: 0, top: ['#createContainerHeader', 8], right: 0}
}).appendTo(createContainer);
var inpUsername = new tabris.TextInput({
	layoutData: {left: PADDING, top: 0, right: PADDING},
	message: 'Username'
}).appendTo(createContainerBody);
var inpPassword = new tabris.TextInput({
	layoutData: {left: PADDING, top: ['prev()', 8], right: PADDING},
	message: 'Password',
	type: 'password'
}).appendTo(createContainerBody);
var inpPasswordConfirm = new tabris.TextInput({
	layoutData: {left: PADDING, top: ['prev()', 8], right: PADDING},
	message: 'Confirm Password',
	type: 'password'
}).appendTo(createContainerBody);
var btnCreate = new tabris.Button({
	background: '#60B342',
	cornerRadius: 14,
	layoutData: {left: PADDING, top: ['prev()', 8], right: PADDING},
	text: 'Create an Account'
}).appendTo(createContainerBody).on('tap', createAccount);
new tabris.Composite({
	layoutData: {left: PADDING, top: ['prev()', 8], right: PADDING}
}).appendTo(createContainerBody);

function createAccount() {
	var fErr = false;
	var sErr;
	if (inpUsername.get('text') === '') {
		fErr = true;
		sErr = 'Please enter a username';
	}
	if (inpPassword.get('text') === '') {
		fErr = true;
		sErr = 'Please create a password';
	}
	if (inpPassword.get('text') !== inpPasswordConfirm.get('text')) {
		fErr = true;
		sErr = 'Passwords do not match';
	}
	if (fErr) {
		window.plugins.toast.show(sErr, 'short', 'bottom');
	}
	else {
		var message = {
			password: inpPassword.get('text'),
			reason: 'CreateAccount',
			username: inpUsername.get('text')
		}
		console.log(websocket);
		/*console.log(websocket.myWogVar);*/
		/*websocket.sendJSON(message);*/
	}
}

// Public -------------------------------------------------------------------------------------

module.exports = page;