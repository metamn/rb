<div class="parallax__slides">
  {% for slide in parallax %}
    {% set slide = slide %}
    {% include 'parallax-slide/parallax-slide.html.swig' %}
  {% endfor %}
</div>
