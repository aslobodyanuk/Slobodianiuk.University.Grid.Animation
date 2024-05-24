import IAnimationConfig from '../../models/animation-config';
import { IConfigLoaderService } from '../config-loader-interface';
import IFrame from '../../models/frame';
import IPixelState from '../../models/pixel-state';
import { Colour } from '../../models/colour';

export class AnastasiaLiodaConfigLoaderService implements IConfigLoaderService {
  public getStudentName(): string {
    return 'Anastasia Lioda';
  }

  public getStudentEmail(): string {
    return 'nastyalioda@gmail.com';
  }

  public loadConfig(): IAnimationConfig {
    return {
      name: 'Anastasia',
      surname: 'Lioda',
      email: this.getStudentEmail(),
      projectName: 'RainbowAnimation',
      personalProjectLink: 'https://rainbowanimation.azurewebsites.net',
      header: GetHeader(),
      frames: GenerateFrames(),
    };
  }
}

function GenerateRainbowFrame(frameNumber: number): IFrame {
  const pixels: IPixelState[] = [];
  const rainbowSize = 10; 
  const rainbowSpeed = 0.2; 
  const centerX = (frameNumber * rainbowSpeed) % 16;
  const centerY = 7.5; 

  // Draw rainbow
  for (
    let x = Math.max(0, Math.floor(centerX) - rainbowSize);
    x <= Math.min(15, Math.floor(centerX) + rainbowSize);
    x++
  ) {
    for (
      let y = Math.max(0, Math.floor(centerY) - rainbowSize);
      y <= Math.min(15, Math.floor(centerY) + rainbowSize);
      y++
    ) {
      const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
      if (distance <= rainbowSize) {
        const colourIndex = Math.floor((frameNumber * rainbowSpeed) % 7);
        const colours = [Colour.White, Colour.White, Colour.White, Colour.White, Colour.White, Colour.White, Colour.White];
        pixels.push({ x, y, color: colours[colourIndex] });
      }
    }
  }

  const frame: IFrame = {
    frameNumber,
    pixels,
  };

  return frame;
}

function GenerateFrames(): IFrame[] {
  const frames: IFrame[] = [];

  for (let frameNumber = 0; frameNumber < 100; frameNumber++) {
    frames.push(GenerateRainbowFrame(frameNumber));
  }

  return frames;
}

function GetHeader(): IFrame {
  return GenerateRainbowFrame(0);
}