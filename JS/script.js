let links = document.getElementById('links')
let userInfo = document.getElementById('userInfo')
let user = document.querySelector('#userInfo a')
let logoutBtn = document.getElementById('logoutBtn')

let userName = localStorage.getItem('userName')

if(userName){
    links.remove()
    user.innerHTML = userName
}

logoutBtn.addEventListener('click', ()=>{
    setTimeout(()=>{
        window.location = 'login.html'
    }, 1500)
})


async function getProducts(){
    let response = await fetch('https://fakestoreapi.com/products')
    let data = await response.json()

    console.log(data)

    displayProducts(data)
        
}

getProducts()


function displayProducts(products){
    console.log(products)
    let cartona = ''
    for(let i=0; i<products.length; i++){
        cartona += `
                <div class="flex flex-col sm:flex-row md:flex-col w-full md:w-1/2 p-3 mb-5 justify-center items-center">
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
                            <button id="addCart" class="bg-green-700 p-2 rounded-md text-white me-5">
                                add to cart <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                            <button class="text-red-700"><i class="fa-regular fa-heart"></i></button>
                        </div>
                    </div>
                </div>`
    }
    document.getElementById('products').innerHTML = cartona
}

function checkLogUser(){
    if(userName){
        window.location = 'cartProducts.html'
    }else{
        window.location = 'login.html'
    }
}

