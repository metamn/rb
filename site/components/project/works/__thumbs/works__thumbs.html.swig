<aside class="works__thumbs">
  <h3 class="title">Works</h3>

  {% for work in works %}
    {% include '../thumb/thumb.html.swig' %}
  {% endfor %}
</aside>
