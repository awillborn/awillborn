$(function(){
  $('.down-arrow-link').on('click', function(e){
    e.preventDefault();
    project = e.target.parentElement.parentElement.id
    $("#" + project + "-content").slideToggle("fast");
  })
})