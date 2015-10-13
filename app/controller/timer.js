var show = function(request, response) {
  var params = {
    page_title: 'ToxicTimer - Timer'
  };

  App.require('view/timer').show(request, response, params);
};

module.exports.show = show;
