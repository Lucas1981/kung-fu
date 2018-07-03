export default class Background {

  private image: any = null;
  private loadingPromise: any = null;
  private imageData: any = null;

  constructor() {
    let that: any = this;

    this.image = new Image();
    this.image.src = './img/background.png';
    this.loadingPromise = new Promise((resolve, reject) => {
      that.image.onload = () => {
        let newCanvas = document.createElement('canvas');
        let newContext = newCanvas.getContext('2d');
        newCanvas.width = this.image.width;
        newCanvas.height = this.image.height;
        newContext.drawImage(this.image, 0, 0);
        that.imageData = newContext.getImageData(0, 0, newCanvas.width, newCanvas.height);
        resolve();
      };
    });
  }

  public getLoadingPromise(){
    return this.loadingPromise;
  }

  public draw(ctx) {
    ctx.drawImage(this.image, 0, 0);
  }

  public drawImageData(contextData) {
    for(let i = 0; i < this.imageData.data.length; i++) {
      contextData.data[i] = this.imageData.data[i];
    }
  }

}
