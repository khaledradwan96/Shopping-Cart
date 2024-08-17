let links = document.getElementById('links')
let userInfo = document.getElementById('userInfo')
let user = document.querySelector('#userInfo a')
let logoutBtn = document.getElementById('logoutBtn')

let userName = localStorage.getItem('userName')

if(userName){
    console.log('there is a user')
    links.remove()
    user.innerHTML = userName
}

logoutBtn.addEventListener('click', ()=>{
    setTimeout(()=>{
        window.location = 'login.html'
    }, 1500)
})