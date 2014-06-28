var BCX = BCX || {};

BCX.ProjectsView = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.collection, "reset change", this.render);
    this.template = Handlebars.compile($("#projects-template").html());
  },

  render: function () {
    this.$el.html(this.template({
      projects: this.collection.toJSON()
    }));
  }

});
