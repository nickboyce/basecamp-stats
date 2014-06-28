var BCX = BCX || {};

BCX.TodosView = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.collection, "reset change", this.render);
    this.template = Handlebars.compile($("#todos-template").html());
  },

  render: function () {
    this.$el.html(this.template({
      todos: this.collection.toJSON()
    }));
  }

});
