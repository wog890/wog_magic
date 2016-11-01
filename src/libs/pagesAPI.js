// Private ------------------------------------------------------------------------------------

var _ = require('./underscore');
var PATH = '../wog/pages/';

var pages = {
	pageCreateAccount: new Page('pageCreateAccount'),
	pageDueling: new Page('pageDueling'),
	pageLogin: new Page('pageLogin'),
	pageLogo: new Page('pageLogo')
};

function Page(id) {
	this.id = id;
	this.page = require(PATH + id + '.js');
	this.close = function() {
		this.page.close();
	}
	this.open = function() {
		this.page.open();
	}
}

// Public -------------------------------------------------------------------------------------

var _public = {};

_public.close = function(pageId) {
	pages[pageId].close(prop);
};

_public.open = function(pageId) {
	pages[pageId].open();
};

module.exports = _public;