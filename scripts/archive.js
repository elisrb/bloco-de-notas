fetch('posts.json')
  .then(res => res.json())
  .then(posts => {
    const container = document.getElementsByClassName('post-list')[0];

    posts.forEach(post => {
      const card = document.createElement('a');
      card.href = `post.html?id=${post.id}`;
      card.className = 'button';

      card.innerHTML = `
        <span class="post-title">${post.title}</span>
        <span class="post-date">${post.date}</span>
      `;

      container.appendChild(card);
    });
  });