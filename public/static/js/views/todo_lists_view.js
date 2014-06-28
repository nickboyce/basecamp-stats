var BCX = BCX || {};

BCX.TodoListsView = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.collection, "reset change", this.render);
    this.template = Handlebars.compile($("#todolists-template").html());
  },

  render: function () {
    this.$el.html(this.template({
      todoLists: this.collection.toJSON()
    }));
  }

});
