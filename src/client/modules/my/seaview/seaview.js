/* eslint-disable radix */
import { LightningElement, api } from 'lwc';
export default class Seaview extends LightningElement {
   stopBtn = this.template.querySelector('#btn1');
   eyes = this.template.querySelectorAll('.eye');
   // boats = this.template.querySelectorAll('.boat');
   startBtn = this.template.querySelector('#btn');
   x = 5;
   y = -5;
   dx = 1;
   dy = -1;
   timerId;
   @api source; // To refer jsfiddle link if any

   connectedCallback() {
      setInterval(() => {
         let boats = this.template.querySelectorAll('.boat');
         boats.forEach((boat) => {
            let boatLeft = parseInt(
               window.getComputedStyle(boat).left.split('px')[0]
            );
            let boatWidth = parseInt(
               window.getComputedStyle(boat).width.split('px')[0]
            );
            console.log('boatLeft' + boatLeft);
            console.log('boatWidth' + boatWidth);
            console.log('window.innerWidth->' + window.innerWidth);

            if (boatLeft + boatWidth < 800) {
               //800px is container size
               boatLeft += 1;
            } else {
               boatLeft = 0;
            }
            boat.style.left = `${boatLeft}px`;
         });
      }, 100);
   }
}
