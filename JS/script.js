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


