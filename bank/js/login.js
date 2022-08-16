document.getElementById('btn-submit').addEventListener('click', function(){
    
    //get emwil
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //console.log(email);

    //set password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if(email =="sontan@baap.com" && password ==='secret'){
        window.location.href= 'bank.html';
    }
    else {
        console.log('Invalid user')
    }
})