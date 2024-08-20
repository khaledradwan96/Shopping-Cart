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
        window.location = '../Pages/login.html'
    }, 1500)
})

// ========== Cart Products ==========
let addedItem = []
if(localStorage.getItem('cartProducts') && sessionStorage.getItem('login')){
    addedItem = JSON.parse(localStorage.getItem('cartProducts'))
    cartCount.innerHTML = addedItem.length
    for(let i=0; i<addedItem.length; i++){
        cartProducts.innerHTML += `<li>${addedItem[i].title}  => <span>Count: ${addedItem[i].count}</span></li>`
    }
}

function addToCart(id){
    if(login){
        let chosenItem = products.find((item)=> item.id === id)
        let items = addedItem.find((i)=> i.id === chosenItem.id)
        if(items){
            chosenItem.count += 1
        }else{
            chosenItem.count = 1
            addedItem.push(chosenItem)
        }
        cartProducts.innerHTML = ''
        for(let i=0; i<addedItem.length; i++){
            cartProducts.innerHTML += `<li>${addedItem[i].title} => <span>Count: ${addedItem[i].count}</span></li>`
        }
        cartCount.innerHTML = addedItem.length
        localStorage.setItem('cartProducts', JSON.stringify(addedItem))
    }else{
        window.location = '../Pages/login.html'
    }
}

// ========== Favorite Product ==========
let favoriteItem = []
if(localStorage.getItem('favoriteProducts') && sessionStorage.getItem('login')){
    favoriteItem = JSON.parse(localStorage.getItem('favoriteProducts'))
}

function addToFavorite(id){
    if(login){
        let chosenItem = products.find((item)=> item.id === id)
        let items = favoriteItem.find((i)=> i.id === chosenItem.id)
        if(items){
            chosenItem.liked = false
            let index = favoriteItem.indexOf(items)
            favoriteItem.splice(index , 1)
        }else{
            chosenItem.liked = true
            favoriteItem.push(chosenItem)
        }
        localStorage.setItem('favoriteProducts', JSON.stringify(favoriteItem))
        localStorage.setItem('products', JSON.stringify(products))
        displayProducts(products)
    }else{
        window.location = '../Pages/login.html'
    }
}
