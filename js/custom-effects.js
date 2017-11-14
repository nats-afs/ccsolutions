$(window).load(function(){
    $('.preloader').fadeOut(2000); // set duration in brackets    
});
$(document).ready(function(){
	var flag = false;
	var flag1 = false;
	var scroll;
    var ancho;
    
    if($(window).width() < 750){
        $("#img-logo").css({"margin-top": "0.6%", "width": "178px", "height": "auto"});
        $("#cabecera").css({"height": "52px"});
		$("#cabecera").css({"background-color": "#222"});
        $("#e-alto .btn").css({"height": "52px","line-height": "inherit", "padding-top": "1em", "padding-right": "1em", "padding-left": "1em"});    
    }
	$(window).scroll(function(){
		scroll = $(window).scrollTop();
        ancho = $(window).width();
		if(scroll > 200 && ancho > 750){
			if(!flag){
				$("#img-logo").css({"margin-top": "0.6%", "width": "178px", "height": "auto"});
				$("#cabecera, #e-alto").css({"height": "52px"});
				$("#cabecera").css({"background-color": "#222"});
                $("#e-alto .btn").css({"height": "52px","line-height": "inherit", "padding-top": "1em", "padding-right": "1em", "padding-left": "1em"});
				flag = true;
			}
		}else{
			if(flag){
				$("#img-logo").css({"margin-top": "12px","width": "220px","height":"auto"});
				$("#cabecera, #e-alto").css({"height":"80px"});
                $("#cabecera").css({"background-color": "transparent"});
                $("#e-alto .btn").css({"height": "80px","line-height": "inherit", "padding-top": "2em", "padding-right": "2em", "padding-left": "2em"});
				flag = false;
			}
		}
	});
    $(window).resize(function() { 
        ancho = $(window).width();
        if(ancho <= 750){
            $("#img-logo").css({"margin-top": "0.6%", "width": "178px", "height": "auto"});
            $("#cabecera").css({"height": "52px"});
		    $("#cabecera").css({"background-color": "#222"});
            $("#e-alto").css({"height": "auto"});
            $("#e-alto .btn").css({"height": "52px","line-height": "inherit", "padding-top": "1em", "padding-right": "1em", "padding-left": "1em"});      
        }else{
            $("#img-logo").css({"margin-top": "12px","width": "220px","height":"auto"});
            $("#cabecera, #e-alto").css({"height":"80px"});
            $("#cabecera").css({"background-color": "transparent"});
            $("#e-alto .btn").css({"height": "80px","line-height": "inherit", "padding-top": "2em", "padding-right": "2em", "padding-left": "2em"});
        }
    });
});