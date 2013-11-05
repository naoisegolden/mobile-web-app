(function() {
  // DOM elements
  var orientationContainer = document.getElementById("orientation-container");
  var gestureContainer     = document.getElementById("gesture-container");

  // Event listeners

  // Detect whether device supports orientationchange event, otherwise fall back to
  // the resize event.
  var orientationEvent = "onorientationchange" in window ? "orientationchange" : "resize";
  window.addEventListener(orientationEvent, orientationChangeListener);
  // Gestures
  window.addEventListener("gesturestart" , gestureListener);
  window.addEventListener("gesturechange", gestureListener);
  window.addEventListener("gestureend"   , gestureListener);

  /* init
   * Initialiazies stuff.
   */
  function init() {
    orientationChangeListener();
    gestureListener(undefined);
  }

  /* showData
   * Generic function for printing data.
   */
  function showData(message, container) {
    container.innerHTML = message;
    console.log(message);
  }

  // Note that "orientationchange" and window.orientation are unprefixed in the following
  // code although this API is still vendor-prefixed browsers implementing it.
  function orientationChangeListener() {
    showData("the orientation of the device is now " + window.orientation, orientationContainer);
  }

  function gestureListener(event) {
    showData("the gesture " + event, gestureContainer);
  }

  init();
})();
