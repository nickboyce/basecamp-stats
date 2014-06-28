Handlebars.registerHelper("timeago", function(date) {
  console.log(date);
  return jQuery.timeago(date);
});
