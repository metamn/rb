<aside class="works__years">
  <h3 class='title'>Work</h3>

  {% set items = years | reverse %}
  {% include '../list/list.html.swig' %}
</aside>
