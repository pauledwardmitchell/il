$(document).ready(function(){

  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#square1',
    // duration: '80%',
    triggerHook: .7,
    reverse: false
  })
  .setClassToggle('#square1', 'visible')
  .addIndicators({
    name: 'fade-square',
    colorTrigger: 'black',
    colorStart: 'black',
    colorEnd: 'red'
  })
  .addTo(controller);

  console.log('yeah!');

});
