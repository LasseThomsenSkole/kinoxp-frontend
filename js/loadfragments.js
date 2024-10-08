function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');

    elements.forEach(el => {
        const file = el.getAttribute('data-include');
        if (file) {
            fetch(file)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Failed to fetch fragment: ${file}`);
                    }
                    return response.text();
                })
                .then(data => {
                    el.innerHTML = data;

                    // Kald setupEventListeners efter fragmenterne er indlæst
                    setupEventListeners();
                })
                .catch(error => {
                    console.error('Error loading fragment:', error);
                    el.innerHTML = 'Error loading content';
                });
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    includeHTML(); // Inkluder HTML-fragmenterne og tilføj event listeners bagefter
});

function setupEventListeners() {
    const loginBtn = document.getElementById('loginBtn');
    const authModal = document.getElementById('authModal');
    const closeBtn = document.querySelector('.close-btn');

    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            console.log('Login button clicked'); // Debugging log
            if (authModal) {
                console.log('Modal fundet og vil blive vist');
                authModal.classList.remove('hidden'); // Fjern 'hidden'-klassen for at vise modal
                authModal.style.display = 'flex'; // Brug 'display: flex' for at centerere modal
            } else {
                console.error('authModal blev ikke fundet.');
            }
        });
    } else {
        console.error('Login-knappen med ID "loginBtn" blev ikke fundet.');
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            authModal.classList.add('hidden'); // Skjul modal
            authModal.style.display = 'none'; // Skjul modal helt
        });
    } else {
        console.error('Lukke-knappen med class "close-btn" blev ikke fundet.');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Åbn login-modal
    const loginBtn = document.getElementById('loginBtn');
    const authModal = document.getElementById('authModal');
    const closeBtn = document.querySelector('.close-btn');

    loginBtn.addEventListener('click', function () {
        authModal.style.display = 'flex'; // Vis modal
    });

    closeBtn.addEventListener('click', function () {
        authModal.style.display = 'none'; // Skjul modal
    });

    // Login form submission
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

            if (response.ok) {
                const token = await response.text();
                console.log('Login successful, token:', token);
                localStorage.setItem('jwtToken', token); // Opbevar token

                // Redirect or close modal after successful login
                authModal.style.display = 'none';
            } else {
                console.error('Login failed:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    });

    // Signup form submission
    document.getElementById('signupForm').addEventListener('submit', async (e) => {
        e.preventDefault();
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
                // Skift tilbage til login-formular efter vellykket signup
                document.getElementById('signupSection').classList.add('hidden');
                document.getElementById('loginSection').classList.remove('hidden');
            } else {
                console.error('Signup failed:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error during signup:', error);
        }
    });

    // Toggle mellem login og signup-sektioner
    document.getElementById('showSignup').addEventListener('click', function () {
        document.getElementById('loginSection').classList.add('hidden');
        document.getElementById('signupSection').classList.remove('hidden');
    });

    document.getElementById('showLogin').addEventListener('click', function () {
        document.getElementById('signupSection').classList.add('hidden');
        document.getElementById('loginSection').classList.remove('hidden');
    });
});



