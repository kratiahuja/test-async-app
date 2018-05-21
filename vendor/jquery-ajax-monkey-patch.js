/* globals jQuery, Ember */

(function() {
  var ORIGINAL_AJAX = jQuery.ajax;
  jQuery.ajax = function(url, _maybeSettings) {
    var settings = _maybeSettings || {};
    var originalSuccess = settings.success;
    var originalError = settings.error;

    // eslint-disable-next-line ember/new-module-imports
    return new Ember.RSVP.Promise(function(resolve, reject) {
      settings.success = function(data) {
        originalSuccess && originalSuccess.apply(this, arguments);

        resolve(data);
      };
      settings.error = function(jqXHR) {
        originalError && originalError.apply(this, arguments);

        reject(jqXHR);
      };

      ORIGINAL_AJAX.call(jQuery, url, settings);
    });
  };
})();
