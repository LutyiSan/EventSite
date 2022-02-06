
function button(id, href){
let elem = document.querySelector(id)
elem.addEventListener('click', function(){
//document.location.href = href;
window.open(href);
});
elem.addEventListener("mouseenter", function(){
//document.location.href = href;
elem.style.transform = 'scale(1.1,1.1)';
})
elem.addEventListener("mouseleave", function(){
//document.location.href = href;
elem.style.transform = 'scale(1,1)';
})
}




window.onload = function(){
button("#telegram", 'https://web.telegram.org');
button("#instagram", 'https://www.instagram.com/');
button("#vk", 'https://vk.com/');
button("#menu", 'https://vk.com/');

}