document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('input:not(.newsletter-input)');
    var submitBtn = document.querySelector('.submit');
    var resetBtn=document.querySelector('.reset');
    inputs.forEach(function(input) {
        var a=input.getAttribute("placeholder");
        input.addEventListener("focus", function() {     
            input.setAttribute("placeholder", "");
            input.previousElementSibling.style.opacity = "1";
            inputs.forEach(function(inputElement) {
                if (inputElement !== input) {
                    inputElement.classList.add("blurred");
                }
            });
        });
        input.addEventListener("blur", function() {
            input.setAttribute("placeholder", a);
            input.previousElementSibling.style.opacity = "0";
            inputs.forEach(function(inputElement) {         
                inputElement.classList.remove("blurred"); 
            });
            if(input.value!==null&&input.value!==''){
                input.setAttribute("placeholder","");
                input.previousElementSibling.style.opacity="1";
            }
        });    
    });
    function checkInputs() {
        var allFilled = true;
        var allEmpty=true;
        inputs.forEach(function(input) {
            if (input.value===null||input.value==='') {
                allFilled = false;
            }else if(input.value!==null||input.value!==''){
                allEmpty=false;
            }
        });
        submitBtn.disabled=!allFilled;
        resetBtn.disabled=allEmpty;
    }
    inputs.forEach(function(input) {
        input.addEventListener('input', checkInputs);
    });
    resetBtn.addEventListener('click',function(){
        resetBtn.disabled=true;
        submitBtn.disabled=true;
        inputs.forEach(function(input) {
            input.value='';
            var z=input.previousElementSibling.innerHTML;
            input.setAttribute("placeholder",z);
            input.previousElementSibling.style.opacity="0";
        });
    });
    checkInputs();
});
function validate(){
    var form = document.getElementById("form");
    var email = form.email.value;
    var pass1 = form.pass1.value;
    var pass2 = form.pass2.value;
    var city = form.city.value;
    var state = form.state.value;
    var country = form.country.value;
    var pincode = form.pincode.value;
    var age = form.age.value;
    var stringx=/^[A-Za-z]+$/;
    var emailx=/^[a-zA-Z0-9]+([.-]?\w+)*\@(.*\w{2,3})$/;
    var validated=true;
    if(!emailx.test(email)||!stringx.test(city)||!stringx.test(state)||!stringx.test(country)){
        validated=false;  
        alert("The inputted value for email or city or state or country is incorret."); 
    }else if(pass1!==pass2){
        validated=false; 
        alert("The passwords enter do not match.");
    }else if(age<18||age>100){
        validated=false;       
        alert("Please enter valid age between 18 and 100.");
    }else if(pincode.length!==6){
        alert("Pincode is incorrect.");
        validated=false;     
    }
    return validated;
}