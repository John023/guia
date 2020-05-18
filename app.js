const btn = document.getElementById('btnMode');

if(localStorage.getItem('darkMode') === "on"){
    document.body.classList.toggle('dark');
    btn.classList.toggle('active');
}else{
    document.body.classList.remove('dark');
    btn.classList.remove('active');
}

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btn.classList.toggle('active');

    if(document.body.classList.contains('dark')){
        localStorage.setItem('darkMode', 'on');
    }else{
        localStorage.setItem('darkMode', 'off');
    }
});

window.addEventListener('scroll', () => {
    var st = window.pageYOffset;
    if (st == 0 || st == '0' || st < 5) {
        btn.style.right = '50px';
        btn.style.top = '141px';
    }else{
        btn.style.right = 0;
        btn.style.top = '45%';
    }
}, false);