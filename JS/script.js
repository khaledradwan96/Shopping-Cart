let links = document.getElementById('links')
let userInfo = document.getElementById('userInfo')
let user = document.getElementById('user')
let logoutBtn = document.getElementById('logoutBtn')


let userName = localStorage.getItem('userName')
let login = sessionStorage.getItem('login')
let products = []

if(login){
    links.remove()
    user.innerHTML = userName

    let cartCount = document.getElementById('cartCount')
    let cartProducts = document.getElementById('cartProducts')

    // open and close Cart menu
    let cartContainer = document.getElementById('cartContainer')
    let cart = document.getElementById('cart')
    cart.addEventListener('click', ()=>{
        if(cartProducts.innerHTML != ''){
            cartContainer.classList.toggle('hidden')
        }
    })
}else{
    userInfo.remove()
}

logoutBtn.addEventListener('click', ()=>{
    sessionStorage.removeItem('login')
    setTimeout(()=>{
        window.location = 'login.html'
    }, 1500)
})


let addedItem = []
if(localStorage.getItem('cartProducts') && sessionStorage.getItem('login')){
    addedItem = JSON.parse(localStorage.getItem('cartProducts'))
    cartCount.innerHTML = addedItem.length
    for(let i=0; i<addedItem.length; i++){
        cartProducts.innerHTML += `<li>${addedItem[i].title}</li>`
    }
}

function addToCart(id){
    if(login){
        let chosenItem = products.filter((item)=> item.id === id)
        addedItem.push(...chosenItem)
        let cartona = ''
        for(let i=0; i<addedItem.length; i++){
            cartona +=`<li>${addedItem[i].title}</li>`
        }
        cartProducts.innerHTML = cartona
        cartCount.innerHTML = addedItem.length
        localStorage.setItem('cartProducts', JSON.stringify(addedItem))
    }else{
        window.location = 'login.html'
    }
}