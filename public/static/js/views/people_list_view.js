var BCX = BCX || {};

BCX.PeopleListView = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.collection, "change reset add remove", this.render);
    this.template = Handlebars.compile($("#person-template").html());
  },

  render: function () {

    this.$el.html(this.template({
      people: this.collection.toJSON()
    }));
  }




});
