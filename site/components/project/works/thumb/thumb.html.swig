{% import "../../../framework/helpers/filter/filter.swig" as f  %}
{% set years = f.filter('year', work.years) %}
{% set techniques = f.filter('technique', work.techniques) %}

<article class="thumb {{ years }} {{ techniques }} year-all technique-all">
  <h3>{{ work.title }}</h3>

  {% set image = work.thumbnail %}
  {% include '../../../framework/structure/figure/figure.html.swig' %}
</article>
