const messageBox = [...document.querySelectorAll(".notification")];
const allReadBtn = document.querySelector(".readButton");
const notificationNumber = document.querySelector("header .counter");
const dot = document.querySelectorAll(".dot");
let countAll = document.querySelectorAll('.active').length;

document.documentElement.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.clientWidth) + "px");
// wrzuca liczbe klas .active do licznika przy zaladowaniu strony
notificationNumber.innerHTML = countAll


//--funckja do kasowania wszystkich klas active jednym przyciskiem:--
function resetAll() {
    let boxes = messageBox
    boxes.forEach(box => {
        box.classList.remove('active');
    });
    //po kliknieciu przycisku resetuje licznik do zera
    notificationNumber.innerHTML = '0';
    //kropka która znika po nacisnieciu prycisku reset
    dot.forEach(dot => dot.style.display = "none");
  } 

//funkcja nieanonimowa:
// const removeActive = (box) => box.classList.remove("active");
// removeActive(box);

    messageBox.forEach(box => {box.addEventListener("click", () => {
        box.classList.remove('active');
        let countInner = document.querySelectorAll('.active').length;
        notificationNumber.innerHTML = countInner;
        //kropka ktora znika po nacisnieciu notyfikacji
        // dot.forEach(dot => dot.style.display = "none");
        const clickedDot = box.querySelector('.dot')
        clickedDot.style.display = 'none'
 });
    });
//przyisk do resetu
allReadBtn.addEventListener('click', resetAll);