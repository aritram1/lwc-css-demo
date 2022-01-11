import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    handlepParentActive(){
        console.log('inside handlepParentActive');
    }
    
    handleActive(){
        console.log('inside handleActive');
    }
}
