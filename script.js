function enterSite() {
    $("#landing").css("transform","translateX(-200vw)");
    $("#dimmed-bg").css("visibility","visible");
    $("#dimmed-bg").css("transform","translateX(0)");
    $("#full-site").css("visibility","visible");
    $("#full-site").css("overflow","auto");
    $("#full-site").css("max-height","auto");
    $("#above-fold").css("opacity","1");
}
