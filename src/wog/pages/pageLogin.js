// Private ------------------------------------------------------------------------------------

var _ = require('../../libs/underscore');
var page = new tabris.Page({
  background: '#AAAAAA',
  title: 'Login',
  topLevel: true
});

// Public -------------------------------------------------------------------------------------

var _public = {};

_public.open = function() {
  page.open();
};

module.exports = _public;