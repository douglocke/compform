const AMinorScale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const addOctaveNumbers = (scale, octaveNumber) => scale.map(note => {
  const firstOctaveNoteIndex = scale.indexOf('C') !== -1 ? scale.indexOf('C') : scale.indexOf('C#')
  const noteOctaveNumber = scale.indexOf(note) < firstOctaveNoteIndex ? octaveNumber - 1 : octaveNumber;
  return `${note}${noteOctaveNumber}`
});

const constructMajorChord = (scale, octave, rootNote) => {
  const scaleWithOctave = addOctaveNumbers(scale, octave);

  const getNextChordNote = (note, nextNoteNumber) => {
    const nextNoteInScaleIndex = scaleWithOctave.indexOf(note) + nextNoteNumber - 1;
    let nextNote;
    if (typeof(scaleWithOctave[nextNoteInScaleIndex]) !== 'undefined') {
      nextNote = scaleWithOctave[nextNoteInScaleIndex];
    } else {
      nextNote = scaleWithOctave[nextNoteInScaleIndex - 7];
      const updatedOctave = parseInt(nextNote.slice(1)) + 1;
      nextNote = `${nextNote.slice(0,1)}${updatedOctave}`;
    }

    return nextNote;
  }

  const thirdNote = getNextChordNote(rootNote, 3)
  const fifthNote = getNextChordNote(rootNote, 5)
  const chord = [rootNote, thirdNote, fifthNote] 

  return chord
}

const constructChords = (scale, octave) => {
  const scaleWithOctave = addOctaveNumbers(scale, octave);

  const getNextChordNote = (note, nextNoteNumber) => {
    const nextNoteInScaleIndex = scaleWithOctave.indexOf(note) + nextNoteNumber - 1;
    let nextNote;
    if (typeof(scaleWithOctave[nextNoteInScaleIndex]) !== 'undefined') {
      nextNote = scaleWithOctave[nextNoteInScaleIndex];
    } else {
      nextNote = scaleWithOctave[nextNoteInScaleIndex - 6];
      const updatedOctave = parseInt(nextNote.slice(1)) + 1;
      nextNote = `${nextNote.slice(0,1)}${updatedOctave}`;
    }

    return nextNote;
  }


  const chordArray = scaleWithOctave.map(note => {
    let thirdNote = getNextChordNote(note, 3)
    let fifthNote = getNextChordNote(note, 5)
   
    const chord = [note, thirdNote, fifthNote] 

    return chord
  })

  return chordArray;
}

Tone.Transport.bpm.value = 250

const IChord = constructMajorChord(AMinorScale, 4, 'C3');
const VChord = constructMajorChord(AMinorScale, 4, 'G3');
const VIChord = constructMajorChord(AMinorScale, 3, 'A3');
const IVChord = constructMajorChord(AMinorScale, 3, 'F3');

IChord.push('C2', 'E4')
VChord.push('G2', 'G4')
VIChord.push('A2', 'A4')
IVChord.push('F2', 'F4')

console.log(IChord);
console.log(VChord);
console.log(VIChord);
console.log(IVChord);


const synth = new Tone.PolySynth(5, Tone.Synth, {
  volume: -5,
  oscillator : {
		type : "sawtooth"
	}
}).toMaster();

const mainChords = [
  {'time': '8:0', 'note': IChord, 'duration': '4n'},
  {'time': '9:0', 'note': VChord, 'duration': '2n.'},
  {'time': '10:0', 'note': IVChord, 'duration': '4n'},
  {'time': '11:0', 'note': IChord, 'duration': '2n.'},
  {'time': '12:0', 'note': VChord, 'duration': '4n'},
];

const part = new Tone.Part(function(time, note){
  synth.triggerAttackRelease(note.note, note.duration, time);
}, mainChords).start(0);

const IChord1 = constructMajorChord(AMinorScale, 5, 'A4');
const VChord1 = constructMajorChord(AMinorScale, 5, 'E5');
const VIChord1= constructMajorChord(AMinorScale, 4, 'F4');
const IVChord1 = constructMajorChord(AMinorScale, 4, 'D4');

IChord.push('A3', 'G5')
VChord.push('E3', 'D5')
VIChord.push('F3', 'E5')
IVChord.push('D3', 'C5')


const mainChordPart = new Tone.PolySynth(5, Tone.Synth, {
  oscillator : {
    count: 6,
    spread: 80,
		type : "fatsawtooth"
	}
}).toMaster();

