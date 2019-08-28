var sidebarStatus = 0;
function toggleSidebar() {
    if (sidebarStatus == 0) {
        document.getElementById("sidebar").style.width = "15vw";
        document.getElementById("main").style.marginLeft = "15vw";
		document.getElementById("sidebarToggle").style.left = "15vw";
        document.getElementById("sidebarIcon").className  = "fas fa-sign-out-alt fa-2x fa-flip-horizontal";
        document.getElementById("sidebarToggle").style.borderLeft = "0px";
        sidebarStatus = 1;
    }
    else {
        document.getElementById("sidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
		document.getElementById("sidebarToggle").style.left = "0";
        document.getElementById("sidebarIcon").className  = "fas fa-sign-out-alt fa-2x";
        document.getElementById("sidebarToggle").style.borderLeft = "1px solid #cddc39";
        sidebarStatus = 0;
    }
}