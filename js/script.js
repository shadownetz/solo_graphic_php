var slideIndex = 0;
//function to change image slides
function carousel(){
  var x = document.getElementsByClassName('slides');
  var y = document.getElementsByClassName('img-round');
  for(var i = 0;i < x.length; i++){
    x[i].style.display = "none";
    y[i].style.color = "rgb(200,200,200)";
  }
  x[slideIndex].style.display = "block";
  y[slideIndex].style.color = "#3D9970";
  slideIndex++;
  if(slideIndex >= x.length){
    slideIndex = 0;
  }
  setTimeout(carousel,5000); //display next image after 5s
}
carousel();
//functions to show and hide the hover effect
function overLayShow(n){
  var nTemp = n.toString();
  var x = document.getElementById(n);
  x.style.display = "block";
}
function overLayHide(n){
  var nTemp = n.toString();
  var x = document.getElementById(n);
  x.style.display = "none";
}
//iterate through the different logos
var ini = 5;
function nxtPage(n){
  var txtTemp = "page" + n;
  var x = document.getElementById(txtTemp);
  var y = document.getElementsByClassName('page');
  var z = document.getElementsByTagName('li');
  for(var i = 0; i < y.length;i++){
    y[i].style.display = "none";
    for(ini;ini < 8; ini++){
      if(z[ini].classList.contains('active')){
        z[ini].classList.remove('active');
      }
    }
  }
  y[n].style.display = "block";
  switch(n){
    case 1:{ini = 6;break;}
    case 2:{ini = 7;break;}
    default:{ini = 5;break;}
  }
  z[ini].classList.add('active');
}
//function to display the first page logos
function show(){
  var y = document.getElementsByClassName('page');
  for(var i = 0; i < y.length;i++){
    y[i].style.display = "none";
  }
  y[0].style.display = "block"
}
show();
