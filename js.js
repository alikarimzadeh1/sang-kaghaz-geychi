let yourScore = document.querySelector("#score span");
let pcscore = document.querySelectorAll('#score span')[1];
let img1 = document.querySelector('.img');
let natije = document.querySelector('.natije');
let x = ['سنگ','کاغذ','قیچی']
img1.addEventListener('click',function(e){
    let a = Math.floor(Math.random()*3);
    if (e.target.className==='img1') { 
        if (a===2) {
            natije.innerHTML=' حریف قیچی را انتخاب کرد تو بردی';
            yourScore.textContent = Number( yourScore.textContent)+1;
        }else if (a===1) {
            natije.innerHTML=' حریف کاغذ را انتخاب کرد تو باختی';
            pcscore.textContent = Number( pcscore.textContent)+1;
        }else{
            natije.innerHTML='!! حریف سنگ را انتخاب کرد مساوی شد';
        };
    }else if (e.target.className==='img2') {
        if (a===2) {
            natije.innerHTML=' حریف قیچی را انتخاب کرد تو باختی';
            pcscore.textContent = Number( pcscore.textContent)+1;
        }else if (a===0) {
            natije.innerHTML=' حریف سنگ را انتخاب کرد تو بردی';
            yourScore.textContent = Number( yourScore.textContent)+1;
        }else{
            natije.innerHTML='!! حریف کاغذ را انتخاب کرد مساوی شد';
        }; 
    }else if (e.target.className==='img3') {
        if (a===0) {
            natije.innerHTML=' حریف سنگ را انتخاب کرد تو باختی';
            pcscore.textContent = Number( pcscore.textContent)+1;
        }else if (a===1) {
            natije.innerHTML=' حریف کاغذ را انتخاب کرد تو بردی';
            yourScore.textContent = Number( yourScore.textContent)+1;
        }else{
            natije.innerHTML='!! حریف قیچی را انتخاب کرد مساوی شد';
        }; 
    };
});

