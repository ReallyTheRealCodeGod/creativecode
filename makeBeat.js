let loopBeat;
let bassSynth;
let bassSynth2;
let pluckSynth;

function setup() {
    createCanvas(640, 360);
    bassSynth = new Tone.MembraneSynth().toMaster();
    bassSynth2 = new Tone.MembraneSynth().toMaster();
    pluckSynth = new Tone.pluckSynth().toMaster();
    loopBeat = new Tone.Loop(song, '4n');
    Tone.Transport.start();
    
}

function song(time) {
    let currentBeat = split (Tone.Transport.position, ':');
    if (currentBeat[1] == 0) {
        bassSynth.triggerAttackRelease('c1', '8n', time);
    }
    // if (currentBeat[1] == 1) {
    //     bassSynth2.triggerAttackRelease('c3', '10n', time, 1);    
    // }
    // if (currentBeat[1] == 3) {
    //     bassSynth2.triggerAttackRelease('c4', '10n', time, 1);    
    // }
    // if (currentBeat[1] == 4) {
    //     bassSynth2.triggerAttackRelease('c1', '10n', time, 1);    
    // }
    // if (currentBeat[1] == 2) {
    //     pluckSynth.triggerAttackRelease('c1', '10n', time, 1);    
    // }
    
    console.log(Tone.Transport.position);

}

function mousePressed() {
    
    Tone.start();
    
    loopBeat.start(0);
    
}  