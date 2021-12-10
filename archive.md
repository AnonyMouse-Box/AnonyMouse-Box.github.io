# Archive
###### Old blog posts
{% for category in site.categories %}
  <ul>
    {% if category == "archive" %}
      {% for post in category[1] %}
        <li><a href="{{ post.url }}">{{ post.title }}</a></li>
      {% endfor %}
    {% endif %}
  </ul>
{% endfor %}
