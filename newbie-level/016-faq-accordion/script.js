row = document.querySelectorAll('.r');
ans = document.querySelectorAll('.a');

icons = document.querySelectorAll('.r .icon img');

row.forEach((r, i) => {
    r.addEventListener('click', () => {
        a = ans[i];
        icon = icons[i];

        if(a.style.display == "block"){
            a.style.display = "none";
            icon.src = "./images/icon-plus.svg";
        }
        else{
            a.style.display = "block";
            icon.src = "./images/icon-minus.svg";
        }
    });
});