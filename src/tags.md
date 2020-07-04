---
title: 'Tag Archive'
layout: 'layouts/feed.html'
metaDesc: 'Tag Archive for my blog posts.'
pagination:
  data: collections
  size: 1
  alias: tag
  filter: ['all', 'nav', 'blog', 'work', 'featuredWork', 'rss']
permalink: '/tag/{{ tag | slug }}/'
---