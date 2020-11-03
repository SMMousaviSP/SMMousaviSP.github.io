var live_edit = function() {
    var raw_text = this["value"];
    raw_text = raw_text.replace(/ /g, '&nbsp;');
    raw_text = raw_text.replace(/\n/g, '<br>');
    raw_text = raw_text.replace(/%/g, '<hr>');
    raw_text = raw_text.replace(/\[/g, '<span class="bs">');
    raw_text = raw_text.replace(/\]\]/g, '</span></span>&nbsp;');
    raw_text = raw_text.replace(/\]/g, '</span>&nbsp;');
    raw_text = raw_text.replace(/\{/g, '<span class="bd">');
    raw_text = raw_text.replace(/\}/g, '</span>&nbsp;');
    $("#rendered-text").html(raw_text);
};
$("#main-textarea").on('input', live_edit)
this["value"] = $("#main-textarea").text();
live_edit();

$("#persian-typing").click(function () {
    $("#main-textarea").addClass("fa");
    $("#rendered-text").addClass("fa");
    $("#rendered-text").addClass("fa-rendered-text");
    $("#navbar").addClass("fa");
    $("#navbar-text").text("طراحی منطقی پایگاه داده");
    $("#main-container").addClass("fa");
    $("#main-textarea-label").text("متن خود را وارد کنید:")
})

$("#english-typing").click(function () {
    $("#main-textarea").removeClass("fa");
    $("#rendered-text").removeClass("fa");
    $("#rendered-text").removeClass("fa-rendered-text");
    $("#navbar").removeClass("fa");
    $("#navbar-text").text("Database Logical Design");
    $("#main-container").removeClass("fa");
    $("#main-textarea-label").text("Enter your text here:")
})