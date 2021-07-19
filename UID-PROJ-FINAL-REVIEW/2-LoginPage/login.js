const form = document.querySelector("form");
eField = form.querySelector(".email"),
eIn = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");
form.addEventListener('submit',function(e) //==(e)=>{}
{  
  e.preventDefault(); //preventing from form submitting
  if(eIn.value == "")
  {
    eField.classList.add("error");
  }  
  else checkEmail();
  if(pInput.value == "") 
  {
    pField.classList.add("error");
  } 
   else checkPass();

  eIn.onkeyup = function()
  {
    checkEmail();
  } //calling checkEmail function on email input keyup
  pInput.onkeyup = function(){
    checkPass();
  } //calling checkPassword function on pass input keyup
  function checkEmail()
  { //checkEmail function
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for email

    if(!eIn.value.match(pattern))
    { //if pattern is not matched then add error & remove valid
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      //if email value is not empty then
     if (eIn.value != "") 
     { 
       errorTxt.innerText = "Enter a valid email address" 
      }
      else
      {
         errorTxt.innerText = "Email can't be blank";
        }
    }
    else
    { //if pattern matched then 
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }
  function checkPass(){ 
    if(pInput.value == "")
    { //if pass is empty then
      pField.classList.add("error");
      pField.classList.remove("valid");
    }else
    { //if pass is empty then
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }
  
  if(!eField.classList.contains("error") && !pField.classList.contains("error"))
  {
    window.location.href = form.getAttribute("action"); 
  }
});