var BCX = BCX || {};

BCX.Person = Backbone.Model.extend({

  url: function () {
    return "/proxy/people/" + this.id + ".json"
  },

  initialize: function () {
    if (!this.outstanding_todos) {
      this.fetch();
    }
  }
});
