# Welcome!

This page is powered by Jekyll and the GitHub repository, it allows me to add useful links and multiple test pages to assist in web development.
* [w3css test page](http://github.hogwash.ga/w3css)
* [bootstrap test page](http://github.hogwash.ga/bootstrap)


**Blog Posts**
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
