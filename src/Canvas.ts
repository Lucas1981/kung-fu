const BACKGROUND = [0, 40, 53, 256];

export default class Canvas {

  private canvasPointer;
  private context;
  private contextData;
  private static singletonCanvas: Canvas = null;

  constructor(maxWidth, maxHeight, background = BACKGROUND) {
    this.canvasPointer = document.getElementById('canvas');
    this.context = this.canvasPointer.getContext("2d");
    this.canvasPointer.width = maxWidth;
    this.canvasPointer.height = maxHeight;
    this.contextData = this.context.getImageData(0, 0, maxWidth, maxHeight);
  }

  public getContext() {
    return this.context;
  }

  public get width() {
    return this.canvasPointer.width;
  }

  public get height() {
    return this.canvasPointer.height;
  }

  public getContextData() {
    return this.contextData;
  }

  public commit() {
    this.context.putImageData(this.contextData, 0, 0);
  }

  public clearCanvas() {
    let data = this.contextData.data;

    for(let i = 0; i < data.length; i += 4) {
        data[i + 0] = BACKGROUND[0];
        data[i + 1] = BACKGROUND[1];
        data[i + 2] = BACKGROUND[2];
        data[i + 3] = BACKGROUND[3];
    }
  }

  public drawHealthBar(x, y, health) {
    let data = this.contextData.data;
    const factor = 2;

    for(let i = 0; i < 100 * factor; i++) {
      for(let j = 0; j < 40; j++) {
        let base = ( (x + i) * 4) + ( (y + j) * this.width * 4);
        if(health > Math.floor(i / factor) ) {
          data[base + 0] = 255;
          data[base + 1] = 255;
          data[base + 2] = 0;
          data[base + 3] = 255;
        }
        else {
          data[base + 0] = 255;
          data[base + 1] = 0;
          data[base + 2] = 0;
          data[base + 3] = 255;
        }
      }
    }
  }

  public rubberBand(sx, sy, dx, dy) {
    let color = { r: 255, g: 128, b: 0, a: 255 };
    for(let x = sx; x < dx; x++) {
      this.drawPixel(x, sy, color);
      this.drawPixel(x, dy, color);
    }

    for(let y = sy; y < dy; y++) {
      this.drawPixel(sx, y, color);
      this.drawPixel(dx, y, color);
    }
  }

  public drawScore(red, blue) {
    this.context.font = "bold 32px 'Courier New'";
    this.context.textAlign = "center";

    this.context.fillStyle = "red";
    this.context.fillText(red, this.canvasPointer.width / 2 - 100, 50);

    this.context.fillStyle = "blue";
    this.context.fillText(blue, this.canvasPointer.width / 2 + 100, 50);
  }

  public static getSingletonCanvas(maxWidth = 0, maxHeight = 0, background = BACKGROUND) {
    if(this.singletonCanvas === null) {
      this.singletonCanvas = new Canvas(maxWidth, maxHeight, background = BACKGROUND);
    }
    return this.singletonCanvas;
  }

  private drawPixel(x, y, color) {
    let data = this.contextData.data;
    let base = ( x * 4 ) + ( y * this.width * 4);
    data[base + 0] = color.r;
    data[base + 1] = color.g;
    data[base + 2] = color.b;
    data[base + 3] = color.a;
  }

};
