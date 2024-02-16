function generate_Random(diffic)
{let randomNumber;
    
if (diffic=="easy"){randomNumber = Math.floor(Math.random() * 10) + 1;}
else if(diffic=="medium"){randomNumber = Math.floor(Math.random() * 20) + 1;}
else{randomNumber = Math.floor(Math.random() * 50) + 1;}
return randomNumber}


var inputValue;
const numInput=document.querySelector("#num");
numInput.addEventListener("input",()=>inputValue=numInput.input)

var diff;
var randomNumber;
const diffSelect=document.querySelector("#difficulty");
diffSelect.addEventListener("change",()=>
{diff=diffSelect.value;
randomNumber = generate_Random(diff);
console.log(randomNumber); 
});
var randomNumber1 = generate_Random("easy"); // Initialize with easy difficulty
console.log("lepremier: "+randomNumber1); // Log the initial random number
const MyInput=document.querySelector("#press");
MyInput.addEventListener("click",(event)=>{
    event.preventDefault();
    
    if(randomNumber==inputValue)
    document.getElementById("output").textContent ="YOUR ANSWER IS CORRECT ,congrats";
    else{document.getElementById("output").textContent ="YOUR ANSWER IS WRONG ,Try again";

    }
});
