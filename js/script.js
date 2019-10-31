$(window).load(function() {

	$('.header-background').on('mousemove', function(e) {
        var divisor = 30;
	    var bgWidth = 1200;
		var bgHeight = 645;
		var mousePosX = e.pageX - $(this).offset().left;
		var mousePosY = e.pageY - $(this).offset().top;
		var mouseMoveX = (mousePosX - $(this).width()/2)/divisor;
		var mouseMoveY = (mousePosY - $(this).height()/2)/divisor;
		$(this).css('background-position', (-(bgWidth-$(this).width())/2+mouseMoveX)+'px ');
	});
    
    
    
    var images = [].slice.call(document.querySelectorAll('.js-parallax-bg'));
    
    function getViewportHeight() {
    var a = document.documentElement.clientHeight, b = window.innerHeight;
    return a < b ? b : a;
}
    
    function getViewportScroll() {
    if(typeof window.scrollY != 'undefined') {
        return window.scrollY;
    }
    if(typeof pageYOffset != 'undefined') {
        return pageYOffset;
    }
    var doc = document.documentElement;
    doc = doc.clientHeight ? doc : document.body;
    return doc.scrollTop;
}
    
    function doParallax() {
    var el, elOffset, elHeight,
        offset = getViewportScroll(),
        vHeight = getViewportHeight();
 
    for(var i in images) {
        el = images[i];
        elOffset = el.offsetTop;
        elHeight = el.offsetHeight;
 
        if((elOffset > offset + vHeight) || (elOffset + elHeight < offset)) { continue; }
 
        el.style.backgroundPosition = '50% '+Math.round((elOffset - offset)*3/8)+'px';
    }
}
    
    Gator(window).on('scroll', doParallax);
    
    
    $(function () {
		$.scrollUp({
	        scrollName: 'scrollUp', // Element ID
	        scrollDistance: 600, // Distance from top/bottom before showing element (px)
	        scrollFrom: 'top', // 'top' or 'bottom'
	        scrollSpeed: 300, // Speed back to top (ms)
	        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
	        animation: 'fade', // Fade, slide, none
	        animationSpeed: 200, // Animation in speed (ms)
	        scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
					//scrollTarget: false, // Set a custom target element for scrolling to the top
	        scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
	        scrollTitle: false, // Set a custom <a> title if required.
	        scrollImg: false, // Set true to use image
	        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	        zIndex: 2147483647 // Z-Index for the overlay
		});
	});


});