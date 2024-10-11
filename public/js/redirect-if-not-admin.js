import { isAdmin } from './validate-token.js';
// det her er usikkert da siden bliver loadet før check
document.addEventListener('DOMContentLoaded', async function() {
    const adminStatus = await isAdmin(); // Await the result from isAdmin function

    if (adminStatus) {
        console.log("User is an admin.");
    } else {
        window.location.href = '/';
    }
});