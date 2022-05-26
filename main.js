

var prevBtn = document.querySelector('.buttons button:first-child')
var nextBtn = document.querySelector('.buttons button:last-child')

var firstImage = document.querySelector('.avatar-images #tanya_img')
var secondImage = document.querySelector('.avatar-images #john_img')

prevBtn.addEventListener('click', function() {
    firstImage.style.display = 'none';
    secondImage.style.display = 'block';
})

nextBtn.addEventListener('click', function() {
    secondImage.style.display = 'none';
    firstImage.style.display = 'block';
})