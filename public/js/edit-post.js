const postId = document.querySelector('input[name="post-id"]').value;

const editFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="edit-post-title"]').value;
  const content = document.querySelector('textarea[name="edit-post-content"]').value;

  await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      content
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace('/dashboard');
};

const deleteClickHandler = async function() {
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE'
  });
  
  document.location.replace('/dashboard');
};

document
  .querySelector('#edit-post-button')
  .addEventListener('click', editFormHandler);
document
  .querySelector('#delete-post-button')
  .addEventListener('click', deleteClickHandler);
