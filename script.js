function enterSite() {
    $("#landing").css("transform","translateX(-200vw)");
    $("#dimmed-bg").css("visibility","visible");
    $("#dimmed-bg").css("transform","translateX(0)");
    $("#full-site").css("visibility","visible");
    $("#full-site").css("overflow","visible");
    $("#full-site").css("max-height","auto");
    $("#above-fold").css("opacity","1");
    $("#register-side-bar").css("transform","translate(0)");
}


$("#visible-section").mouseenter(function(){openForm();});

$("#empty-section").mouseenter(function(){closeForm();});

$("#form-section").mouseleave(function(){closeForm();});

function openForm(){
    $("#register-side-bar").css("transform","translate(-500px)");
    $("#register-side-bar").css("transition-delay","0s");
    $("#register-side-bar").css("z-index","100");

    $("#call-num").css("opacity","0");
    $("#reg").css("opacity","0");

}
function closeForm(){
    $("#register-side-bar").css("transform","translate(0px)");
    $("#register-side-bar").css("z-index","0");

    $("#call-num").css("opacity","1");
    $("#reg").css("opacity","1");
};

(function manageTotalUsers() {

    let totalUsers = String(getRandom(140000,190000));
    totalUsers = addComma(totalUsers);
    addTotalUser(totalUsers);

    function getRandom(min,max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function addComma(num) {
        return num.slice(0,3) + "," + num.slice(3,6);
    }
    function addTotalUser(current_value) {
        let num = Number(current_value.replace(",",""));
        num++;
        num = String(num);
        num = addComma(num);

        $("#total-users").html(num);
        setTimeout(function() {
            addTotalUser(num);
        },getRandom(100,3000));
    }
})();
