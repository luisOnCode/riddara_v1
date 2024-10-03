const colors = {
    color: [
        color__yellow = '#B4A67B',
        color__white = '#B2B8BF',
        color__silver = '#8B9097',
        color__grey = '#696E78',
        color__green = '#86967A',
        color__blue = '#092C50',
        color__black = '#1F2125',
    ],
    color__low_opacity: [
        color__yellow__low_opacity = 'rgba(180, 166, 123, 0.4)',
        color__white__low_opacity = 'rgba(178, 184, 191, 0.4)',
        color__silver__low_opacity = 'rgba(139, 144, 151, 0.4)',
        color__grey__low_opacity = 'rgba(105, 110, 120, 0.4)',
        color__green__low_opacity = 'rgba(134, 150, 122, 0.4)',
        color__blue__low_opacity = 'rgba(9, 44, 80, 0.4)',
        color__black__low_opacity = 'rgba(31, 33, 37, 0.4)',
    ],
    color_safety: [
        color__white = 'rgb(171, 172, 175)',
        color__black = 'rgb(81, 82, 83)',
        color__blue = 'rgb(70, 83, 103)',
    ]
}



document.addEventListener('DOMContentLoaded', function () {
    const colorButton = document.querySelectorAll('.color_slider-button');
    const colorCar = document.querySelectorAll('.color_slider-car-side');
    const colorText = document.querySelectorAll('.color_slider-text');

    colorButton.forEach(color => {
        color.addEventListener('click', function () {
            const selectedColor = document.querySelector('.color_slider-button.selected-color');
            const selectedCar = document.querySelector('.color_slider-car-side.selected-car');
            const selectedText = document.querySelector('.color_slider-text.selected-text');

            const data = this.getAttribute('data-name')
            const i = Number(data.slice(0, data.indexOf("-")))

            if (selectedColor) {
                selectedColor.classList.remove('selected-color');
                selectedCar.classList.remove('selected-car');
                selectedText.classList.remove('selected-text');
            }

            this.classList.add('selected-color');
            console.log(this.childNodes);
            colorCar[i].classList.add('selected-car');
            colorText[i].classList.add('selected-text');

            const bgColor = colors.color[i];

            const triangle = document.getElementById('colored-polygon');
            const textNav = document.getElementById('color_slider-text-div');
            triangle.style.backgroundColor = bgColor;
            triangle.parentElement.style.backgroundColor = colors.color__low_opacity[i];
            colorButton[0].parentNode.parentElement.style.backgroundColor = colors.color__low_opacity[i];



            bgColor === colors.color[5] || bgColor === colors.color[6] ? textNav.style.color = 'rgba(255, 255, 255, 0.5)' : textNav.style.color = 'rgba(0, 0, 0, 0.5)';
        });
    });

    const leftButton = document.getElementById('safety-left-button');
    const rightButton = document.getElementById('safety-right-button');
    const safetyTexts = document.querySelectorAll('.safety-text-container');
    const safetyCars = document.querySelectorAll('.car-angled-color');
    const safetyBG = document.getElementById('safety-section')

    let currentIndex = 0;

    leftButton.addEventListener('click', function () {
        console.log('botão esquerdo apertado')
        safetyTexts[currentIndex].classList.remove('safety-text-selected');
        safetyCars[currentIndex].classList.remove('car-angled-color-selected');
        currentIndex = (currentIndex - 1 + safetyTexts.length) % safetyTexts.length;
        safetyTexts[currentIndex].classList.add('safety-text-selected');
        safetyCars[currentIndex].classList.add('car-angled-color-selected');
        safetyBG.style.backgroundColor = colors.color_safety[currentIndex];
    });

    rightButton.addEventListener('click', () => {
        safetyTexts[currentIndex].classList.remove('safety-text-selected');
        safetyCars[currentIndex].classList.remove('car-angled-color-selected');
        currentIndex = (currentIndex + 1) % safetyTexts.length;
        safetyTexts[currentIndex].classList.add('safety-text-selected');
        safetyCars[currentIndex].classList.add('car-angled-color-selected');
        safetyBG.style.backgroundColor = colors.color_safety[currentIndex];
    });





    document.getElementById('form-about-button').addEventListener('click', function () {
        const dropdownContent = this.nextElementSibling;
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Optional: Close the dropdown if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('#form-about-button')) {
            const dropdowns = document.getElementsByClassName('dropdown-content');
            for (let i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.style.display === 'block') {
                    openDropdown.style.display = 'none';
                }
            }
        }
    }

    const dropdownItems = document.querySelectorAll('.dropdown-content button');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function () {
            const button = document.getElementById('form-about-button')
            button.innerText = this.innerText;
            button.style.color = "black"
            this.parentElement.style.display = 'none';  // Hide dropdown after selection

        });
    });


    const quitForm = document.getElementById('quit-form')
    quitForm.addEventListener('click', function () {
        document.getElementById('form').classList.remove('form-active')
    })

    const contactUs = document.getElementById('contact');
    contactUs.addEventListener('click', function () {
        document.getElementById('form').classList.add('form-active')
    })

    const makeDealContact = [
        document.getElementById('make_your_deal'),
        document.getElementById('make_your_deal_footer')
    ]

    const testDriveContact = [
        document.getElementById('test_drive-button-01'),
        document.getElementById('test-driver_footer')
    ]

    makeDealContact.forEach(button => {
        button.addEventListener('click', function () {
            document.getElementById('form').classList.add('form-active')
            const text = document.getElementById('form-about-button')
            text.innerText = 'Orçamento'
            text.style.color = 'black'
        })
    })

    testDriveContact.forEach(button => {
        button.addEventListener('click', function () {
            document.getElementById('form').classList.add('form-active')
            const text = document.getElementById('form-about-button')
            text.innerText = 'Test-Drive'
            text.style.color = 'black'
        })
    })

    document.getElementById('test_drive-button-02').addEventListener('click', function () {
        document.getElementById('form').classList.add('form-active')
        const text = document.getElementById('form-about-button')
        text.innerText = 'Mais Informações'
        text.style.color = 'black'
    })
});