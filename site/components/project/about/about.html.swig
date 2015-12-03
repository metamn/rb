<section class="about">
  <h3>About</h3>

  <article class="about__bio">
    <h3>Bio</h3>

    {% for p in about %}
      <p class="p">{{ p }}</p>
    {% endfor %}
  </article>
</section>
