$(document).ready(function(){
	$('#add-name').on('submit', function(e){
		e.preventDefault();
		var firstname = $('#firstname').val();
		var lastname = $('#lastname').val();
		var email = $('#email').val();
		var password = $('#password').val();


		$.ajax( { url: "https://api.mlab.com/api/1/databases/deni/collections/login?apiKey=74gta31U5IfBRxWYrQaHS6oTyF9Byp7o",
		  data: JSON.stringify({ 
		  	"name" :name,
		  	"lastname" :lastname,
		  	"email" :email,
		  	"password" :password,

		  } ),
		  type: "POST",
		  contentType: "application/json" ,
		  success: function(data){
		  	window.location.href="index.html"
		  },
		  error: function(xhr, status, err) {
		  	console.log(err);
		  }	

		});
	});
});
