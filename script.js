window.addEventListener('load', function () {
//Variables
let container_1 = document.querySelector('.container_1');
let navSpan = conatiner_1.querySelector('.nav-span');
//functions
function openSpan( {
    container_1.classList.toggle('container_1_opened');
})

//events
navSpan.addEventListener('click', openSpan)
})

/*
const toggleButton = Document.getElementsByClassName('toggle-button')[0]
const navbarLinks = Document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => { 
    navbarLinks.classList.toggle('active')
})

/*  */
/*
var scroll = window.requestAnimationFrame ||
function Rollow(callback) {window.setTimeout(callback,
    1000/60);
var elementsToShow = document.querySelectorAll('.show-on-scroll'
    );

function loop() {
    slementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible')
        }
    });
    scroll(Loop)
}

Loop();
*/

// Home Renders //
// Images asset //

const facileLogo = {
    1:'https://drive.google.com/uc?
    id=1ynjD7uLmNXQk1bL6oLoco-OMI9YchHti',
    2:'https://drive.google.com/uc?
    id=1jV7SAVQVNjC9DkWE9DPCoxyiC6VPFhl',
    3:'https://drive.google.com/uc?
    id=1x-LuC_mGbmjQjy_QnzOcZMLAmaF_Ewbx',
    4:'https://drive.google.com/uc?
    id=1eYzNQicjAGj4oPE75D5Nj4AgpuQdaYuy',
    5:'https://drive.google.com/uc?
    id=1X3w9BdBmbvlB1Daff5AGATf4fvSg3QPa',
    6:'https://drive.google.com/uc?
    id=1NcWh9ZXVdEOktOCUj7fKzugBKYvBlHpp',
    7:'https://drive.google.com/uc?
    id=1CNGFjqzWoZMzn97OC-zxPOfh6g9Kx9gV',
    8:'https://drive.google.com/uc?
    id=1TnYUcVqhXyHo6Bn1UgnSoz7XvTAcvydh',
    9:'https://drive.google.com/uc?
    id=10g85E1sK0PFwYpndKQ1pIQLUagKwPRip',
    10:'https://drive.google.com/uc?
    id=1ZA-_1sSEQD5mTRAyxTeY3GYeIXq2EeCc',
    11:'https://drive.google.com/uc?
    id=1hUiJviuuxm4Z6PPRj_t_KhA5OzVU7QMv',
    12:'https://drive.google.com/uc?
    id=1-6KZUhLS_FxQrNWrRnvXr11EAJP137ML',
    13:'https://drive.google.com/uc?
    id=1S2fTG82ULbVJ16eh9_5P8HpFJXsbhrOT',
    14:'https://drive.google.com/uc?
    id=1i6hFTvBQnseYLf2M0FDmqqgsdeOYUPi9',
    15:'https://drive.google.com/uc?
    id=1HGDkYxJ4sKUfcLMQXD7CNs7bi74vxUi8',
    16:'https://drive.google.com/uc?
    id=1Fw_4ed0LCw19Si_wxy7jtmx4lIazykLt',
    17:'https://drive.google.com/uc?
    id=1whY3S30Acy6Px8hyVgrepZghasA_efhY',
    18:'https://drive.google.com/uc?
    id=13n6FeLGJBmHdNkkC7OxFF_Orzx9wk-gM',
    19:'https://drive.google.com/uc?
    id=1P6j0iCz1mrwTGzvV6AaiEqp-nwkwvi0x',
    20:'https://drive.google.com/uc?
    id=1lTF8hWray_QuZlgkQ97RKAaK0_tjfzMy',
}

// Text style
const textStyle = {
  1: {opacity: 0, transform: '0px'},
  2: {opacity: 0, transform: '0px'},
  3: {opacity: 0, transform: '0px'},
  4: {opacity: 0, transform: '0px'},
  5: {opacity: .25, transform: '15px'},
  6: {opacity: .5, transform: '10px'},
  7: {opacity: .75, transform: '5px'},
  8: {opacity: 1, transform: '0px'},
  9: {opacity: 1, transform: '0px'},
  10: {opacity: 1, transform: '0px'},
  11: {opacity: 1, transform: '0px'},
  12: {opacity: 1, transform: '0px'},
  13: {opacity: 1, transform: '0px'},
  14: {opacity: 1, transform: '0px'},
  15: {opacity: 1, transform: '0px'},
  16: {opacity: 1, transform: '0px'},
  17: {opacity: 1, transform: '0px'},
  18: {opacity: 1, transform: '0px'},
  19: {opacity: 1, transform: '0px'},
  20: {opacity: 1, transform: '0px'},
}

// Global variable to control the scrolling behavior
const step = 30; // For each 30px, change an image

function trackScrollPosition() {
  const y = window.scrollY;
  const label = Math.min(Math.floor(y/30) + 1, 20);
  const imageToUse = facileLogo[label];
  // Change the background image
  $('.image-container-render').css('background-image', `url('${imageToUse}')`);
  // Change the text style
  const textStep = 2;
  const textStyleToUseLine1 = textStyle[label];
  const textStyleToUseLine2 = textStyle[Math.min(Math.max(label - textStep, 1), 20)];
  const textStyleToUseLine3 = textStyle[Math.min(Math.max(label - textStep * 2, 1),20)];
  const textStyleToUseLine4 = textStyle[Math.min(Math.max(label - textStep * 3, 1),20)];
  $('#line1').css({'opacity': textStyleToUseLine1.opacity, 'transform':
   `translateY(${textStyleToUseLine1.transform})`});
  $('#line2').css({'opacity': textStyleToUseLine2.opacity, 'transform':
   `translateY(${textStyleToUseLine2.transform})`});
  $('#line3').css({'opacity': textStyleToUseLine3.opacity, 'transform':
   `translateY(${textStyleToUseLine3.transform})`});
  $('#line4').css({'opacity': textStyleToUseLine4.opacity, 'transform':
   `translateY(${textStyleToUseLine4.transform})`});

}

$(document).ready(()=>{
  // register an event listener on window
  $(window).scroll(()=>{
    // We don't need to use 'event' as the scroll exist in window
    trackScrollPosition();
  })
})