<aside class="works__years">
  <h3 class='title'>Work</h3>

  {% set items = years | reverse %}
  {% set attr = 'year' %}
  {% include '../list/list.html.swig' %}
</aside>
