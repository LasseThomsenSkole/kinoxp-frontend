document.addEventListener('DOMContentLoaded', function() {
    // Åbn modal, når login-knappen trykkes
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            const authModal = document.getElementById('authModal');
            if (authModal) {
                authModal.classList.remove('hidden');
            }
        });
    } else {
        console.error('Login-knappen med ID "loginBtn" blev ikke fundet.');
    }

    // Luk modal, når lukkeknappen (X) trykkes
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            const authModal = document.getElementById('authModal');
            if (authModal) {
                authModal.classList.add('hidden');
            }
        });
    } else {
        console.error('Lukke-knappen med class "close-btn" blev ikke fundet.');
    }

    // Event listener til at vise signup-sektionen
    const showSignup = document.getElementById('showSignup');
    if (showSignup) {
        showSignup.addEventListener('click', function() {
            document.getElementById('loginSection').classList.add('hidden');
            document.getElementById('signupSection').classList.remove('hidden');
        });
    } else {
        console.error('Elementet med ID "showSignup" blev ikke fundet.');
    }

    // Event listener til at vise login-sektionen igen
    const showLogin = document.getElementById('showLogin');
    if (showLogin) {
        showLogin.addEventListener('click', function() {
            document.getElementById('signupSection').classList.add('hidden');
            document.getElementById('loginSection').classList.remove('hidden');
        });
    } else {
        console.error('Elementet med ID "showLogin" blev ikke fundet.');
    }
});
