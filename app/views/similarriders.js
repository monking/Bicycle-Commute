var SimilarridersView = EmberLeaflet.MapView.extend({
    center: L.latLng(34.713282, -118.006978),
    zoom: 18,
    options: {maxZoom: 19, minZoom: 0},

    riderListHidden: false,

    didInsertElement: function() {
        var __this = this;
        this._super();
        this.$("#rider-toggle").click(function() {

           __this.toggleProperty('riderListHidden');

           console.log("toggle", __this.get("riderListHidden"));
           if(__this.get("riderListHidden")) {
               $("#riders-list").hide();
           } else {
               $("#riders-list").show();
           }

        });
    }
});

export default SimilarridersView;
