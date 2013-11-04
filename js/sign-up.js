//signup.js 
// add your JavaScript code to this file


//the function that will run on document load
$(function(){
	var stateSelect = $('.us-states');  //the dropdown menu which should contain state names
	$.each(usStates, function(){ 
		//goes through and adds the content from the external us-states file to the dropdown menu
		var option=$(document.createElement('option'));
		option.attr('value', this.abbreviation);
		option.html(this.name);
		stateSelect.append(option);
	});

	//makes first name, last name, and e-mail required
	$('[name=first-name]').attr('required', true);
	$('[name=last-name]').attr('required', true);
	$('[name=email]').attr('required', true);


	$('.signup-form').submit(function(){
	    //code to execute when the sign-up form is submitted
	    var signupForm = $(this);
	    //select a descendant input element with the name "addr-1"
		var addr1Input = signupForm.find('input[name="addr-1"]');
		var addr1Value = addr1Input.val();
		//if there's text in the addr1 field, make sure there's also text in the zipcode field
        if(addr1Value.length > 0){
        	var zipInput = signupForm.find('input[name="zip"]');
			var zipInputValue = zipInput.val();
			if(zipInputValue.length == 0){
				alert('Please enter a zip-code.');
				return false;
			}
        }

	});


$('.cancel-signup').click(function(){
    //code to run when user clicks "No Thanks!" button
    //show the modal confirmation dialog
    //and don't reset window.location until the user clicks
    //the "Yes, Get Me Out of Here!" button
    $('.cancel-signup-modal').modal();
}); //cancel-signup click

//code for if they still want to leave the form
$('.btn-abandon').click(function(){
    window.location = 'http://www.google.com';
});
       
});