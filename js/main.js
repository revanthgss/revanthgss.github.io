$(function check(){
	if(window.matchMedia("(max-width:600px)").matches){
		$('.card').removeClass('horizontal');
	}
	else{
		$('.card').addClass('horizontal');
	}
})