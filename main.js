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
  }

  const panels = [
    new Panel(),
    new Panel(),
  ];
}