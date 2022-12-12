const form = document.querySelector("form");
const userDom= document.getElementById("fullname");
const emailDom = document.getElementById("email");
const passwordDom = document.getElementById("password"); 
const userError = document.getElementById("nameError");
const mailError = document.getElementById("mailError");
const passError =  document.getElementById("passError");

    form.addEventListener("submit", (e) => {
        let massages = [];
        let errmail =[];
        let errpass= [];

        
            if(userDom.value ==="" || userDom.value == null){
                massages.push("Username is required");
                e.preventDefault();
                    userError.innerHTML = massages.join(", ");
                return false ;
                } 
            userError.innerHTML = "";


                if(!emailDom.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)  
                ){
                    errmail.push("Email is not valid");
                    e.preventDefault();
                    mailError.innerHTML = errmail.join(", ");
                    return false;
                }  

                mailError.innerHTML= "";


                if(passwordDom.value ==="" || passwordDom >6){
                    errpass.push("Password must be at least 6 characters");
                    e.preventDefault();
                    passError.innerHTML = errpass.join(", ");
                    return false;
                }

                passError.innerHTML ="";

            });







