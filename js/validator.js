const toggleiconPassword = document.querySelector('#eyeicon');
  const password = document.querySelector('#form_password');

  toggleiconPassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});