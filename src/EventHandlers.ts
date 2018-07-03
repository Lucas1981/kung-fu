export default class EventHandlers {
  constructor() {

  }

  public static attach(newGame) {

    let resetGameButton = document.getElementById('reset-game-button');
    resetGameButton.addEventListener('click', () => {
      newGame();
      resetGameButton.blur();
    });

    let controlsButton = document.getElementById('controls');
    controlsButton.addEventListener('click', () => {
      alert(`Controls:

Player1:

Jump = Up arrow
Duck = Down arrow
Left = Left arrow
Right = Right arrow
Kick = Enter
Punch = Zero

Player2:

Jump = 'w'
Duck = 's'
Left = 'a'
Right = 'd'
Kick = 'z'
Punch = 'x'`);
      controlsButton.blur();
    });

  }
}
