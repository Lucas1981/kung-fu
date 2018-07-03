import sprites from './sprites';
import Animation from './Animation';
import { LOOP_TYPES, States } from './constants';

const FRAMES_PER_SECOND = 8 / 1000;

export default class AnimationFactory {

  private image: any;
  private loadingPromise: any;
  private imageData: any;
  private static singletonAnimationFactory: AnimationFactory = null;

  constructor() {
    let that: any = this;

    this.image = new Image();
    this.image.src = './img/players.png';
    this.loadingPromise = new Promise((resolve, reject) => {
      that.image.onload = () => {
        let canvas = document.createElement('canvas');
        let context = canvas.getContext('2d');
        canvas.width = that.image.width;
        canvas.height = that.image.height;
        context.drawImage(that.image, 0, 0);
        that.imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        resolve();
      };
    });
  }

  public getLoadingPromise(){
    return this.loadingPromise;
  }

  public getPlayerAnimations(baseName: string = "player1") {
    let animations: any = {};
    for(let key in States) {
      let state = States[key];
      let sprite = this.getSpriteWithName(sprites, baseName + '.' + state);
      animations[baseName + '.' + state] = new Animation(
        FRAMES_PER_SECOND,
        sprite,
        this.image
      );
    }
    return animations;
  }

  public getImageData(): any {
    return this.imageData;
  }

  public static getSingletonAnimationFactory() {
    if(this.singletonAnimationFactory === null) {
      this.singletonAnimationFactory = new AnimationFactory();
    }
    return this.singletonAnimationFactory;
  }

  private getSpriteWithName(sprites, name) {
    for(let i = 0; i < sprites.length; i++) {
      if(sprites[i].name == name) return sprites[i];
    }
    return null;
  }

};
