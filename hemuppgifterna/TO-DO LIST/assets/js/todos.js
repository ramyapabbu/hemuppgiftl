

$("#container").hide();
$(".box").hide();
$(".add").hide();


$("button").click(function(){
$("#container").fadeIn();
$(".float").fadeOut();
$(".box").fadeIn();
$(".add").fadeIn();
}) ; 

$(".add").click(function(){
	$(".float").fadeIn();
	$("#container").fadeOut();
	$(".box").fadeOut();
});


$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});


$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});



$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		
		var todoText = $(this).val();
		$(this).val("");
		
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});

