const playbutton = document.querySelector('#play-btn')

const pullPlaybutton = async (event) => {
    const response = await fetch('/api/category', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    })
    if (response.ok) {
        document.location.replace('/categories');
        console.log(response.json())
    } else {
        console.log(response.statusText)
    }
}

playbutton.addEventListener('click', pullPlaybutton);