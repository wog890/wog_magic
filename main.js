// Calculates data needed for screen drawing
var fieldData = require('./src/wog/fieldData.js');
var pageLogin = require('./src/wog/pages/pageLogin.js');

tabris.ui.set('displayMode', 'fullscreen');
tabris.ui.set('toolbarVisible', false);
fieldData.formatCombatScreen(tabris.device.get('screenHeight'), tabris.device.get('screenWidth'), 5, 3);
pageLogin.open();

/*spellField.drawFieldArea(fieldData.getFieldArea());
spellCasting.drawCastingArea(fieldData.getCastingArea(), '#1B5E20', '#404240', '#1B5E20', '#8D918D', 14);*/