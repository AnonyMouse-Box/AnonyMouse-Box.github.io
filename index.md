# Welcome!

This page is powered by Jekyll and the GitHub repository, it allows me to add useful links and multiple test pages to assist in web development.
* [sass test page](http://github.hogwash.ga/index/html/sass)
* [w3css test page](http://github.hogwash.ga/index/html/w3css)
* [bootstrap test page](http://github.hogwash.ga/index/html/bootstrap)
* [javascript test page](http://github.hogwash.ga/index/html/javascript)
* [tiddlywiki test page](http://github.hogwash.ga/index/html/tiddlywiki)
* [generic test page](http://github.hogwash.ga/index/html/test)


**Blog Posts**
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

[Root Site](http://hogwash.ga/)
