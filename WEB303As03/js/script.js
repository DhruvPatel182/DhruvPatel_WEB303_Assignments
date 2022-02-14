$("div").click(function () {

    $.getJSON("team.json", function (obj) {
            
        $.each(obj, function(key,value){
            $("team").append("<li>"+value.name+"</li>",
            "<li>"+value.position+"</li>",
            "<li>"+value.bio+"</li>");
        })

        },
        
    );

    $.ajax({
        type: "method",
        url: "index.html",
        data: "text",
        dataType: "dataType",
        success: function (response) {
            console.log("Successful");
        }
    });
});