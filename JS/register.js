const userName = document.getElementById('userName')
const userEmail = document.getElementById('userEmail')
const userPassword = document.getElementById('userPassword')
const userRePassword = document.getElementById('userRePassword')
const terms = document.getElementById('terms')
const submitBtn = document.getElementById('submitBtn')


submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    // check empty inputs
    if(userName.value === '' || userEmail.value === '' || userPassword.value === ''){
        alert('Please Fill Data')
    }else{
        localStorage.setItem('userName', userName.value)
        localStorage.setItem('userEmail', userEmail.value)
        localStorage.setItem('userPassword', userPassword.value)
        setTimeout(()=>{
            window.location = 'login.html'
        }, 1500)
    }
})

