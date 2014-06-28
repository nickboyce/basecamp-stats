var BCX = BCX || {};

BCX.TodoList = Backbone.Model.extend({
  url: function () {
    return "/proxy/projects/" + this.get("bucket").id + "/todolists/" + this.id + ".json"
  },

  initialize: function () {
    if (!this.get("todos")) {
      this.fetch();
    }
  }
});
