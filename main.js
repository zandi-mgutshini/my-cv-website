// Document Ready for jQuery
$(document).ready(function() {
    console.log( "ready!" );
    $('body').css("display", "none").stop().fadeIn(2000);
    // $('body').css("display", "none").slideDown(5000);
    // When #profilePictureImage is ready for jQuery slide the image down and fade in to opacity of 1
    $("#profilePictureImage").ready(function() {
        $("#profilePictureImage").slideDown(3000).fadeTo(1000, 1);
    });
    // Add wiggle class to #profilePictureImage when hovered over. Then remove wiggle class on mouse exit
    $("#profilePictureImage").hover(function() {
        $(this).addClass("wiggle");
      }, function() {
        $(this).removeClass("wiggle");
      });
    // Removes text-muted class on hover
    $(".text-muted").hover(function() {
        $(this).addClass("text-unmuted");
        $(this).removeClass("text-muted");
        }, function() {
        $(this).removeClass("text-unmuted");
        $(this).addClass("text-muted");

      });
    // Makes icons wiggle on hover
      $(".accordion-button, .github-button, .email-button, .linkedin-button, .behance-button, .quick-download-button").hover(function() {
        $(this).children("i").addClass("wiggle");
      }, function() {
        $(this).children("i").removeClass("wiggle");
      });

      // Add functionality to expand accordion items when professional-button, technical-button, experience-button, and education-button are clicked on.
      $(".technical-button").click(function(){
        $("#collapseOne").attr("class", "accordion-collapse collapse show");
      // Figure out how to collapse other open accordions.
      })

      $(".professional-button").click(function(){
        $("#collapseTwo").attr("class", "accordion-collapse collapse show");
      // Figure out how to collapse other open accordions.
      })

      $(".experience-button").click(function(){
        $("#collapseThree").attr("class", "accordion-collapse collapse show");
      // Figure out how to collapse other open accordions.
      })

      $(".education-button").click(function(){
        $("#collapseFour").attr("class", "accordion-collapse collapse show");
      // Figure out how to collapse other open accordions.
      })
});