$(document).ready(function() {
 $("#btnValidate").click(function(){
    
    //validate name
    var name = $("#naam, #voornaam").val();
    if (name.length < 2)
    {
        alert('Please enter a name 2 characters or more.');
        return false;
    };

    //validate email
    let testEmail = /^[A-Z0-9.._%+-]+@([A-Z0-9-])+\.)+[A-Z]{2,4}$/i;
    let emailinput = $("#email").val();
    if (testEmail.test(emailinput)){
    alert("email passed");
    }
    else{
    alert("email failed");
    }

    //validate phone
    var phone = $("#telnr").val(),
        intRegex = /[0-9 -()+]+$/;
    if((phone.length < 6) || (!intRegex.test(phone)))
    {
        alert('Please enter a valid phone number.');
        return false;
    };

    var ep_emailval = $("#email").val(); var intRegex = /[0-9 -()+]+$/; 
    if(intRegex.test(ep_emailval)) { console.log("is phone"); //copy value to phone field 

    $("#telnr").attr("value",ep_emailval); //clear email field 
    $("#email").attr("value",""); }

});
























});