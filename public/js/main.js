$(document).ready(function(){
	$('#signup').on(register', function(e){
		e.preventDefault();
		var firstname = $('#firstname').val();
		var lastname = $('#lastname').val();
		var email = $('#email').val();
		var password = $('#password').val();

		$.ajax( { url: "https://api.mlab.com/api/1/databases/deni/collections/my-coll?apiKey=8MLmAT61CcsZAGabYB-_1kuN7iQ6FblL",
		  data: JSON.stringify( { 
		  	"firstname" :firstname,
		  	"lastname" :lastname,
		  	"email" :email,
		  	"password" :password,

		  } ),
		  type: "POST",
		  contentType: "application/json" ,
		  success: function(data){
		  	window.location.href= "index.html"
		  },
		  error: function(xhr, status, err) {
		  	console.log(err);
		  }

		});
	});
});