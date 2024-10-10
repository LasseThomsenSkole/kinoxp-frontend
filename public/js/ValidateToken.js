async function validateUserRole() {
    const token = localStorage.getItem('jwtToken');
    try {
        const response = await fetch('http://localhost:8080/auth/validate-role', {
            method: 'GET', // Specify the request method
            headers: {
                'Authorization': `Bearer ${token}`, // Include the JWT in the Authorization header
                'Content-Type': 'application/json', // Set the content type
            },
        });

        if (!response.ok) {
            return false
        }

        const roles = await response.json()// Parse the string into a JSON object/array

        if (roles.includes('ADMIN')) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
// det her usikkert
document.addEventListener('DOMContentLoaded', async function() {
    const isAdmin = await validateUserRole();

    if (isAdmin) {
        console.log("User is an admin.");
    } else {
        window.location.href = '/';
    }
});