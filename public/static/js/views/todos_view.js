var BCX = BCX || {};

BCX.TodosView = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.collection, "reset change", this.render);
    this.template = Handlebars.compile($("#todos-template").html());
    console.log(this.collection);
  },

  render: function () {
    this.$el.html(this.template({
      todos: this.collection.toJSON()
    }));
  }

});
