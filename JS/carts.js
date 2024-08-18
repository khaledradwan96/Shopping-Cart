if(login){
    user.innerHTML = userName
}else{
    window.location = 'login.html'
}


let cartProducts = localStorage.getItem('cartProducts')
if(cartProducts){
    products = JSON.parse(cartProducts)
    cartCount.innerHTML = products.length
    displayProducts(products)
}

function displayProducts(products){
    let cartona = ''
    for(let i=0; i<products.length; i++){
        cartona += `
            <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="p-4">
                    <img src="${products[i].image}"
                        class="w-16 mx-auto md:w-32 max-w-full max-h-full">
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    ${products[i].title}
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center justify-center">
                        <button
                            class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            type="button">
                            <i class="fa-solid fa-minus"></i>
                        </button>
                        <div><span>${products[i].rating.count}</span></div>
                        <button
                            class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            type="button">
                            <span class="sr-only">Quantity button</span>
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    ${products[i].price}
                </td>
                <td class="px-6 py-4">
                    <button onclick='removeFromCart(${products[i].id})'
                        class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
            </tr>`
    }
    document.getElementById('products').innerHTML = cartona
}

function removeFromCart(id){
    products = products.filter((item)=> item.id != id) 
    localStorage.setItem('cartProducts', JSON.stringify(products))
    cartCount.innerHTML = products.length
    displayProducts(products)
}