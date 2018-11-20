// Empty constructor
function PrivacyPlugin() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
PrivacyPlugin.prototype.show = function(message, duration, successCallback, errorCallback) {
  var options = {};
  options.message = message;
  options.duration = duration;
  cordova.exec(successCallback, errorCallback, 'PrivacyPlugin', 'show', [options]);
}

// Installation constructor that binds ToastyPlugin to window
PrivacyPlugin.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.privacyPlugin = new PrivacyPlugin();
  return window.plugins.privacyPlugin;
};
cordova.addConstructor(PrivacyPlugin.install);