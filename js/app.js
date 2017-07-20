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

function openLearn(evt, task){
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("howTo");
	for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(task).style.display = "block";
    evt.currentTarget.className += " active";
};

var clickthis = document.getElementById("defaultOpen");

if (clickthis) {
    clickthis.click();
}

