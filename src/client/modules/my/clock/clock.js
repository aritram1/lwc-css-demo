import { LightningElement, track, api} from 'lwc';
export default class Clock extends LightningElement {
    timerId;
    hide = false;
    running = false;
    @track time = {};
    @api tz; @api offset; //TBD 
    connectedCallback(){
        this.start();
    }

    disconnectedCallback(){
        this.stop();
    }

    start(){
        if(!this.timerId){
            this.running = true;
            this.timerId = setInterval(()=>{
                let now = new Date();
                let rotateS = 6 * now.getSeconds();
                let rotateM = 6 * (now.getMinutes() + now.getSeconds()/60);
                let rotateH = 30 * (now.getHours() + (now.getMinutes()/60));
                
                this.template.querySelector('div.second-hand').style.transform = `rotate(${rotateS}deg)`;
                this.template.querySelector('div.min-hand').style.transform = `rotate(${rotateM}deg)`;
                this.template.querySelector('div.hour-hand').style.transform = `rotate(${rotateH}deg)`;

                this.time.h = now.getHours() === 0 ? 12 : now.getHours() < 12 ? now.getHours() : now.getHours() - 12;
                if(now.getHours() < 10) this.time.h = '0' + now.getHours();
                this.time.m = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
                this.time.s = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
                this.time.ampm = now.getHours() < 12 ? 'AM' : 'PM';            
            }, 1000);
        }
    }

    stop(){
        if(this.timerId){
            clearInterval(this.timerId);
            this.timerId = undefined;
            this.running = false;
        }
    }

    handleClick(){
        if(this.running) this.stop();
        else this.start();
        console.log(this.running);
        console.log(this.time.h);
    }

    handleHideShow(event){
        this.hide = !this.hide;
        let current = event.target.label;
        switch(current){
            case 'Hide':
                this.showHide = 'Show'; break;
            case 'Show':
                this.showHide = 'Hide'; break;
            default:
                break;
        }
    }
}
