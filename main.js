const button = document.querySelector('#button');
button.forTop(btn => {
    btn.addEventListener('click', function(e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientX - e.target.offsetTop;


        let ripples = document.createElement('button');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';

        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove()
        },1000);
    })
} 
    )