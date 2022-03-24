var header=document.querySelector(".navbar-brand");

header.style.color="blue";
function changecolor(){
    choose="0123456789ABCDEF";
    color="#F";
    for(var i=0;i<5;i++){
        color+=choose[Math.floor(Math.random()*16)];
    }
    return color;
}
function changeit(){
    var c=changecolor();
    choose="0123456789ABCDEF";
    header.style.color=c;
    c="#E";
    for(var i=0;i<5;i++){
        c+=choose[Math.floor(Math.random()*16)];
    }
    header.style.color=c;
    c="#E";
    for(var i=0;i<5;i++){
        c+=choose[Math.floor(Math.random()*16)];
    }
    header.style.color=c;
}
setInterval(changeit,1000);

$(document).ready(function(){
    $("a").hover(function(){
      $(this).css("color", "black");
      $(this).css("transition", "1.3s");

    },function(){
        $(this).css("color", "white");
    });
    $(".card-link").hover(function(){
        $(this).css("color", "black");
        $(this).css("transition", "1.3s");
  
      },function(){
          $(this).css("color", "blue");
      });
});
