document.getElementById('enterBtn').addEventListener('click', function() {
    document.querySelector('.landing').style.display = 'none';
    document.querySelector('.hidden-content').style.display = 'block';
});

document.getElementById('heartBtn').addEventListener('click', function() {
    document.getElementById('hiddenMessage').classList.toggle('hidden');
});
