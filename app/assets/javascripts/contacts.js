// Waiting for the DOM to finish loading
$(document).ready(function(){
 
  //set up local datastore
  var contacts = [];
  var count = 0;

  //define add
  var addContact = function(newContact){
    contacts.push(newContact);
    count += 1;
    var contactString = ["<div id='", newContact.id, "' class='contact'>",
                        "<div>","<img src='", newContact.picture, "' class='contact-img'>","</div>",
                        "<div class='contact-item'>", newContact.name, "</div>",
                        "<div class='contact-item'>", newContact.email, "</div>",
                        "<div class='contact-item'>", newContact.phone, "</div>",
                        "<div class='contact-actions'>","<span class='delete btn btn-action'>Delete</span>","</div>",
                        "</div>"].join("");
    $("#contacts").append(contactString);

  };

  //import from db
  $.get('/contacts.json').done(function(data) {
    var contacts = data
    $.each(contacts, function(index, contact){

    // format data
    var newContact = { id: count,
                       name: this.name,
                       email: this.email,
                       phone: this.phone,
                       picture: this.picture };

    // add to local datastore and page
    addContact(newContact);
    });
  });
 
 
  //add from submission form to local list and db
  $("#new_contact").submit( function(event){
    event.preventDefault();
 
    // collect and format data
    var newContact = { id: count,
                       name: $("#contact_name").val(),
                       email: $("#contact_email").val(),
                       phone: $("#contact_phone").val(),
                       picture: $("#contact_picture").val()};

    // add to local datastore and page
    addContact(newContact);

    // reformat without id to send to db
    delete newContact['id'];

    // add to db
    $.post('/contacts.json', newContact );
    
    // reset form
    this.reset();
 
  });

  //define delete
  var deleteContact = function(event){
    $(this).parents(".contact").remove();
  };

  //delete selector
  $("#contacts").on("click", ".delete", deleteContact);

});
