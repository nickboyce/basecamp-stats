Handlebars.registerHelper("timeago", function(date) {
  if (date) {
    return jQuery.timeago(date);
  }
});
