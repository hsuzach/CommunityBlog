const newFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="new-post-title"]').value;
  const content = document.querySelector('textarea[name="new-post-content"]').value;

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
};

document
  .querySelector('#new-post-submit')
  .addEventListener('click', newFormHandler);