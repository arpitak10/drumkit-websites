

//alert("Hello");
var onClick=document.querySelectorAll("button");                    //.addEventListener("click",handleOnClick);
console.log(onClick);
for(var i=0;i<onClick.length;i++){
    //console.log(onClick[i])
    //detecting button press
    onClick[i].addEventListener("click",function (){
        //alert("I get clicked");
        makesound(this.innerHTML);
        buttonAnimation(this.innerHTML);
        //console.log(this.innerHTML);
        //this.style.color="white";
        //var audio=new Audio("./sounds/crash.mp3");
        //audio.play();
    })
}
//detecting keyboard press
document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
})
function makesound(key){
    switch(key){
        case "w":
            var audio=new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;

        case "d":
            var audio=new Audio("./sounds/snare.mp3");
            audio.play();
            break;

        case "j":
            var audio=new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;

    }

}
function buttonAnimation(currKey){
    var buttonPressed = document.querySelector("."+currKey);
    buttonPressed.classList.add("pressed");
    setTimeout(function(){
        buttonPressed.classList.remove("pressed");
    },1000)
}