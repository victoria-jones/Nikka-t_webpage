const header = document.querySelector('.media-kit-header');
const headerHeight = header.offsetHeight;

//this bg image has a position of fixed, it will be visible behind other sections if
//it is not set to a lowe z-index;

//maybe we could remove the image? that way its not rendering it the entire time on
//the page to maybe help loads?
window.addEventListener('scroll', ()=> {
    const scrollPosition = window.scrollY;

    if(scrollPosition > headerHeight) {
        console.log('scrolled past the header');
        header.style.zIndex = -100;

    } else {
        console.log('above the header');
        header.style.zIndex = 0;
    }
})