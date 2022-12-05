function showFlash(){

    let warningScreen = document.getElementById('warning');
    let heroImage = document.getElementById('heroImageDiv');

    document.getElementById('heroVideoDiv').classList.toggle('active');
    document.getElementById('heroVideo').classList.toggle('active');

    document.getElementById('heroVideo').play();

    warningScreen.remove();
    heroImage.remove();

}

function hideFlash() {

    let warningScreen = document.getElementById('warning');
    let heroVideo = document.getElementById('heroVideoDiv');

    document.getElementById('heroImageDiv').classList.toggle('active');

    warningScreen.remove();
    heroVideo.remove();

}


function topScroll() {

    scrollTo(0,0);

}


function navSize() {

//Check user device for mobile or non mobile.

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const image = document.getElementById('navbarimage');
    let scroll = window.scrollY;

    if (!isMobile) {

        if (scroll > 500) {
            image.style.width = "10%";
            image.style.opacity = "25%";
            image.style.position = "absolute";
            image.style.top = "10px";

        } else if (scroll <= 500) {
            image.style.width = "25%";
            image.style.opacity = "100%";
            image.style.position = "";
            image.style.top = "";
        }
}  
    if (isMobile) {
         
        if (scroll > 500) {
            image.style.width = "25%";
            image.style.opacity = "25%";
            image.style.position = "absolute";
            image.style.top = "10px";
        } else if (scroll <= 500) {
            image.style.width = "50%";
            image.style.opacity = "100%";
            image.style.position = "";
            image.style.top = "";
        }

    }
}

function scrollToHeroTwo() {
    
    let heroTwo = document.getElementById('heroTwo').offsetTop;

    scrollTo(0,heroTwo);

}