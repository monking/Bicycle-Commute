var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
    this.route("login", { path: "/login" });
    this.route("similarriders", { path: "/similarriders" });
    this.route("messagerider", { path: "/messagerider" });
    this.route("rideinprogress", { path: "/rideinprogress" });
    this.route("endride", { path: "/endride" });
});

export default Router;
