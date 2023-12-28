$(document).ready(function() {
  var $aul = $('ul');
  $aul.html($aul.html());  // 复制一份内容追加到原有内容后面

  var $ali = $('li');
  var $abu = $('.bu');
  $aul.width($ali.eq(0).outerWidth() * $ali.length);

  var speed = -2;
  
  function move() {
    if ($aul.position().left < -$aul.outerWidth() / 2) {
      $aul.css('left', '0');
    }
    if ($aul.position().left > 0) {
      $aul.css('left', -$aul.outerWidth() / 2);
    }
    $aul.css('left', $aul.position().left + speed);
  }

  var timers = setInterval(move, 40);

  $aul.on('mouseover', function() {
    clearInterval(timers);
  });

  $aul.on('mouseout', function() {
    timers = setInterval(move, 40);
  });

  $abu.eq(0).on('click', function() {
    speed = -2;
  });

  $abu.eq(1).on('click', function() {
    speed = 2;
  });
});
