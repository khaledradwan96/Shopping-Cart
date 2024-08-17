let links = document.getElementById('links')
let userInfo = document.getElementById('userInfo')
let user = document.getElementById('user')
let logoutBtn = document.getElementById('logoutBtn')


let userName = localStorage.getItem('userName')
let products = []

if(userName){
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
    setTimeout(()=>{
        window.location = 'login.html'
    }, 1500)
})


async function getProducts(){
    let response = await fetch('https://fakestoreapi.com/products')
    let data = await response.json()
    products = data
    displayProducts(data)   
}
getProducts()


function displayProducts(products){
    let cartona = ''
    for(let i=0; i<products.length; i++){
        cartona += `
                <div class="flex flex-col sm:flex-row md:flex-col w-full md:w-1/2 p-3 mb-5 justify-center items-center hover:translate-y-[-1rem] duration-300">
                    <div>
                        <img class="max-h-[150px]" src="${products[i].image}" alt="">
                    </div>
                    <div class="p-3">
                        <h3 class="font-bold">${products[i].title}</h3>
                        <h5 class="text-green-600">${products[i].category}</h5>
                        <p>${products[i].description.split(' ', 20).join(' ')}</p>
                        <div class="flex justify-between">
                            <span>Price: ${products[i].price}</span>
                            <span>
                            ${products[i].rating.rate}
                            <i class="fa-solid fa-star text-yellow-400"></i>
                            </span>
                        </div>
                        <div class='mt-2'>
                            <button onclick='addToCart(${products[i].id})' class="bg-green-700 p-2 rounded-md text-white me-5">
                                add to cart <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                            <button class="text-red-700"><i class="fa-regular fa-heart"></i></button>
                        </div>
                    </div>
                </div>`
    }
    document.getElementById('products').innerHTML = cartona
}

let addedItem = []
if(localStorage.getItem('cartProducts')){
    addedItem = JSON.parse(localStorage.getItem('cartProducts'))
    cartCount.innerHTML = addedItem.length
    for(let i=0; i<addedItem.length; i++){
        cartProducts.innerHTML += `<li>${addedItem[i].title}</li>`
    }
}


function addToCart(id){
        if(userName){
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

