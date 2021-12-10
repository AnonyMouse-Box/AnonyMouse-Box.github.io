---
layout: page
title: "Archive"
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
