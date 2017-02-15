---
title: Products
icon: phone
desc: We have all your tile needs from tools to any material for tile projects
layout: page
---

{% for product in site.products %}
{% if product.subcategory %}{% else %}
{% cycle '<div class="row">', '' %}
<div class="6u 12u(narrower)">
  <section>
    <a href="{{ product.url }}" class="image featured"><img src="{{ site.github.url }}/images/{{ product.img }}" alt="{{ product.title }}" /></a>
    <header>
      <h3>{{ product.title }}</h3>
    </header>
    <p>{{ product.content }}</p>
  </section>
</div>
{% cycle '', '</div>' %}
{% endif %}
{% endfor %}

