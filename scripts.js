$(window).load(function() {
  window.setInterval(loadContent, 4000)
});

function loadContent(){
  $('.preloader').fadeOut('slow');
  document.getElementByClass("loader").style.display = "inline-block";
}

$('.ml9 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});
