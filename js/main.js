var slider = tns({
    container: '.slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls:true,
    autoplayButton:false,
    autoplayButtonOutput:false,
    controlsContainer:".navcontrol",
    nav:true,
    navContainer:".navcont"
    
});


var slider = tns({

    "container": ".events_vertical",
    "items": 2,
    "axis": "vertical",
    "swipeAngle": true,
    "speed": 1000,
    "mouseDrag": true,
    autoplay:true,
    nav:false,
    controls:false,
    autoplayButton:false,
    autoplayButtonOutput:false    
});



var slider = tns({

    "container": ".news_vertical",
    "items": 2,
    "axis": "vertical",
    "swipeAngle": true,
    "speed": 800,
    "mouseDrag": true,
    autoplay:true,
    nav:false,
    controls:false,
    autoplayButton:false,
    autoplayButtonOutput:false    
});




var slider = tns({
    container: '.gallery_slider',
    slideBy:1,
    autoplay: true,
    controls:false,
    autoplayButton:false,
    autoplayButtonOutput:false,
    nav:false,
    responsive:
    {
        1024: {
            items: 3
          },
        640: {
            items: 2
          },
          400: {
            items: 1
          }
    }
    
});




