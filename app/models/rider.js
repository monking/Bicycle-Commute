
var Rider = DS.Model.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    image: DS.attr('string'),
    distance: DS.attr('number'),
    departure: DS.attr('date'),

    lat: DS.attr('number'),
    lon: DS.attr('number'),

    formattedDeparture: function() {
        try {
            return moment(this.get('departure')).format("h:mm A");
        } catch(e) {
            //do nothing
        }
        return "";
    }.property('departure')
});

export default Rider;

