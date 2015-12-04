<section class="contact">
  <h3>Contact</h3>

  <div class="contact__links">
    {% for link in contact.links %}
      {% include '../../framework/design/typography/elements/link/link.html.swig' %}
    {% endfor %}
  </div>
</section>
