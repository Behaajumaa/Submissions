
var password = document.querySelector("#password");
 var confirm = document.querySelector("#confirmation");
 var button = document.querySelector("button");
 var pass_value = password.value;

 var change_border = function() {

 if(password.value !== confirmation.value) {
    password.style.border = "3px solid red";
    confirm.style.border = "3px solid red";
   }
  }
 button.addEventListener("click", change_border);

