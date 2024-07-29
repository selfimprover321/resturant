const submit = document.querySelector("#submit");
const messagesArray = [];

class createNewMessage{
    constructor(name, email, phone, message){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.message = message;
    }
}

submit.addEventListener('click', () => {
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");
    const message = document.querySelector("#message"); 
    let newMessage = new createNewMessage(name, email, phone, message);
    messagesArray.push(newMessage);
    document.querySelector('form').reset();
})