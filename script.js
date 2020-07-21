const nameEnter = document.querySelector(".nameEnter");
const language = document.querySelector(".language");
const addGreetingsBtn = document.querySelector(".greetings");
const message = document.querySelector(".message");


const greeted = [];

addGreetingsBtn.addEventListener("click", function(){
    if(nameEnter.value == ""){
        message.innerHTML= "Enter your name please";
        return;
    }

    const greets = greetings.value.toUpperCase();
    {
            message.innerHTML = "";
        }
     if (!namesEnter.includes(greets)) {
         const greetElem = document.createElement("div");
         greetElem.classList.add("greet");
         greetElem.innerHTML = greets;
         greeting.appendChild(greetElem);

         greetingEntered.push(greets)
         
     }

       
        
    

});