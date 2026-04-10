const params = new URLSearchParams(window.location.search);
const postId = params.get('id');

fetch('bloco-de-notas/posts.json')
  .then(res => res.json())
  .then(posts => {
    const post = posts.find(p => p.id == postId);

    if (!post) {
      document.body.innerHTML = "<h1>Post não encontrado</h1>";
      return;
    }

    document.getElementsByClassName('title')[0].textContent = post.title;
    document.getElementsByClassName('date')[0].textContent = post.date;
    document.getElementsByClassName('content')[0].innerHTML = post.content;
  });