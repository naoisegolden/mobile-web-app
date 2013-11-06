(function() {
  // DOM elements
  var orientationContainer  = document.getElementById("orientation-container");
  var gestureContainer      = document.getElementById("gesture-container");
  var accelerationContainer = document.getElementById("acceleration-container");
  var rotationContainer     = document.getElementById("rotation-container");
  var rotationContainer2    = document.getElementById("rotation-container-2");

  // Event listeners

  // Detect whether device supports orientationchange event, otherwise fall back to
  // the resize event.
  var orientationEvent = "onorientationchange" in window ? "orientationchange" : "resize";
  window.addEventListener(orientationEvent, orientationChangeListener);
  // Gestures
  window.addEventListener("gesturestart" , gestureListener);
  window.addEventListener("gesturechange", gestureListener);
  window.addEventListener("gestureend"   , gestureListener);
  // Device motion
  if (window.DeviceMotionEvent !== undefined) {
    window.addEventListener("devicemotion"     , deviceMotionListener);
    window.addEventListener("deviceorientation", deviceOrientationListener);
  }

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
    // console.log(message);
  }

  // Note that "orientationchange" and window.orientation are unprefixed in the following
  // code although this API is still vendor-prefixed browsers implementing it.
  function orientationChangeListener() {
    showData("the orientation of the device is now " + window.orientation, orientationContainer);
  }

  function gestureListener(event) {
    showData("the gesture " + event, gestureContainer);
  }

  function deviceMotionListener(event) {
    ax = event.acceleration.x.toFixed(2);
    ay = event.acceleration.y.toFixed(2);
    az = event.acceleration.z.toFixed(2);
    rotation = event.rotationRate;
    if (rotation !== null) {
      arAlpha = Math.round(rotation.alpha);
      arBeta  = Math.round(rotation.beta);
      arGamma = Math.round(rotation.gamma);
    }
    showData("acceleration: " + ax + ", " + ay + ", " + az, accelerationContainer);
    showData("rotation: " + arAlpha + ", " + arBeta + ", " + arGamma, rotationContainer);
  }

  function deviceOrientationListener(event) {
    alpha = Math.round(event.alpha);
    beta  = Math.round(event.beta);
    gamma = Math.round(event.gamma);
    showData("rotation: " + alpha + ", " + beta + ", " + gamma, rotationContainer2);
  }

  init();
})();
