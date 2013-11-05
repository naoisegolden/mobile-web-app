(function() {
  var orientationContainer = document.getElementById("orientation-container");

  // Note that "orientationchange" and window.orientation are unprefixed in the following
  // code although this API is still vendor-prefixed browsers implementing it.
  window.addEventListener("orientationchange", function() {
    var message = "the orientation of the device is now " + window.orientation;
    orientationContainer.innerHTML = message;
    console.log(message);
  });
})();
