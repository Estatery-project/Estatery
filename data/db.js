var estatesRoute  = require('./estates/db.json');
var locationsRoute = require('./locations/db.json');
// var thirdRoute  = require('./jsonfile3.json');
// var fourthRoute = require('./jsonfile4.json');
// and so on

module.exports = function() {
return {
    estatesRoute  : estatesRoute,
    locationsRoute : locationsRoute,
// and so on
 }
}