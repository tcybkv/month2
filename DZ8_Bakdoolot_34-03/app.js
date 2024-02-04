const buyButtons = document.querySelectorAll('.button');

buyButtons.forEach(button => {
    button.addEventListener('click', function() {
        const confirmation = confirm('ПОДТВЕРЖДЕНИЕ');
        if (confirmation) {
            const movie = this.parentNode;
            movie.querySelectorAll('.column').forEach(cell => {
                cell.classList.add('gray');
            });
            button.style.display = 'none';
        }
    });
});