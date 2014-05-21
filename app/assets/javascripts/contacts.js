$(document).ready(function() {

    var contacts = [];
    var count = 500;
    // Letters A-Z
    for (var char_code = 65; char_code < 91; char_code++) {
        var charStr = String.fromCharCode(char_code);
        var charSpan = "<span id='" + charStr + "' class='letter'> " + charStr + " </span>";
        $("#letters").append(charSpan);
    };

    $("#letters").on("click", ".letter", function() {
        var id = this.id;
        console.log(id)
        $(".contact").hide();
        $("." + id).show();
    });


    var deleteContact = function(event) {
        console.log("Delete", this);
        $(this).parents(".contact").remove();
    };

    $("#contacts").on("click", ".delete", deleteContact);

    var addContact = function(newContact) {
        //prints one contact at a time
        var contactString = ["<div id='", newContact.id, "' class='contact " + newContact.name[0].toUpperCase() + "'>",
            "<div>",
            "<img src='", newContact.imgUrl, "' class='contact-img'>",
            "</div>",
            "<div class='contact-item'>", newContact.name, "</div>",
            "<div class='contact-item'>", newContact.email, "</div>",
            "<div class='contact-item'>", newContact.number, "</div>",

            "<div class='contact-actions'>",

            "<span class='delete btn btn-action'>Delete</span>",
            "</div>",
            "</div>"
        ].join("");

        console.log(contactString);

        $("#contacts").append(contactString);

    };

    // Now we need to watch for a submit 
    //  event on the form
    $("#new_contact").submit(function(event) {
        // Prevent the page from reloading
        event.preventDefault();

        //console.log(this);

        var name = $("#contact_name").val();
        var email = $("#contact_email").val();
        var number = $("#contact_number").val();
        var imgUrl = $("#contact_img_url").val();

        console.log(name, email, number, imgUrl);

        // Reset the form
        this.reset();


        // Keeping track of new contacts
        var newContact = {
            id: count,
            name: name,
            email: email,
            number: number,
            imgUrl: imgUrl
        };
        count += 1;

        contacts.push(newContact);

        // Call a function to add our contact to 
        //  the page.
        addContact(newContact);

    });

    $.get('/contacts.json').done(function(data) {
        //stored the contact in the area
        contacts = data
        $.each(contacts, function(index, item) {
            addContact(item);

        });
    });
});