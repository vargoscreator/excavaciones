if (typeof AOS !== 'undefined' && typeof AOS.init === 'function') {
    AOS.init({
        duration: 700
      });
      
}

document.addEventListener("DOMContentLoaded", function () {
    let swiper = new Swiper(".projects__slider", {
        loop: false,
        spaceBetween: 20,
        slidesPerView: 1,
        navigation: {
            nextEl: ".projects__slider-next",
            prevEl: ".projects__slider-prev",
        },
        breakpoints: {
            480: {
                spaceBetween: 30,
            },
            768: {
                spaceBetween: 30,
            },
            1000: {
                spaceBetween: 30,
            },
            1280: {
                spaceBetween: 121,
            },
        },
    });    
});

document.querySelectorAll('.form-item input').forEach(input => {
    input.addEventListener('input', () => {
        const label = input.nextElementSibling;
        if (label && label.tagName === 'LABEL') {
            label.style.display = input.value ? 'none' : '';
        }
    });
});

const telInputs = document.querySelectorAll('.tel-input');

telInputs.forEach(input => {
    window.intlTelInput(input, {
        initialCountry: "es",
        separateDialCode: true,
        nationalMode: true,
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.1/build/js/utils.js",
    });
});



const langBlock = document.querySelector('.header__lang');
const langSelected = document.querySelector('.header__lang-selected');
langSelected.addEventListener('click', (e) => {
    e.stopPropagation();
    langBlock.classList.toggle('active');
});
document.addEventListener('click', (e) => {
    if (!langBlock.contains(e.target)) {
        langBlock.classList.remove('active');
    }
});

const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
headerBurger.addEventListener('click', () => {
    headerMenu.classList.toggle('active');
});

document.querySelectorAll('.faq__item-title').forEach(title => {
    title.addEventListener('click', () => {
        const currentItem = title.closest('.faq__item');
        const isActive = currentItem.classList.contains('active');
        document.querySelectorAll('.faq__item').forEach(item => {
            item.classList.remove('active');
        });
        if (!isActive) {
            currentItem.classList.add('active');
        }
    });
});


document.querySelectorAll('.header__menu-more').forEach(link => {
    link.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            this.classList.toggle('show');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const bannerSection = document.querySelector('.banner-about');
    const counters = bannerSection.querySelectorAll('.banner__about-num span');
    let started = false;
    const animateCounters = () => {
        counters.forEach(counter => {
            let fullText = counter.innerText;
            let match = fullText.match(/\d+/);

            if (match) {
                let target = parseInt(match[0]);
                let suffix = fullText.replace(match[0], '');
                let count = 0;
                let speed = target / 100;

                const updateCount = () => {
                    count += speed;
                    if(count < target) {
                        counter.innerText = Math.ceil(count) + suffix;
                        requestAnimationFrame(updateCount);
                    } else {
                        counter.innerText = target + suffix;
                    }
                };

                updateCount();
            }
        });
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !started) {
                animateCounters();
                started = true;
            }
        });
    }, {
        threshold: 0.3
    });

    observer.observe(bannerSection);
});
