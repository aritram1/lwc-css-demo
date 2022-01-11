import { LightningElement } from 'lwc';
import LoginUtil from './util.js';

export default class DayTracker extends LightningElement {
    util = LoginUtil();
    timerId;
    loading = false;
    currentTime;
    showStart = true;
    showFinish = false;
    postData = {
        t: "215"
    }
    get now(){ return this.currentTime;}
    set now(t){this.currentTime = t;}
    options = this.util.getOptions();
    

    

    // updateSFData(token){
    //     return new Promise((resolve, reject)=>{
    //         fetch(this.instance_url,{
    //             method: 'POST',
    //             header: {
    //                 'Authorization': `Bearer ${token}`
    //             },
    //             body : this.postData
    //         })
    //         .then(response=>{
    //           console.dir('Account response received!');
    //           return response.text();
    //         })
    //         .then(data=>{
    //           console.dir('Account response processed!');
    //           console.log('acc => ' + data);
    //           resolve(data); 
    //         })
    //         .catch(error=>{
    //           console.log('Error : ' + error);
    //           reject(error);
    //         }); 
    //     });
    // }

    handleStartFinish(event){
        let btnLabel = event.target.label;
        if(btnLabel === 'Finish') this.resetTimer();
        console.log('Clicked button : ' + btnLabel);
        console.log('Returned from getAuth : >> ' + this.util.getAuthorized());

        //this.loginToSF();
    }

    handleChange(ev){
        console.log('Selected > ' + ev.detail.value);
        this.loading = true;
    }

    connectedCallback(){
        if(!this.timerId){
            this.timerId = setInterval(()=>{
                this.now = Date.now();
            }, 1000);
        }
    }

    disconnectedCallback(){
        this.resetTimer();
    }

    resetTimer(){
        if(this.timerId) clearInterval(this.timerId);
        this.timerId = '';
    }

    async getAuthCode(){
        let endpoint = `${this.auth_endpoint}?response_type=code&client_id=${this.client_id}&redirect_uri=${this.redirectUrl}&scope=full`;
        const response = await fetch(endpoint);
        const data = await response.text();
        console.log('AuthCode received' + JSON.stringify(data));
    }

    

    
    async loginToSF(){
        this.getAuthCode();
        /*
        let authCode = await this.getAuthCode();
        if(this.token.expiresOn && this.token.expiresOn > )
        return new Promise((resolve, reject)=>{
            
            let loginData = new FormData();
            let responseData = {};
            loginData.append("username", this.username);
            loginData.append("password", this.password);
            loginData.append("client_id", this.client_id);
            loginData.append("client_secret", this.client_secret);
            loginData.append("grant_type", this.grant_type);
            console.dir('Logindata>' + loginData);
            fetch(this.auth_url,{
                method: 'POST',
                body : loginData
            })
            .then(res=>{
                console.log('Login response received!');
                return res.text();
            })
            .then(data=>{
                console.log('Login response processed!' + JSON.stringify(data));
                let d = JSON.parse(data);  
                this.token = d.access_token;
                this.instance_url = d.instance_url;
                console.log('Token : ' + this.token);
                console.log('instance_url : ' + this.instance_url);
                responseData.data = this.token;
                resolve(responseData);
            })
            .catch(error=>{
                console.log('Error occurred in the Login method : ' + error);
                responseData.error = error;
                reject(responseData);
            });  
        });
        */
    }

    // doCallout(endpoint, type, method){
    //     fetch(ep, method='POST', {
    //         method: method,
    //         body: {
    //             client_id : this.client_id,
    //             client_secret: this.client_secret,
    //             response_type: 'code'
    //         }
    //     });
    // }
}
