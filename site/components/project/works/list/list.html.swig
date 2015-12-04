<div class="list">
  {% for item in items %}
    <div class="list__item list__item--active" data-attr="{{ attr }}-{{ item }}">{{ item }}</div>
  {% endfor %}
</div>
