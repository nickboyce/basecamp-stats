var BCX = BCX || {};

BCX.Todo = Backbone.Model.extend({

  initialize: function (options) {
    this.set("created_at", new Date(options.created_at));
    this.set("updated_at", new Date(options.updated_at));
  }
});
