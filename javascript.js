var ready = false;

//declare instruments
let osc;
let synth;

var volumeModifier = -5;
var frequencyModifier = 10; //220hz same as note A3

var directionOfNote = 10;


//initial function call
function setup() {
    createCanvas(windowWidth, windowHeight);

    //initialize an oscillator
    osc = new Tone.Oscillator(); //set du default 440, equals note A4
    osc.connect(Tone.Master); // or I could use osc.toDestination() as a shorthand 

    //initialize a synth 
    synth = new Tone.Synth();
    synth.connect(Tone.Master);

}

$(function(){
setInterval(oneSecondFunction, 100);
});

//this function gets called every second
function oneSecondFunction() {

/*     //volumeModifier--;
    frequencyModifier = frequencyModifier + directionOfNote;


    //changes the volume
    Tone.Master.volume.value = volumeModifier;

    osc.frequency.value = frequencyModifier;

    synth.frequency.value = frequencyModifier -10;

    if(frequencyModifier > 600)
    {
        frequencyModifier = 0;
    }
 */
    

    console.log(frequencyModifier)

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);

    if (ready) {
        //do audio stuff

       // osc.volume.value = mouseX
        
        osc.frequency.value = mouseY;

        fill(255);
        noStroke();
        textAlign(CENTER, CENTER);
        text("CLICK TO MUTE", width/2, height/2); 

    }else {
        fill(255);
        noStroke();
        textAlign(CENTER, CENTER);
        text("CLICK PLAY", width/2, height/2); 
    }
}

function mousePressed() {
    if (!ready) {
        // start audio objects here
        
        // unmutes instruments after mousepress 
        if(osc.mute){
            osc.mute = false;
        }
        osc.start();
        ready = true;

        console.log("ready true")

    }else {

        osc.mute = true;
        
        ready = false;
        console.log("ready false")
    }  
}