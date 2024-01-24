$(document).ready(function() {
  $(".openNav").click(function() {
    openNav();
  });

  $(".closebtn").click(function() {
    closeNav();
  });

  function openNav() {
    $("#leftMenu").css("width", "16%");
    $(".openNav, .home-content").addClass("shifted");
  }

  function closeNav() {
    $("#leftMenu").css("width", "0");
    $(".openNav, .home-content").removeClass("shifted");
  }

  $(document).on('click', function(event) {
    if (!$(event.target).closest('#leftMenu').length &&
      !$(event.target).hasClass('openNav')) {
      closeNav();

     
    }
  });
});





$(document).ready(function() {
  $(".toggle").click(function(e) {

    $(".inner").removeClass("active").hide();
    
    $(e.target).next('.inner').addClass("active").toggle();
  });
});


// <<<<<<<<<<<<<<<<<<<<<<<<<     section 03     >>>>>>>>>>>>>>>>>>>>>>>>>




  const eventDate = new Date("September 31, 2024 00:00:00 GMT+0000");

 
  function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = eventDate - currentDate;

   
    if (timeDifference < 0) {
      $("#days, #hours, #minutes, #seconds").text("Event has passed");
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    $("#days").text(days + " D");
    $("#hours").text(hours + " h");
    $("#minutes").text(minutes + " m");
    $("#seconds").text(seconds + " s");
  }


  setInterval(updateCountdown, 1000);


  updateCountdown();





// <<<<<<<<<<<<<<<<<<<<<<<<<     section 04    >>>>>>>>>>>>>>>>>>>>>>>>>


$(document).ready(function() {
  $('textarea').on('input', function() {
    const remainingChars = 100 - $(this).val().length;
    $('#chars').text(`${remainingChars} Character${remainingChars !== 1 ? 's' : ''} Remaining`);
  });
});