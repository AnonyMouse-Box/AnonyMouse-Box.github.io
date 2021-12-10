# Archive
###### Old blog posts
<ul>
  {% for post in site.posts %}
    {% if post.categories contains "archive" %}
      <li>
        <h3>
          <a href="{{ post.url }}">{{ post.title }}<small>{{ post.date | date_to_string }}</small></a>
          {% for category in post.categories %}
            <a class="category" href="/blog/category/#{{ category | slugify }}">{{ category }}</a>
	  {% endfor %}
	</h3>
      </li>
    {% endif %}
  {% endfor %}
</ul>
