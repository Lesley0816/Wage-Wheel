const playbutton = document.querySelector('#play-btn');
const loginbtn = document.querySelector('#signup');

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

const loginlink = async (event) => {
    document.location.replace('/login');
}

playbutton.addEventListener('click', pullPlaybutton);
loginbtn.addEventListener('click', loginlink);