{% extends '../../project/templates/default/default.html.swig' %}
{% block content %}

  {% set slider = slider %}
  {% include '../../project/slider/slider.html.swig' %}

  {% set about = about %}
  {% include '../../project/about/about.html.swig' %}

  {% set works = works %}
  {% set years = years %}
  {% set techniques = techniques %}
  {% include '../../project/works/works.html.swig' %}

  {% set contact = contact %}
  {% include '../../project/contact/contact.html.swig' %}
{% endblock %}
