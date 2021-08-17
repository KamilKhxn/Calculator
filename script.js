const btn = document.querySelectorAll('button');

btn.forEach(button => {
    button.addEventListener('click', function () {
        alert(button.textContent);
    });
})


