import { LightningElement, track, api } from 'lwc';
export default class Clock extends LightningElement {
   t = 0;
   //document.querySelector('#start').addEventListener('click', (e) => {
   //document.querySelector ('.container>div:first-child').classList.toggle('hide');
   //}) ;
   test() {
      console.log('hi');
      this.template
         .querySelector('.container>div:last-child')
         .classList.toggle('hide');
   }
}

let startBtn = document.querySelector('#btn');
let stopBtn = document.querySelector('#btn1');
let eyes = document.querySelectorAll('.eye');
let boats = document.querySelectorAll('.boat');
let x = 5;
let y = -5;
let dx = 1;
let dy = -1;
let timerId;

window.onload = function () {
   setInterval(() => {
      boats.forEach((boat) => {
         let boatLeft = window.getComputedStyle(boat).left.split('px')[0];
         let l = parseInt(boatLeft) + 1;
         if (l > window.innerWidth - 210) l = 0;
         boat.style.left = `${l}px`;
      });
   }, 100);
};

/*  startBtn.addEventListener('click', (e)=>{
   timerId = setInterval(()=>{
     
     //move eyes
     eyes.forEach(e=>{
       let bs = `${x}px ${y}px 0px 6px smokewhite`;
       console.log(bs);
       e.style.boxShadow = bs;
     });
     
     
     //set X
     x = x - 0.5 * dx;
     if(x == -5) dx = -1;
     if(x == 5) dx = 1;
     
     //set Y
     y = y - 0.1 * dy;
     if(y == -4) dy = -1;
     if(y == 3) dy = 1;
     
     console.log('x is ' + x + ' and dx is' + dx);
     //console.log('y is ' + x + ' and dy is' + dy);
     
     
     
     
   }, 100);
 });
 
 stopBtn.addEventListener('click', ()=>{
   if(timerId) clearInterval(timerId);
 }); */
