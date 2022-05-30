/*!
* Start Bootstrap - Clean Blog v6.0.8 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/

let form = document.getElementById('submitButton');
form.addEventListener('click', function () {
    console.log("test");
  let  firstname = document.getElementById("firstName").value;
  let  lastname = document.getElementById("lastName").value;
  let  address  = document.getElementById("address").value;
  let  state  = document.getElementById("state").value;
  let  city  = document.getElementById("city").value;
  let  zip  = document.getElementById("zip").value;
  let  age  = document.getElementById("age").value;
  let  bio  = document.getElementById("bio").value;

  if (firstname ="undefined"){
    document.getElementById("firstnameWarn").innerHTML = "Firstname is required!";
  }
  if (lastname ="undefined"){
    document.getElementById("lastnameWarn").innerHTML = "lastname is required!";

}
if (address ="undefined"){
    document.getElementById("addressWarn").innerHTML = "address is required!";

}
if (state ="undefined"){

}    document.getElementById("stateWarn").innerHTML = "state is required!";

if (city ="undefined"){
    document.getElementById("cityWarn").innerHTML = "City is required!";

}
if (zip ="undefined"){
    document.getElementById("zipWarn").innerHTML = "zip is required!";

}
if (age  ="undefined"){
    document.getElementById("ageWarn").innerHTML = "age is required!";

}
if (bio ="undefined" || bio.length <10){
    document.getElementById("bioWarn").innerHTML = "bio is required!";

}


});