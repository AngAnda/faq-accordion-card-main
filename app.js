
const items = document.querySelectorAll(".accordion--item");

items.forEach(element => {
    element.addEventListener("click", event =>{
        items.forEach(function(item){
            if(item !== element)
                item.classList.remove("show");
        })
        element.classList.toggle("show");
    }
    )
});