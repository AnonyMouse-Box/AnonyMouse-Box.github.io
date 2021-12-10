# Archive
###### Old blog posts
<ul>
  {% for post in site.posts %}
    {% if post.categories contains "archive" %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
