const postId = document.querySelector('input[name="post-id"]').value;

// updates post with user edits by postId
const editFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="edit-post-title"]').value;
  const content = document.querySelector('textarea[name="edit-post-content"]').value;

  if (title && content) {
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
  } else {
    alert("Neither section can be empty! Please try again!")
  }
};

//deletes post by postId
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
