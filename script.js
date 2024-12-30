window.addEventListener('load', () => {
    const introText = document.getElementById('intro-text');
    const audioDemo = document.getElementById('audio-demo');
    const playButton = document.getElementById('play-button');

    // Fonction pour montrer l'audio et le bouton après le texte
    function showAudioAndButton() {
        audioDemo.style.opacity = '1';
        playButton.style.opacity = '1';
    }

    // Détecter la fin de l'animation du texte
    introText.addEventListener('animationend', () => {
        // Ajoute un délai avant d'afficher l'audio et le bouton
        setTimeout(showAudioAndButton, 1000);
    });

    // Fonction pour démarrer la lecture de l'audio
    playButton.addEventListener('click', () => {
        audioDemo.play();
    });
});