const highOctaveChords = [
  {'time': 0, 'note': IChord1, 'duration': '2n.'},
  {'time': '0:3', 'note': VChord1, 'duration': '4n'},
  {'time': '1:0', 'note': VIChord1, 'duration': '2n.'},
  {'time': '1:3', 'note': VChord1, 'duration': '4n'},
  {'time': '2:0', 'note': IVChord1, 'duration': '2n.'},
  {'time': '2:3', 'note': VChord1, 'duration': '4n'},
  {'time': '3:0', 'note': VIChord1, 'duration': '2n'},
  {'time': '3:2', 'note': VChord1, 'duration': '4n'},
  {'time': '3:3', 'note': IVChord1, 'duration': '4n'},
  {'time': '4:0', 'note': IChord1, 'duration': '2n.'},
  {'time': '4:3', 'note': VChord1, 'duration': '4n'},
  {'time': '5:0', 'note': VIChord1, 'duration': '2n.'},
  {'time': '5:3', 'note': VChord1, 'duration': '4n'},
  {'time': '6:0', 'note': IVChord1, 'duration': '2n.'},
  {'time': '6:3', 'note': VChord1, 'duration': '4n'},
  {'time': '7:0', 'note': VIChord1, 'duration': '2n'},
  {'time': '7:2', 'note': VChord1, 'duration': '4n'},
  {'time': '7:3', 'note': IVChord1, 'duration': '4n'},

  {'time': 17, 'note': IChord1, 'duration': '2n.'},
  {'time': '17:3', 'note': VChord1, 'duration': '4n'},
  {'time': '18:0', 'note': VIChord1, 'duration': '2n.'},
  {'time': '18:3', 'note': VChord1, 'duration': '4n'},
  {'time': '19:0', 'note': IVChord1, 'duration': '2n.'},
  {'time': '19:3', 'note': VChord1, 'duration': '4n'},
  {'time': '20:0', 'note': VIChord1, 'duration': '2n'},
  {'time': '20:2', 'note': VChord1, 'duration': '4n'},
  {'time': '20:3', 'note': IVChord1, 'duration': '4n'},
  {'time': '21:0', 'note': IChord1, 'duration': '2n.'},
  {'time': '21:3', 'note': VChord1, 'duration': '4n'},
  {'time': '22:0', 'note': VIChord1, 'duration': '2n.'},
  {'time': '22:3', 'note': VChord1, 'duration': '4n'},
  {'time': '23:0', 'note': IVChord1, 'duration': '2n.'},
  {'time': '23:3', 'note': VChord1, 'duration': '4n'},
  {'time': '24:0', 'note': VIChord1, 'duration': '2n'},
  {'time': '24:2', 'note': VChord1, 'duration': '4n'},
];

const highSynth  = new Tone.PolySynth(5, Tone.Synth, {
  volume: -16,
  count: 6,
  spread: 80,
  oscillator : {
		type : "fatsawtooth"
	}
}).toMaster();

const highOctaveChordPart = new Tone.Part(function(time, note){
  highSynth.triggerAttackRelease(note.note, note.duration, time, 0.5);
}, highOctaveChords).start(0);


const mainMelody = [
  {'time': '9:0', 'note': 'C4', 'duration': '8n'},
  {'time': '10:0', 'note': 'G4', 'duration': '8n'},
  {'time': '11:0', 'note': 'F4', 'duration': '8n'},
  {'time': '12:0', 'note': 'G4', 'duration': '8n'},
  {'time': '12:1', 'note': 'G4', 'duration': '8n'},
  {'time': '12:2', 'note': 'G4', 'duration': '8n'},

  {'time': '13:0', 'note': 'C4', 'duration': '8n'},
  {'time': '14:0', 'note': 'G4', 'duration': '8n'},
  {'time': '15:0', 'note': 'F4', 'duration': '8n'},
  {'time': '15:2', 'note': 'E4', 'duration': '8n'},
  {'time': '16:0', 'note': 'C4', 'duration': '8n'},

  {'time': '17:0', 'note': 'C4', 'duration': '8n'},
  {'time': '18:0', 'note': 'G4', 'duration': '8n'},
  {'time': '19:0', 'note': 'F4', 'duration': '8n'},
  {'time': '20:0', 'note': 'G4', 'duration': '8n'},
  {'time': '20:1', 'note': 'G4', 'duration': '8n'},
  {'time': '20:2', 'note': 'G4', 'duration': '8n'},

  {'time': '21:0', 'note': 'C4', 'duration': '8n'},
  {'time': '22:0', 'note': 'G4', 'duration': '8n'},
  {'time': '23:0', 'note': 'F4', 'duration': '8n'},
  {'time': '23:2', 'note': 'E4', 'duration': '8n'},
  {'time': '24:0', 'note': 'C4', 'duration': '8n'},
];


