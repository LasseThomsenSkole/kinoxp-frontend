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
                })
                .catch(error => {
                    console.error('Error loading fragment:', error);
                    el.innerHTML = 'Error loading content';
                });
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    includeHTML();
});