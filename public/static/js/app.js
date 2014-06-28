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
app.collections.todos = new BCX.TodosCollection({ parentCollection: app.collections.todoLists });


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
// app.views.todoListsView = new BCX.TodoListsView({
//   el: "#todolists-container",
//   collection: app.collections.todoLists,
//   template: "todolists-template"
// });

// Todos List
app.views.todosView = new BCX.TodosView({
  el: "#todos-container",
  collection: app.collections.todos,
  template: "todos-template"
});
