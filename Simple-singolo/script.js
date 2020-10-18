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
TAB.addEventListener('click', (event) =>{
    TAB.querySelectorAll('li').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
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
    document.getElementById('h1').classList.add('hiden');
    document.getElementById('overlay-tint').classList.remove('hiden');
    document.getElementById('burger-menu').classList.add('move');
    document.getElementById('menu-icon').classList.add('doun');
    MENUC.classList.add('rotate');
});