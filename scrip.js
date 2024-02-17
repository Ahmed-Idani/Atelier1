var nb; // it's the number of attemps left in a single game
function generate_Random(diffic)
{let randomNumber;
if (diffic=="easy"){randomNumber = Math.floor((Math.random()) * 15) + 1;}
else if(diffic=="medium"){randomNumber = Math.floor((Math.random() )* 20) + 1;}
else{randomNumber = Math.floor((Math.random() )* 50) + 1;}

return randomNumber}

function trynum(diff){
    if (diff=="easy")
        {return 7;}
    else if (diff=="medium"){return 5;}
    else if (diff=="hard"){return 3;}
}
var actualdiff ;//i just wanted to know the actual difficulty before i changed it so i declared a variable that i will need later
const diffSelect=document.querySelector("#difficulty");
var diff=diffSelect.value;
actualdiff=diff;
 diffSelect.addEventListener("change",function(event){actualdiff=event.target.value;nb=undefined;});

var randomNumber = generate_Random(diff);
var numInput;
const MyInput=document.querySelector("#press");
MyInput.addEventListener("click",(event)=>{
    
    numInput=document.querySelector("#num");
    var inputValue=numInput.value;
    
    if(diff !==actualdiff){diff=actualdiff;
    randomNumber = generate_Random(diff);
       
     }

    if (nb === undefined) {
        nb = trynum(diff);
    }
    
    if(randomNumber==inputValue){document.getElementById("output").textContent ="YOUR ANSWER IS CORRECT ,congrats";
        var im=document.getElementById("image1");
        im.src="youwin.jpg";}
    
    else{nb--;
    if(nb>0){document.getElementById("output").textContent =`YOUR ANSWER IS WRONG ,Try again you still have ${nb} chances`;}
    else{document.getElementById("output").textContent=`All your answers were wrong ,the correct number was ${randomNumber}`;}
    
    

    }
});

const Retry=document.querySelector("#retry");
Retry.addEventListener("click",()=>{numInput.value="";

})
const NEWGAME=document.querySelector("#new");
NEWGAME.addEventListener("click",()=>{
    randomNumber=generate_Random((document.querySelector("#difficulty")).value);
    var im=document.getElementById("image1");
    im.src="OIP.jpg";
    nb=undefined;document.getElementById("output").textContent="WELCOME TO A NEW GAME";})
