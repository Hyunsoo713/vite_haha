import './style2.scss'

$(document).ready(function(){
  setTimeout(function(){
    $(document).scroll(function(){
      $('.vna').fadeOut(600, 'swing');
    });
  },100);
}) ; 


