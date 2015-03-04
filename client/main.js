'use strict';

$(document).ready(init);

function init() {
  $('#getquote').click(getData);

};

function getData() {
  var input = $('input[name=symbol]').val();
  var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+ input +'&callback=?';
  if (!input || !isNaN(input)) {
    alert("Please enter the right symbol");
  } else {

    $.getJSON(url, function(data){
      console.log('data', data);
      var myarray = [];
      // var $delete = $(<input type='button' value='Delete' />);
      var $div = $('<div>');
      $div.addClass('answer');

      var show = $div.html('Name: ' + data.Name + '<br/>' + 'Symbol: ' + data.Symbol +'<br/>'+ 'Quote: ' + data.LastPrice +'<br/>'+ 'Change: '  + data.Change +'<br/>' );

 if(data.Change > 0) {
      show = $div.html('Name: ' + data.Name + '<br/>' + 'Symbol: ' + data.Symbol +'<br/>'+ 'Quote: ' + data.LastPrice +'<br/>'+ 'Change: '  + data.Change + ' <img src="http://assets.sbnation.com/assets/204471/Arrow_Up__Green_.jpg">' );
 } else if (data.Change < 0) {
   show = $div.html('Name: ' + data.Name + '<br/>' + 'Symbol: ' + data.Symbol +'<br/>'+ 'Quote: ' + data.LastPrice +'<br/>'+ 'Change: '  + data.Change + ' <img src="http://assets.sbnation.com/assets/204463/Arrow_Down__Red_.jpg">' );
 } else {
   show = $div.html('Name: ' + data.Name + '<br/>' + 'Symbol: ' + data.Symbol +'<br/>'+ 'Quote: ' + data.LastPrice +'<br/>'+ 'Change: '  + data.Change +'<br/>' );
 };


      myarray.push(show);
      $('#messages').append(show);
      show.append("<input type='button' id='myButton' value='Remove'/>");
      $('.answer').on('click', '#myButton', function() {
        show.remove();
      });

    });
  }
}
