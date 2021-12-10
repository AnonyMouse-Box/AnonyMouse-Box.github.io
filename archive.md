---
theme: jekyll-theme-slate
layout: page
title: "Archive"
description: "Old blog posts"
permalink: /archive
---

# Archive
###### Old blog posts
<ul>
  {% for post in site.archive %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
