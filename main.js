'use strict'

{
  class Panel {
    constructor() {
      const section = document.createElement('secton');
      section.classList.add('panel');

      this.img = document.createElement('img');
      this.img.src = this.getRandomImage();

      this.timeoutId = undefined;

      this.stop = document.createElement('div');
      this.stop.textContent = 'STOP';
      this.stop.classList.add('stop');
      this.stop.addEventListener('click', () => {
        clearTimeout(this.timeoutId);

        panelsLeft--;

        if (panelsLeft === 0) {
          checkResult();
        }
      });

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
      this.timeoutId = setTimeout(() => {
        this.spin();
      }, 50);
    }

    isUnmatched(p1) {
      if (this.img.src !== p1.img.src) {
        return true;
      } else {
        return false;
      }
    }
    
    unmatch() {
      this.img.classList.add('unmatched');
    }
  }

  function checkResult() {
    if (panels[0].isUnmatched(panels[1])) {
      panels[0].unmatch();
    }
    if (panels[1].isUnmatched(panels[0])) {
      panels[1].unmatch();
    }
  }

  const panels = [
    new Panel(),
    new Panel(),
  ];

  let panelsLeft = 2;

  const spin = document.getElementById('spin');
  spin.addEventListener('click', () => {
    panels.forEach(panel => {
      panel.spin();
    });
  });
}