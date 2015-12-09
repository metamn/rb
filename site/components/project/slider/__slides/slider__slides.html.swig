<div class="slider__slides">
  <p class="title">{{ site.title }}</p>
  {% for slide in slides %}
    {% set slide = slide %}
    {% include 'slide/slide.html.swig' %}
  {% endfor %}
</div>
