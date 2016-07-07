zdd.slideshow = {
  config: {
    slides: [
      {
        "header": "Missouri Tile",
        "content": "A large variety of tiles.",
        "image": "images/slide1.jpg",
        "button": "Contact Us",
        "buttonLink": "contact.html"
      },
      {
        "header": "Quality tiles",
        "content": "Highest quality tiles on the market",
        "image": "images/slide2.jpg"
      },
      {
        "header": "We have the tiles for you",
        "content": "Commercial and residential tiles",
        "image": "images/slide3.jpg"
      }]
  },
  load: function() {
    var html = '<style>';
    html += '.item > span {';
    html += 'width: 100%;';
    html += 'height: 100%;';
    html += 'display: block;';
    html += 'background-repeat: no-repeat;';
    html += 'background-position: center;';
    html += 'background-size: 100%;';
    html += 'opacity: 0.5;';
    html += '}';
    html += '</style> ';

    html += '<!-- Carousel';
    html += '================================================== -->';
    html += '<div id="myCarousel" class="carousel slide" data-ride="carousel">';
    html += '<!-- Indicators -->';
    html += '<ol class="carousel-indicators">';
    for(var i = 0; i < this.config.slides.length; i++) {
      if(i === 0) {
        html += '<li data-target="#myCarousel" data-slide-to="'+i+'" class="active"></li>';
      } else {
        html += '<li data-target="#myCarousel" data-slide-to="'+i+'"></li>';
      }
    }
    html += '</ol>';
    html += '<div class="carousel-inner" role="listbox">';
    for(var i = 0; i < this.config.slides.length; i++) {
      if(i === 0) {
        html += '<div class="item active">';
      } else {
        html += '<div class="item">';
      }
      html += '<span style="background-image: url('+this.config.slides[i].image+')" alt=""></span>';
      html += '<div class="container">';
      html += '<div class="carousel-caption">';
      html += '<h1>'+this.config.slides[i].header+'</h1>';
      html += '<p>'+this.config.slides[i].content+'</p>';
      html += (this.config.slides[i].button) ? '<p><a class="btn btn-lg btn-primary" href="'+this.config.slides[i].buttonLink+'" role="button">'+this.config.slides[i].button+'</a></p>' : '';
      html += '</div>';
      html += '</div>';
      html += '</div>';
    }
    html += '<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">';
    html += '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>';
    html += '<span class="sr-only">Previous</span>';
    html += '</a>';
    html += '<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">';
    html += '<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>';
    html += '<span class="sr-only">Next</span>';
    html += '</a>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';

    document.write(html);
  }
};
