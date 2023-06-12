const p = document.querySelector('#p');

document.querySelector('#txt').addEventListener('input', function (e) {
    p.innerHTML = this.value;
});