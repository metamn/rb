<article class="slide">
  <h3 class="slide__title">{{ slide.title }}</h3>

  {% set image = slide.image %}
  {% include '../../../../framework/structure/figure/figure.html.swig' %}
</article>
