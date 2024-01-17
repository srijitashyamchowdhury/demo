let btn = document.getElementsByClassName('btn')[0];
let message = document.getElementsByClassName('message')[0];
btn.addEventListener('click',()=>{
    console.log("You clicked the button");
    message.innerHTML = "You have clicked the button!";
})