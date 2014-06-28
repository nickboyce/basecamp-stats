// Namespace for app
var app = {
  collections: {},
  models: {},
  views: {},
  initialize: function() {
    app.collections.people.fetch({reset: true});
  }
};


// Models
app.collections.people = new BCX.PeopleCollection();


// People List
app.views.peopleListView = new BCX.PeopleListView({
  el: "#people-list-container",
  collection: app.collections.people,
  template: "person-template"
});



// app.views.peopleListView.listenTo(app.collections.people, 'reset', this.render);


// function getPeople() {
//   $.ajax({
//     url : "/proxy/people.json",
//     success: peopleCallback
//   });
// }


// function peopleCallback(people) {
//   renderPeople(people);
//   initPeopleStats(people);
// }


// function renderPeople(people) {
//   var s = "";
//   $.each(people, function(index, person) {
//     s += "<li id='person-" + person.id + "'>" + person.name + "...</li>";
//   });
//   $("#people").html(s);
// }


// function initPeopleStats(people) {
//   console.log(people);
//   $.each(people, function(index, person) {
//     getPersonStats(person);
//   });
// }


// function getPersonStats(person) {
//   $.ajax({
//     url : "/proxy/people/" + person.id + ".json",
//     success: renderPersonStats
//   });
// }


// function renderPersonStats(person) {
//   $("#person-" + person.id).html(person.name + " (" + person.outstanding_todos.count + ")");
// }


// $(document).ready(function() {
//   getPeople();
// });
