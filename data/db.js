var estates = require('./estates/db.json')
var locations = require('./locations/db.json')
// var thirdRoute  = require('./jsonfile3.json');
// var fourthRoute = require('./jsonfile4.json');
// and so on

const data = {
    estates: estates,
    locations: locations,
    // thirdRoute: thirdRoute,
    // fourthRoute: fourthRoute,
    // and so on
}

module.exports = function () {
    return  data;
}
