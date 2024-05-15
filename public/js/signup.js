const e1 = document.querySelector('#form-signup');
const signupPost = async (event) => {
    event.preventDefault();

    console.log(event,'event item');
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    console.log(username, email, password);
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

e1.addEventListener('submit', signupPost);
console.log(e1);