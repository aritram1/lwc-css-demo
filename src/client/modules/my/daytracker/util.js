//let jsforce = require('jsforce');
export default function LoginUtil() {
   let uname = 'aritram1@gmail.com.iot';
   let pwd = 'Aritra1985#';
   return {
      // loginresponse: {},
      // connectToSF: function () {
      //    let conn = new jsforce.Connection();
      //    conn.login(uname, pwd, function (err, res) {
      //       if (err) {
      //          this.loginresponse = { err: err };
      //       } else if (res) {
      //          this.loginresponse = { res: res };
      //       }
      //       return this.loginresponse;
      //    });
      // },

      ///////////////////////utility methods/////////////////
      generateFakeDailyActivities: function () {
         let temp = [];
         temp.push({
            Id: '100',
            name: 'lunch',
            start: '02.00PM',
            finish: '03.00PM',
         });
         temp.push({
            Id: '101',
            name: 'snacks',
            start: '07.00PM',
            finish: '08.00PM',
         });
         temp.push({
            Id: '102',
            name: 'dinner',
            start: '10.00PM',
            finish: '11.00PM',
         });
         temp.push({
            Id: '103',
            name: 'sleep',
            start: '11.30PM',
            finish: '05.00AM',
         });
         return temp;
      },
      generateFakeFillerWorkTypes() {
         let temp = [];
         temp.push({ Id: '200', label: 'Playing game', value: 'games' });
         temp.push({ Id: '201', label: 'Watching youtube', value: 'youtube' });
         temp.push({ Id: '202', label: 'Other', value: 'other' });
         return temp;
      },
      generateFakeCurrentActivities() {
         let temp = [];
         temp.push({
            Id: '300',
            name: 'Playing games',
            timeElapsed: 30,
            status: 'inprogress',
         });
         temp.push({
            Id: '301',
            name: '.......',
            timeElapsed: 20,
            status: 'inprogress',
         });
         temp.push({
            Id: '302',
            name: '........',
            timeElapsed: 40,
            status: 'inprogress',
         });
         return temp;
      },

      ///////////////////////utility methods/////////////////
   };
}
