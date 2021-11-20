const name = document.getElementById('name')
const passowrd = document.getElementById('passowrd')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('name is required')
    }
    
    if (password.length <= 6) {
    messages.push('passord must be longer than 6 charecters')
    
    }

    if (password.length >= 20) {
        messages.push('passord must be less than 20 charecters')

    }
    
    if (password.value === 'password') {
        messages.push ('password cannot be password')
    }
    if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})
