var BCX = BCX || {};

BCX.TodosCollection = Backbone.Collection.extend({
  model: BCX.Todo,

  initialize: function (options) {
    this.parentCollection = options.parentCollection;
    this.listenTo(this.parentCollection, "reset change", this.populateCollection);
  },

  comparator: function(model) {
    return new Date(model.get("created_at"));
  },

  populateCollection: function () {
    var todos = []

    _.each(this.parentCollection.toJSON(), function(todoList) {
      if (todoList.todos && todoList.todos.remaining) {
        todos.push(todoList.todos.remaining);
      }
    });

    todos = _.flatten(todos);

    if (todos.length) {
      this.set(todos);
      // not sure why i need to do this
      this.trigger("change");
    }
  }
});
