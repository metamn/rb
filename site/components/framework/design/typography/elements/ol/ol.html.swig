<ol class="ol">
  {% for item in items %}
    <li>{{ item | safe }}</li>
  {% endfor %}
</ol>
