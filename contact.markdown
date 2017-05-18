---
title: Contact Us
icon: envelope
desc: Contact us by phone, email, or this convieniant form.
layout: page
---

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.7341686192194!2d-93.32924268432967!3d37.15901997987625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf640f3a829c1f%3A0x80fc2e52afe4986e!2s2418+W+Battlefield+Rd%2C+Springfield%2C+MO+65807!5e0!3m2!1sen!2sus!4v1495146019064" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>

<!-- Content -->
<div class="content">
  <div class="row 50%" align="left">
    <div class="6u 12u(mobile)">
      <h3><span class="icon fa-map-marker"></span> Address</h3>
      <p><strong>Missouri Tile</strong><br>
      2418 W Battlefield Rd <br>
      Springfield, MO 65807</p>

      <h3><span class="icon fa-phone"></span> Telephone</h3>
      <p> +1 417 889 8453</p>

      <h3><span class="icon fa-fax"></span> Fax</h3>
      <p>+1 417 889 2448</p>

    </div>

    <div class="6u 12u(mobile)">
      <h3><span class="icon fa-envelope"></span> E-mail</h3>
      <p><a href="mailto:{{ site.email }}">{{ site.email }}</a>	</p>

      <h3><span class="icon fa-clock-o"></span> Showroom Hours</h3>
      <p>Monday – Friday: 8:30am – 5pm<br>
      Saturday: 9am – 2pm</p>

      <h3><span class="icon fa-clock-o"></span> Warehouse Hours</h3>
      <p>Monday – Friday: 7:30am – 5pm<br>
      Saturday: 9am – 2pm</p>
    </div>
  </div>
  <form action="https://formspree.io/{{ site.email }}" method="POST">
    <div class="row 50%">
      <div class="6u 12u(mobile)">
        <input type="text" name="name" placeholder="Name" />
      </div>
      <div class="6u 12u(mobile)">
        <input type="email" name="_replyto" placeholder="Email" />
      </div>
    </div>
    <div class="row 50%">
      <div class="12u">
        <input type="text" name="_subject" placeholder="Subject" />
      </div>
    </div>
    <div class="row 50%">
      <div class="12u">
        <textarea name="message" placeholder="Message" rows="7"></textarea>
      </div>
    </div>
    <div class="row">
      <div class="12u">
        <ul class="buttons">
          <input type="hidden" name="_next" value="thankyou.html" />
          <li><input type="submit" class="special" value="Send Message" /></li>
        </ul>
      </div>
    </div>
  </form>
</div>
