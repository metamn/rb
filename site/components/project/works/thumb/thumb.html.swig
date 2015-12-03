<article class="thumb">
  <h3>{{ work.title }}</h3>
  
  {% set image = work.thumbnail %}
  {% include '../../../framework/structure/figure/figure.html.swig' %}
</article>
