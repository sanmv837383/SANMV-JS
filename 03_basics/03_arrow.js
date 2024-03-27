const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
        //it runs the current context
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this);