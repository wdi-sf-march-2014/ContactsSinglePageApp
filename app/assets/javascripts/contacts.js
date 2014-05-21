// Waiting for the DOM to finish loading
$(document).ready(function(){
  
  var contacts = [];
  var count = 0; 
  
  var url = "http://localhost:3000/contacts.json";
  $.get(url).then(
  function(data) {
    var i = 0;
    for(i; i < data.length; i++) {
      var startingContacts = { 
       id: count,
       name: data[i].name,
       email: data[i].email,
       number: data[i].number,
       imgUrl: data[i].image };
      addContact(startingContacts);
      count += 1;
    }
    });


  var alphabet = ["<span class='a btn btn-default'>A</span>",
                  "<span class='b btn btn-default'>B</span>",
                  "<span class='c btn btn-default'>C</span>",
                  "<span class='d btn btn-default'>D</span>",
                  "<span class='e btn btn-default'>E</span>",
                  "<span class='f btn btn-default'>F</span>",
                  "<span class='g btn btn-default'>G</span>",
                  "<span class='h btn btn-default'>H</span>",
                  "<span class='i btn btn-default'>I</span>",
                  "<span class='j btn btn-default'>J</span>",
                  "<span class='k btn btn-default'>K</span>",
                  "<span class='l btn btn-default'>L</span>",
                  "<span class='m btn btn-default'>M</span>",
                  "<span class='n btn btn-default'>N</span>",
                  "<span class='o btn btn-default'>O</span>",
                  "<span class='p btn btn-default'>P</span>",
                  "<span class='q btn btn-default'>Q</span>",
                  "<span class='r btn btn-default'>R</span>",
                  "<span class='s btn btn-default'>S</span>",
                  "<span class='t btn btn-default'>T</span>",
                  "<span class='u btn btn-default'>U</span>",
                  "<span class='v btn btn-default'>V</span>",
                  "<span class='w btn btn-default'>W</span>",
                  "<span class='x btn btn-default'>X</span>",
                  "<span class='y btn btn-default'>Y</span>",
                  "<span class='z btn btn-default'>Z</span>",
                  ].join("");

  $('#index').append(alphabet);


  var filterContact = alphabet.filter(filterContacts);
  console.log(filterContact);

  $('#index').on('click', 'span', filterContact);



  var deleteContact = function(){
    console.log("Delete", this);
    $(this).parents(".contact").remove();
  };
  
  $("#contacts").on("click", ".delete", deleteContact);
 
 
  var addContact = function(newContact){
    var contactString = ["<div id='", newContact.id, "' class='contact'>",
                               "<div>",
                              "<img src='", newContact.imgUrl, "' class='contact-img'>",
                            "</div>",
                            "<div class='contact-item'>", newContact.name, "</div>",
                            "<div class='contact-item'>", newContact.email, "</div>",
                            "<div class='contact-item'>", newContact.number, "</div>",
          
                            "<div class='contact-actions'>",
                            
                              "<span class='delete btn btn-action'>Delete</span>",
                            "</div>",
                          "</div>"].join("");
 
    console.log(contactString);
 
    $("#contacts").append(contactString);
  
  };

  // Now we need to watch for a submit 
  //  event on the form
  $("#new_contact").submit( function(event){
    // Prevent the page from reloading
    event.preventDefault();
 
    //console.log(this);
 
    var name = $("#contact_name").val();
    var email = $("#contact_email").val();
    var number = $("#contact_number").val();
    var imgUrl =  $("#contact_img_url").val();
 
    console.log(name, email, number, imgUrl);
 
    // Reset the form
    this.reset();
 
 
    // Keeping track of new contacts
    var newContact = { id: count,
                       name: name,
                       email: email,
                       number: number,
                       imgUrl: imgUrl };
    count += 1;
 
 
    contacts.push(newContact);
 
    // Call a function to add our contact to 
    //  the page.
    addContact(newContact);
  });
});
