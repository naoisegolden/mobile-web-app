(function() {
  // DOM elements
  var orientationContainer = document.getElementById("orientation-container");

  // Event listeners
  window.addEventListener("orientationchange", orientationChangeListener);

  /* init
   * Initialiazies stuff.
   */
  function init() {
    orientationChangeListener();
  }

  // Note that "orientationchange" and window.orientation are unprefixed in the following
  // code although this API is still vendor-prefixed browsers implementing it.
  function orientationChangeListener() {
    var message = "the orientation of the device is now " + window.orientation;
    orientationContainer.innerHTML = message;
    console.log(message);
  }

  init();
})();
