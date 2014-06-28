function getPeople() {
  $.ajax({
    url : "/proxy/people.json",
    success: peopleCallback
  });
}


function peopleCallback(people) {
  renderPeople(people);
  initPeopleStats(people);
}


function renderPeople(people) {
  var s = "";
  $.each(people, function(index, person) {
    s += "<li id='person-" + person.id + "'>" + person.name + "...</li>";
  });
  $("#people").html(s);
}


function initPeopleStats(people) {
  console.log(people);
  $.each(people, function(index, person) {
    getPersonStats(person);
  });
}


function getPersonStats(person) {
  $.ajax({
    url : "/proxy/people/" + person.id + ".json",
    success: renderPersonStats
  });
}


function renderPersonStats(person) {
  $("#person-" + person.id).html(person.name + " (" + person.outstanding_todos.count + ")");
}


$(document).ready(function() {
  getPeople();
});
