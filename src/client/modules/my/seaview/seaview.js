/* eslint-disable radix */
import { LightningElement, api } from 'lwc';
export default class Seaview extends LightningElement {
   x = 5;
   y = -5;
   dx = 1;
   dy = -1;
   timerId = '';
   containerSizeInPixel = 800; //800px is container size
   @api source; // To link original jsfiddle, if any
   controllers;

   get btnName() {
      return this.running ? 'Stop' : 'Start';
   }
   get running() {
      return this.timerId !== '';
   }
   connectedCallback() {
      console.log('calling connectedcallback');
      this.startScene();
   }

   startScene() {
      this.timerId = setInterval(() => {
         let boats = this.template.querySelectorAll('.boat');
         boats.forEach((boat) => {
            let boatLeft = parseInt(
               window.getComputedStyle(boat).left.split('px')[0]
            );
            let boatWidth = parseInt(
               window.getComputedStyle(boat).width.split('px')[0]
            );
            if (boatLeft + boatWidth < this.containerSizeInPixel) {
               boatLeft += 1;
            } else {
               boatLeft = 0;
            }
            boat.style.left = `${boatLeft}px`;
         });
      }, 100);
   }

   stopScene() {
      if (this.timerId) {
         clearInterval(this.timerId);
         this.timerId = '';
      }
   }

   renderedCallback() {
      console.log('Inside renderedcallback');
   }

   handleClick(e) {
      console.log(`${e.target.value} button clicked!`);
      switch (e.target.value) {
         case 'Start':
            e.target.value = 'Stop';
            this.startScene();
            break;
         case 'Stop':
            e.target.value = 'Start';
            this.stopScene();
            break;
         default:
            break;
      }
   }

   disconnectedCallback() {
      console.log('inside disconnectedcallback');
      this.stopScene();
   }
}
