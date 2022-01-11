import { LightningElement } from 'lwc';
const SPEED = 1;
//import { util } from 'prettier';
//import LoginUtil from './util.js';

export default class DayTracker extends LightningElement {

    allValues = [];
    timerId;
    hour;min;sec;suffix;

    connectedCallback(){
        if(!this.timerId){
                this.timerId = setInterval(()=> {
                let today = new Date();
                let count = today.getSeconds() % 10;
                this.allValues = this.generate(count);

                this.suffix = today.getHours() > 12 ? 'PM' : 'AM';
                let hour = today.getHours() < 12 ? today.getHours() : today.getHours()-12;
                this.hour = hour.toString().padStart(2, '0');
                this.min = today.getMinutes().toString().padStart(2, '0');
                this.sec = today.getSeconds().toString().padStart(2, '0');

            }, 1000/SPEED);
        }
    }

    renderedCallback(){
        console.log('inside rendered callback');
        this.animate();
    }

    disconnectedCallback(){
        console.log('inside disconnected callback');
        if(this.timerId) clearInterval(this.timerId);
    }

    generate(count){
        if(count === 0) count = 10; //to round off
        let temp = [];
        for(let i=1; i<=count;i++){
            //let color = `rgba(138, 43, 226, ${i/10})`;
            temp.push({
                id: i,
                value: `Test ${i}`
            });
        }
        return temp;
    }

    animate(){
        let boxes = this.template.querySelectorAll("lightning-layout-item div");
        for(let i=0; i<boxes.length; i++){
            boxes[i].setAttribute('style', `background-color: rgba(138, 43, 226, ${i/10})`); 
        }
        console.log('boxes : ' + boxes.length);
    }



    
}