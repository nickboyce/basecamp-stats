var BCX = BCX || {};

BCX.PeopleCollection = Backbone.Collection.extend({

  url: "/proxy/people.json",
  model: BCX.Person

});
