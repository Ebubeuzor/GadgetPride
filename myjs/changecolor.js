const link = document.querySelector('.save-item');
function changeColor(e) {
    e.target.style.color = e.target.style.color ? null : 'skyblue';
}
link.addEventListener('click', () => {
    alert('change color');
});
