$(".input_text").focus(function () {
    $(this).prev(".fa").addClass("glowIcon");
  });
  
  $(".input_text").focusout(function () {
    $(this).prev(".fa").removeClass("glowIcon");
  });
  
  $(document).ready(function(){
    $('#login_button a').click(function() {
      $(this).css('background-color', '#00ccff');
  
    })
  })
  
  const backIcon = document.querySelector(".back-icon");
  backIcon.addEventListener("click", () => {
   
    // Add your back/return logic here
    // For example, you can use window.history.back() to navigate to the previous page
    window.location.href ="http://127.0.0.1:5500/index2.html";
  });