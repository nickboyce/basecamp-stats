var BCX = BCX || {};

BCX.PeopleCollection = Backbone.Collection.extend({
  url: "/proxy/people.json",
  model: BCX.Person,

  comparator: function (item) {
    if (item.get("outstanding_todos")) {
      return - (item.get("outstanding_todos").count);
    } else {
      return false;
    }
  }
});
