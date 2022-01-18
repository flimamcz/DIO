const BASE_URL = 'https://api.github.com'

fetch(BASE_URL)
.then(response => response.json()).then(data => {
    console.log(data.authorizations_url)
})