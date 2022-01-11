import { LightningElement, api} from 'lwc';
export default class Clock extends LightningElement {
    timerId;
    hide = false;
    running = false;
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
                let h = now.getHours() * 15 + 90;
                let m = now.getMinutes() * 6 + 90;
                let s = now.getSeconds() * 6  + 90;
                this.template.querySelector('div.second').style.transform = `rotate(${s}deg)`;
                this.template.querySelector('div.min').style.transform = `rotate(${m}deg)`;
                this.template.querySelector('div.hour').style.transform = `rotate(${h}deg)`;
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
    }

    handleHideShow(event){
        this.hide = !this.hide;
        let current = event.target.label;
        switch(current){
            case 'Hide':
                this.showHide = 'Show'; break;
            case 'Start':
                this.showHide = 'Hdide'; break;
            default:
                break;
        }
    }
}
