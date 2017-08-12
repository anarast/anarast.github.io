const keys = [];

const keyCodeToFrequency = (() => {

  const notes = {
    65: 'C4',
    87: 'C#4',
    83: 'D4',
    69: 'D#4',
    68: 'E4',
    70: 'F4',
    84: 'F#4',
    71: 'G4',
    89: 'G#4',
    72: 'A4',
    85: 'A#4',
    74: 'B4',
    75: 'C5',
    // 79: 'C#5',
    // 76: 'D5',
    // 80: 'D#5',
    // 59: 'E5',
    // 186: 'E5',
    // 222: 'F5',
    // 221: 'F#5',
    // 220: 'G5'
  };

  return keyCode => {
    const note = notes[ keyCode ];
    if ( !note ) {
      return;
    }
    return note;
  };
})();

document.addEventListener('keydown', (event) => {
  const { keyCode } = event;
  keys[keyCode] = true;
  const frequency = keyCodeToFrequency(keyCode);
  if (frequency) {
    synth.triggerAttackRelease(frequency, '10n');
    console.log(frequency);

    document.getElementById(frequency).style.opacity = 0.5;
  }
}, false);

document.addEventListener('keyup', (event) => {
  const { keyCode } = event;
  keys[keyCode] = true;

  const frequency = keyCodeToFrequency(keyCode);
  if (frequency) {
    document.getElementById(frequency).style.opacity = 1;
  }
}, false);

var synth = new Tone.PolySynth(6, Tone.Synth, {
  "oscillator" : {
    "partials" : [0, 2, 3, 4],
  }
}).toMaster();
