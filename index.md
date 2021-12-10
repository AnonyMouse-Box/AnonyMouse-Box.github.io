# Welcome!

This page is powered by Jekyll and the GitHub repository, it allows me to add useful links and multiple test pages to assist in web development.
* [sass](https://github.enim.ga/index/html/sass)
* [w3css](https://github.enim.ga/index/html/w3css)
* [bootstrap](https://github.enim.ga/index/html/bootstrap)
* [javascript](https://github.enim.ga/index/html/javascript)
* [tiddlywiki](https://github.enim.ga/index/html/tiddlywiki)
* [generic](https://github.enim.ga/index/html/test)
* [rebuild](https://github.enim.ga/index/html/rebuild)


**Blog Posts**
{% for category in site.categories %}
  {% if category[0] != "archive" %}
  <h3>{{ category[0] }}</h3>
  <ul>
    {% for post in category[1] %}
    {% if post.categories does not contain "archive" %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
    {% endfor %}
  </ul>
{% endif %}
{% endfor %}

[Root Site](https://github.enim.ga/)

Check out my other projects:
* [Akorn](https://github.enim.ga/akorn)
* [Code Can](https://github.enim.ga/code-can)
* [Randy](https://github.enim.ga/randy)
* [TmCast](https://github.enim.ga/tmcast)
