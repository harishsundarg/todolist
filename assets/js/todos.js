// check off specific todos
$("ul").on("click","li",function(){
	// if li is gray turn it to black else turn gray
	// if($(this).css("color")==="rgb(128, 128, 128)"){
	// 	$(this).css({
	// 		color:"black",
	// 		textDecoration:"none"
	// 	});
	// }
	// else{
	// $(this).css({
	// 		color:"gray",
	// 		textDecoration:"line-through"
	// 	});
	// }

	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which===13){
		// getting new todo
		var todoText = $(this).val();
		$(this).val("");
		//create new li
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})