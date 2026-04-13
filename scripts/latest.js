fetch('posts.json')
  .then(res => res.json())
  .then(posts => {
    const post = posts[0];
    const page = document.getElementsByClassName('latest-post')[0];

    if (!post) {
      page.getElementsByClassName('post-title')[0].textContent = 'Post não encontrado';
      return;
    }

    page.getElementsByClassName('post-title')[0].textContent = `último post: ${post.title}`;
    page.getElementsByClassName('post-date')[0].textContent = post.date;
    page.getElementsByClassName('post-content')[0].innerHTML = post.content;
  });