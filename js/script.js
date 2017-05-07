$(document).ready(function(){
	$(".error").hide()
	$(".errorEmail").hide();
	$(".close").hide();

	$("#submit").click(function(e){
		e.preventDefault()

		var firstname = $("#firstName").val();
		var	lastname = $("#lastName").val();
		var	inputemail = $("#inputEmail").val();
		var	inputmassage = $("#inputMessage").val();

		if(firstname.length == 0){
			$(".error").show();
			
		
		}else if (lastname.length ==0){
			$(".error").show();
	
		}else if ((inputemail.length ==0) || (inputemail.indexOf("@") ==-1)) {
			$(".errorEmail").show();

		}else if (inputmassage.length ==0) {
			$(".error").show();

		}else (".close").click(function(){

		});

	
	});


});