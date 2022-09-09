const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const telNumber = document.getElementById('telNumber');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const personNumber = document.getElementById('personNumber');




 
const validEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};


const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


const validateForm = () => {

    let noError = true;
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const telNumberValue = telNumber.value.trim();
    const daysValue = days.value.trim();
    const hoursValue = hours.value.trim();
    const personNumberValue = personNumber.value.trim();

  
   
  

    if (firstNameValue === '') {
        setError(firstName, "Votre prénom est obligatoire.");
        noError = false;
    } else {
        setSuccess(firstName);
    }

    if (lastNameValue === '') {
        setError(lastName, "Votre nom est obligatoire.");
        noError = false;
    } else {
        setSuccess(lastName);
    }

    if (emailValue === '') {
        setError(email, "Votre courriel est obligatoire.");
        noError = false;
    } else if (!validEmail(emailValue)) {
        setError(email, "Inscrire un courriel validate.")
        noError = false;

    } else {
        setSuccess(email);
    }


    if (telNumberValue === '') {
        setError(telNumber, "Votre numéro de téléphone est obligatoire.");
        noError = false;
    } else if (telNumberValue.length < 10) {
        setError(telNumber, "Le numéro de téléphone doit contenier 10 chiffres seulement.");
        noError = false;
    } else {
        setSuccess(telNumber);
    }

  if (daysValue === '') {
        setError(days, "Inscrire une journée");
        noError = false;
    } else {
        setSuccess(days);
    }

    if (hoursValue === '') {
        setError(hours, "Inscrire une heure");
        noError = false;
    } else {
        setSuccess(hours);
    }

    if (personNumberValue === '') {
        setError(personNumber, "Inscrire le nombre de personne");
        noError = false;
    } else {
        setSuccess(personNumber);
    }

    return noError; 
};