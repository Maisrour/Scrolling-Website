let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let mountains7 = document.getElementById('mountains7');
let Meyou = document.querySelector('.Meyou');

window.onscroll = function () {
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    Meyou.style.fontSize = value + 'px';



    if (scrollY >= 67) {
        Meyou.style.fontSize = 67 + 'px';
        Meyou.style.position = 'fixed';

        if (scrollY >= 478) {
            Meyou.style.display = 'none';
        } else {
            Meyou.style.display = 'block';
        }
    }
    
     if (scrollY >= 100) {
         river.style.display = 'none';
     }else{
         river.style.display = 'block';
     }

    if (scrollY >= 127) {
        document.querySelector('.main').style.background = 'linear-gradient(#6faddb, #10001f)'
        moon.style.display = 'none';
        mountains3.style.display = 'none';
        mountains4.style.display = 'none';
        

    } else {
        document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)'
        moon.style.display = 'block';
        mountains3.style.display = 'block';
        mountains4.style.display = 'block';
        
    }
    
   


}
