var show = function(request, response, params, templateName) {
  // Render the template with the given name.
  response.render(templateName, params);
};

module.exports.show = show;
