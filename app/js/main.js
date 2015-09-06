'use strict';
var $ = require('jquery');
$(function() {
  var firstUrl=$('ul.jhl-nav>li>a').attr('url-val');
  get2Content(firstUrl);
   $('.jhl-nav').children().each(
     function(){
       $(this).click(function(){
         $('li.jhl-active').removeClass('jhl-active');
         $(this).addClass('jhl-active');
         var url= $(this).children().first().attr('url-val');
         get2Content(url);
       });
     }
   );
});

function get2Content(url) {
  console.log(url);
  $.ajax({
    url: url,
    async: false,
    dataType: 'html',
    success:function(data){
      $('#2content').html(data);
    }
  });
}
