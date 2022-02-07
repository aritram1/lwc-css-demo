import { LightningElement, api } from 'lwc';
export default class Perspective3D extends LightningElement {
   @api source; // To refer jsfiddle link if any
   box = this.template.querySelector('.box');
   container = this.template.querySelector('.container');
   btns = this.template.querySelectorAll("input[type='button']");
   infoPanel = this.template.querySelector('.infoPanel');
   spread = 0;
   perspective = 200;
   rotationX = 0;
   rotationY = 0;
   rotationZ = 0;
   boxInfo = {};

   handleClick(e) {
      console.log(`${e.target.value} clicked`);
      this.change(this.value);
   }

   change(name) {
      let dir = -1; //direction
      let n = name.toUpperCase(); //name of the button
      if (n.includes('INCREASE') || n.includes('+')) dir = 1;
      if (n.includes('SPREAD')) {
         this.spread += dir * 10;
         this.boxInfo.spread = this.spread;
         this.box.style.boxShadow = `2px 2px ${this.spread}px 2px blue`;
      } else if (n.includes('PERSPECTIVE')) {
         this.perspective += dir * 10;
         this.container.style.perspective = `${this.perspective}px`;
         this.boxInfo.perspective = this.perspective;
      } else if (n.includes('ROTATE X')) {
         this.rotationX += dir * 10;
         this.box.style.transform = `rotateX(${this.rotationX}deg)`;
         this.boxInfo.rotationX = this.rotationX;
      } else if (n.includes('ROTATE Y')) {
         this.rotationY += dir * 10;
         this.box.style.transform = `rotateY(${this.rotationY}deg)`;
         this.boxInfo.rotationY = this.rotationY;
      } else if (n.includes('ROTATE Z')) {
         this.rotationZ += dir * 10;
         this.box.style.transform = `rotateZ(${this.rotationZ}deg)`;
         this.boxInfo.rotationZ = this.rotationZ;
      } else if (n === 'RESET') {
         this.box.style.transform = 'none';
         this.box.style.boxShadow = 'none';
      }
      this.infoPanel.textContent = JSON.stringify(this.boxInfo);
   }
}
