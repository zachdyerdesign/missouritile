---
title: Video
icon: camera
desc: Watch our instructional tile installation videos.
layout: page
---

<!-- One -->
<section class="wrapper style4 container">

  <!-- Content -->
    <div class="content">

      <div class="row">
        {% for video in site.videos %}
        <div class="6u 12u(narrower)">
          <section>
            <a href="{{ video.url }}" class="image featured"><img src="http://img.youtube.com/vi/{{ video.youtube-id }}/0.jpg" alt="{{ video.title }}" /></a>
            <header>
              <h3><a href="{{ video.url }}">{{ video.title }}</a></h3>
            </header>
            <p>{{ video.excerpt }}</p>
          </section>
        </div>
        {% endfor %}
      </div>

    </div>

</section>
