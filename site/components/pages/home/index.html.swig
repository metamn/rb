{% extends '../../project/templates/default/default.html.swig' %}
{% block content %}

  {% set slider = slider %}
  {% include '../../project/slider/slider.html.swig' %}

  {% set bullets = slider %}
  {% include '../../project/slider/__bullets/slider__bullets.html.swig' %}

{% endblock %}
