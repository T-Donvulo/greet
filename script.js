const nameEnter = document.querySelector(".nameEnter");
const mylanguages = document.querySelector(".languages");
const addGreetingsBtn = document.querySelector(".greetings");
const message = document.querySelector(".message");
const count = document.querySelector(".count");
const listName = [];

 //const greet = greetings();

addGreetingsBtn.addEventListener("click", function(){
   if (!listName.includes(nameEnter.value) ){
       listName.push(nameEnter.value)
   }
    var checkedRadioBtn = document.querySelector("input[name='language']:checked"); 
    if (checkedRadioBtn){ 
    var language = checkedRadioBtn.value 
}
count.innerHTML = listName.length;
if (language === "Swahili"){
    message.innerHTML = "Hujambo "+ nameEnter.value; 

}
else if(language === "Tshivenda"){
    message.innerHTML = "Aa "+ nameEnter.value;
}
else if(language === "Shona"){
    message.innerHTML = "Mhoro " + nameEnter.value;
}

        


    // if(nameEnter.value == ""){
    //     message.innerHTML= "Enter your name please";
    //     return;
    // }    
    // message.innerHTML = "choose your home language slima!";

    // var checkedGreetingsBtn = document.querySelector("input[name='language']:checked");
    
         
        
    //  if (!namesEnter.includes(greets)) {
    //      const greetElem = document.createElement("div");
    //      greetElem.classList.add("greet");
    //      greetElem.innerHTML = greets;
    //     //  greeting.appendChild(greetElem);

    //      greetingEntered.push(greets)
         
     //}

});