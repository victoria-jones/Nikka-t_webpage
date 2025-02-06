let isMobile;

const bookingsSection = document.querySelector('.bookings');
const bookingsLists = document.querySelectorAll('.bookings__list__section');

const bandsSection = document.querySelector('.bands');
const bandsLists = document.querySelectorAll('.bands__list__section');

const musicStreamSection = document.querySelector('.music-streams');;
const musicStreams = document.querySelectorAll('.music-streams__content__players');

const bookNikkaTSection = document.querySelector('.book-nikka-t');
const bookNikkaTContact = document.querySelectorAll('.book-nikka-t__list');


const triggerPosition = (section) => {
    const element = section.getBoundingClientRect();
    const position = isMobile ? element.top - 500 : element.top - 400;

    return position + window.scrollY;
}


//booking scroll
function bookingsScrollIn() {
    const scrollPosition = window.scrollY;
    const activationHeight = triggerPosition(bookingsSection);

    if(scrollPosition > activationHeight) {
        bookingsLists[0].classList.add('slide-in-body--01');
        bookingsLists[1].classList.add('slide-in-body--02');
        window.removeEventListener('scroll', bookingsScrollIn);
    }
}

//bands scroll
function bandsScrollIn() {
    const scrollPosition = window.scrollY;
    const activationHeight = triggerPosition(bandsSection);

    if( scrollPosition > activationHeight) {
        console.log('scrolled to bands');
        bandsLists[0].classList.add('slide-in-body__right--01');
        bandsLists[1].classList.add('slide-in-body__right--02');
        window.removeEventListener('scroll', bandsScrollIn);
    }
}

//music streams
function musicStreamScrollIn() {
    const scrollPosition = window.scrollY;
    const activationHeight = triggerPosition(musicStreamSection);

    if( scrollPosition > activationHeight) {
        console.log('scrolled to bands');
        musicStreams[0].classList.add('slide-up--01');
        window.removeEventListener('scroll', musicStreamScrollIn);
    }
}

//book nikka t
function bookNikkaTScrollIn() {
    const scrollPosition = window.scrollY;
    const activationHeight = triggerPosition(bookNikkaTSection);

    if( scrollPosition > activationHeight) {
        console.log('scrolled to bands');
        bookNikkaTContact[0].classList.add('slide-in-body--01');
        window.removeEventListener('scroll', bookNikkaTScrollIn);
    }
}


function checkIfMobile () {
    if(window.matchMedia("(max-width: 768px)").matches) {
        isMobile = true;
    } else {
        isMobile = false;
    }
}

//check for mobile screen size
window.addEventListener('load', checkIfMobile);

//all other event listeners
window.addEventListener('scroll', bookingsScrollIn);
window.addEventListener('scroll', bandsScrollIn);
window.addEventListener('scroll', bookNikkaTScrollIn);
window.addEventListener('scroll', musicStreamScrollIn);


