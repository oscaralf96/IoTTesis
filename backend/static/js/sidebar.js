const sidebar_background = "rgb(48, 49, 49)";
const sidebar_color = "white"
const item_color = "black"

function page2(element) {
    switch (element.id) {
        case "item-home":             
            document.getElementById("item-blank1-background").style.borderRadius = "35px 0px 0px 35px";
            document.getElementById("item-blank1-background").style.background = sidebar_color;
            document.getElementById("item-blank1").style.borderRadius = "0px 0px 25px 0px";
            document.getElementById("item-blank1").style.background = sidebar_background;
            document.getElementById("item-blank1").style.color = sidebar_color;

            element.style.borderRadius = "25px 0px 0px 25px";
            element.style.background = sidebar_color;
            element.style.color = item_color;
            
            document.getElementById("item-user-background").style.borderRadius = "35px 0px 0px 35px";
            document.getElementById("item-user-background").style.background = sidebar_color;
            document.getElementById("item-user").style.borderRadius = "0px 25px 0px 0";
            document.getElementById("item-user").style.background = sidebar_background;
            document.getElementById("item-user").style.color = sidebar_color;            
            
            document.getElementById("item-courses").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-courses").style.background = sidebar_background;
            document.getElementById("item-courses").style.color = sidebar_color;
            
            document.getElementById("item-settings").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-settings").style.background = sidebar_background;
            document.getElementById("item-settings").style.color = sidebar_color;            
            
            document.getElementById("item-support").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-support").style.background = sidebar_background;
            document.getElementById("item-support").style.color = sidebar_color;
            
            document.getElementById("item-quit").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-quit").style.background = sidebar_background;
            document.getElementById("item-quit").style.color = sidebar_color;
            
            document.getElementById("item-comodin").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-comodin").style.background = sidebar_background;
            document.getElementById("item-comodin").style.color = sidebar_color;
            
            document.getElementById("item-blank2").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-blank2").style.background = sidebar_background;
            document.getElementById("item-blank2").style.color = sidebar_color;
            
            location.href='/home/';

            break;
        case "item-user": 
            document.getElementById("item-blank1").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-blank1").style.background = sidebar_background;
            document.getElementById("item-blank1").style.color = sidebar_color;

            document.getElementById("item-home-background").style.borderRadius = "35px 0px 0px 35px";
            document.getElementById("item-home-background").style.background = sidebar_color;
            document.getElementById("item-home").style.borderRadius = "0px 0px 25px 0px";
            document.getElementById("item-home").style.background = sidebar_background;
            document.getElementById("item-home").style.color = sidebar_color;
            
            element.style.borderRadius = "25px 0px 0px 25px";
            element.style.background = sidebar_color;
            element.style.color = item_color;           
            
            document.getElementById("item-courses-background").style.borderRadius = "35px 0px 0px 35px";
            document.getElementById("item-courses-background").style.background = sidebar_color;
            document.getElementById("item-courses").style.borderRadius = "0px 25px 0px 0px";
            document.getElementById("item-courses").style.background = sidebar_background;
            document.getElementById("item-courses").style.color = sidebar_color;
            
            document.getElementById("item-settings").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-settings").style.background = sidebar_background;
            document.getElementById("item-settings").style.color = sidebar_color;
            
            document.getElementById("item-support").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-support").style.background = sidebar_background;
            document.getElementById("item-support").style.color = sidebar_color;
            
            document.getElementById("item-quit").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-quit").style.background = sidebar_background;
            document.getElementById("item-quit").style.color = sidebar_color;
            
            document.getElementById("item-comodin").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-comodin").style.background = sidebar_background;
            document.getElementById("item-comodin").style.color = sidebar_color;
            
            document.getElementById("item-blank2").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-blank2").style.background = sidebar_background;
            document.getElementById("item-blank2").style.color = sidebar_color;

            location.href='/user/';

            break;
        case "item-courses":
            document.getElementById("item-blank1").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-blank1").style.background = sidebar_background;
            document.getElementById("item-blank1").style.color = sidebar_color;

            document.getElementById("item-home").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-home").style.background = sidebar_background;
            document.getElementById("item-home").style.color = sidebar_color;
            
            document.getElementById("item-user-background").style.borderRadius = "35px 0px 0px 35px";
            document.getElementById("item-user-background").style.background = sidebar_color;
            document.getElementById("item-user").style.borderRadius = "0px 0px 25px 0px";
            document.getElementById("item-user").style.background = sidebar_background;
            document.getElementById("item-user").style.color = sidebar_color;           
            
            element.style.borderRadius = "25px 0px 0px 25px";
            element.style.background = sidebar_color;
            element.style.color = item_color;
            
            document.getElementById("item-settings-background").style.borderRadius = "35px 0px 0px 35px";
            document.getElementById("item-settings-background").style.background = sidebar_color;
            document.getElementById("item-settings").style.borderRadius = "0px 25px 0px 0px";
            document.getElementById("item-settings").style.background = sidebar_background;
            document.getElementById("item-settings").style.color = sidebar_color;
            
            document.getElementById("item-support").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-support").style.background = sidebar_background;
            document.getElementById("item-support").style.color = sidebar_color;
            
            document.getElementById("item-quit").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-quit").style.background = sidebar_background;
            document.getElementById("item-quit").style.color = sidebar_color;
            
            document.getElementById("item-comodin").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-comodin").style.background = sidebar_background;
            document.getElementById("item-comodin").style.color = sidebar_color;
            
            document.getElementById("item-blank2").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-blank2").style.background = sidebar_background;
            document.getElementById("item-blank2").style.color = sidebar_color;

            location.href='/courses/science/';
            
            break;
        case "item-settings":
            document.getElementById("item-blank1").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-blank1").style.background = sidebar_background;
            document.getElementById("item-blank1").style.color = sidebar_color;

            document.getElementById("item-home").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-home").style.background = sidebar_background;
            document.getElementById("item-home").style.color = sidebar_color;
            
            document.getElementById("item-user").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-user").style.background = sidebar_background;
            document.getElementById("item-user").style.color = sidebar_color;           
            
            document.getElementById("item-courses-background").style.borderRadius = "35px 0px 0px 35px";
            document.getElementById("item-courses-background").style.background = sidebar_color;
            document.getElementById("item-courses").style.borderRadius = "0px 0px 25px 0px";
            document.getElementById("item-courses").style.background = sidebar_background;
            document.getElementById("item-courses").style.color = sidebar_color; 
            
            element.style.borderRadius = "25px 0px 0px 25px";
            element.style.background = sidebar_color;
            element.style.color = item_color;
            
            document.getElementById("item-support-background").style.borderRadius = "35px 0px 0px 35px";
            document.getElementById("item-support-background").style.background = sidebar_color;
            document.getElementById("item-support").style.borderRadius = "0px 25px 0px 0px";
            document.getElementById("item-support").style.background = sidebar_background;
            document.getElementById("item-support").style.color = sidebar_color;
            
            document.getElementById("item-quit").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-quit").style.background = sidebar_background;
            document.getElementById("item-quit").style.color = sidebar_color;
            
            document.getElementById("item-comodin").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-comodin").style.background = sidebar_background;
            document.getElementById("item-comodin").style.color = sidebar_color;
            
            document.getElementById("item-blank2").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-blank2").style.background = sidebar_background;
            document.getElementById("item-blank2").style.color = sidebar_color;

            location.href='/settings/';
            
            break;
        case "item-support":
            document.getElementById("item-blank1").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-blank1").style.background = sidebar_background;
            document.getElementById("item-blank1").style.color = sidebar_color;

            document.getElementById("item-home").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-home").style.background = sidebar_background;
            document.getElementById("item-home").style.color = sidebar_color;
            
            document.getElementById("item-user").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-user").style.background = sidebar_background;
            document.getElementById("item-user").style.color = sidebar_color;              
            
            document.getElementById("item-courses").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-courses").style.background = sidebar_background;
            document.getElementById("item-courses").style.color = sidebar_color;                       
            
            document.getElementById("item-settings-background").style.borderRadius = "35px 0px 0px 35px";
            document.getElementById("item-settings-background").style.background = sidebar_color;
            document.getElementById("item-settings").style.borderRadius = "0px 0px 25px 0px";
            document.getElementById("item-settings").style.background = sidebar_background;
            document.getElementById("item-settings").style.color = sidebar_color; 
            
            element.style.borderRadius = "25px 0px 0px 25px";
            element.style.background = sidebar_color;
            element.style.color = item_color;
            
            document.getElementById("item-quit-background").style.borderRadius = "35px 0px 0px 35px";
            document.getElementById("item-quit-background").style.background = sidebar_color;
            document.getElementById("item-quit").style.borderRadius = "0px 25px 0px 0px";
            document.getElementById("item-quit").style.background = sidebar_background;
            document.getElementById("item-quit").style.color = sidebar_color;
            
            document.getElementById("item-comodin").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-comodin").style.background = sidebar_background;
            document.getElementById("item-comodin").style.color = sidebar_color;
            
            document.getElementById("item-blank2").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-blank2").style.background = sidebar_background;
            document.getElementById("item-blank2").style.color = sidebar_color;

            location.href='/support/';
            
            break;
        case "item-quit":
            document.getElementById("item-blank1").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-blank1").style.background = sidebar_background;
            document.getElementById("item-blank1").style.color = sidebar_color;

            document.getElementById("item-home").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-home").style.background = sidebar_background;
            document.getElementById("item-home").style.color = sidebar_color;
            
            document.getElementById("item-user").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-user").style.background = sidebar_background;
            document.getElementById("item-user").style.color = sidebar_color;              
            
            document.getElementById("item-courses").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-courses").style.background = sidebar_background;
            document.getElementById("item-courses").style.color = sidebar_color;
            
            document.getElementById("item-settings").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-settings").style.background = sidebar_background;
            document.getElementById("item-settings").style.color = sidebar_color;
            
            document.getElementById("item-support-background").style.borderRadius = "35px 0px 0px 35px";
            document.getElementById("item-support-background").style.background = sidebar_color;
            document.getElementById("item-support").style.borderRadius = "0px 0px 25px 0px";
            document.getElementById("item-support").style.background = sidebar_background;
            document.getElementById("item-support").style.color = sidebar_color; 
            
            element.style.borderRadius = "25px 0px 0px 25px";
            element.style.background = sidebar_color;
            element.style.color = item_color;
            
            document.getElementById("item-comodin-background").style.borderRadius = "35px 0px 0px 35px";
            document.getElementById("item-comodin-background").style.background = sidebar_color;
            document.getElementById("item-comodin").style.borderRadius = "0px 25px 0px 0px";
            document.getElementById("item-comodin").style.background = sidebar_background;
            document.getElementById("item-comodin").style.color = sidebar_color;
            
            document.getElementById("item-blank2").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-blank2").style.background = sidebar_background;
            document.getElementById("item-blank2").style.color = sidebar_color;

            window.location.href='/auth/logout/';

            break;
        case "item-comodin":
            document.getElementById("item-blank1").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-blank1").style.background = sidebar_background;
            document.getElementById("item-blank1").style.color = sidebar_color;

            document.getElementById("item-home").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-home").style.background = sidebar_background;
            document.getElementById("item-home").style.color = sidebar_color;
            
            document.getElementById("item-user").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-user").style.background = sidebar_background;
            document.getElementById("item-user").style.color = sidebar_color;             
            
            document.getElementById("item-courses").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-courses").style.background = sidebar_background;
            document.getElementById("item-courses").style.color = sidebar_color;
            
            document.getElementById("item-settings").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-settings").style.background = sidebar_background;
            document.getElementById("item-settings").style.color = sidebar_color;
            
            document.getElementById("item-support").style.borderRadius = "25px 0px 0px 25px";
            document.getElementById("item-support").style.background = sidebar_background;
            document.getElementById("item-support").style.color = sidebar_color;
            
            document.getElementById("item-quit-background").style.borderRadius = "35px 0px 0px 35px";
            document.getElementById("item-quit-background").style.background = sidebar_color;
            document.getElementById("item-quit").style.borderRadius = "0px 0px 25px 0px";
            document.getElementById("item-quit").style.background = sidebar_background;
            document.getElementById("item-quit").style.color = sidebar_color; 
            
            element.style.borderRadius = "25px 0px 0px 25px";
            element.style.background = sidebar_color;
            element.style.color = item_color; 

            document.getElementById("item-blank2-background").style.borderRadius = "35px 0px 0px 35px";
            document.getElementById("item-blank2-background").style.background = sidebar_color;
            document.getElementById("item-blank2").style.borderRadius = "0px 25px 0px 0px";
            document.getElementById("item-blank2").style.background = sidebar_background;
            document.getElementById("item-blank2").style.color = sidebar_color;

            /* fetch('comodin/')
            .then(response=> response.text())
            .then(text=> document.getElementById('content').innerHTML = text); */
            
            window.location.href='/comodin/';
            
            break;
    }
}

function page(element) {
    switch (element.id) {
        case "item-home": 
            location.href='/home/';
            break;
        case "item-user":
            location.href='/user/';
            break;
        case "item-courses":
            location.href='/courses/science/';            
            break;
        case "item-settings":
            location.href='/settings/';            
            break;
        case "item-support":
            location.href='/support/';            
            break;
        case "item-quit":
            window.location.href='/users/logout/';
            break;
        case "item-comodin":
            window.location.href='/comodin/';            
            break;
    }
}
