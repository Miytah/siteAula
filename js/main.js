document.addEventListener("click", function(e){
    
    //demonstrar com este exemplo click
// console.log(e.target)
    if(e.target.classList.contains('gallery-item')){
        const src = e.target.getAttribute('src');
        //console.log(src)
        document.querySelector(".modal-img").src = src;
        //copia do site bootstrap em modal  Via JavaScript
        const  myModal = new bootstrap.Modal(document.getElementById('galeria-modal'));
        myModal.show();
    }
    
})