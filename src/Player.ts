import { MAX_WIDTH, MAX_HEIGHT, States, Directions } from './constants';
import AnimationFactory from './AnimationFactory';
import Animation from './Animation';
import Collision from './Collision';
import Canvas from './Canvas';
import Sound from './Sound';

const DEBUG: boolean = true;
const STEP = 108;
const DIRECTION_CORRECTION = 6;
const JUMPSTEPS = [ -4, -3, -2, -1, 1, 2, 3, 4 ];
const PUNCH_DAMAGE = 5;
const KICK_DAMAGE = 10;
const HIT_TIME = 400;
const WIDTH_BOUNDARY = 64;

export default class Player {

  private state: States = States.standing;
  private strength: number = 100;
  private stateChanged: boolean = false;
  private previousState: States = States.standing;
  private animations: Animation[];
  private lastProgressMoment: any;
  private isJumping: boolean = false;
  private jumpIndex: number = 0;
  private yBeforeJumping: number = 0;
  private startedJumping: any = 0;
  private isPunching: boolean = false;
  private hasPunched: boolean = false;
  private isKicking: boolean = false;
  private hasKicked: boolean = false;
  private startedBeingHit: any = false;
  private startedPunching: any = 0;
  private startedKicking: any = 0;
  private startedHit: any = 0;
  private hasDied: boolean = false;
  private sound: Sound = null;

  constructor(
    private name: string,
    private positionX: number,
    private positionY: number,
    private direction: Directions,
    private controls: any,
    private controlsMap: any,
  ) {
    this.initiate();
  }

  private initiate() {
    let animationFactory = AnimationFactory.getSingletonAnimationFactory();
    this.animations = animationFactory.getPlayerAnimations(this.name);
    this.sound = Sound.getSingletonSound();
  }

  public draw(canvas) {
    let correctedX = Math.floor(this.positionX);
    correctedX += (this.direction === Directions.left ? DIRECTION_CORRECTION : -1 * DIRECTION_CORRECTION);

    if(this.stateChanged === true) {
      this.stateChanged = false;
      this.animations[this.name + '.' + this.state].reset();
    }

    this.animations[this.name + '.' + this.state].draw(
      correctedX, Math.floor(this.positionY), this.direction, canvas
    );
  }

