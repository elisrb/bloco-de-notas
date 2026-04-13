const params = new URLSearchParams(window.location.search);
const postId = params.get('id');

fetch('posts.json')
  .then(res => res.json())
  .then(posts => {
    const post = posts.find(p => p.id == postId);

    if (!post) {
      document.body.innerHTML = "<h1>Post não encontrado</h1>";
      return;
    }

    document.getElementsByClassName('post-title')[0].textContent = post.title;
    document.getElementsByClassName('post-date')[0].textContent = post.date;
    document.getElementsByClassName('post-content')[0].innerHTML = post.content;
  });