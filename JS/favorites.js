if(login){
    user.innerHTML = userName
}else{
    window.location = '../Pages/login.html'
}


let favoriteProducts = localStorage.getItem('favoriteProducts')
if(favoriteProducts){
    favoriteProducts = JSON.parse(favoriteProducts)
    displayProducts(favoriteProducts)
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
                <td class="px-6 py-4">
                    <button onclick='removeFromFavorite(${products[i].id})'
                        class="font-medium text-red-600 dark:text-red-500 hover:underline">
                        Remove
                    </button>
                </td>
            </tr>`
    }
    document.getElementById('products').innerHTML = cartona
}

function removeFromFavorite(id){
    products = JSON.parse(localStorage.getItem('products'))
    let chosenItem = products.find((item)=> item.id === id)
    let items = favoriteItem.find((i)=> i.id === chosenItem.id)
    let index = favoriteItem.indexOf(items)
    favoriteItem.splice(index , 1)
    chosenItem.liked = false
    localStorage.setItem('products', JSON.stringify(products))
    localStorage.setItem('favoriteProducts', JSON.stringify(favoriteItem))
    displayProducts(favoriteItem)

}