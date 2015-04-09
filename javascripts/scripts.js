$(function(){
  $('.down-arrow-link').on('click', function(e){
    e.preventDefault();
    if($(e.target).hasClass('down-arrow-link')){
      project = e.target.parentElement.id
    } else {
      project = e.target.parentElement.parentElement.id
    }
    $("#" + project + "-content").slideToggle("fast");
  })
})