  /* This is where we determine state and behaviour, which is most of the class */
  public progress() {

    let now: any = new Date();
    let elapsedTime: number = (+now) - (+this.lastProgressMoment);
    let distance = STEP * elapsedTime / 1000;

    if(this.strength <= 0 && !this.hasDied) {
      this.state = States.dead;
      this.hasDied = true;
      this.sound.playDyingSound();
      return;
    }

    /* Being hit takes precedent over all other states except death */
    if(this.state == States.hit) {
      let elapsedTimeSinceBeingHit = Math.abs((+now) - (this.startedHit));
      if(elapsedTimeSinceBeingHit >= HIT_TIME) {
        this.state = States.standing;
      }
      else {

        if(this.direction == Directions.right) {
          if(this.positionX - distance > WIDTH_BOUNDARY) {
            this.positionX -= distance;
          }
          else {
            this.positionX = WIDTH_BOUNDARY;
          }
        }

        if(this.direction == Directions.left) {
          if(this.positionX + distance < (MAX_WIDTH - WIDTH_BOUNDARY)) {
            this.positionX += distance;
          }
          else {
            this.positionX = MAX_WIDTH - WIDTH_BOUNDARY;
          }
        }

      }

      if(this.isJumping) {
        let elapsedTimeSinceStartedJumping = Math.abs((+now) - (+this.startedJumping));
        let index = Math.floor( ( JUMPSTEPS.length / 1000 ) * elapsedTimeSinceStartedJumping );
        if(index >= JUMPSTEPS.length) {
          this.isJumping = false;
          /* Make sure we come back where we started */
          this.positionY = this.yBeforeJumping;
        }
        else {
          this.positionY += JUMPSTEPS[index] * distance;
        }
      }
    }
    else {
      if(this.noWalkingKeyPressed()) this.state = States.standing;
      /* If we are not jumping, we can duck */
      if(this.controls[this.controlsMap.down] && !this.isJumping) {
        this.state = States.ducking;
      }
      /* If we are not ducking, punching or kicking then we can move left or right */
      if(this.canWalk() && this.controls[this.controlsMap.left]) {
        this.state = States.walking;
        this.direction = Directions.left;

        if(this.positionX - distance > WIDTH_BOUNDARY) this.positionX -= distance;
        else this.positionX = WIDTH_BOUNDARY;
      }
      if(this.canWalk() && this.controls[this.controlsMap.right]) {
        this.state = States.walking;
        this.direction = Directions.right;

        if(this.positionX + distance < (MAX_WIDTH - WIDTH_BOUNDARY)) this.positionX += distance;
        else this.positionX = MAX_WIDTH - WIDTH_BOUNDARY;
      }
      /* If we start jumping, we set the isJumping boolean to true and start the timer */
      if(this.controls[this.controlsMap.up]) {
        if(this.isJumping === false) {
          this.startedJumping = new Date();
          this.isJumping = true;
          this.yBeforeJumping = this.positionY;
          this.sound.playJumpSound();
        }
      }
      /* If we are not jumping, we can punch */
      if(this.controls[this.controlsMap.punch] && !this.isJumping && !this.hasPunched) {
        this.isPunching = true;
        this.hasPunched = true;
        this.startedPunching = new Date();
        this.sound.playSwingSound();
      }
      /* If punch is not being hit, release the possibility to punch (again) */
      if(!this.controls[this.controlsMap.punch]) {
        this.hasPunched = false;
      }

      /* Kicking */
      if(this.controls[this.controlsMap.kick] && !this.hasKicked) {
        this.isKicking = true;
        this.hasKicked = true;
        this.startedKicking = new Date();
        this.sound.playSwingSound();
      }
      if(!this.controls[this.controlsMap.kick]) {
        this.hasKicked = false;
      }

      if(this.isPunching) {
        let delta = (+now) - (+this.startedPunching);

        if(delta >= 150) {
          this.isPunching = false;
        }
        else if(this.state == States.ducking) {
          /* If we are ducking, then we need to set the state to duckPunch */
          this.state = States.duckPunch;
        }
        else {
          this.state = States.punching;
        }
      }

      if(this.isJumping) {
        let elapsedTimeSinceStartedJumping = Math.abs((+now) - (+this.startedJumping));
        let index = Math.floor( ( JUMPSTEPS.length / 1000 ) * elapsedTimeSinceStartedJumping );
        if(index >= JUMPSTEPS.length) {
          this.isJumping = false;
          /* Make sure we come back where we started */
          this.positionY = this.yBeforeJumping;
        }
        else {
          this.positionY += JUMPSTEPS[index] * distance;
          this.state = States.jump;
        }
      }

      if(this.isKicking) {
          let delta = (+now) - (+this.startedKicking);

          /* We can kick while jumping, standing or ducking, so all need to be handled */
          if(delta >= 300) {
            this.isKicking = false;
          }
          else if(this.state === States.ducking) {
            this.state = States.duckKick;
          }
          else if(this.isJumping === true) {
            this.state = States.jumpKick;
          }
          else {
            this.state = States.kicking;
          }
      }
    }

    this.checkStateChanged();

    this.lastProgressMoment = now;

  }

  public getState() {
    return this.state;
  }

  public getStrength() {
    return this.strength;
  }

  public isColliding(antagonist): boolean {
    let result = Collision.isColliding(this, antagonist);
    return result;
  }

  public getCurrentBox(): any {
    let correctedX: number = Math.floor(this.positionX);
    let currentFrame: any = this.animations[this.name + '.' + this.state].getCurrentFrame();

    correctedX += (
      this.direction === Directions.left ?
        DIRECTION_CORRECTION - currentFrame.width:
        -1 * DIRECTION_CORRECTION
      );

    return {
      x: correctedX,
      y: Math.floor(this.positionY) - currentFrame.height,
      width: currentFrame.width,
      height: currentFrame.height,
    }
  }

  public getCurrentFrame() {
    let currentFrame: any = this.animations[this.name + '.' + this.state].getCurrentFrame();
    return currentFrame;
  }

  public getName() {
    return this.name;
  }

  public handleCollision(antagonist: Player): void {

    let antagonistState: States = antagonist.getState();

    if(this.state == States.hit) return;

    if(antagonistState == States.kicking || antagonistState == States.jumpKick || antagonistState == States.duckKick) {
      this.startHit(KICK_DAMAGE);
      this.sound.playHitSound();
    }
    if(antagonistState == States.punching || antagonistState == States.duckPunch)  {
      this.startHit(PUNCH_DAMAGE);
      this.sound.playHitSound();
    }
  }

  public isDead() {
    return this.state == States.dead;
  }

  public getDirection() {
    return this.direction;
  }

  private startHit(damage) {
    this.strength -= damage;
    this.state = States.hit;
    this.startedHit = new Date();
  }

  private noWalkingKeyPressed() {
    for(let key in States) {
      if( this.controls[ this.controlsMap[ States[key] ] ] ) return false;
    }
    return true;
  }

  private checkStateChanged() {
    if(this.state !== this.previousState) {
      this.stateChanged = true;
      this.previousState = this.state;
    }
  }

  private canWalk() {
    return (
      this.state != States.ducking &&
      ( !this.isKicking || (this.isKicking && this.isJumping) ) &&
      !this.isPunching
    );
  }

};
