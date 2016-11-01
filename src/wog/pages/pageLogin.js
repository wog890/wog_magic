// Private ------------------------------------------------------------------------------------

var MARGIN = tabris.device.get('screenWidth')/6;
var PADDING = 16;

var _ = require('../../libs/underscore');
var pagesAPI = require('../../libs/pagesAPI');
var page = new tabris.Page({
	background: '#73068F',
	title: 'Login',
	topLevel: true
});

var loginContainer = new tabris.Composite({
	background: '#819196',
	cornerRadius: 14,
	id: 'loginContainer',
	layoutData: {left: MARGIN, top: 140, right: MARGIN}
}).appendTo(page);
var loginContainerHeader = new tabris.Composite({
	background: '#555E61',
	cornerRadius: 14,
	id: 'loginContainerHeader',
	layoutData: {left: 0, top: 0, right: 0}
}).appendTo(loginContainer);
new tabris.TextView({
	alignment: 'center',
	font: 'bold 24px',
	layoutData: {left: 0, top: 8, right: 0, bottom: 8},
	text: 'Sign In'
}).appendTo(loginContainerHeader);
var loginContainerBody = new tabris.Composite({
	layoutData: {left: 0, top: ['#loginContainerHeader', 8], right: 0}
}).appendTo(loginContainer);
var inpUsername = new tabris.TextInput({
	layoutData: {left: PADDING, top: 0, right: PADDING},
	message: 'Username'
}).appendTo(loginContainerBody);
var inpPassword = new tabris.TextInput({
	layoutData: {left: PADDING, top: ['prev()', 8], right: PADDING},
	message: 'Password',
	type: 'password'
}).appendTo(loginContainerBody);
var chxRemember = new tabris.CheckBox({
	layoutData: {left: PADDING, top: 'prev()', right: PADDING},
	text: 'Remember password?'
}).appendTo(loginContainerBody);
var btnLogIn = new tabris.Button({
	background: '#60B342',
	cornerRadius: 14,
	layoutData: {left: PADDING, top: ['prev()', 8], right: PADDING},
	text: 'Log In'
}).appendTo(loginContainerBody);
new tabris.Composite({
	layoutData: {left: PADDING, top: ['prev()', 8], right: PADDING},
}).appendTo(loginContainerBody);
var btnCreateAccount = new tabris.TextView({
	alignment: 'right',
	font: '16px',
	highlightOnTouch: true,
	layoutData: {top: ['#loginContainer', 8], right: MARGIN + PADDING},
	text: 'Create an account',
	textColor: '#3366BB'
}).appendTo(page).on('tap', openPageCreateAccount);

function openPageCreateAccount(widget, gesture) {
	pagesAPI.open('pageCreateAccount');
}


// Public -------------------------------------------------------------------------------------

module.exports = page;