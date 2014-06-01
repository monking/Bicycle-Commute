// To use it create some files under `routes/`
// e.g. `server/routes/ember-hamsters.js`
//

var FIXTURES = {
    riders: [
        {
            id: 0,
            firstName:"Jane",
            lastName: "Pallermo",
            image:"assets/bikergirl1.jpg"
        },
        {
            id: 1,
            firstName:"Jane",
            lastName: "Pallermo",
            image:"assets/bikergirl1.jpg"
        }
    ]
};

module.exports = function(app) {
   app.get('/server/riders', function(req, res) {
     res.send(FIXTURES);
   });
};