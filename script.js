function showFlash(){

    let warningScreen = document.getElementById('warning');
    let heroImage = document.getElementById('heroImageDiv');

    document.getElementById('heroVideoDiv').classList.toggle('active');
    document.getElementById('heroVideo').classList.toggle('active');

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
