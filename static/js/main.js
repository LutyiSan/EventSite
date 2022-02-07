
function button(id, href){
    let elem = document.querySelector(id)
    elem.addEventListener('click', function(){
        window.open(href);
});
    elem.addEventListener("mouseenter", function(){
    elem.style.transform = 'scale(1.1,1.1)';
})
    elem.addEventListener("mouseleave", function(){
    elem.style.transform = 'scale(1,1)';
})}

function show_hide(elem, target){
    let el = document.querySelector(elem);
    let targ = document.querySelector(target)
    el.addEventListener('click', function(){
        if (targ.style.display === 'none'){
            targ.style.display = "block";
        }else{
            targ.style.display = "none";
}})}


window.onload = function(){
button("#telegram", 'https://web.telegram.org');
button("#instagram", 'https://www.instagram.com/');
button("#vk", 'https://vk.com/');
show_hide("#menu", '.menu');

}