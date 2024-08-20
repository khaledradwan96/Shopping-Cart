if(login){
    user.innerHTML = userName
}else{
    window.location = '../Pages/login.html'
}


let cartProducts = localStorage.getItem('cartProducts')
if(cartProducts){
    products = JSON.parse(cartProducts)
    cartCount.innerHTML = products.length
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
                <td class="px-6 py-4">
                    <span>${products[i].count}</span>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    ${products[i].price}
                </td>
                <td class="px-6 py-4">
                    <button onclick='removeFromCart(${products[i].id})'
                        class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
            </tr>`
        totalPrice += (products[i].price) * (products[i].count)
    }
    document.getElementById('products').innerHTML = cartona
    document.getElementById('totalPrice').innerHTML = totalPrice.toFixed(2)
}

function removeFromCart(id){
    products = products.filter((item)=> item.id != id) 
    localStorage.setItem('cartProducts', JSON.stringify(products))
    cartCount.innerHTML = products.length
    displayProducts(products)
    document.getElementById('cartProducts').innerHTML = ''
    for(let i=0; i<products.length; i++){
        document.getElementById('cartProducts').innerHTML +=`<li>${products[i].title}  => <span>Count: ${products[i].count}</span></li>`
    }
}