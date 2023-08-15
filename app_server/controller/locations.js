module.exports.homelist = function(req,res){
    res.render('locations-list',{title: 'Home'});
};
/*GEt home page*/
module.exports.homelist= function(req,res){
    res.render('locations-list',{title: 'Home'});
};

module.exports.locationInfo= function(req,res){
    res.render('location-info',{title: 'Location info'});
};


module.exports.addReview = function(req,res){
    res.render('location-review-form',{title: 'Add Review'});
};

module.exports.about = function(req,res){
    res.render('generic-text',{title: 'About'});
};