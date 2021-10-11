home=document.getElementById("home-content")
about=document.getElementById("about-content")
education=document.getElementById("education-content")
contact=document.getElementById("contact-content")


function homeactivity(){
    home.style.display="block"
    about.style.display="none"
    education.style.display="none"
    contact.style.display="none"
    document.getElementById("ct").style.display="block"
}

function aboutactivity(){
    home.style.display="none"
    about.style.display="block"
    education.style.display="none"
    contact.style.display="none"
    document.getElementById("ct").style.display="block"
}

function educationactivity(){
    home.style.display="none"
    about.style.display="none"
    education.style.display="block"
    contact.style.display="none"
    document.getElementById("ct").style.display="block"
}

function contactactivity(){
    home.style.display="none"
    about.style.display="none"
    contact.style.display="flex"
    education.style.display="none"
    document.getElementById("ct").style.display="none"
}

function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
    }
    
function display_ct() {
    var x = new Date()
    var x1=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getFullYear(); 
    x1 = x1 + " - " +  x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds();
   document.getElementById('ct').innerHTML = x1;
    display_c();
}

