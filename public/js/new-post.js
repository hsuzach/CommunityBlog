//accepts user post values and posts to database
//check to see if both inputs are provided

const newFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="new-post-title"]').value;
  const content = document.querySelector('textarea[name="new-post-content"]').value;

  if (title && content) {
    await fetch(`/api/post`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        title,
        content,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

  document.location.replace('/dashboard');
  
  } else {
    alert("Please fill out both sections for your post!")
  }
};

document
  .querySelector('#new-post-submit')
  .addEventListener('click', newFormHandler);