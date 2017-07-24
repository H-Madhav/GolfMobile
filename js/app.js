var accordion = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function(){
        
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
};

var sideMenu = document.getElementById("sideMenu");
function clickMenu(){
   sideMenu.style.width = "230px";
};

function closeMenu() {
	sideMenu.style.width = "0";
}
