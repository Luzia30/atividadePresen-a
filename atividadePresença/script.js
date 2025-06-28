function generateRandomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

document.getElementById('colorChangeButton').addEventListener('click', function() {
    document.body.style.backgroundColor = generateRandomHexColor();
});
