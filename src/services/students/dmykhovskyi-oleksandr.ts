import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import { Colour } from '../../models/colour';
import IPixelState from '../../models/pixel-state';
import IFrame from '../../models/frame';

export class DmykhovskyiOleksandrConfigLoaderService implements IConfigLoaderService {
  private studentName: string = 'Oleksandr Dmykhovskyi';
  private studentEmail: string = 'ashadmykhovski@gmail.com';

  public getStudentName(): string {
    return this.studentName;
  }

  public getStudentEmail(): string {
    return this.studentEmail;
  }

  public loadConfig(): IAnimationConfig {
    const frames: IFrame[] = this.generateWFrames();

    return {
      name: this.studentName.split(' ')[0],
      surname: this.studentName.split(' ')[1],
      email: this.studentEmail,
      projectName: 'AVIDEP',
      personalProjectLink: 'https://azure-avidep.azurewebsites.net/',
      header: frames[0],
      frames: frames
    };
  }

  private generateWFrames(): IFrame[] {
    const wPixels: IPixelState[] = [
      { x: 4, y: 1, color: Colour.White }, 
      { x: 5, y: 1, color: Colour.White },
      { x: 3, y: 2, color: Colour.White }, 
      { x: 4, y: 2, color: Colour.White },
      { x: 5, y: 2, color: Colour.White }, 
      { x: 6, y: 2, color: Colour.White },
      { x: 2, y: 3, color: Colour.White }, 
      { x: 3, y: 3, color: Colour.White }, 
      { x: 4, y: 3, color: Colour.White }, 
      { x: 5, y: 3, color: Colour.White }, 
      { x: 6, y: 3, color: Colour.White }, 
      { x: 5, y: 4, color: Colour.White }, 
      { x: 5, y: 5, color: Colour.White }  
    ];
    
    
    const frames: IFrame[] = [];

    for (let frameNumber = 0; frameNumber < 10; frameNumber++) {
      const pixels: IPixelState[] = [];

      const yOffset = frameNumber; 

      pixels.push(...wPixels.map(pixel => ({...pixel, y: pixel.y + yOffset, color: Colour.White })));

      frames.push({
        frameNumber: frameNumber,
        pixels: pixels,
      });
    }

    return frames;
  }
}