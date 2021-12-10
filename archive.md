# Archive
###### Old blog posts
<ul>
  {% for post in site.posts %}
    {% if post.categories contains "archive" %}
      <li>
		 <h3>
		 <a href="{{ post.url }}">
		 {{ post.title }}
		 <small>{{ post.date | date_to_string }}</small>
		 </a>
		 {% for tag in post.tags %}
			 <a class="tag" href="/blog/tag/#{{ tag | slugify }}">{{ tag }}</a>
		 {% endfor %}
		 </h3>
		 </li>
    {% endif %}
  {% endfor %}
</ul>
