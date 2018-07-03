import './style.css';
import KeyboardInput from './KeyboardInput';
import AnimationFactory from './AnimationFactory';
import NextAnimationFrameFactory from './NextAnimationFrameFactory';
import Canvas from './Canvas';
import Player from './Player';
import Background from './Background';
import EventHandlers from './EventHandlers';
import { CONTROL_CONFIG, MAX_WIDTH, MAX_HEIGHT, Directions } from './constants';
import Sound from './Sound';

(function() {

    'use strict';

    /* Variables */

    let gameOver = false;
    let keyboardInput: KeyboardInput = new KeyboardInput();
    let request: NextAnimationFrameFactory = new NextAnimationFrameFactory();
    let canvas: Canvas = Canvas.getSingletonCanvas(MAX_WIDTH, MAX_HEIGHT);
    let context = canvas.getContext();
    let animationFactory: AnimationFactory = AnimationFactory.getSingletonAnimationFactory();
    let player: Player = null;
    let contextData = canvas.getContextData();
    let players: Player[] = null;
    let background = new Background();
    let sound = Sound.getSingletonSound();
    let promises = [
      background.getLoadingPromise(),
      animationFactory.getLoadingPromise(),
      sound.getLoadingPromise()
    ];

    /* Initiation */

    Promise.all(promises).then( () => {

      EventHandlers.attach(newGame);
      newGame();
      loop();

    });

    /* Functions */

    function newGame() {
      players = [ new Player(
        "player1",
        Math.floor(MAX_WIDTH * .75),
        Math.floor(MAX_HEIGHT * .96),
        Directions.left,
        keyboardInput.state,
        CONTROL_CONFIG[0],
      ), new Player(
        "player2",
        Math.floor(MAX_WIDTH * .25),
        Math.floor(MAX_HEIGHT * .96),
        Directions.right,
        keyboardInput.state,
        CONTROL_CONFIG[1],
      )];
      gameOver = false;
    }

    function loop() {
      drawBackground();
      moveAndDrawObjects();
      drawHealthBars();
      if(!gameOver) isColliding();
      canvas.commit();
      window.requestAnimationFrame(loop);
    }

    function drawBackground() {
      background.drawImageData(contextData);
    }

    function moveAndDrawObjects() {
      for(let i = 0; i < players.length; i++) {
        if(!gameOver) players[i].progress();
        players[i].draw(contextData);
        if(players[i].isDead()) {
          gameOver = true;
        }
      }
    }

    function drawHealthBars() {
      canvas.drawHealthBar(40, 20, players[0].getStrength() );
      canvas.drawHealthBar(MAX_WIDTH -240, 10, players[1].getStrength() );
    }

    function isColliding() {
      for(let i = 0; i < players.length; i++) {
        let antagonist = findAntagonist(players[i], players);
        if(players[i].isColliding(antagonist)) {
          players[i].handleCollision(antagonist);
        }
      }
    }

    function findAntagonist(player, players) {
      for(let i = 0; i < players.length; i++) {
        if(players[i] != player) return players[i];
      }
      return null;
    }

})();
