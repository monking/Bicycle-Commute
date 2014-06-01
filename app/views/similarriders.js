
L.Icon.Default.imagePath = 'assets/images';
window.MarkerCollectionLayer = EmberLeaflet.MarkerCollectionLayer.extend({
    contentBinding: 'controller'
});



var SimilarridersView = EmberLeaflet.MapView.extend({
    // map config
    center: L.latLng(34.0700, -118.2500),
    zoom: 16,
    options: {maxZoom: 19, minZoom: 0},

    childLayers: [
        EmberLeaflet.DefaultTileLayer,
        window.MarkerCollectionLayer
    ],
    // end map config
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
