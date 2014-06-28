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
    todos = _.map(this.parentCollection.toJSON(), function(todoList) {
      if (todoList.todos) {
        return todoList.todos.remaining
      }
    });
    this.set(_.flatten(todos));
    // not sure why i need to do this
    this.trigger("change");
  }
});
