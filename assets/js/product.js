let container = document.getElementById('product-container')
let search = document.getElementById('search-box')
let flower = container.querySelectorAll('div')

search.addEventListener("keyup",()=>{
    let enteredValue = event.target.value.toUpperCase();

    for(i=0; i < flower.length ; i++ ){
        let productName = flower[i].querySelector("h1").textContent.toUpperCase()

        if(productName.indexOf(enteredValue) < 0 ){
            flower[i].style.display = "none";
        }
        else{
            flower[i].style.display = "block"
        }
    }
})
