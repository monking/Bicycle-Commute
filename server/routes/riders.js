// To use it create some files under `routes/`
// e.g. `server/routes/ember-hamsters.js`
//

var FIXTURES = {
    riders: [
        {
            id: 0,
            firstName:"Jane",
            lastName: "Pallermo",
            image:"assets/bikergirl1.jpg",
            distance:4.5,
            departure:"Sat May 31 2014 20:18:14 GMT-0700 (PDT)",
            lat:34.0700,
            lon:-118.2500

        },
        {
            id: 1,
            firstName:"Jane",
            lastName: "Pallermo",
            image:"assets/bikergirl1.jpg",
            distance:4.5,
            departure:"Sat May 31 2014 20:20:14 GMT-0700 (PDT)",
            lat:34.0710,
            lon:-118.2530
        }
    ]
};

module.exports = function(app) {
   app.get('/server/riders', function(req, res) {
     res.send(FIXTURES);
   });
};