import { LightningElement, api } from 'lwc';
import util from './util';

export default class DayTracker extends LightningElement {
   @api source; // To refer jsfiddle link if any
   util = util();
   fillerWorkSelectedValue = '';
   dailyActivities = [];
   fillerWorkTypes = [];
   currentActivities = [];
   currentTime = '';

   connectedCallback() {
      this.dailyActivities = this.util.generateFakeDailyActivities();
      this.fillerWorkTypes = this.util.generateFakeFillerWorkTypes();
      this.currentActivities = this.util.generateFakeCurrentActivities();
      setInterval(() => {
         let today = new Date();
         this.currentTime = `
            ${today.getHours().toString().padStart(2, '0')}:
            ${today.getMinutes().toString().padStart(2, '0')}:
            ${today.getSeconds().toString().padStart(2, '0')}`;
      }, 1000);
   }

   handleFillerWorkChange(e) {
      this.fillerWorkSelectedValue = e.target.value;
      console.log('Filler work changed to :' + this.fillerWorkSelectedValue);
   }

   handleStartFillerWork() {
      // this.currentActivities = [this.currentActivities, {

      // }];
      console.log(`${this.fillerWorkSelectedValue} started at ${new Date()}`);
   }

   handleCompleteCurrentActivity(e) {
      console.log('Act Id : ' + e.target.dataset.actid);
   }

   handleDailyActivityComplete(e) {
      console.log('Act Id : ' + e.target.dataset.actid);
   }

   handleScroll(e) {
      if (e.target.classList.contains('up')) {
         console.log('In up scroll');
      } else {
         console.log('In down scroll');
      }
   }
}
