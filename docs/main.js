import './style2.scss'
import $ from "jquery";

$(document).ready(function(){
  setTimeout(function(){
    $(document).scroll(function(){
      $('.vna').fadeOut(600, 'swing');
    });
  },100);
}) ; 


