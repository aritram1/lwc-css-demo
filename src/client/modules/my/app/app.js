import { LightningElement } from 'lwc';

export default class App extends LightningElement {
   handleActive(e) {
      let activeTab = e.target.value;
      console.log('active tab is ' + activeTab);
      //this.template.querySelector('my-seaview').setrunning(true);

      // if (activeTab === 'three') {
      //    console.log('I am here');
      //    this.template.querySelector('my-seaview').setrunning(true);
      // } else {
      //    this.template.querySelector('my-seaview').setrunning(false);
      // }
   }
}
