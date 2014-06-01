/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  name: require('./package.json').name,

  minifyCSS: {
    enabled: true,
    options: {}
  },

  getEnvJSON: require('./config/environment')
});

// Use this to add additional libraries to the generated output files.
app.import('vendor/ember-data/ember-data.js');
app.import('vendor/ember-addons.bs_for_ember/dist/js/bs-core.min.js');
app.import('vendor/ember-addons.bs_for_ember/dist/js/bs-alert.min.js');
app.import('vendor/ember-addons.bs_for_ember/dist/js/bs-badge.min.js');
app.import('vendor/ember-addons.bs_for_ember/dist/js/bs-basic.min.js');
app.import('vendor/ember-addons.bs_for_ember/dist/js/bs-breadcrumbs.min.js');
app.import('vendor/ember-addons.bs_for_ember/dist/js/bs-button.min.js');
app.import('vendor/ember-addons.bs_for_ember/dist/js/bs-growl-notifications.min.js');
app.import('vendor/ember-addons.bs_for_ember/dist/js/bs-items-action-bar.min.js');
app.import('vendor/ember-addons.bs_for_ember/dist/js/bs-label.min.js');
app.import('vendor/ember-addons.bs_for_ember/dist/js/bs-list-group.min.js');
app.import('vendor/ember-addons.bs_for_ember/dist/js/bs-modal.min.js');
app.import('vendor/ember-addons.bs_for_ember/dist/js/bs-nav.min.js');
app.import('vendor/ember-addons.bs_for_ember/dist/js/bs-notifications.min.js');
app.import('vendor/ember-addons.bs_for_ember/dist/js/bs-popover.min.js');
app.import('vendor/ember-addons.bs_for_ember/dist/js/bs-progressbar.min.js');
app.import('vendor/ember-addons.bs_for_ember/dist/js/bs-wizard.min.js');

//MomentJS
app.import('vendor/momentjs/moment.js');

//Leaflet + Ember-Leaflet
app.import('vendor/leaflet-dist/leaflet-src.js')
app.import('vendor/leaflet-dist/leaflet.css')
app.import('vendor/ember-leaflet/dist/ember-leaflet.js')


// If the library that you are including contains AMD or ES6 modules that
// you would like to import into your application please specify an
// object with the list of modules as keys along with the exports of each
// module as its value.
app.import('vendor/ic-ajax/dist/named-amd/main.js', {
  'ic-ajax': [
    'default',
    'defineFixture',
    'lookupFixture',
    'raw',
    'request',
  ]
});


module.exports = app.toTree();
