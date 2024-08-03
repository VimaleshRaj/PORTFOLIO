const boardwidth=500;
const boardheight=650;
const playerwidth=80;
const playerheight=10;
const playervelocityx=10;
const ballwidth=10;
const ballheight=10;
const ballvelocityx=3;
const blockwidth=50;
const  blockheight=10;
const blockcolumns=8;
const initialblockrows=3;
const bloackmaxrows=10;

let board;
let context;
let player;
let ball;
let blockArray=[];
let score=0;
let gameOver=false;

window.onload=function(){
  board=document.getElementById('board');
  board.width=boardwidth;
  board.height=boardheight;
  context=board.getContext('2d');
  player={
    x: boardwidth/2 - playerwidth/2,
    y: boardheight - playerheight - 5,
    width: playerheight,
    velocityx: playervelocityx
  };
  ball= 
}