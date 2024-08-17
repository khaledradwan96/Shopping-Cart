const userEmail = document.getElementById('userEmail')
const userPassword = document.getElementById('userPassword')
const submitBtn = document.getElementById('submitBtn')

let getUserEmail = localStorage.getItem('userEmail')
let getUserPassword = localStorage.getItem('userPassword')

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    // check empty inputs
    if(userEmail.value === '' || userPassword.value === ''){
        alert('Please Fill Data')
    }else{
        if(
            getUserEmail && 
            getUserEmail.trim() == userEmail.value && 
            getUserPassword && 
            getUserPassword.trim() == userPassword.value
        ){
                setTimeout(()=>{
                    window.location = 'index.html'
                }, 1500)
        }else{
            console.log('no')
        }



    }
})