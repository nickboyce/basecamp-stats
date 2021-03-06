var BCX = BCX || {};

BCX.PeopleView = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.collection, "reset change", this.render);
    this.template = Handlebars.compile($("#person-template").html());
  },

  render: function () {
    this.$el.html(this.template({
      people: this.collection.sort().toJSON()
    }));
  }

});
