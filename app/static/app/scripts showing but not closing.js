new Vue({
  el: '#app',
  delimiters: ['[[', ']]'],
  data: {
    message: 'Hello Vue! its working on Django'
  },
  mounted() {
    this.stage = new Konva.Stage({
      container: 'canvas-container',
      width: 4967,
      height: 3509
    });

    this.layer = new Konva.Layer();
    this.stage.add(this.layer);

    const circleConfig = [
      {
        "x": 3237.4,
        "y": 1158.4,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-18.jpg",
        "title": "Borehole display L7: BH-18"
      },
      {
        "x": 3229.1,
        "y": 1226.4,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-74.jpg",
        "title": "Borehole display L7: BH-74"
      },
        {
        "x": 3230,
        "y": 1279,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-19.jpg",
        "title": "Borehole display L7: BH-19"
      }
    ];

    // Add event listener to the "Close" button
    const closeButton = document.getElementById('modal-close');
    closeButton.addEventListener('click', () => {
      const modal = document.getElementById('modal');
      modal.style.display = 'none';
    });

    circleConfig.forEach((config)=>{
      const circle = new Konva.Circle({
        x: config.x,
        y: config.y,
        radius: config.radius,
        fill: config.fill,
        stroke: config.stroke,
        strokeWidth: config.strokeWidth
      });

      // Add event listener to the circle
      circle.on('click', () => {
        const modal = document.getElementById('modal');
        const modalImage = document.getElementById('modal-image');
        modalImage.src = config.image;
        modalImage.alt = config.title;
        modal.style.display = 'block';
      });

      this.layer.add(circle);
    });
    this.stage.draw();
  }
})