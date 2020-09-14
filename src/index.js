import $ from 'jquery';
import './scss/style.scss';

$('.open').click(function(){
  $('#modal').addClass('active');
})

$('.close').click(function(){
  $('#modal').removeClass('active');
})