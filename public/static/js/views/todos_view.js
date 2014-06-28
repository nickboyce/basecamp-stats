var BCX = BCX || {};

BCX.TodosView = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.collection, "reset change", this.render);
    this.template = Handlebars.compile($("#todos-template").html());
  },

  render: function () {
    this.$el.html(this.template({
      todos: this.getOpenTodos(this.collection.toJSON())
    }));
  },


  getOpenTodos: function (todoLists) {
    var todos = [];
    todos = _.map(todoLists, function(todoList) {
      if (todoList.todos) {
        return todoList.todos.remaining
      }
    });
    todos = _.flatten(todos);
    return todos;
  }

});
