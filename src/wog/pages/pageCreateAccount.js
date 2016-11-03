var websocket = require('../../libs/websocket');
var pagesAPI = require('../../libs/pagesAPI');

exports.create = function() {

	// PRIVATE --------------------------------------------------------------------------------

	var _margin = tabris.device.get('screenWidth')/6;
	var _padding = 16;
	var _page;

	function _createAccount() {
		var fErr = false;
		var password = _page.find('#inpPassword').get('text');
		var passwordConfirm = _page.find('#inpPasswordConfirm').get('text');
		var sErr;
		var username = _page.find('#inpUsername').get('text');
		if (password !== passwordConfirm) {
			fErr = true;
			sErr = 'Passwords do not match';
		}
		if (password === '') {
			fErr = true;
			sErr = 'Please create a password';
		}
		if (username === '') {
			fErr = true;
			sErr = 'Please enter a username';
		}
		if (fErr) {
			window.plugins.toast.show(sErr, 'short', 'bottom');
		}
		else {
			console.log('Create an account here');
		}
	}

	function _createPage() {
		_page = new tabris.Page({
			background: '#73068F',
			id: 'pgCreateAccount',
			title: 'Create Account',
			topLevel: false
		});
		var comCreate = new tabris.Composite({
			background: '#819196',
			cornerRadius: 14,
			id: 'comCreate',
			layoutData: {left: _margin, top: 140, right: _margin}
		}).appendTo(_page);
		var comCreateHeader = new tabris.Composite({
			background: '#555E61',
			cornerRadius: 14,
			id: 'comCreateHeader',
			layoutData: {left: 0, top: 0, right: 0}
		}).appendTo(comCreate);
		new tabris.TextView({
			alignment: 'center',
			font: 'bold 24px',
			layoutData: {left: 0, top: 8, right: 0, bottom: 8},
			text: 'Create Account'
		}).appendTo(comCreateHeader);
		var comCreateBody = new tabris.Composite({
			layoutData: {left: 0, top: ['#comCreateHeader', 8], right: 0}
		}).appendTo(comCreate);
		var inpUsername = new tabris.TextInput({
			id: 'inpUsername',
			layoutData: {left: _padding, top: 0, right: _padding},
			message: 'Username'
		}).appendTo(comCreateBody);
		var inpPassword = new tabris.TextInput({
			id: 'inpPassword',
			layoutData: {left: _padding, top: ['prev()', 8], right: _padding},
			message: 'Password',
			type: 'password'
		}).appendTo(comCreateBody);
		var inpPasswordConfirm = new tabris.TextInput({
			id: 'inpPasswordConfirm',
			layoutData: {left: _padding, top: ['prev()', 8], right: _padding},
			message: 'Confirm Password',
			type: 'password'
		}).appendTo(comCreateBody);
		var btnCreate = new tabris.Button({
			background: '#60B342',
			cornerRadius: 14,
			layoutData: {left: _padding, top: ['prev()', 8], right: _padding},
			text: 'Create an Account'
		}).appendTo(comCreateBody).on('tap', _createAccount);
		new tabris.Composite({
			layoutData: {left: _padding, top: ['prev()', 8], right: _padding}
		}).appendTo(comCreateBody);
	}

	// PUBLIC ---------------------------------------------------------------------------------

	// INIT -----------------------------------------------------------------------------------

	_createPage();

	return _page;

};