<section class="slider">
  <h3 class="slider__title">{{ site.title }}</h3>

  {% set slides = slider %}
  {% include '__slides/slider__slides.html.swig' %}

  {% set bullets = slider %}
  {% include '__bullets/slider__bullets.html.swig' %}
</section>
