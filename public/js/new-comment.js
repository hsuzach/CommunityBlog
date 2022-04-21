//accepts user's comment and posts to database

const commentFormHandler = async function(event) {
  event.preventDefault();

  const postId = document.querySelector('input[name="post-id"]').value;
  const body = document.querySelector('textarea[name="new-comment-body"]').value;

  if (body) {
    await fetch('/api/comment', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        postId,
        body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    document.location.reload();
  }
};

document
  .querySelector('#new-comment-submit')
  .addEventListener('click', commentFormHandler);
