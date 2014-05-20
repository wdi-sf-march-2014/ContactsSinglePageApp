## Single Page App Lab - Contacts

The goal of this lab will be to make a single page contacts app that is connected to a rails backend.  The repo has a working front end contacts app that does not use a database.  Here is what you need to get it work with rails:


1. Look over the code in `app/assets/javascript/contacts.js` and understand what it is doing.
2. Add a model to the rails app.  It should be able to store and retreive all of the contact data that is being used in the javascript of the contacts app.
3. Create an api for getting all of the contacts.
4. __TEST THE API WITH RSPEC__.  Make sure you do this before moving on.
5. Use ajax in the javascript code to call the api you created and use the data that is returned in your contact app.


## Hint

* Make sure you are requesting the correct data by add .json to your url.
* Look at the jQuery docs to understand what is going on.

### References

* [jQuery docs](http://api.jquery.com/)
