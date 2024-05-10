import IAnimationConfig from "../../models/animation-config";
import { Colour } from '../../models/colour';
import IFrame from '../../models/frame';
import IPixelState from '../../models/pixel-state';
import { IConfigLoaderService } from "../config-loader-interface";



export class DenysNemyrkaConfigLoaderService implements IConfigLoaderService {
  private readonly studentName = 'Denys Nemyrka';
  private readonly studentEmail = 'nemurkadenus@gmail.com';

  public getStudentName(): string {
    return this.studentName;
  }

  public getStudentEmail(): string {
    return this.studentEmail;
  }

  public loadConfig(): IAnimationConfig {
    return {
      name: this.studentName,
      surname: 'Nemyrka',
      email: this.studentEmail,
      projectName: 'Babah',
      personalProjectLink: 'https://bookingproject.azurewebsites.net/',
      header: {
        frameNumber: 0,
        pixels: this.generateRotatingCircleFrame(21).pixels, // Initial frame
      },
      frames: this.generateAnimationFrames(),
    };
  }

  private generateRotatingCircleFrame(frameNumber: number): IFrame {
    const pixels: IPixelState[] = [];
    const centerX = Math.floor(frameNumber / 2);
    const centerY = Math.floor(frameNumber / 2);
    const radius = frameNumber % 10 + 1; // Circle radius grows from 1 to 10

    // Calculate angles for circle points
    const angleStep = Math.PI * 2 / radius;
    let angle = 0;

    // Iterate and set pixel colors based on distance from center
    for (let y = 0; y < frameNumber; y++) {
      for (let x = 0; x < frameNumber; x++) {
        const dx = x - centerX;
        const dy = y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Check if within the circle and set color
        if (distance <= radius) {
          pixels.push({ x, y, color: Colour.White });
        }
      }
    }

    return { frameNumber, pixels };
  }

  private generateAnimationFrames(): IFrame[] {
    const frames: IFrame[] = [];
    const totalFramesNumber = 31;

    for (let i = 1; i < totalFramesNumber; i++) {
      frames.push(this.generateRotatingCircleFrame(i));
    }

    return frames;
  }
}