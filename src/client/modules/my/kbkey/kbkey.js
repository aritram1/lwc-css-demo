import { LightningElement, api } from 'lwc';
export default class KBkey extends LightningElement {
   connectedCallback() {}
   @api source; // To refer jsfiddle link if any

   handleClick(e) {
      switch (e.target.label) {
         case 'Show All':
            e.target.label = 'Show 1';
            break;
         case 'Show 1':
            e.target.label = 'Show All';
            break;
         default:
            console.log('Default : ' + e.target.label);
            break;
      }
      this.template
         .querySelector('.container>div:first-child')
         .classList.toggle('hide');
      this.template
         .querySelector('.container>div:last-child')
         .classList.toggle('hide');
   }
}
