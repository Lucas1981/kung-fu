export const CONTROL_CONFIG = [
  {
    up: 'up',
    down: 'down',
    left: 'left',
    right: 'right',
    punch: 'zero',
    kick: 'enter'
  },
  {
    up: 'altUp',
    down: 'altDown',
    left: 'altLeft',
    right: 'altRight',
    punch: 'z',
    kick: 'x'
  }
];

export enum States {
    standing = "standing",
    walking = "walking",
    kicking = "kicking",
    punching = "punching",
    ducking = "ducking",
    duckPunch = "duckPunch",
    duckKick = "duckKick",
    jump = "jump",
    jumpKick = "jumpKick",
    jumpTop = "jumpTop",
    hit = "hit",
    dead = "dead"
};

export enum Directions {
  left = "left",
  right = "right"
};

export const LOOP_TYPES = {
  none: "none",
  loop: "loop",
  loopBackAndForth: "loopBackAndForth"
};

export const MAX_WIDTH = 780;
export const MAX_HEIGHT = 413;
