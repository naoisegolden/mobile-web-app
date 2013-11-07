var App = (function() {
  // DOM elements
  var orientationContainer  = document.getElementById("orientation-container");
  var gestureContainer      = document.getElementById("gesture-container");
  var accelerationContainer = document.getElementById("acceleration-container");
  var rotationContainer     = document.getElementById("rotation-container");
  var rotationContainer2    = document.getElementById("rotation-container-2");
  var geolocationContainer  = document.getElementById("geolocation-container");
  var mapImage              = document.getElementById("map-image");
  var errorContainer        = document.getElementById("error-container");
  var jobsContianer         = document.getElementById("jobs-container");

  // Global variables
  var pixelDensity = (window.devicePixelRatio >= 2) ? 2 : 1;

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
  // http://www.peterfriese.de/how-to-use-the-gyroscope-of-your-iphone-in-a-mobile-web-app/
  if (window.DeviceMotionEvent !== undefined) {
    window.addEventListener("devicemotion", deviceMotionListener);      // Accelerometer
  }
  if (window.DeviceOrientationEvent !== undefined) {
    window.addEventListener("deviceorientation", deviceOrientationListener); // Gyroscope
  }
  // Geolocation
  // https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/GettingGeographicalLocations/GettingGeographicalLocations.html
  function getPosition() {
    var options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 };
    navigator.geolocation.getCurrentPosition(geolocationListener, geolocationError);
  }

  /* processData
   * Takes the "postings" JSON reponse and prints it.
   * @param {Object} data
   */
  function processData(data) {
    if (data === undefined || data.collection === undefined) return;
    data.collection.forEach(function(job) {
      var jobElement = document.createElement("li");
      jobElement.innerHTML = job.title;
      jobsContianer.appendChild(jobElement);
    });
  }

  /* showData
   * Generic function for printing data.
   */
  function showData(message, container) {
    container.innerHTML = message;
    // console.log(message);
  }

  /* showError
   * Generic function for logging errors in the console.
   */
   function showError(message) {
    showData(message, errorContainer);
    throw new Error(message);
   }


  /* jsonToUrl
   * Transforms JSON to URL params string
   */
  function jsonToUrl(data) {
    var params = Object.keys(data).map(function(k) {
      // return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
      return k + '=' + data[k];
    }).join('&');

    return params;
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


  /* geolocationError
   *
   * @param {PositionError} error
   */
  function geolocationError(error) {
    showError(error.message);
  }

  /* geolocationListener
   *
   * @param {Position} position
   */
  function geolocationListener(position) {
    var crd = position.coords;

    var message = 'Your current position is:' +
                  ' Lat: ' + crd.latitude +
                  ' Long: ' + crd.longitude +
                  ' (+/- ' + crd.accuracy + ' m.)';

    // refreshMap(crd.latitude, crd.longitude);
    setBackgroundMap(crd.latitude, crd.longitude);
    showData(message, geolocationContainer);
  }

  function refreshMap(latitude, longitude) {
    console.log("refresh map");
    var coords = latitude + "," + longitude,
        src = "https://maps.googleapis.com/maps/api/staticmap?markers=color:blue%7C" + coords + "&zoom=14&size=400x400&scale=" + pixelDensity + "&sensor=false";
    mapImage.src = src;
  }

  function setBackgroundMap(latitude, longitude) {
    var viewportWidth  = window.innerWidth;
    var viewportHeight = window.innerHeight;
    var viewportRatio  = viewportWidth/viewportHeight;
    var maxImageWidth  = 640; // Math.round( 640 * (viewportRatio >= 1 ? 1 : viewportRatio) );
    var maxImageHeight = 640; // Math.round( 640 * (viewportRatio <= 1 ? 1 : 1/viewportRatio) );
    var options = {
      markers : latitude + ',' + longitude,
      size    : maxImageWidth + 'x' + maxImageHeight, // viewportWidth*viewportRatio + 'x' + viewportHeight*viewportRatio, not possible with free API
      scale   : pixelDensity,
      zoom    : '14',
      sensor  : false
    };

    document.body.style.backgroundImage = "url(" + googleStaticMapSrc(options) + ")";
  }

  function googleStaticMapSrc(options) {
    return "https://maps.googleapis.com/maps/api/staticmap?" + jsonToUrl(options);
  }

  return {
    run: function(data) {
      getPosition();
      if (data !== undefined) processData(data);
    }
  };
})();
