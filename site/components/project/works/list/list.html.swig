<div class="list">
  <div class="list__item list__item--active" data-attr="{{ attr }}-all">All</div>

  {% for item in items %}
    <div class="list__item" data-attr="{{ attr }}-{{ item }}">{{ item }}</div>
  {% endfor %}
</div>
