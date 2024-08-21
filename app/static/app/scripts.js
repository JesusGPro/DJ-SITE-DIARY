new Vue({
  el: '#app',
  delimiters: ['[[', ']]'],
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
      },
      {
        "x": 3245.8,
        "y": 1353.84,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-20.jpg",
        "title": "Borehole display L7: BH-20"
    },
    {
        "x": 3251.8,
        "y": 1409.8,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-21.jpg",
        "title": "Borehole display L7: BH-21"
    },
        {
        "x": 3266.8,
        "y": 1454.8,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-22.jpg",
        "title": "Borehole display L7: BH-22"
    },
    {
        "x": 3277.8,
        "y": 1489.8,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-23.jpg",
        "title": "Borehole display L7: BH-23"
    },
    {
        "x": 3297.8,
        "y": 1538.8,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-24.jpg",
        "title": "Borehole display L7: BH-24"
    },
        {
        "x": 3329.8,
        "y": 1610.2,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-25.jpg",
        "title": "Borehole display L7: BH-25"
    },
    {
        "x": 3357.8,
        "y": 1674,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-26.jpg",
        "title": "Borehole display L7: BH-26"
    },
    {
        "x": 3367.8,
        "y": 1699,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-27.jpg",
        "title": "Borehole display L7: BH-27"
    },
    {
        "x": 3397.8,
        "y": 1766.2,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-28.jpg",
        "title": "Borehole display L7: BH-28"
    },
    {
        "x": 3420.8,
        "y": 1819.2,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-29.jpg",
        "title": "Borehole display L7: BH-29"
    },
    {
        "x": 3444.7,
        "y": 1873.2,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-30.jpg",
        "title": "Borehole display L7: BH-30"
    },
    {
        "x": 3453.8,
        "y": 1926.2,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-31.jpg",
        "title": "Borehole display L7: BH-31"
    },
    {
        "x": 3358,
        "y": 2055,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-34.jpg",
        "title": "Borehole display L7: BH-34"
    },
    {
        "x": 3428,
        "y": 1978,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-32.jpg",
        "title": "Borehole display L7: BH-32"
    },
    {
        "x": 3405,
        "y": 2005,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-33.jpg",
        "title": "Borehole display L7: BH-33"
    },
    {
        "x": 1139.4,
        "y": 2914.4,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-70.jpg",
        "title": "Borehole display L7: BH-70"
    },
    {
        "x": 814.5,
        "y": 2553.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-71.jpg",
        "title": "Borehole display L7: BH-71"
    },
    {
        "x": 831.2,
        "y": 2487.3,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-72.jpg",
        "title": "Borehole display L7: BH-72"
    },
    {
        "x": 843.7,
        "y": 2473.3,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-73.jpg",
        "title": "Borehole display L7: BH-73"
    },
    {
        "x": 958.3,
        "y": 3130.1,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/KBH-76.jpg",
        "title": "Borehole display L7: KBH-76"
    },
    {
        "x": 1041.7,
        "y": 3125.1,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/KBH-81.jpg",
        "title": "Borehole display L7: KBH-81"
    },
    {
        "x": 1161.7,
        "y": 3218.1,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/KBH-75.jpg",
        "title": "Borehole display L7: KBH-75"
    },
    {
        "x": 1409.3,
        "y": 3117.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-68.jpg",
        "title": "Borehole display L7: BH-68"
    },
    {
        "x": 1472.7,
        "y": 3156.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/KBH-103.jpg",
        "title": "Borehole display L7: KBH-103"
    },
    {
        "x": 1533.7,
        "y": 3181.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/KBH-35.jpg",
        "title": "Borehole display L7: KBH-35"
    },
    {
        "x": 1580.7,
        "y": 3209.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-67.jpg",
        "title": "Borehole display L7: BH-67"
    },
    {
        "x": 1588.7,
        "y": 3104.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/KBH-36.jpg",
        "title": "Borehole display L7: KBH-36"
    },
    {
        "x": 1650.7,
        "y": 3178.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/KBH-13.jpg",
        "title": "Borehole display L7: KBH-13"
    },
    {
        "x": 1679.3,
        "y": 3101.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/KBH-39.jpg",
        "title": "Borehole display L7: KBH-39"
    },
    {
        "x": 1703.3,
        "y": 3152.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/KBH-15.jpg",
        "title": "Borehole display L7: KBH-15"
    },
    {
        "x": 1843.3,
        "y": 3188.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-64.jpg",
        "title": "Borehole display L7: BH-64"
    },
    {
        "x": 1966,
        "y": 3140.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-63.jpg",
        "title": "Borehole display L7: BH-63"
    },
    {
        "x": 2026.4,
        "y": 3108.1,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-06.jpg",
        "title": "Borehole display L7: BH-06"
    },
    {
        "x": 2041.4,
        "y": 3113.1,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-01b.jpg",
        "title": "Borehole display L7: BH-01b"
    },
    {
        "x": 2055.4,
        "y": 3104.1,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-02b.jpg",
        "title": "Borehole display L7: BH-02b"
    },
    {
        "x": 2069.7,
        "y": 3079.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-05.jpg",
        "title": "Borehole display L7: BH-05"
    },
    {
        "x": 2096,
        "y": 3075.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/RGF-04.jpg",
        "title": "Borehole display L7: RGF-Boring No.4"
    },
    {
        "x": 3198,
        "y": 2238.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-38.jpg",
        "title": "Borehole display L7: BH-38"
    },
    {
        "x": 3160,
        "y": 2281.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-39.jpg",
        "title": "Borehole display L7: BH-39"
    },
    {
        "x": 3125,
        "y": 2328.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-40.jpg",
        "title": "Borehole display L7: BH-40"
    },
    {
        "x": 3319,
        "y": 2097.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-35.jpg",
        "title": "Borehole display L7: BH-35"
    },
    {
        "x": 3278,
        "y": 2138.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-36.jpg",
        "title": "Borehole display L7: BH-36"
    },
    {
        "x": 3237,
        "y": 2180.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-37.jpg",
        "title": "Borehole display L7: BH-37"
    },
    {
        "x": 1275.8,
        "y": 2916.3,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/KBH-42.jpg",
        "title": "Borehole display L7: KBH-42"
    },
    {
        "x": 1368.9,
        "y": 2907,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-17b.jpg",
        "title": "Borehole display L7: BH-17b"
    },
    {
        "x": 1407.8,
        "y": 2942,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/KBH-33.jpg",
        "title": "Borehole display L7: KBH-33"
    },
    {
        "x": 3087,
        "y": 2373.2,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-41.jpg",
        "title": "Borehole display L7: BH-41"
    },
    {
        "x": 3069.7,
        "y": 2396.2,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-42.jpg",
        "title": "Borehole display L7: BH-42"
    },
    {
        "x": 3032.7,
        "y": 2442.2,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-43.jpg",
        "title": "Borehole display L7: BH-43"
    },
    {
        "x": 2664.3,
        "y": 2760.2,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-51.jpg",
        "title": "Borehole display L7: BH-51"
    },
    {
        "x": 2611.1,
        "y": 2786.2,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-52.jpg",
        "title": "Borehole display L7: BH-52"
    },
    {
        "x": 2859.1,
        "y": 2635.8,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-47.jpg",
        "title": "Borehole display L7: BH-47"
    },
    {
        "x": 2815.6,
        "y": 2673.8,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-48.jpg",
        "title": "Borehole display L7: BH-48"
    },
    {
        "x": 2766.7,
        "y": 2706.1,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-49.jpg",
        "title": "Borehole display L7: BH-49"
    },
    {
        "x": 2716.2,
        "y": 2735.1,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-50.jpg",
        "title": "Borehole display L7: BH-50"
    },
    {
        "x": 2988.9,
        "y": 2496.4,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-44.jpg",
        "title": "Borehole display L7: BH-44"
    },
    {
        "x": 2938.34,
        "y": 2551,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-45.jpg",
        "title": "Borehole display L7: BH-45"
    },
    {
        "x": 2900.3,
        "y": 2596,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-46.jpg",
        "title": "Borehole display L7: BH-46"
    },
    {
        "x": 2559,
        "y": 2811.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-53.jpg",
        "title": "Borehole display L7: BH-53"
    },
    {
        "x": 2507.3,
        "y": 2837.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-54.jpg",
        "title": "Borehole display L7: BH-54"
    },
    {
        "x": 2455.3,
        "y": 2863.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-55.jpg",
        "title": "Borehole display L7: BH-55"
    },
    {
        "x": 2402.9,
        "y": 2888.5,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-56.jpg",
        "title": "Borehole display L7: BH-56"
    },
    {
        "x": 2350.9,
        "y": 2914.6,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-57.jpg",
        "title": "Borehole display L7: BH-57"
    },
    {
        "x": 2295.9,
        "y": 2942.6,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-58.jpg",
        "title": "Borehole display L7: BH-58"
    },
    {
        "x": 3349.6,
        "y": 987.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-16.jpg",
        "title": "Borehole display L7: BH-16"
    },
    {
        "x": 3272.6,
        "y": 1084.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-17.jpg",
        "title": "Borehole display L7: BH-17"
    },
    {
        "x": 3368.7,
        "y": 979.5,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/ABH-01.jpg",
        "title": "Borehole display L7: ABH-01"
    },
    {
        "x": 3380,
        "y": 984.5,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-05b.jpg",
        "title": "Borehole display L7: BH-05b"
    },
    {
        "x": 3393,
        "y": 993.5,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/ABH-15.jpg",
        "title": "Borehole display L7: ABH-15"
    },
    {
        "x": 3425,
        "y": 916.5,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-14.jpg",
        "title": "Borehole display L7: BH-14"
    },
    {
        "x": 3381.5,
        "y": 957.5,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-15.jpg",
        "title": "Borehole display L7: BH-15"
    },
    {
        "x": 2130.9,
        "y": 3084.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/RGF-09.jpg",
        "title": "Borehole display L7: RGF Boring No.9"
    },
    {
        "x": 2159.2,
        "y": 3071.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-61.jpg",
        "title": "Borehole display L7: BH-61"
    },
    {
        "x": 2246.2,
        "y": 2966.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-59.jpg",
        "title": "Borehole display L7: BH-59"
    },
    {
        "x": 2211.2,
        "y": 2999.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-60.jpg",
        "title": "Borehole display L7: BH-60"
    },
    {
        "x": 3459.3,
        "y": 883.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-13.jpg",
        "title": "Borehole display L7: BH-13"
    },
    {
        "x": 3452.9,
        "y": 865.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-18b.jpg",
        "title": "Borehole display L7: BH-18b"
    },
    {
        "x": 3470.9,
        "y": 859.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-187.jpg",
        "title": "Borehole display L7: BH-187"
    },
    {
        "x": 3490.1,
        "y": 843.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-12b.jpg",
        "title": "Borehole display L7: BH-12b"
    },
    {
        "x": 3497.1,
        "y": 819.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/RGF-05.jpg",
        "title": "Borehole display L7: RGF BH-05"
    },
    {
        "x": 3504.1,
        "y": 803.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/RGF-26.jpg",
        "title": "Borehole display L7: RGF BH-26"
    },
    {
        "x": 3520.1,
        "y": 784.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-150.jpg",
        "title": "Borehole display L7: BH-150"
    },
    {
        "x": 3516.1,
        "y": 762.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-137.jpg",
        "title": "Borehole display L7: BH-137"
    },
    {
        "x": 3525.1,
        "y": 744.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-11.jpg",
        "title": "Borehole display L7: BH-11"
    },
    {
        "x": 3526.1,
        "y": 725.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-125.jpg",
        "title": "Borehole display L7: BH-125"
    },
    {
        "x": 3568.4,
        "y": 624,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-77.jpg",
        "title": "Borehole display L7: BH-77"
    },
    {
        "x": 3550.8,
        "y": 638.4,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-10b.jpg",
        "title": "Borehole display L7: BH-10b"
    },
    {
        "x": 3550.7,
        "y": 616.4,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-86.jpg",
        "title": "Borehole display L7: BH-86"
    },
    {
        "x": 3550.4,
        "y": 663.4,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-96.jpg",
        "title": "Borehole display L7: BH-96"
    },
    {
        "x": 3549.4,
        "y": 584.8,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-09b.jpg",
        "title": "Borehole display L7: BH-09b"
    },
    {
        "x": 3566.4,
        "y": 595.7,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-69.jpg",
        "title": "Borehole display L7: BH-69"
    },
    {
        "x": 3563.4,
        "y": 564.8,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-63b.jpg",
        "title": "Borehole display L7: BH-63 (SM 15492)"
    },
    {
        "x": 3547.4,
        "y": 539.8,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-56R.jpg",
        "title": "Borehole display L7: BH-56R"
    },
    {
        "x": 3538.4,
        "y": 514.8,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-49R.jpg",
        "title": "Borehole display L7: BH-49R"
    },
    {
        "x": 3543.4,
        "y": 488.8,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-08b.jpg",
        "title": "Borehole display L7: BH-08b"
    },
    {
        "x": 3554.4,
        "y": 502.8,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-40R.jpg",
        "title": "Borehole display L7: BH-40R"
    },
    {
        "x": 3549.4,
        "y": 471.8,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-27b.jpg",
        "title": "Borehole display L7: BH-27 (SM 15492)"
    },
    {
        "x": 3520.4,
        "y": 441.4,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-18R.jpg",
        "title": "Borehole display L7: BH-18R"
    },
    {
        "x": 3517.4,
        "y": 410.4,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-75.jpg",
        "title": "Borehole display L7: BH-75"
    },
    {
        "x": 3543.4,
        "y": 712.1,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-106.jpg",
        "title": "Borehole display L7: BH-106"
    },
    {
        "x": 3552.4,
        "y": 695.1,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-105.jpg",
        "title": "Borehole display L7: BH-105"
    },
    {
        "x": 3539.4,
        "y": 681.1,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-115.jpg",
        "title": "Borehole display L7: BH-115"
    },
    {
        "x": 3559.4,
        "y": 677.11,
        "radius": 10,
        "fill": "yellow",
        "stroke": "black",
        "strokeWidth": 2,
        "image": "static/app/media/BH-126.jpg",
        "title": "Borehole display L7: BH-126"
    }
      ]
    ;

    circleConfig.forEach((config)=>{
      const circle = new Konva.Circle({
        x: config.x,
        y: config.y,
        radius: config.radius,
        fill: config.fill,
        stroke: config.stroke,
        strokeWidth: config.strokeWidth,
        zIndex: 1
      });

      // Add event listener to the circle
      circle.on('click', () => {
        const win = window.open('', '_blank');
        win.document.write(`
          <html>
            <head>
              <title>${config.title}</title>
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
              <img src="${config.image}" alt="${config.title}">
            </body>
          </html>
        `);
        win.document.close();
      });

      this.layer.add(circle);
    });
    this.stage.draw();
  }
})