// 雪花的创建和运动
var dsnow = $('#snow');

// 随机函数
function rand(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// 通过概率来限制雪花的创建
var diff = 100;
var speed = 8;

// 雪花的运动
function snowMove() {
  // 1. 雪花概率的创建
  if (rand(0, diff) <= 10) {
    createsnow1();
    createsnow2();
    createsnow3();
    createsnow4();
  }
  // 2. 雪花的运动
  var es = dsnow.children();
  es.each(function (index, element) {
    var e = $(element);
    if (e.position().top > 1800) {
      e.remove();
    } else {
      e.css('top', e.position().top + e.data('speed') + 'px');
    }
  });
}

// 创建雪花1
function createsnow1() {
  var d = $('<div>').addClass('snow1');
  d.css({
    'left': rand(0, sw - 50) + 'px',
    'height': rand(20, 40) + 'px'
  });
  d.data('speed', rand(5, 15));
  dsnow.append(d);
}

// 创建雪花球2
function createsnow2() {
  var d = $('<div>').addClass('snow2');
  d.css({
    'left': rand(0, sw - 50) + 'px',
    'height': rand(10, 30) + 'px'
  });
  d.data('speed', rand(5, 15));
  dsnow.append(d);
}

// 创建雪花球3
function createsnow3() {
  var d = $('<div>').addClass('snow3');
  d.css({
    'left': rand(0, sw - 50) + 'px',
    'height': rand(5, 15) + 'px'
  });
  d.data('speed', rand(4, 8));
  dsnow.append(d);
}

// 创建雪花球4
function createsnow4() {
  var d = $('<div>').addClass('snow4');
  d.css({
    'left': rand(0, sw - 50) + 'px',
    'height': rand(10, 20) + 'px'
  });
  d.data('speed', rand(4, 8));
  dsnow.append(d);
}
