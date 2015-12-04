<div class="list">
  {% for item in items %}
    <div class="list__item" data-attr="{{ attr }}-{{ item }}">{{ item }}</div>
  {% endfor %}
</div>
