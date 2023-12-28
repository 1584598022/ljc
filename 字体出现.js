$(document).ready(function() {
  $('.write').each(function() {
    var $this = $(this);
    var result = $this.text();
    var transformedText = result.split('').map(function(letter) {
      return `<span>${letter}</span>`;
    }).join('');
    $this.html(transformedText);
  });
});
