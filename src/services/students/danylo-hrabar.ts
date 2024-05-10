import IAnimationConfig from '../../models/animation-config';
import { IConfigLoaderService } from '../config-loader-interface';
import Constants from '../../constants/constants';
import IFrame from '../../models/frame';
import IPixelState from '../../models/pixel-state';
import { Colour } from '../../models/colour';

export class DanyloHrabarConfigLoaderService implements IConfigLoaderService {
  public getStudentName(): string {
    return 'Danylo Hrabar';
  }

  public getStudentEmail(): string {
    return 'danylohrabar@gmail.com';
  }

  public loadConfig(): IAnimationConfig {
    return {
      name: 'Danylo',
      surname: 'Hrabar',
      email: this.getStudentEmail(),
      projectName: 'Rave',
      personalProjectLink: 'https://google.com',
      header: Avatar(0),
      frames: generateFrames(),
    };
  }
}

const Avatar = (frameNumber: number): IFrame => {
  let result: IFrame = {
    frameNumber: frameNumber,
    pixels: []
  };

  result.pixels.push(
    { x: 1, y: 5, color: Colour.White },
    { x: 2, y: 6, color: Colour.White },
    { x: 3, y: 7, color: Colour.White },
    { x: 3, y: 8, color: Colour.White },
    { x: 3, y: 9, color: Colour.White },
    { x: 2, y: 8, color: Colour.White },
    { x: 1, y: 8, color: Colour.White },
    { x: 2, y: 10, color: Colour.White },
    { x: 1, y: 11, color: Colour.White },
    { x: 4, y: 8, color: Colour.White },
    { x: 5, y: 8, color: Colour.White },
    { x: 6, y: 8, color: Colour.White },
    { x: 7, y: 8, color: Colour.White },
    { x: 8, y: 8, color: Colour.White },
    { x: 9, y: 8, color: Colour.White },
    { x: 10, y: 8, color: Colour.White },
    { x: 11, y: 8, color: Colour.White },
    { x: 12, y: 8, color: Colour.White },
    { x: 11, y: 7, color: Colour.White },
    { x: 10, y: 7, color: Colour.White },
    { x: 10, y: 6, color: Colour.White },
    { x: 9, y: 5, color: Colour.White },
    { x: 10, y: 9, color: Colour.White },
    { x: 11, y: 9, color: Colour.White },
    { x: 10, y: 10, color: Colour.White },
    { x: 9, y: 11, color: Colour.White }
    
  );

  return result;
}

function generateFrames(): IFrame[] {
  const frames: IFrame[] = [];

  for (let frameNumber = 0; frameNumber < 10; frameNumber++) {
    const pixels: IPixelState[] = [];

    const slide = frameNumber;

    pixels.push(
        { x: 1 + slide, y: 5, color: Colour.White },
        { x: 2 + slide, y: 6, color: Colour.White },
        { x: 3 + slide, y: 7, color: Colour.White },
        { x: 3 + slide, y: 8, color: Colour.White },
        { x: 3 + slide, y: 9, color: Colour.White },
        { x: 2 + slide, y: 8, color: Colour.White },
        { x: 1 + slide, y: 8, color: Colour.White },
        { x: 2 + slide, y: 10, color: Colour.White },
        { x: 1 + slide, y: 11, color: Colour.White },
        { x: 4 + slide, y: 8, color: Colour.White },
        { x: 5 + slide, y: 8, color: Colour.White },
        { x: 6 + slide, y: 8, color: Colour.White },
        { x: 7 + slide, y: 8, color: Colour.White },
        { x: 8 + slide, y: 8, color: Colour.White },
        { x: 9 + slide, y: 8, color: Colour.White },
        { x: 10 + slide, y: 8, color: Colour.White },
        { x: 11 + slide, y: 8, color: Colour.White },
        { x: 12 + slide, y: 8, color: Colour.White },
        { x: 11 + slide, y: 7, color: Colour.White },
        { x: 10 + slide, y: 7, color: Colour.White },
        { x: 10 + slide, y: 6, color: Colour.White },
        { x: 9 + slide, y: 5, color: Colour.White },
        { x: 10 + slide, y: 9, color: Colour.White },
        { x: 11 + slide, y: 9, color: Colour.White },
        { x: 10 + slide, y: 10, color: Colour.White },
        { x: 9 + slide, y: 11, color: Colour.White },
    );

    frames.push({
      frameNumber: frameNumber,
      pixels: pixels,
    });
  }

  return frames;
}
