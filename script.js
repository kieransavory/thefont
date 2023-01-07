//Function displays a div of a video on landing page if flash is selected.
function showFlash(){

    let warningScreen = document.getElementById('warning');
    let heroImage = document.getElementById('heroImageDiv');

    document.getElementById('heroVideoDiv').classList.toggle('active');
    document.getElementById('heroVideo').classList.toggle('active');

    document.getElementById('heroVideo').play();

    warningScreen.remove();
    heroImage.remove();

}

//Function displays a div of a still image on landing page if no flash is selected.
function hideFlash() {

    let warningScreen = document.getElementById('warning');
    let heroVideo = document.getElementById('heroVideoDiv');

    document.getElementById('heroImageDiv').classList.toggle('active');

    warningScreen.remove();
    heroVideo.remove();

}

//Function returns user to top of page.
function topScroll() {
    scrollTo(0,0);
}

//Function to scroll to second hero section on desktop via down button.
function scrollToHeroTwo() {
    let heroTwo = document.getElementById('heroTwo').offsetTop;
    scrollTo(0,heroTwo);
}

function navSize() {
//Check user device for mobile or non mobile.

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const image = document.getElementById('navbarimage');
    let scroll = window.scrollY;
//Applies styling based on position of navbar relative to amount user has scrolled AND whether or not user is on mobile device or computer. 

    if (!isMobile) {

        if (scroll > 500) {
            image.style.width = "10%";
            image.style.opacity = "100%";
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
            image.style.opacity = "100%";
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


//Function checks for user input and opens navigational menu accordingly. 
function openNavMenu() {
    let menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
}

//Function scrolls to top of page. 
function homeMenuScroll() {
    topScroll();
    openNavMenu();
}

//Function scrolls to listen div. 
function listenMenuScroll() {
    scrollToHeroTwo();
    openNavMenu();
}

//Function changes background art of listen div based on hover of child element. 
function bgArtMatador() {

    let divBackground = document.getElementById('heroTwo');
    divBackground.style.backgroundImage = "url(matadorbg.jpg)";
    
    let matador = document.getElementById('matadorArt');
    matador.addEventListener('mouseleave', () => {
        divBackground.style.backgroundImage = "none";
    })

}

//Function changes background art of listen div based on hover of child element. 
function bgArtFourWalls() {

    let divBackground = document.getElementById('heroTwo');
    divBackground.style.backgroundImage = "url(fourwallsbg2.jpg)";

    
    let fourWalls = document.getElementById('fourWallsArt');
    fourWalls.addEventListener('mouseleave', () => {
        divBackground.style.backgroundImage = "none";
    })

}

function modalActiveOne() {
    let modal = document.getElementById('listModalOne');
    modal.classList.toggle('active');
}

function modalActiveTwo() {
    let modal = document.getElementById('listModalTwo');
    modal.classList.toggle('active');
}