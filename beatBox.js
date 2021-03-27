


class beatBox {
    constructor(x, y, w, h) {
        this.dragging = false; // Is the object being dragged?
        this.rollover = false; // Is the mouse over the ellipse?
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.offsetX = 0;
        this.offsetY = 0;
        this.beatsPerMin = 0;
        this.ready = false;
        this.tone = new Tone();
        this.bass = new Tone.MembraneSynth();
        this.bass.connect(this.tone.Master);
        this.loopBeat;
        // this.loopBeat = new Tone.Loop((time) => {
        // // triggered every eighth note.
        // let currentBeat = split (this.tone.Transport.position, ':');
        // if (currentBeat[1] == 0) {
        //     this.bass.triggerAttackRelease(30, 10, time);
        // }
        //     //console.log(time);
        // }, 0.1).start(0);
        this.tone.Transport.start();
        //Tone.Transport.start()
    }

    over() {
        // Is mouse over object
        if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
          this.rollover = true;
        } else {
          this.rollover = false;
        }
      }
    
      update() {
        // Adjust location if being dragged
        if (this.dragging) {
          this.x = mouseX + this.offsetX;
          console.log("this.x = " + this.x /100)
          this.y = mouseY + this.offsetY;
          if(this.ready){
            this.bass.volume.value = (mouseY + this.offsetY)/10;
          }
          console.log(this.bass.volume.value);
        }

        
      }
      
      show() {
        stroke(0);
        // Different fill based on state
        if (this.dragging) {
          fill(50);
        } else if (this.rollover) {
          fill(100);
        }else if (!this.ready){
            fill(0);
        }
         else {
          fill(175, 200);
        }
        rect(this.x, this.y, this.w, this.h);
      }
    
      pressed() {
        // Did I click on the rectangle?
        
        console.log(this.bass.volume.value);


        if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
          this.dragging = true;
          // If so, keep track of relative location of click to corner of rectangle
          this.offsetX = this.x - mouseX;
          this.offsetY = this.y - mouseY;

          //this.loopBeat = null;

          this.loopBeat = new Tone.Loop((time) => {
            // triggered every eighth note.
            let currentBeat = split (this.tone.Transport.position, ':');
            if (currentBeat[1] == 0) {
                this.bass.triggerAttackRelease(this.y/10, 1, time);
            }
                //console.log(time);
            }, this.x/10).start(0);
            this.tone.Transport.start();

          Tone.start();
          
          if (!this.ready) {
            // start audio objects here
            
            // unmutes instruments after mousepress 
            if(this.loopBeat.mute){
                this.loopBeat.mute = false;
            }
            
            this.ready = true;
    
            console.log("ready true")
    
        }else {
    
            this.loopBeat.mute = true;
            this.bass.triggerAttackRelease
            
            this.tone.Transport.stop()
            this.ready = false;
            console.log("ready false")
        }
            
           
       // this.loopBeat.start(0);
        }
      }
    
      released() {
        // Quit dragging
        this.dragging = false;
      }
    }

