document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const requestBody = {
        username: username,
        password: password
    };

    try {
        const response = await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });

        // Handle response
        if (response.ok) {
            const token = await response.text();
            console.log('Login successful, token:', token);

            localStorage.setItem('jwtToken', token);
            document.querySelector('.login-popup').classList.remove('show');

        } else if (response.status === 403) {
            document.getElementById('login-failed').innerText = 'Forkert brugernavn eller adgangskode';
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
});

document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const slider = document.getElementById('register_toggle');

    const signupUsername = document.getElementById('signup-username').value;
    const signupPassword = document.getElementById('signup-password').value;

    const requestBody = {
        username: signupUsername,
        password: signupPassword
    };

    try {
        const response = await fetch('http://localhost:8080/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });


        if (response.ok) {
            console.log('Signup successful: ' + await response.text());
            slider.checked = false;
        } else {
            console.error('Signup failed:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Error during signup:', error);
    }
});
