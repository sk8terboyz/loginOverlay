$("#btn").click(function () {
	"use strict";
	$("#ovrly").fadeIn();
	$("#login").show();
	$("#login").animate({top: "100"});
});
$("#ovrly").click(function () {
	"use strict";
	$("#ovrly").hide();
	$("#login").hide();
	$("#login").css("top", "-310px");
});
$("#cross").click(function () {
	"use strict";
	$("#ovrly").hide();
	$("#login").hide();
	$("#login").css("top", "-310px");
});
$("#submit").click(function() {
    "use strict";
    const username = $(".username")[0].value;
    const password = $(".password")[0].value;
    if(username == "AA" && password == "a") {
        console.log('successful login');
        $(".password")[0].value = "";
        $(".username")[0].value = "";
    } else {
        console.log('username or password incorrect');
    }
})