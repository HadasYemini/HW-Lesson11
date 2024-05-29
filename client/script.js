const validation = () => {
    const name = document.getElementById('name').value
    if (name.length >= 2) return true
    const error = document.getElementById('error').style.visibility = 'visible'
    return false
}

const hideError = () => document.getElementById('error').style.visibility = 'hidden'