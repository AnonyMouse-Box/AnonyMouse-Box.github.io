[Home](https://github.enim.ga/) |
[Back to Blog](https://github.enim.ga/blog)

# Archive
###### Old blog posts
<ul>
  {% for post in site.posts %}
    {% if post.categories contains "archive" %}
      <li style="list-style-type: none;">
        <a href="{{ post.url }}"><small>{{ post.date | date_to_string }}</small> - {{ post.title }}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>
