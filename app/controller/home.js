var show = function(request, response) {
  var params = {
    page_title: 'ToxicTimer',
  };

  App.require('view/home').show(request, response, params);
};

module.exports.show = show;
