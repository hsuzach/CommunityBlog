//user provides credentials to login

const loginFormHandler = async function(event) {
  event.preventDefault();

  const username = document.querySelector('#username-login');
  const password = document.querySelector('#password-login');

  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Please check your credentials or create a new account!');
  }
};

document
  .querySelector('#login-button')
  .addEventListener('click', loginFormHandler);
