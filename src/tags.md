---
title: 'Tag Archive'
layout: 'pages/blog.html'
metaDesc: 'Tag Archive for my blog posts.'
pagination:
  data: collections
  size: 1
  alias: tag
  filter: ['all', 'nav', 'blog', 'work', 'featuredWork', 'rss']
permalink: '/tag/{{ tag | slug }}/'
socialImage: 'https://res.cloudinary.com/juanmartingarcia/image/upload/w_auto,f_auto,q_auto/logo/logo.png'
---