import { LightningElement } from 'lwc';

export default class DayTracker extends LightningElement {
    value = '';
    options = [
        {name : 'eat', value : 'eat'},
        {name : 'drink', value : 'drink'},
        {name : 'sleep', value : 'sleep'}
    ]
    handleChange(ev){
        console.log('SElected > ' + ev.detail.name);
    }
}
