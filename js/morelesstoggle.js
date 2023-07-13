	  
$('.moreless-event-button').click(function() {
  $('.morelessevent').slideToggle();
  if ($('.moreless-event-button').text() == "READ MORE >>") {
    $(this).text("READ LESS >>")
  } else {
    $(this).text("READ MORE >>")
  }
});


  
$('.moreless-activity-button').click(function() {
  $('.morelessactivity').slideToggle();
  if ($('.moreless-activity-button').text() == "READ MORE >>") {
    $(this).text("READ LESS >>")
  } else {
    $(this).text("READ MORE >>")
  }
});
	  
	  