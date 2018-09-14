
$(window).load(function() {
  if(window.location.href.match('/index') != null ||window.location.href.match('/index.html') != null)
  {
    window.setInterval(loadContent, 2000);
  }
  else if(window.location.href.match('/menu') != null ||window.location.href.match('/menu.html') != null)
  {
    document.getElementById("c3").style.display = "inline-block";
    document.getElementById("c1").style.display = "inline-block";

  }
  else if(window.location.href.match('/photos') != null ||window.location.href.match('/photos.html') != null)
  {
    document.getElementById("c2").style.display = "inline-block";
    document.getElementById("c1").style.display = "inline-block";

  }
  else if(window.location.href.match('/contact') != null ||window.location.href.match('/contact.html') != null)
  {
    document.getElementById("c4").style.display = "inline-block";
    document.getElementById("c1").style.display = "inline-block";

  }
  else {
    $('.preloader').fadeOut(0);
    document.getElementById("c1").style.display = "inline-block";
    document.getElementById("c2").style.display = "inline-block";
    document.getElementById("c3").style.display = "inline-block";
    document.getElementById("section1").style.display = "inline-block";
    document.getElementById("c4").style.display = "inline-block";
    document.getElementById("footer").style.display = "inline-block";
  }
});
function loadContent(){
    $('.preloader').fadeOut('slow');
    document.getElementById("c1").style.display = "inline-block";
    document.getElementById("c2").style.display = "inline-block";
    document.getElementById("c3").style.display = "inline-block";
    document.getElementById("section1").style.display = "inline-block";
    document.getElementById("c4").style.display = "inline-block";
    document.getElementById("footer").style.display = "inline-block";
}
