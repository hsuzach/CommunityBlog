//creates a user with given credentials
//checks if username is unique

const signupFormHandler = async function (event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value;
  const password = document.querySelector('#password-signup').value;

  console.log(username)
  console.log(password)

  const response = await fetch('/api/user/', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('This username has already been taken!');
  }

};

document
  .querySelector('#signup-button')
  .addEventListener('click', signupFormHandler);