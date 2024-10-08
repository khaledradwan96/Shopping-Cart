let productId = localStorage.getItem('productId')
products = JSON.parse(localStorage.getItem('products'))

let productDetails = products.find((item)=> item.id == productId)
displayProduct(productDetails)

function displayProduct(product){
    let cartona = ''
    cartona = `
        <div class="text-center p-3">
                <img class="max-h-[400px] mx-auto" src="${product.image}" alt="">
                <div class="flex justify-around text-xl mt-3">
                    <h3 class="font-bold">${product.title}</h3>
                    <h5 class="text-green-600">${product.category}</h5>
                </div>
                <p>${product.description}</p>
                <div class="flex flex-wrap justify-around mt-3">
                    <span>Price: ${product.price}</span>
                    <span>
                    ${product.rating.rate}
                    <i class="fa-solid fa-star text-yellow-400"></i>
                    </span>
                </div>
            </div>
        </div>`
    document.getElementById('product').innerHTML = cartona
}
