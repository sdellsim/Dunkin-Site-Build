const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validate = () => {
    const email = $('#email').val();
    if (validateEmail(email)) {
        document.getElementById('loginfields').style.display = 'block';
        document.getElementById('signupfields').style.display = 'none';
    }
}

$('#email').on('input', validate);


const validatemEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const mvalidate = () => {
    const email = $('#m-email').val();
    if (validatemEmail(email)) {
        document.getElementById('m-loginfields').style.display = 'block';
        document.getElementById('m-signupfields').style.display = 'none';
    }
}

$('#m-email').on('input', mvalidate);