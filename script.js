const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

//   *********************************************************************************************************************
const buttons = document.querySelectorAll('.button');
const similarElements = document.querySelectorAll('.similar-element');

let selectedButtonIndex = -1; // Initialize with an invalid index

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // If the clicked button is already selected, deselect it
        if (index === selectedButtonIndex) {
            button.classList.remove('btn');
            button.textContent = 'Select';
            selectedButtonIndex = -1; // No button is selected
        } else {
            // Deselect the previously selected button (if there was one)
            if (selectedButtonIndex !== -1) {
                buttons[selectedButtonIndex].classList.remove('btn');
                buttons[selectedButtonIndex].textContent = 'Select';
            }

            // Select the clicked button
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
    
    // Clear the form after a successful submission
    event.target.reset();
}

const form = document.querySelector('form');
form.addEventListener('submit', validateForm);
