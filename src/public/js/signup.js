const signupbtn = document.getElementsByClassName('signup-button')

async function signupPost(event) {
    event.preventDefault();

    const username = document.querySelector('#enterUsername').value.trim();
    const email = document.querySelector('#enterEmail').value.trim();
    const password = document.querySelector('#createPassword').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('success');


            document.location.replace('/homepage');

        } else {
            alert(response.statusText);
        }
    }
}

signupbtn.addEventListener('submit', signupPost);