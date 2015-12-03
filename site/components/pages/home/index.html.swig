{% extends '../../project/templates/default/default.html.swig' %}
{% block content %}

  {% set bullets = slider %}
  {% include '../../project/slider/__bullets/slider__bullets.html.swig' %}

  {% set slider = slider %}
  {% include '../../project/slider/slider.html.swig' %}

  {% include '../../project/about/about.html.swig' %}

  {% set parallax = parallax %}
  {% include '../../project/parallax/parallax.html.swig' %}

{% endblock %}
