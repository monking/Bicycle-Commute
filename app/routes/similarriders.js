var SimilarridersRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('rider');
    }
});

export default SimilarridersRoute;
