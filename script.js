
// *********************************************************************************************************************
const faqItems = document.querySelectorAll('.faq');

faqItems.forEach((item) => {
  const question = item.querySelector('h4');
  const answer = item.querySelector('.answer');

  question.addEventListener('click', () => {
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

//   *********************************************************************************************************************
const buttons = document.querySelectorAll('.button');
const similarElements = document.querySelectorAll('.similar-element');

let selectedButtonIndex = -1; 

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (index === selectedButtonIndex) {
            button.classList.remove('btn');
            button.textContent = 'Select';
            selectedButtonIndex = -1; 
        } else {
            if (selectedButtonIndex !== -1) {
                buttons[selectedButtonIndex].classList.remove('btn');
                buttons[selectedButtonIndex].textContent = 'Select';
            }

            button.classList.add('btn');
            button.textContent = 'Selected';
            selectedButtonIndex = index;
        }
    });
});
// *********************************************************************************************************************
function validateForm(event) {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const cni = document.querySelector('#cni').value;
    const phoneNumber = document.querySelector('#phoneNumber').value;

    const namePattern = /^[a-zA-Z\s]{3,}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const cniPattern = /^[a-zA-Z]\d{5}$/;
    const phonePattern = /^\+212\d{9}$/;

    const nameValid = namePattern.test(name);
    const emailValid = emailPattern.test(email);
    const cniValid = cniPattern.test(cni);
    const phoneValid = phonePattern.test(phoneNumber);

    if (!nameValid) {
        alert('Please enter a valid name (at least 3 characters, only letters and spaces).');
        return;
    }

    if (!emailValid) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!cniValid) {
        alert('Please enter a valid CNI.');
        return;
    }

    if (!phoneValid) {
        alert('Please enter a valid phone number (must start with +212 and be 12 digits).');
        return;
    }

    alert('Thanks for your subscription');
    
    event.target.reset();
}

const form = document.querySelector('form');
form.addEventListener('submit', validateForm);
