{% extends '../../project/templates/default/default.html.swig' %}
{% block content %}

  {% set bullets = slider %}
  {% include '../../project/slider/__bullets/slider__bullets.html.swig' %}

  {% set slider = slider %}
  {% include '../../project/slider/slider.html.swig' %}

  {% set about = about %}
  {% include '../../project/about/about.html.swig' %}

  
{% endblock %}
