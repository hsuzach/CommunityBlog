//destroys session and takes user to home page

const logout = async function () {
  const response = await fetch('/api/user/logout', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out');
  }
};

document.querySelector('#logout-button').addEventListener('click', logout);