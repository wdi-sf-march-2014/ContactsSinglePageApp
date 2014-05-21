// Waiting for the DOM to finish loading
$(document).ready(function(){
 
 
  var contacts = [];
  var count = 0;
 
  var addLetterBoard = function(){
    $("#letters").append('<div class="show-all btn btn-action">Show All</div>')
    for (var charCode = 65; charCode < 91; charCode++) {
      var charStr = String.fromCharCode(charCode);
      var charItem = ["<div  class='letter' id='",charStr,"'>",
                         charStr, "</div>"].join("");
      $("#letters").append(charItem);
    };
    $("#letters").hide().show();
  }
  

  var showCharClass = function(event){
    var charClass = "." + this.id;
    $(".contact").hide();
    $(charClass).show();
  };

  $("#letters").on("click", ".letter", showCharClass);
  $("#letters").on("click", ".show-all", function(){
    $(".contact").show();
  });
  var deleteContact = function(event){
    console.log("Delete", this);
    var id = this.id;
    var contactIndex;
    $.each(contacts, function(index,contact){
      if(contact.id = id){
        contactIndex = index;
      }
    });
    contacts.splice(contactIndex,1);
    console.log(contacts)
    $(this).parents(".contact").remove();
  };
  
  var editHandler = function(event){
    console.log($("#contacts").find(".update").length )
    if($("#contacts").find(".update").length === 0){
      var $contact = $(this).parents(".contact");
      var $btn = $(this);
      $btn.toggleClass("edit");
      $btn.toggleClass("update");
      $btn.html("SAVE").toggleClass("btn-attention");
      $contact.find(".contact-item").attr("contenteditable", "true");
    
      //Deal with contact img
      var $contactImg = $contact.find("#contact-img");
      var src = $contactImg.attr("src");
      var $imgCon = $contact.find(".contact-img-con")
      $imgCon.empty();
      $imgCon.attr("contenteditable", "true");
      $imgCon.html(src);
    } else {  
      $("#contacts").css("backgroundColor","red");
      window.setTimeout(function() {
        $("#contacts").css("backgroundColor","#95a5a6");
      }, 100);
    } 
  };

  var orderContacts = function() {
    return contacts.sort(function(a,b){
      return a.name < b.name ? -1: 1;
    })
  };

  var rerenderContacts = function(){
    var $contacts = $("#contacts");

    // Call a function to add our contact to 
    //  the page.
    $.each(orderContacts(),function(index, contact){
       var $contact = $("#"+contact.id);
      if($contact.length){ 
        $contacts.append($contact);
      } else {
        addContact(contact);
      }
    });
  };
  var updateContact = function(contact){
    var id = contact.id;

    $.each(contacts, function(index, currentContact){
       if(id === contact.id) {
        contacts[index] = contact;
       }
    });
    console.log(contacts)
  };
 
  var updateHandler = function(event){
    var $contact = $(this).parents(".contact");
    var id = $contact.attr("id");
    var $btn = $(this);
    $btn.toggleClass("edit");
    $btn.toggleClass("update");
    $btn.html("Edit").toggleClass("btn-attention");
    $contact.find(".contact-item").attr("contenteditable", "false");
    
    var $imgCon = $contact.find(".contact-img-con");
    var contact = {};

    contact.id = id;
    contact.name = $contact.find(".contact-name").first().html();
    contact.email = $contact.find(".contact-email").first().html();
    contact.number = $contact.find(".contact-number").first().html();
    contact.imgUrl = $imgCon.first().html();
   
    updateContact(contact);

    $imgCon.empty();
    $imgCon.append( "<img id='contact-img' src='" + contact.imgUrl + "' class='contact-img'>");
    $imgCon.attr("contenteditable", "false");
  };
  
  $("#contacts").on("click", ".delete", deleteContact);
 
  $("#contacts").on("click", ".edit", editHandler);
  
  $("#contacts").on("click", ".update", updateHandler);
  
  var addContact = function(newContact){
    if ($("#letters").children().length === 0){
      addLetterBoard();
    }
    var charCode = newContact.name[0].toUpperCase();
    var contactString = ["<div id='", newContact.id, "' class='contact ", charCode, "'>",
                               "<div class='contact-img-con'>",
                              "<img id='contact-img' src='", newContact.imgUrl || "http://www.murketing.com/journal/wp-content/uploads/2009/04/nopic_192.gif", "' class='contact-img'>",
                            "</div>",
                            "<div class='row'>",
                              "<div class='col-sm-2'>",
                                "<div class='contact-item-label'>Name: </div>",
                                "<div class='contact-item-label'>Name: </div>",
                                "<div class='contact-item-label'>Name: </div>",
                              "</div>",
                              "<div class='col-sm-8'>",
                                "<div class='contact-item contact-name'>", newContact.name, "</div>",
                                "<div class='contact-item contact-email'>", newContact.email, "</div>",
                                "<div class='contact-item contact-number'>", newContact.number, "</div>",
                              "</div>",
                            "</div>",
                            "<div class='contact-actions'>",
                              "<span class='edit btn btn-action'>Edit</span> ",
                            
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
    
    rerenderContacts();
    

  });
 $.get("/contacts.json").done(function(data){
  console.log("Data received", data);
  contacts = data;
  rerenderContacts();
});

 
 
});