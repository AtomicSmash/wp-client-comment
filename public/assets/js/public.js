(function ( $ ) {

	//alert("asdsad");
	$( ".clientCommentButtonOpen" ).live( "click", function() {
		//lert("ss");
/*
		$("#mobileNavigation li").hide();
		//$(".showHiddenLinks").hide();
		
		
		$( ".mobileMenuTrigger" ).html('<i class="menuIcon icon-hamburger"></i><span>Menu</span>');
	
		$( this ).removeClass('mobileMenuTriggerOpen');
*/




		$( ".clientCommentWrapper" ).addClass('active');
/*
		$(".mobileNav").css("opactiy",0).velocity("transition.slideRightBigOut", {stagger: 300, drag: true, duration:300});
	
	
		$(".mainContent,.sidebar,.subFooter,.footer,.charities,.ourMission_block,.homepageLeft,.homepageRight,.breadCrumbs").css("opactiy",0).velocity("transition.slideLeftIn", {stagger: 0, drag: false, duration:300});
		
		
		
		
		setTimeout(function(){
			$(".mobileNav").removeClass('active');
			
		}, 500);
		
		
*/

		return false;
	});
	$( ".clientCommentButtonClose" ).live( "click", function() {

		$( ".clientCommentWrapper" ).removeClass('active');

		return false;
	});
	
	

	
}(jQuery));