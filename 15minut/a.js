window.onscrol = function() {
    let button = document.getElementById("BackToTop");
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.dysplay ="block";
    } else {
        button.style.display = "none"
    }
};

function scrollToTop(){
    window.scrollTo({
        top:0,
        behavior: "smooth"
    }); 
}