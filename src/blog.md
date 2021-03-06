---
title: 'Writing'
layout: 'pages/blog.html'
metaDesc: 'A list of my blog posts, listing my thoughts on design and web development.'
pagination:
  data: collections.blog
  size: 5
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
socialImage: 'https://res.cloudinary.com/jmg-cursos/image/upload/w_auto,f_auto,q_auto/logo/logo.png'
---