// Namespace for app
var app = {
  collections: {},
  models: {},
  views: {},
  initialize: function() {
    app.collections.people.fetch({reset: true});
    app.collections.projects.fetch({reset: true});
    app.collections.todoLists.fetch({reset: true});
  }
};


// Collections
app.collections.people = new BCX.PeopleCollection();
app.collections.projects = new BCX.ProjectsCollection();
app.collections.todoLists = new BCX.TodoListsCollection();


// People List
app.views.peopleView = new BCX.PeopleView({
  el: "#people-container",
  collection: app.collections.people,
  template: "person-template"
});

// Projects List
app.views.projectsView = new BCX.ProjectsView({
  el: "#projects-container",
  collection: app.collections.projects,
  template: "projects-template"
});

// TodoLists List
app.views.todoListsView = new BCX.TodoListsView({
  el: "#todolists-container",
  collection: app.collections.todoLists,
  template: "projects-template"
});

// Todos List
app.views.todosView = new BCX.TodosView({
  el: "#todos-container",
  collection: app.collections.todos,
  template: "projects-template"
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
