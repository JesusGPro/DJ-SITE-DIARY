alert("JavaScript file loaded!");

new Vue({
    mounted() {
      const stage = new Konva.Stage({
        container: 'canvas-container',
        width: 4967,
        height: 3509
      });  
  
      const layer = new Konva.Layer();
      stage.add(layer);
  
      // Load circle data from external JSON file
      fetch('/static/app/circle-data.json')
        .then(response => response.json())
        .then(circleData => {
          circleData.forEach((circleConfig) => {
            const circle = new Konva.Circle({
              x: circleConfig.x,
              y: circleConfig.y,
              radius: circleConfig.radius,
              fill: circleConfig.fill,
              stroke: circleConfig.stroke,
              strokeWidth: circleConfig.strokeWidth
            });
            layer.add(circle);
  
            circle.on('click', (e) => {
              const coords = stage.getPointerPosition();
              const distance = Math.sqrt(Math.pow(coords.x - circle.x(), 2) + Math.pow(coords.y - circle.y(), 2));
              if (distance <= circle.radius()) {
                // Click occurred inside the circle
                // Show a window with an image
                const imgWindow = window.open('', 'Image', 'width=400,height=300,toolbar=no');
                imgWindow.document.write(`
                  <html>
                    <head>
                      <title>${circleConfig.title}</title>
                      <style>
                        body {
                          margin: 0;
                          padding: 0;
                          background-color: #f0f0f0;
                        }
                        img {
                          width: 100%;
                          height: 100%;
                          object-fit: contain;
                        }
                      </style>
                    </head>
                    <body>
                      <img src="${circleConfig.image}" alt="Image">
                    </body>
                  </html>
                `);
              }
            });
          });
  
          stage.draw();
        });
  
      // stage.on('click', (e) => {
      //   const coords = stage.getPointerPosition();
      //   const text = new Konva.Text({
      //     x: coords.x,
      //     y: coords.y,
      //     text: `X: ${coords.x}, Y: ${coords.y}`,
      //     fontSize: 50,
      //     fill: 'green'
      //   });
      //   layer.add(text);
      //   stage.draw();
      // });
    }
  }).$mount('#map');