const synth2 = new Tone.Synth({
  oscillator : {
    volume: 5,
    count: 3,
    spread: 40,
		type : "fatsawtooth"
	}
}).toMaster();

const mainMelodyPart = new Tone.Part(function(time, note){
  synth2.triggerAttackRelease(note.note, note.duration, time);
}, mainMelody).start(0);


const lowPass = new Tone.Filter({
  frequency: 8000,
}).toMaster();

const snareDrum = new Tone.NoiseSynth({
  noise: {
    type: 'white',
    playbackRate: 3,
  },
  envelope: {
    attack: 0.001,
    decay: 0.20,
    sustain: 0.15,
    release: 0.03,
  },
}).connect(lowPass);

const snares = [
  { time: '0:2' },
  { time: '1:2' },
  { time: '2:2' },
  { time: '3:1' },
  { time: '3:2' },
  { time: '4:2' },
  { time: '5:2' },
  { time: '6:2' },
  { time: '7:1' },
  { time: '7:2' },
  { time: '12:2' },
  { time: '13:2' },
  { time: '14:2' },
  { time: '15:1' },
  { time: '15:2' },
  { time: '16:2' },
  { time: '17:2' },
  { time: '18:2' },
  { time: '19:2' },
  { time: '20:1' },
  { time: '20:2' },
  { time: '21:2' },
  { time: '22:2' },
  { time: '23:2' },
  { time: '24:1' },
  { time: '24:2' },
]

const snarePart = new Tone.Part(function(time){
  snareDrum.triggerAttackRelease('4n', time)
}, snares).start(0);


const kickDrum = new Tone.MembraneSynth({
  volume: 6
}).toMaster();

const kicks = [
  { time: '0:0' },
  { time: '0:2' },
  { time: '1:0' },
  { time: '1:2' },
  { time: '2:0' },
  { time: '2:2' },
  { time: '3:0' },
  { time: '3:2' },
  { time: '4:0' },
  { time: '4:2' },
  { time: '5:0' },
  { time: '5:2' },
  { time: '6:0' },
  { time: '6:2' },
  { time: '7:0' },
  { time: '7:2' },
  { time: '7:4:1' },
  { time: '7:4:2' },
  { time: '7:4:3' },
  { time: '7:4:4' },
  { time: '11:3' },
  { time: '11:4' },
  { time: '11:4:1' },
  { time: '11:4:2' },
  { time: '11:4:3' },
  { time: '11:4:4' },
  { time: '12:0' },
  { time: '13:2' },
  { time: '14:0' },
  { time: '14:2' },
  { time: '15:0' },
  { time: '15:2' },
  { time: '16:0' },
  { time: '16:2' },
  { time: '17:0' },
  { time: '17:2' },
  { time: '18:0' },
  { time: '18:2' },
  { time: '19:0' },
  { time: '19:2' },
  { time: '20:0' },
  { time: '20:2' },
  { time: '21:0' },
  { time: '21:2' },
  { time: '22:0' },
  { time: '22:2' },
  { time: '23:0' },
  { time: '23:2' },
  { time: '24:0' },
  { time: '24:2' },
];

const kickPart = new Tone.Part(function(time){
  kickDrum.triggerAttackRelease('C1', '8n', time)
}, kicks).start(0);


const bassline = [
  {'time': 0, 'note': 'A0', 'duration': '2n'},
  {'time': '0:3', 'note': 'F0', 'duration': '2n.'},
  {'time': '1:3', 'note': 'D0', 'duration': '2n.'},
  {'time': '2:3', 'note': 'F0', 'duration': '1:1'},
];

const bass = new Tone.Synth({
  oscillator : {
		type : "triangle"
	}
}).toMaster();

const bassPart = new Tone.Part(function(time, note){
  bass.triggerAttackRelease(note.note, note.duration, time);
}, bassline).start(0);


document.getElementById("play-button").addEventListener("click", function() {
  if (Tone.Transport.state !== 'started') {
    Tone.Transport.start();
  } else {
    Tone.Transport.stop();
  }
});


