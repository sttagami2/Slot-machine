'use strict'

{
  class Panel {
    constructor() {
      const section = document.createElement('secton');
      section.classList.add('panel');

      this.img = document.createElement('img');
      this.img.src = 'img/block.png'

      this.stop = document.createElement('div');
      this.stop.textContent = 'STOP';
      this.stop.classList.add('stop');

      section.appendChild(this.img);
      section.appendChild(this.stop);

      const main = document.querySelector('main');
      main.appendChild(section);
    }

    getRandomImage() {
      const images = [
        'img/sissors.png',
        'img/block.png',
        'img/paper.png',
      ];
      return images[Math.floor(Math.random() * images.length)];
    }

    spin() {
      this.img.src = this.getRandomImage();
    }
  }

  const panels = [
    new Panel(),
    new Panel(),
  ];

  const spin = document.getElementById('spin');
  spin.addEventListener('click', () => {
    panels.forEach(panel => {
      panel.spin();
    });
  });
}