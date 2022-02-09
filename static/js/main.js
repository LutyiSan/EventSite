
// переход по адресу
function goToUrl(href){
    window.open(href);
}


// изменение цвета элемента
function changeColor(element, color){
    element.style.color = color;
}
// изменение цвета SVG-элемента
function changeFill(element, color){
    element.style.fill = color;
  }

// скрыть\показать элемент
function showHide(target){
    if (target.style.display === 'none'){
        target.style.display = "block";
    }else{
        target.style.display = "none";
}
}

// события для кнопок
function button(id, href){
    let elem = document.querySelector(id);
    elem.addEventListener('click', function(){goToUrl(href)});
    elem.addEventListener("mouseenter", function(){changeFill(elem,"rgb(228, 8, 248)")});
    elem.addEventListener("mouseleave", function(){changeFill(elem,"rgb(255, 255, 255)")});
}

function menu(id){
    let elem = document.querySelector(id);
    elem.addEventListener("mouseenter", function(){changeColor(elem,'#E408F8')});
    elem.addEventListener("mouseleave", function(){changeColor(elem,'#ffffff')});
}

function show_hide(elem, target){
    let el = document.querySelector(elem);
    let targ = document.querySelector(target);
    el.addEventListener('click', function(){showHide(targ)});
}

function scrolling(element, target){
let elem = document.querySelector(element);
elem.addEventListener('click',function(){scrollTo(target,'horizontal slow')})
}

// прокрутка до нухного элемента
function scrollTo(element, scroll){
    let elem = document.querySelector(element);
    if (scroll==='vertical'){
        elem.scrollIntoView({block: "center"});
    }else if(scroll==='vertical slow'){
        elem.scrollIntoView({block: "center", behavior: 'smooth'});
    }else if(scroll==='horizontal'){
        elem.scrollIntoView({inline: "center"});
    }else if(scroll==='horizontal slow'){
        elem.scrollIntoView({inline: "center", behavior: 'smooth'});
    }  
}

window.onload = function(){
button("#telegram", 'https://web.telegram.org');
button("#instagram", 'https://www.instagram.com/');
button("#vk", 'https://vk.com/');
menu("#href-uslugi");
menu("#href-project");
menu("#href-portfolio");
menu("#href-contact");
scrolling('#href-project','#main-2');



}