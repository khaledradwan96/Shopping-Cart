if(localStorage.getItem('products')){
    products =  JSON.parse(localStorage.getItem('products'))
    displayProducts(products)
}else{
    getProducts()
}

async function getProducts(){
    let response = await fetch('https://fakestoreapi.com/products')
    let data = await response.json()
    products = data
    localStorage.setItem('products', JSON.stringify(products))
    displayProducts(products)
}

function displayProducts(products){
    let cartona = ''
    for(let i=0; i<products.length; i++){
        cartona += `
                <div class="flex flex-col sm:flex-row md:flex-col w-full md:w-1/2 p-3 mb-5 justify-center items-center hover:translate-y-[-1rem] duration-300">
                    <div>
                        <img class="max-h-[150px]" src="${products[i].image}" alt="">
                    </div>
                    <div class="p-3">
                        <h3 class="font-bold cursor-pointer hover:text-blue-700">
                            <a href="#" onclick='saveItemData(${products[i].id})'>${products[i].title}</a>
                        </h3>
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
                            <button onclick='addToCart(${products[i].id})' class="bg-green-700 hover:bg-green-800 p-2 rounded-md text-white me-5">
                                add to cart <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                            <button class="text-red-700"><i class="fa-regular fa-heart"></i></button>
                        </div>
                    </div>
                </div>`
    }
    document.getElementById('products').innerHTML = cartona
}




function saveItemData(id){
    localStorage.setItem('productId', id)
    window.location = '../productDetails.html'
}

