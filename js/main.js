 var form = document.querySelector("form");
 var btnNext = document.querySelector(".btn_next");
 var mainScreen = document.querySelector(".main__screen");
 var secondScreen = document.querySelector(".second__screen");
 var arrowBack = document.querySelector(".back");
 var valueEmail = document.querySelector(".value__email");


validInput()
 btnNext.addEventListener("click", changeScreen);
 arrowBack.addEventListener("click",changeScreen);
 form.email.addEventListener("change",validInput);
 
 function changeScreen(event){
    event.preventDefault();
    mainScreen.classList.toggle("hidden");
    secondScreen.classList.toggle("hidden");
    getText()
    changeImg()
    validInput()
   }

 function getText(){
   var inputText = form.email.value;
   valueEmail.textContent = inputText   
   }

  

   function validInput(){
      if(form.email.value == ""){
         btnNext.disabled = true
      }else{
         btnNext.disabled = false
      }
   }


