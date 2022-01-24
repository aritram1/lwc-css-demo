import { LightningElement, api } from 'lwc';
export default class Clock extends LightningElement {
   connectedCallback() {}
   @api source;

   handleClick() {
      this.template
         .querySelector('.container>div:first-child')
         .classList.toggle('hide');
      this.template
         .querySelector('.container>div:last-child')
         .classList.toggle('hide');
   }
}
