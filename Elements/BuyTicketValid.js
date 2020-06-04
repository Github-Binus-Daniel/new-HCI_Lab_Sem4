var Name ,type ,email ,phone ,address ,term ;
function firstLoad(){
    Name=null;
    type=null;
    email=null;
    phone=null;
    address=null;
    term=null;
    noError();
    document.getElementById("buyTicket").reset();
}
function resetBtn(){
    noError();
    firstLoad();
    alert("Form Resetted");
}

function submitBtn(){
    if(validate()){
        var conf = confirm("Name: " + Name + "\n"+
            "Ticket Type: " + type + "\n"+
            "Email: " + email + "\n"+
            "Phone: " + phone + "\n"+
            "Address: " + address);
        if(conf){
            alert("Thank You For Your Purchase");
            firstLoad();
        }
    }
}

function validate(){
    Name = document.getElementById("name").value;
    if(Name.length<5){
        errorPrompt("Name must be minimal 5 characters.")
        return false;
    }

    
    type = document.getElementById("type").value;
    if(type == ""){
        errorPrompt("Type must be chosen.")
        return false;
    }

    email = document.getElementById("email").value;
    if(email == ""){
        errorPrompt("Email must be filled.");
        return false
    }

    phone = document.getElementById("phone").value;
    if(phone == ""){
        errorPrompt("Phone must be filled.");
        return false
    }
    if(isNaN(phone)){
        errorPrompt("Phone must be a number.");
        return false
    }

    address = document.getElementById("address").value;
    if(address.split(" ").length < 5){
        errorPrompt("Address must be minimal 5 words");
        return false;
    }

    term = document.getElementById("term").checked;
    if(term!=true){
        errorPrompt("User Agreement must be checked");
        return false;
    }

    noError();
    return true;
}

function errorPrompt(message){
    document.getElementById("error").style.display = "initial";
    document.getElementById("error").innerHTML=message;

}

function noError(){
    document.getElementById("error").style.display = "none";
}