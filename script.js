
var swiper = new Swiper(".slide", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});


const selects = document.querySelectorAll('.select');

selects.forEach(select => {
    const options = select.querySelectorAll('.option');

    options.forEach(option => {
        option.addEventListener('click', () => {
            options.forEach(opt => {
                opt.classList.remove('active');
            });
            option.classList.add('active');
            calculatePrice();
        });
    });
});


function calculatePrice() {
    const ramOption = document.querySelector('#ram-select .option.active');
    const storageOption = document.querySelector('#storage-select .option.active');
    let price = 0;
    let mrp = 0;
    let disc = 0;


    if (ramOption && storageOption) {
        if (ramOption.textContent === '7 Uke' && storageOption.textContent === 'Male') {
            mrp = 3999;
            price = Math.round(mrp * 0.98);
            disc = 8;
        } else if (ramOption.textContent === '7 Uke' && storageOption.textContent === 'Female') {
            mrp = 3999;
            price = Math.round(mrp * 0.98);
            disc = 8;
        } else if (ramOption.textContent === '8 Uke' && storageOption.textContent === 'Male') {
            mrp = 4199;
            price = Math.round(mrp * 0.96);
            disc = 10;
        } else if (ramOption.textContent === '8 Uke' && storageOption.textContent === 'Female') {
            mrp = 4199;
            price = Math.round(mrp * 0.96);
            disc = 10;
        }else if (ramOption.textContent === '9 Uke' && storageOption.textContent === 'Male') {
            mrp = 4299;
            price = Math.round(mrp * 0.94);
            disc = 12;
        } else if (ramOption.textContent === '9 Uke' && storageOption.textContent === 'Female') {
            mrp = 4299;
            price = Math.round(mrp * 0.94);
            disc = 12;
        } else if (ramOption.textContent === '10 Uke' && storageOption.textContent === 'Male') {
            mrp = 4599;
            price = Math.round(mrp * 0.92);
            disc = 14;
        }else if (ramOption.textContent === '10 Uke' && storageOption.textContent === 'Female') {
            mrp = 4599;
            price = Math.round(mrp * 0.92);
            disc = 14;
        } else if (ramOption.textContent === '11 Uke' && storageOption.textContent === 'Male') {
            mrp = 4999;
            price = Math.round(mrp * 0.90);
            disc = 16;
        } else if (ramOption.textContent === '11 Uke' && storageOption.textContent === 'Female') {
            mrp = 4999;
            price = Math.round(mrp * 0.90);
            disc = 16;
        }
        

    }
    
        document.querySelector('.disPrice').textContent = `Rs.${price}`;
        document.querySelector('.mrp').textContent = `${mrp}`;
        document.querySelector('.disc').textContent = `${disc}%`;
}

calculatePrice();


let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navigation');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

navbar.onclick = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}


function adjustFixedDiv() {
    const fixedDiv = document.querySelector('.left');
    const footer = document.querySelector('.footer');
    const footerText = document.querySelector('.footer p');
    const footerRect = footer.getBoundingClientRect();
    const fixedDivRect = fixedDiv.getBoundingClientRect();

    if (window.innerWidth < 768){
        footerText.style.fontSize = (window.innerWidth * 0.03) + 'px';
    } else {
        footerText.style.fontSize = '25px';
    }

    if (footerRect.top < window.innerHeight) {
        fixedDiv.style.top = '-' + (window.innerHeight - footerRect.top + 100) + 'px';
    } else {
        fixedDiv.style.top = '0';
    }
}

window.addEventListener('scroll', adjustFixedDiv);
window.addEventListener('resize', adjustFixedDiv);
adjustFixedDiv();