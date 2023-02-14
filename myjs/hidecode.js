document.addEventListener("keydown", (e) => {
    if(e.ctrlKey){
        e.preventDefault();
        e.stopPropagation();
    }
})