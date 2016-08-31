// Calculates data needed for screen drawing
var fieldData = require('./js/wog/fieldData.js');
// Handles drawing and user input in the spell casting area
var spellCasting = require('./js/wog/spellCasting.js');
// Handles creating and adding text to the spell field area
var spellField = require('./js/wog/spellField.js');

var page = new tabris.Page({
	topLevel: true,
	title: 'Wog-Magic-Alpha'
});

function setPages(files) {
	for (var i = 0, j = files.length; i < j; i++) {
		files[i].setPage(page);
	}
}

tabris.ui.set('displayMode', 'fullscreen');
tabris.ui.set('toolbarVisible', false);
setPages([spellCasting, spellField]);
fieldData.formatCombatScreen(tabris.device.get('screenHeight'), tabris.device.get('screenWidth'), 5, 3);
spellField.drawFieldArea(fieldData.getFieldArea());
spellCasting.drawCastingArea(fieldData.getCastingArea(), '#1B5E20', '#404240', '#1B5E20', '#8D918D', 14);

page.open();