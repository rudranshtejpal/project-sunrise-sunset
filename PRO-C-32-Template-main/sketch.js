const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hour,backgroundImg;


var bg ;

function preload() {
    // create getBackgroundImg( ) here3

    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add conditionto check if any background image is there to add
if(backgroundImg)
background(backgroundImg)

    Engine.update(engine);

    // write code to display time in correct format here
    if (hour>=12){
        text("time:"+hour%12+"pm",50,100)
    }else if(hour===0){
        text("time:12 am",100,100)
    }else{
         text("time:"+hour%12+"am",50,100)
    }

}

async function getBackgroundImg(){

    var response =await fetch("http://www.worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseType=await response.json()
    var dateTime=responseType.datetime
    hour=dateTime.slice(11,13)
     
     
    // write code to fetch time from API


    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06){
        bg="sunrise1.png"
    }else if(hour>=06 && hour<=08){
        bg="sunrise2.png"
    }else if(hour>=23 && hour===0){
        bg="sunrise10.png"
    }else if(hour==0 && hour<03){
        bg="sunrise11.png"
    }else{
        bg="sunrise12.png"
    }


    //load the image in backgroundImg variable here
backgroundImg=loadImage(bg)
}
