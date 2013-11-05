(function() {
  // DOM elements
  var orientationContainer = document.getElementById("orientation-container");

  // Event listeners

  // Detect whether device supports orientationchange event, otherwise fall back to
  // the resize event.
  var orientationEvent = "onorientationchange" in window ? "orientationchange" : "resize";
  window.addEventListener(orientationEvent, orientationChangeListener);

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
