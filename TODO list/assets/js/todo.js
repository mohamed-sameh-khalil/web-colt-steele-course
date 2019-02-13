
var deleteButton = '<span class="delbut"><i class="far fa-trash-alt"></i></span>'
function addTodo(text){
	// text = '<span class="todotext">' + text + "</span>";
	str = "<li>" + deleteButton + text + "</li>";
	$("#todolist").append(str);
}
$("#newtask").on("keypress", function(e){
	console.log("clicked");
	if(e.which === 13){
		var text = $(this).val();
		addTodo(text);
		console.log("added the following todo: " + text);
		$(this).val("");
	}
});

$(document).on("click", "li", function(){
	console.log("strike");
	$(this).toggleClass("striketext");
	event.stopPropagation();
});



$(document).on("click", ".delbut", function(e){
	console.log("finish task");
	$(this).parent().fadeOut(500, function(e){
		$(this).remove();
	});
	e.stopPropagation();
});

