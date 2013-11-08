define(function(){
  // json dummy data based on XING REST API response
  var postings = {
    collection: [
      {
        id: 1,
        title: "White-collar Muster Man",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tags: "cool, ich seh nichts, ichhörnichts, ichsagnichts, einsuperlangestagdasbestimmtscheisseaussieht, b, 1st",
        company: "Panzer und Kanonen",
        street: "Torrent de l'Olla 164",
        zipcode: "08012",
        city: "Barcelona",
        country: "ES",
        region: "Barcelona",
        latitude: 41.403560,
        longitude: 2.162762,
        geocode_accuracy: 5,
        links: {
          public: "https://www.xing.com/jobs/barcelona-frontend-engineer-spain-2233996"
        },
        pdf_link: null,
        salary: 24000,
        currency: "EUR",
      },
      {
        id: 2,
        title: "E-Commerce manager (m/w)",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tags: "cool, hamburg, ichsagnichts, 123, a",
        company: "JRTB AG",
        street: "Carrer Marina 212",
        zipcode: "08010",
        city: "Barcelona",
        country: "ES",
        region: "Barcelona",
        latitude: 41.399439,
        longitude: 2.190399,
        geocode_accuracy: 5,
        links: {
          public: "https://www.xing.com/jobs/barcelona-frontend-engineer-spain-2233996"
        },
        pdf_link: "",
        salary: 36000,
        currency: "EUR",
      },
      {
        id: 3,
        title: "Senior Sculptor - Internship",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tags: "cool, hamburg, ichsagnichts, 123, a",
        company: "Leonardo DaVinci S.A.",
        street: "Aragon 332",
        zipcode: "08011",
        city: "Barcelona",
        country: "ES",
        region: "Barcelona",
        latitude: 41.387012,
        longitude: 2.157955,
        geocode_accuracy: 5,
        links: {
          public: "https://www.xing.com/jobs/barcelona-frontend-engineer-spain-2233996"
        },
        pdf_link: "",
        salary: 12000,
        currency: "EUR",
      },
      {
        id: 4,
        title: "Full-stack Pancake Developer (wookie)",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tags: "cool, hamburg, ichsagnichts, 123, a",
        company: "Starbucks",
        street: "Via Layetana 355",
        zipcode: "08009",
        city: "Barcelona",
        country: "ES",
        region: "Barcelona",
        latitude: 41.383277,
        longitude: 2.171516,
        geocode_accuracy: 5,
        links: {
          public: "https://www.xing.com/jobs/barcelona-frontend-engineer-spain-2233996"
        },
        pdf_link: "",
        salary: 44000,
        currency: "EUR",
      },
    ]
  };
  return postings;
});