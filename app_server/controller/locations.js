/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        locations: [{
            name: 'Cafecoffeeday',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m',
            href: '/location'
        }, {
            name: 'LotusGrand',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '200m',
            href: '/location/2'
        }, {
            name: 'Third Wave Coffee',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 2,
            facilities: ['Food', 'Premium wifi'],
            distance: '250m',
            href: '/location/3'
        }]
    });
  };
  
  /* GET 'Location info' page */
  module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'Cafecoffeeday',
        pageHeader: {
            title: 'Cafecoffeeday'
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Cafecoffeeday',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }]
        }
    });
  };

    /* GET 'Location info' page */
    module.exports.locationInfo2 = function(req, res) {
        res.render('location-info2', {
            title: 'LotusGrand',
            pageHeader: {
                title: 'LotusGrand'
            },
            sidebar: {
                context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
                callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
            },
            location: {
                name: 'LotusGrand',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 3,
                facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                coords: {
                    lat: 51.455041,
                    lng: -0.9690884
                },
                openingTimes: [{
                    days: 'Monday - Friday',
                    opening: '7:00am',
                    closing: '7:00pm',
                    closed: false
                }, {
                    days: 'Saturday',
                    opening: '8:00am',
                    closing: '5:00pm',
                    closed: false
                }, {
                    days: 'Sunday',
                    closed: true
                }],
                reviews: [{
                    author: 'Simon Holmes',
                    rating: 5,
                    timestamp: '16 July 2013',
                    reviewText: 'What a great place. I can\'t say enough good things about it.'
                }, {
                    author: 'Charlie Chaplin',
                    rating: 3,
                    timestamp: '16 June 2013',
                    reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
                }]
            }
        });
      };

        /* GET 'Location info' page */
  module.exports.locationInfo3 = function(req, res) {
    res.render('location-info3', {
        title: 'Third Wave Coffee',
        pageHeader: {
            title: 'Third Wave Coffee'
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Third Wave Coffee',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }]
        }
    });
  };

  /* GET 'Add review' page */
  module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Cafecoffeeday on Loc8r',
        pageHeader: {
            title: 'Review Cafecoffeeday'
        }
    });
  };
  
  /* GET 'Add review' page */
  module.exports.addReview2 = function(req, res) {
    res.render('location-review-form2', {
        title: 'Review LotusGrand on Loc8r',
        pageHeader: {
            title: 'Review LotusGrand'
        }
    });
  };

  /* GET 'Add review' page */
  module.exports.addReview3 = function(req, res) {
    res.render('location-review-form3', {
        title: 'Review Third Wave Coffee on Loc8r',
        pageHeader: {
            title: 'Review Third Wave Coffee'
        }
    });
  };