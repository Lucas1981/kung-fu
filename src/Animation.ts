import Canvas from './Canvas';
import { LOOP_TYPES, Directions } from './constants';

export default class Animation {

  private frame: number;
  private start: any;
  private imageData: any;

  constructor(
    private framesPerSecond: number,
    private state: any,
    private image: any,
  ) {
    this.frame = 0;
    this.start = new Date();
    this.initiate();
  }

  public reset(): number {
    this.start = new Date();
    return this.start;
  }

  public getCurrentFrame(): number {
    return this.state.frames[this.frame];
  }

  public draw(x: number, y: number, direction: Directions, contextData: any): boolean {
    let offsetX: number;
    let offsetY: number;
    let width: number;
    let height: number;

    this.frame = this.determineFrame();
    if(this.frame === -1) return false;

    offsetX = this.state.frames[this.frame].positionX;
    offsetY = this.state.frames[this.frame].positionY;
    width = this.state.frames[this.frame].width;
    height = this.state.frames[this.frame].height;

    for(let i = offsetX; i < offsetX + width; i++) {
      for(let j = offsetY; j < offsetY + height; j++) {
        let imageBasePointer = (i * 4) + (j * this.image.width * 4);

        /* Fix the image to the bottom */
        let contextBasePointer = (y - height + j - offsetY) * contextData.width * 4;

        if(direction == Directions.left) {
          /* Fix the image to the right */
          contextBasePointer += (x - width + i - offsetX) * 4;
        }
        else {
          /* Fix the image to the left */
          contextBasePointer += (x + width - i + offsetX) * 4;
        }

        if(this.imageData[imageBasePointer + 3] != 0) {
          contextData.data[contextBasePointer + 0] = this.imageData[imageBasePointer + 0];
          contextData.data[contextBasePointer + 1] = this.imageData[imageBasePointer + 1];
          contextData.data[contextBasePointer + 2] = this.imageData[imageBasePointer + 2];
          contextData.data[contextBasePointer + 3] = this.imageData[imageBasePointer + 3];
        }
      }
    }

    return true;
  }

  private initiate() {
    let newCanvas = document.createElement('canvas');
    let newContext = newCanvas.getContext('2d');
    newCanvas.width = this.image.width;
    newCanvas.height = this.image.height;
    newContext.drawImage(this.image, 0, 0);
    this.imageData = newContext.getImageData(0, 0, this.image.width, this.image.height).data;
  }

  private determineFrame(): number {
    let now: any = new Date();
    let elapsedTime: number = (+now) - (+this.start);
    let frame: number = Math.floor(this.framesPerSecond * elapsedTime);
    let compFrame: number;

    if(this.state.loopType == LOOP_TYPES.none) {
      /* If we hit the end of the loop, keep returning the last frame */
      if(frame >= this.state.frames.length) {
        frame = this.state.frames.length - 1;
      }
    }
    else if(this.state.loopType == LOOP_TYPES.loop && this.state.frames.length === 1) {
      frame = 0;
    }
    else if(this.state.loopType == LOOP_TYPES.loop) {
      frame %= this.state.frames.length;
    }
    else if(this.state.loopType == LOOP_TYPES.loopBackAndForth) {
      let compFrame: number = frame % Math.floor(this.state.frames.length * 1.5);
      if(compFrame >= this.state.frames.length) {
        frame = Math.floor(this.state.frames.length * 1.5) - compFrame;
      }
      else {
        frame = compFrame;
      }
    }
    else {
      frame = -1;
    }
    return frame;
  }
};
