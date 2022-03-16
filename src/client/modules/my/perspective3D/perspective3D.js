/* eslint-disable no-alert */
import { LightningElement, api } from 'lwc';
export default class Perspective3D extends LightningElement {
   @api source; // To refer jsfiddle link if any
   spread = 0;
   perspective = 200;
   rotationX = 0;
   rotationY = 0;
   rotationZ = 0;
   boxInfo = {};

   renderedCallback() {
      //this.reset();
   }

   get str_Spread() {
      console.log('spread is' + this.spread);
      return `Shadow spread : ${this.spread}`;
   }

   get str_Perspective() {
      return `Perspective : ${this.perspective}`;
   }

   get str_rotationX() {
      return `X ${this.rotationX}°`;
   }

   get str_rotationY() {
      return `Y ${this.rotationY}°`;
   }

   get str_rotationZ() {
      return `Z ${this.rotationZ}°`;
   }

   handleClick(e) {
      console.log(`${e.target.dataset.label} clicked`);
      this.change(e.target.dataset.label);
   }

   reset() {
      let b = this.template.querySelector('.box');
      b.style.transform = 'none';
      b.style.boxShadow = 'none';
      this.spread = 0;
      this.perspective = 50;
      this.rotationX = 0;
      this.rotationY = 0;
      this.rotationZ = 0;
   }

   change(labelName) {
      let box = this.template.querySelector('.box');
      let container = this.template.querySelector('.container');
      //let infoPanel = this.template.querySelector('.infoPanel');

      let dir = -1; //direction
      let n = labelName.toUpperCase(); //name of the button
      dir = n.includes('INCREASE') || n.includes('+') ? 1 : -1;
      if (n.includes('SPREAD')) {
         this.spread += dir * 10;
         if (this.spread < 0) this.spread = 0;
         box.style.boxShadow = `2px 2px ${this.spread}px 2px blue`;
         this.boxInfo.spread = this.spread;
         console.log('test' + this.boxInfo.spread);
         //this.str_Spread =
      } else if (n.includes('PERSPECTIVE')) {
         this.perspective += dir * 10;
         if (this.perspective > 300) this.perspective = 300;
         if (this.perspective < 10) this.perspective = 10;
         container.style.perspective = `${this.perspective}px`;
         this.boxInfo.perspective = this.perspective;
      } else if (n.includes('ROTATE X')) {
         this.rotationX += dir * 10;
         box.style.transform = `rotateX(${this.rotationX % 360}deg)`;
         this.boxInfo.rotationX = this.rotationX % 360;
      } else if (n.includes('ROTATE Y')) {
         this.rotationY += dir * 10;
         box.style.transform = `rotateY(${this.rotationY % 360}deg)`;
         this.boxInfo.rotationY = this.rotationY % 360;
      } else if (n.includes('ROTATE Z')) {
         this.rotationZ += dir * 10;
         box.style.transform = `rotateZ(${this.rotationZ % 360}deg)`;
         this.boxInfo.rotationZ = this.rotationZ % 360;
      } else if (n === 'RESET') {
         this.reset();
      }
      // infoPanel.textContent = JSON.stringify(this.boxInfo);
      // Gives LWC error, The `textContent` property is available only on elements that use the `lwc:dom="manual"` directive.
      // TBC
   }
}
