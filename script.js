document.addEventListener('DOMContentLoaded', () => {
    const pieces = document.querySelectorAll('.piece-hidden, .piece-show');

    pieces.forEach(piece => {
        piece.addEventListener('click', () => {
            // Alternar entre clases de oculto y visible en la carta clicada
            if (piece.classList.contains('piece-hidden')) {
                piece.classList.remove('piece-hidden');
                piece.classList.add('piece-show');
            }
        });
    });
});