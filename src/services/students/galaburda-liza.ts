import IAnimationConfig from '../../models/animation-config';
import { IConfigLoaderService } from '../config-loader-interface';
import IFrame from '../../models/frame';
import IPixelState from '../../models/pixel-state';
import { Colour } from '../../models/colour';

export class GalaburdaLizaConfigLoaderService implements IConfigLoaderService {
    public getStudentName(): string {
        return 'galaburda-liza';
    }

    public getStudentEmail(): string {
        return 'galaburdaelizabet@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Galaburda',
            surname: 'Liza',
            email: this.getStudentEmail(),
            projectName: 'MoonAnimation',
            personalProjectLink: 'https://google.com',
            header: GetHeader(),
            frames: GenerateFrames(),
        };
    }
}
function GenerateMoonFrame(frameNumber: number): IFrame {
    const pixels: IPixelState[] = [];

    const moonSize = 8; // Size of the moon
    const moonSpeed = 0.1; // Speed of moon movement
    const centerX = (frameNumber * moonSpeed) % 16; // X-coordinate of moon center
    const centerY = 7.5; // Y-coordinate of moon center

    // Draw moon
    for (
        let x = Math.max(0, Math.floor(centerX) - moonSize);
        x <= Math.min(15, Math.floor(centerX) + moonSize);
        x++
    ) {
        for (
            let y = Math.max(0, Math.floor(centerY) - moonSize);
            y <= Math.min(15, Math.floor(centerY) + moonSize);
            y++
        ) {
            const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
            if (distance <= moonSize) {
                pixels.push({ x, y, color: Colour.White }); // Assuming moon color is gray
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
        // Adjust the number of frames as needed
        frames.push(GenerateMoonFrame(frameNumber));
    }

    return frames;
}

function GetHeader(): IFrame {
    return GenerateMoonFrame(0);
}
