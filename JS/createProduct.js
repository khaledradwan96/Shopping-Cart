let createForm = document.getElementById('createForm')
let productName = document.getElementById('productName')
let productCategory = document.getElementById('productCategory')
let productImg = document.getElementById('productImg')
let productDesc = document.getElementById('productDesc')
let productPrice = document.getElementById('productPrice')
let productRate = document.getElementById('productRate')
let productCount = document.getElementById('productCount')
let CreateBtn = document.getElementById('CreateBtn')


products = JSON.parse(localStorage.getItem('products'))

createForm.addEventListener('submit', createNewProduct) 


function createNewProduct(e){
    e.preventDefault()
    
    uploadImage()
    if(checkData()){
        let newProduct ={
            category: productCategory.value,
            description: productDesc.value,
            id: products.length + 1,
            image: `../images/New Products/${productImg.files[0]?.name}`,
            price: productPrice.value,
            rating: {rate: productRate.value, count: productCount.value},
            title: productName.value
        }
        products.push(newProduct)
        localStorage.setItem('products', JSON.stringify(products))
        clearData()
    }else{
        alert('Add Product Data')
    }
}

// Check Empty input Data
function checkData(){
    if(
        productCategory.value == "" ||
        productDesc.value == "" ||
        productImg.value == "" ||
        productPrice.value == "" ||
        productRate.value == "" ||
        productCount.value == "" ||
        productName.value == ""
    ){
        return false
    }else{
        return true
    }
}

// Check UploadImage
function uploadImage(){
    let file = productImg?.files[0]
    let types = ['image/jpeg',  'image/png']
    if(types.includes(file.type) == false){
        alert('Type Not Supported')
    }
    if(file.size > 2 * 1024 * 1024){
        alert('Image not bigger than 2 megabit')

    }

}


// Empty inputs data
function clearData(){
    productName.value = ''
    productCategory.value = ''
    productImg.value = ''
    productDesc.value = ''
    productPrice.value = ''
    productRate.value = ''
    productCount.value = ''
}