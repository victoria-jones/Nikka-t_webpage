let isMobile;

const bookingsSection = document.querySelector('.bookings');
const bookingsLists = document.querySelectorAll('.bookings__list__section');
const bookingsSectionHeight = bookingsSection.offsetHeight;

const sectionHeight = (section) => {
    return(section.offsetHeight);
}
const triggerPosition = (position) => {
    return(position * 0.5);
}

console.log(bookingsSectionHeight);
console.log(triggerPosition(bookingsSectionHeight));

//booking scroll
function bookingsScrollIn() {
    const scrollPosition = window.scrollY;
    const activationHeight = isMobile ? triggerPosition(bookingsSectionHeight) : bookingsSectionHeight;

    if(scrollPosition > activationHeight) {
        console.log('scrolled to bookings');
        bookingsLists[0].classList.add('slide-in-body--01');
        bookingsLists[1].classList.add('slide-in-body--02');
        window.removeEventListener('scroll', bookingsScrollIn);
    }
}


function checkIfMobile () {
    if(window.matchMedia("(max-width: 601px)").matches) {
        isMobile = true;
    } else {
        isMobile = false;
    }
    console.log(isMobile);
}

//check for mobile screen size
window.addEventListener('load', checkIfMobile);

//all other event listeners
window.addEventListener('scroll', bookingsScrollIn);


