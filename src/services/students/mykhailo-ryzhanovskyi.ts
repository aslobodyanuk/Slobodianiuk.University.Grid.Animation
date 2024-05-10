import IAnimationConfig from '../../models/animation-config';
import { IConfigLoaderService } from '../config-loader-interface';
import Constants from '../../constants/constants';
import IFrame from '../../models/frame';
import IPixelState from '../../models/pixel-state';
import { Colour } from '../../models/colour';

export class MykhailoRyzhanovskyiConfigLoaderService implements IConfigLoaderService {
  public getStudentName(): string {
    return 'Mykhailo Ryzhanovskyi';
  }

  public getStudentEmail(): string {
    return 'midzkage@gmail.com';
  }

  public loadConfig(): IAnimationConfig {
    return {
      name: 'Mykhailo',
      surname: 'Ryzhanovskyi',
      email: this.getStudentEmail(),
      projectName: 'TinderClone',
      personalProjectLink: 'https://gnomelove.azurewebsites.net',
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
        { x: 4, y: 8, color: Colour.White },
        { x: 5, y: 8, color: Colour.White },
        { x: 6, y: 9, color: Colour.White },
        { x: 6, y: 7, color: Colour.White },
        { x: 7, y: 9, color: Colour.White },
        { x: 7, y: 7, color: Colour.White },
        { x: 8, y: 6, color: Colour.White },
        { x: 8, y: 10, color: Colour.White },
        { x: 9, y: 6, color: Colour.White },
        { x: 9, y: 10, color: Colour.White },
        { x: 9, y: 5, color: Colour.White },
        { x: 9, y: 11, color: Colour.White },
        { x: 10, y: 6, color: Colour.White },
        { x: 10, y: 10, color: Colour.White },
        { x: 10, y: 5, color: Colour.White },
        { x: 10, y: 11, color: Colour.White },
        { x: 10, y: 4, color: Colour.White },
        { x: 10, y: 12, color: Colour.White },
        { x: 11, y: 4, color: Colour.White },
        { x: 11, y: 12, color: Colour.White },
        { x: 11, y: 7, color: Colour.White },
        { x: 11, y: 9, color: Colour.White },
        { x: 12, y: 8, color: Colour.White },

    );


    return result;
}
function generateFrames(): IFrame[] {
    const frames: IFrame[] = [];

    const centerX = 8;
    const centerY = 9; 

    const numParticles = 8;

    const originalPixels: IPixelState[] = Avatar(0).pixels;

    const fireworkStartFrame = 10;

    for (let frameNumber = 1; frameNumber < Constants.MaxTotalFrames; frameNumber++) {
        const pixels: IPixelState[] = [];

        const upwardMovement = frameNumber * 0.5;

        for (const pixel of originalPixels) {
            const movedPixel = { y: pixel.y, x: pixel.x - upwardMovement, color: pixel.color };
            pixels.push(movedPixel);
        }

        if (frameNumber >= fireworkStartFrame) {
            const fireworkParticles = generateFireworkParticles(centerX, centerY, numParticles, frameNumber - fireworkStartFrame);

            pixels.push(...fireworkParticles);
        }

        frames.push({
            frameNumber: frameNumber,
            pixels: pixels,
        });
    }

    return frames;
}

function generateFireworkParticles(centerX: number, centerY: number, numParticles: number, frameNumber: number): IPixelState[] {
    const particles: IPixelState[] = [];

    const angleIncrement = (2 * Math.PI) / numParticles;
    const radius = frameNumber * 0.2; 

    const upwardMovement = frameNumber * 0.4;

    for (let i = 0; i < numParticles; i++) {
        const angle = i * angleIncrement;
        const y = Math.round(centerX + radius * Math.cos(angle));
        const x = Math.round(centerY + radius * Math.sin(angle) - upwardMovement);

        particles.push({ x, y, color: Colour.White });
    }

    return particles;
}


