document.querySelectorAll('.show__answer').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block';
            button.textContent = 'Скрыть ответ';
        } else {
            answer.style.display = 'none';
            button.textContent = 'Показать ответ';
        }
    });
});