requirejs.config({
    baseUrl: "assets/js",
    paths: {
      postings: "lib/postings"
    },
    urlArgs: "bust=" + (new Date()).getTime() // Bust cache
});

// Load the main app module to start the app
requirejs(["postings", "main"], function(postings, main) {
  App.run(postings);
});