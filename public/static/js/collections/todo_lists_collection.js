var BCX = BCX || {};

BCX.TodoListsCollection = Backbone.Collection.extend({

  url: "/proxy/todolists.json",

  initialize: function () {
    // this.listenTo(app.collections.projects, "reset change", this.fetch);
    console.log("init");
  }



});
