if(login){
    user.innerHTML = userName
}else{
    window.location = '../Pages/login.html'
}


let favoriteProducts = localStorage.getItem('favoriteProducts')
if(favoriteProducts){
    products = JSON.parse(favoriteProducts)
    displayProducts(products)
}

function displayProducts(products){
    let cartona = ''
    let totalPrice = 0
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
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    ${products[i].price}
                </td>
            </tr>`
    }
    document.getElementById('products').innerHTML = cartona
}