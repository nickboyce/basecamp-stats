var BCX = BCX || {};

BCX.TodosView = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.collection, "reset change", this.render);
    this.template = Handlebars.compile($("#todos-template").html());
  },

  render: function () {
    this.$el.html(this.template({
      todos: this.getRemainingTodos(this.collection)
    }));
  },


  getRemainingTodos: function () {
    // var todos = this.collection.pluck("todos");
    // if (todos) {
    //   todos = _.pluck(todos, "remaining");
    //   todos = _.flatten(todos);

    // }
    return [];
  }

});
