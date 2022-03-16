// //class approach
// export default class Util{
//     constructor(){
//         console.log('Util invoked at' + new Date().toLocaleTimeString()),
//     }
//     add(a,b){
//         return a+b,
//     }
// }

// function approach

export default function LoginUtil(){
    
    return {
        client_id :'3MVG9fe4g9fhX0E7rQAj1RID4yDleF8mdGj25.74_AQyBQQDZCnTCBehxp4hb.WzOkV4ZzvpwlFqlvn_8mbXt',
        client_secret : '707130F2DB959D40D26B949C2508BE6D0F52B049679E20B615DC557BCDBE9DF2',
        token_endpoint : 'https://login.salesforce.com/services/oauth2/token',
        auth_endpoint : 'https://login.salesforce.com/services/oauth2/authorize',
        redirect_uri : 'https://localhost',
        state: {
            token : '',
            expiresAt : null,
            instance_url : '',
            authorized : false,
            authCode : ''
        },

        //functions
        async getToken(){
            console.log('Inside getToken');
        },
        async refreshToken(){
            console.log('Inside refreshToken');
        },
        async getAuthorized(){
            console.log('Inside getAuthorized');
            if(!this.authorized){
                let loginData = new FormData();
                loginData.append("client_id", this.client_id);
                loginData.append("redirect_uri", this.redirect_uri);
                loginData.append("grant_type", 'password');
                loginData.append("client_Secret", this.client_secret);
                loginData.append("username", 'aritram1@gmail.com');
                loginData.append("password", 'Aritra1985#');

                let resp = await fetch(this.token_endpoint,{
                    method: 'POST',
                    body : loginData
                });
                let respBody = await resp.json();
                console.log('Authcode received as: ' + respBody.data);
                //this.authCode = resp;
                this.authorized = true;
            }
        },

        getOptions(){
            return [
                {label : 'eat', value : 'eat'},
                {label : 'drink', value : 'drink'},
                {label : 'sleep', value : 'sleep'}
            ];
        }
    }
}