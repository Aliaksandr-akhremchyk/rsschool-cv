const MENU = document.getElementById('navmain');
MENU.addEventListener('click', (event) =>{
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));

    event.target.classList.add('active');
});

const TAB = document.getElementById('tab');
const MIXED = document.getElementById('grid2');
let arr1 = MIXED.querySelectorAll('img');
let a = 0;
let arr2 = [];
for(var i = arr1.length - 1; i >= 0; i--){
        arr2[i] = a;
}
TAB.querySelectorAll('li').forEach(el => {
el.addEventListener('click', (event) =>{
    TAB.querySelectorAll('li').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
   
    // MIXED.querySelectorAll('img').forEach(el => el.classList.remove('border-img'));
    MIXED.querySelectorAll('img').forEach(el => el.remove());
    // function mix(arr1){
        for (var i = arr1.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = arr1[i];
            arr1[i] = arr1[j];
            arr1[j] = temp;
        }
    // }
    // mix(arr1); 
    // let arr2 = [];
    while (i < arr1.length) {
        var j = Math.floor(Math.random() * (arr1.length));
        if (arr2[j] == a){
            arr2[j] = a + 1;
            MIXED.prepend(arr1[j]);
            ++i;
        }
    }
    ++a;   
});
});

// MIXED.addEventListener('click', (event) =>{
//     MIXED.querySelectorAll('img').forEach(el => el.classList.remove('border-img'));
//     event.target.classList.add('border-img');
// });

MIXED.querySelectorAll('img').forEach(el => {
el.addEventListener('click', (event) => {
    MIXED.querySelectorAll('img').forEach(el => el.classList.remove('border-img'));
        event.target.classList.add('border-img');
    });
});
    
    


const MENUB = document.getElementById('burger');
MENUB.addEventListener('click', (event) =>{
    MENUB.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById('overlay-tint').classList.add('hiden');
    document.getElementById('burger-menu').classList.remove('move');
    document.getElementById('menu-icon').classList.remove('doun');
    document.getElementById('buttun').classList.remove('rotate');
    document.getElementById('h1').classList.remove('hiden');
    
});

const MENUC = document.getElementById('buttun');
MENUC.addEventListener('click', () =>{
    if(MENUC.getAttribute('class') == 'rotate') {
        document.getElementById('overlay-tint').classList.add('hiden');
        document.getElementById('burger-menu').classList.remove('move');
        document.getElementById('menu-icon').classList.remove('doun');
        document.getElementById('buttun').classList.remove('rotate');
        document.getElementById('h1').classList.remove('hiden');
    } else {
    document.getElementById('h1').classList.add('hiden');
    document.getElementById('overlay-tint').classList.remove('hiden');
    document.getElementById('burger-menu').classList.add('move');
    document.getElementById('menu-icon').classList.add('doun');
    MENUC.classList.add('rotate');
    }
});

window.addEventListener(`resize`, event => {
    if(window.innerWidth > 768 && (MENUC.getAttribute('class') == 'rotate')) {
        document.getElementById('overlay-tint').classList.add('hiden');
        document.getElementById('burger-menu').classList.remove('move');
        document.getElementById('menu-icon').classList.remove('doun');
        document.getElementById('buttun').classList.remove('rotate');
        document.getElementById('h1').classList.remove('hiden');
    }

});


document.addEventListener('scroll', onScrol);
function onScrol() {
    const POS = window.scrollY;
    const DIVS = document.querySelectorAll('main>div');

    DIVS.forEach((el) => {
        if(el.offsetTop - 95 <= POS && (el.offsetTop - 95 + el.offsetHeight) > POS){
            MENU.querySelectorAll('a').forEach((a) => {
                a.classList.remove('active');
                if (el.getAttribute('class').slice(0, 4) === a.getAttribute('class').slice(0, 4)) {
                    a.classList.add('active');
                }
            })
        }
    });
    DIVS.forEach((el) => {
        if(el.offsetTop - 95 <= POS && (el.offsetTop - 95 + el.offsetHeight) > POS){
            MENUB.querySelectorAll('a').forEach((a) => {
                a.classList.remove('active');
                if (el.getAttribute('class').slice(0, 4) === a.getAttribute('class').slice(0, 4)) {
                    a.classList.add('active');
                }
            })
        }
    });
}