var BCX = BCX || {};

BCX.TodoList = Backbone.Model.extend({
  url: function () {
    return "/proxy/projects/" + this.get("bucket").id + "/todolists/" + this.id + ".json"
  },

  initialize: function () {
    // console.log(this);
    if (!this.get("todos")) {
      console.log("getting todos for list");
      this.fetch();
    }
  }
});
