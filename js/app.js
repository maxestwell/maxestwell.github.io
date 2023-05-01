let Cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', moveCursor);

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;

    // console.log(x,y)
    Cursor.style.left = `${x}px`;
    Cursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));

console.log(links);

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        Cursor.classList.add("grow");
    })
    link.addEventListener('mouseleave', () => {
        Cursor.classList.remove("grow");
    })
});