import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import IFrame from '../../models/frame';
import IPixelState from '../../models/pixel-state';
import { Colour } from '../../models/colour';

export class OstapDidukhConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Ostap Didukh';
    }

    public getStudentEmail(): string {
        return 'diduh1321@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Ostap',
            surname: 'Didukh',
            email: this.getStudentEmail(),
            projectName: 'Spaceship Animation',
            personalProjectLink: 'https://github-tracker.azurewebsites.net',
            header: createSpaceHeader(),
            frames: generateSpaceFramesWithBullets()
        }
    }
}

function createSpaceHeader(): IFrame {
    const pixels: IPixelState[] = [];

    return {
        frameNumber: 0,
        pixels: pixels,
    };
}

function createSpaceship(): IPixelState[] {
    const spaceship: IPixelState[] = [
        { x: 3, y: 8, color: Colour.White },
        { x: 4, y: 8, color: Colour.White },

        { x: 5, y: 8, color: Colour.White },
        { x: 5, y: 7, color: Colour.White },
        { x: 5, y: 9, color: Colour.White },

        { x: 6, y: 8, color: Colour.White },
        { x: 6, y: 7, color: Colour.White },
        { x: 6, y: 9, color: Colour.White },

        { x: 7, y: 8, color: Colour.White },
        { x: 7, y: 7, color: Colour.White },
        { x: 7, y: 9, color: Colour.White },
        { x: 7, y: 5, color: Colour.White },
        { x: 7, y: 11, color: Colour.White },

        { x: 8, y: 8, color: Colour.White },
        { x: 8, y: 7, color: Colour.White },
        { x: 8, y: 9, color: Colour.White },
        { x: 8, y: 5, color: Colour.White },
        { x: 8, y: 11, color: Colour.White },

        { x: 8, y: 8, color: Colour.White },
        { x: 8, y: 7, color: Colour.White },
        { x: 8, y: 9, color: Colour.White },
        { x: 8, y: 3, color: Colour.White },
        { x: 8, y: 5, color: Colour.White },
        { x: 8, y: 6, color: Colour.White },
        { x: 8, y: 10, color: Colour.White },
        { x: 8, y: 11, color: Colour.White },
        { x: 8, y: 13, color: Colour.White },

        { x: 9, y: 8, color: Colour.White },
        { x: 9, y: 7, color: Colour.White },
        { x: 9, y: 9, color: Colour.White },
        { x: 9, y: 3, color: Colour.White },
        { x: 9, y: 5, color: Colour.White },
        { x: 9, y: 6, color: Colour.White },
        { x: 9, y: 10, color: Colour.White },
        { x: 9, y: 11, color: Colour.White },
        { x: 9, y: 13, color: Colour.White },

        { x: 9, y: 8, color: Colour.White },
        { x: 9, y: 7, color: Colour.White },
        { x: 9, y: 9, color: Colour.White },
        { x: 9, y: 3, color: Colour.White },
        { x: 9, y: 5, color: Colour.White },
        { x: 9, y: 6, color: Colour.White },
        { x: 9, y: 10, color: Colour.White },
        { x: 9, y: 11, color: Colour.White },
        { x: 9, y: 13, color: Colour.White },
        { x: 9, y: 12, color: Colour.White },
        { x: 9, y: 4, color: Colour.White },

        { x: 10, y: 3, color: Colour.White },
        { x: 10, y: 4, color: Colour.White },
        { x: 10, y: 6, color: Colour.White },
        { x: 10, y: 7, color: Colour.White },
        { x: 10, y: 9, color: Colour.White },
        { x: 10, y: 10, color: Colour.White },
        { x: 10, y: 12, color: Colour.White },
        { x: 10, y: 13, color: Colour.White },

        { x: 11, y: 7, color: Colour.White },
        { x: 11, y: 9, color: Colour.White },
        { x: 11, y: 3, color: Colour.White },
        { x: 11, y: 13, color: Colour.White },
    ];

    return spaceship;
}

function createBullet(x: number, y: number): IPixelState[] {
    const bullet: IPixelState[] = [
        { x: x, y: y, color: Colour.White },
    ];

    return bullet;
}

function generateSpaceFramesWithBullets(): IFrame[] {
    const frames: IFrame[] = [];

    const spaceship = createSpaceship();

    for (let frameNumber = 0; frameNumber < 20; frameNumber++) {
        const pixels: IPixelState[] = [];

        const spaceshipY = 14 - frameNumber;

        pixels.push(...spaceship.map(pixel => ({
            ...pixel,
            y: pixel.y + spaceshipY,
        })));

        if (frameNumber % 3 === 0) {
            const bulletX = 1;
            const bulletY = spaceshipY + 8;
            pixels.push(...createBullet(bulletX, bulletY));
        }

        frames.push({
            frameNumber: frameNumber,
            pixels: pixels,
        });
    }

    return frames;
}
