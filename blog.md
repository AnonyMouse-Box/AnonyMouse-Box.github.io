[Home](https://github.enim.ga/) |
[Archive](https://github.enim.ga/archive)

# Blog
###### posts
{% for category in site.categories %}
  {% if category[0] != "archive" %}
  <h3>{{ category[0] }}</h3>
  <ul>
    {% for post in category[1] %}
    {% unless post.categories contains "archive" %}
      <li style="list-style-type: none;"><a href="{{ post.url }}">{{ post.title }}</a></li>
      <p>{{ post.excerpt }}</p>
    {% endunless %}
    {% endfor %}
  </ul>
{% endif %}
{% endfor %}
