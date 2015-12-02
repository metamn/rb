<div class="slider__slides">
  {% for slide in slides %}
    {% set slide = slide %}
    {% include 'slide/slide.html.swig' %}
  {% endfor %}
</div>
