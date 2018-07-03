let singletonSound = null;

export default class Sound {

  constructor() {

    let that = this;

    window.AudioContext = window.AudioContext || window.webkitAudioContext || {};
    this.audioContext = new AudioContext();
    this.swingFileBuffer = null;
    this.hitBuffer = null;
    this.dyingBuffer = null;
    this.jumpBuffer = null;
    this.loadingPromise = null;

    let swingPromise = new Promise((resolve, reject) => {
      that.loadWavFile('./wav/swing.wav', (buffer) => {
        that.swingFileBuffer = buffer;
        resolve();
      });
    });
    let hitPromise = new Promise((resolve, reject) => {
      that.loadWavFile('./wav/hit.wav', (buffer) => {
        that.hitBuffer = buffer;
        resolve();
      });
    });
    let dyingPromise = new Promise((resolve, reject) => {
      that.loadWavFile('./wav/dying.wav', (buffer) => {
        that.dyingBuffer = buffer;
        resolve();
      });
    });
    let jumpPromise = new Promise((resolve, reject) => {
      that.loadWavFile('./wav/jump.wav', (buffer) => {
        that.jumpBuffer = buffer;
        resolve();
      });
    });

    this.loadingPromise = Promise.all( [swingPromise, hitPromise, dyingPromise, jumpPromise] );

  }

  getLoadingPromise() {
    return this.loadingPromise;
  }

  playHitSound() {
    this.playSoundFromFileBuffer(this.hitBuffer);
  }

  playSwingSound() {
    this.playSoundFromFileBuffer(this.swingFileBuffer);
  }

  playDyingSound() {
    this.playSoundFromFileBuffer(this.dyingBuffer);
  }

  playJumpSound() {
    this.playSoundFromFileBuffer(this.jumpBuffer);
  }

  playSoundFromFileBuffer(fileBuffer) {
    let source = this.audioContext.createBufferSource();
    source.buffer = fileBuffer;
    source.connect(this.audioContext.destination);
    source.start(0);
  }

  loadWavFile(filename, callback) {
    let request = new XMLHttpRequest();
    let thisBuffer = null;
    let that = this;
    request.open('GET', filename, true);
    request.responseType = 'arraybuffer';

    // Decode asynchronously
    request.onload = () => {
      this.audioContext.decodeAudioData(request.response, (buffer) => {
        let source = that.audioContext.createBufferSource();
        source.buffer = buffer;
        callback(buffer);
      }, (err) => {
        console.log('There was an error');
        console.log(err);
      });
    };
    request.send();
  }

  static getSingletonSound() {
    if(singletonSound === null) {
      singletonSound = new Sound();
    }
    return singletonSound;
  }

}
