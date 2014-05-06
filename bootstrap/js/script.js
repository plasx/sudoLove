// Draggable bar code
if (jQuery.ui) {
    $(".draggable-line").draggable({
        axis: "y",
        containment: "parent"
    });
    /*
    $("button").click(function() {
        var ratio = ($(".line").position().top / $(".container").height() * 100) - 16;
        if (ratio < 97) {
            var intRatio = ratio.toPrecision(2);
        }
        else {
            var intRatio = (ratio.toPrecision(3) + 3);
        }
        alert(intRatio);
    });
    */
}


// Profile page
$('#values_list li').hover(function(){
 $('#values_list li').removeClass('active');
    var item = $(this);
      item.addClass('active');
      $('#user_title').html(item.attr('data-title'));
      $('#user_value').html(item.attr('data-value'));
});


// Event handlers that trigger the behavior of clicking the next link
$("#index").on("touchstart click", function(e) {
    e.preventDefault(); e.stopPropagation();
    window.location.href = "menSponPart.html";
});
$("#men-spon-part").on("touchstart click", function(e) {
    e.preventDefault(); e.stopPropagation();
    window.location.href = "roles.html";
});
$("#roles").on("touchstart click", function(e) {
    e.preventDefault(); e.stopPropagation();
    window.location.href = "programSkill.html";
});

$("#program-skill").on("touchstart click", function(e) {
    e.preventDefault(); e.stopPropagation();
    window.location.href = "DeveloperSelection.html";
});
$("#developer-selection").on("touchstart click", function(e) {
    e.preventDefault(); e.stopPropagation();
    window.location.href = "/plasx/sudolove/workspace/codecompete/codecompete.html";
});