function randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

var items=document.querySelectorAll("#maListe li");
items.forEach(function(item){
item.addEventListener("click",function(e){
e.target.style.color=randomColor();
});
});
