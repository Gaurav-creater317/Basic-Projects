const buttonsEl = document.querySelectorAll("button");
// console.log(buttonsEl);

const inputFieldEl = document.getElementById("result");

for ( let i = 0 ; i < buttonsEl.length ; i++){
              buttonsEl[i].addEventListener("click",()=>{
                      
                // const buttonValue = console.log(buttonsEl[i].textContent);   
                      const buttonValue = buttonsEl[i].textContent;   
                      if ( buttonValue === "C"){
                           clearResult();
                      } else if (buttonValue === "="){
                           calculateResult();
                      } else {
                           appendValue(buttonValue);
                      }      
              });
}
function clearResult(){
            //  inputFieldEl.value  = "";  
            const currentValue = inputFieldEl.value;
            inputFieldEl.value = currentValue.slice(0, -1);
          
}

function calculateResult(){
        inputFieldEl.value = eval(inputFieldEl.value);
}

function appendValue(buttonValue){
       inputFieldEl.value += buttonValue;
      //  inputFieldEl.value = inputFieldEl + buttonValue;
}