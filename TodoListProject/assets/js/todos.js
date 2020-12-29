// Check Off Specific Todos by Clicking

$('ul').on("click", "li", function(){
   $(this).toggleClass("completed");
});


$("ul").on("click","span",function(e){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        //grabbing new todo from input
        var newtd = $(this).val();
        //creating li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + newtd + "</li>");
        $(this).val("");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});

