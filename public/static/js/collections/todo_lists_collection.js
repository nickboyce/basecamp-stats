var BCX = BCX || {};

BCX.TodoListsCollection = Backbone.Collection.extend({
  url: "/proxy/todolists.json",
  model: BCX.TodoList
});
