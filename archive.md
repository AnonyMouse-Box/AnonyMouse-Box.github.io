# Archive
###### Old blog posts
{% for category in site.categories %}
  {% if category == "archive" %}
    <ul>
      {% for post in category[1] %}
        <li><a href="{{ post.url }}">{{ post.title }}</a></li>
      {% endfor %}
    </ul>
  {% endif %}
{% endfor %}
