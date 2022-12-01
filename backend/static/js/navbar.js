function open_menu() {  
    document.getElementById("sidebar").style.visibility = "visible";
    document.getElementById("sidebar").style.width = "200px";
    document.getElementsByClassName("main-panel")[0].style.marginLeft = "200px";
    document.getElementsByClassName("main-panel")[0].style.padding = "15px 15px 15px 0px";
}

function close_menu() {    
    document.getElementById("sidebar").style.visibility = "hidden";
    document.getElementById("sidebar").style.width = "0";
    document.getElementsByClassName("main-panel")[0].style.marginLeft = "15px";
    document.getElementsByClassName("main-panel")[0].style.padding = "15px 15px 15px 15px";
  }

function menu() {
    //alert("Pressed");
    if (document.getElementById("checkbox").checked) {
        open_menu();
    }
    else {
        close_menu();
    }
}


navbar = document.getElementById("nav");
main_panel = document.getElementsByClassName("main-panel")[0];
prev_position = main_panel.scrollTop;
function navbar_visibility() {
    // console.log(prev_position);
    // console.log(main_panel.scrollTop);
    if (main_panel.scrollTop > prev_position) {
        navbar.style.top = "-50px";
    }
    else{
        navbar.style.top = "inherit";
    }
    prev_position = main_panel.scrollTop;
    //getSelection("navbar").style.visibility("hidden");
}