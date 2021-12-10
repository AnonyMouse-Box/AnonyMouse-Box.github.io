# Archive
###### Old blog posts
<ul>
  {% for post in site.posts %}
    {% if post.categories contains "archive" %}
      <li>
        <a href="{{ post.url }}">{{ post.title }} - <small>{{ post.date | date_to_string }}</small></a>
      </li>
    {% endif %}
  {% endfor %}
</ul>
