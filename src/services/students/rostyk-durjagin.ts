import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class RostykDurjaginConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Rostyk Durjagin';
    }

    public getStudentEmail(): string {
        return 'rostik.durjagin@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Rostyk',
            surname: 'Durjagin',
            email: this.getStudentEmail(),
            projectName: 'FrelanceHub',
            personalProjectLink: 'https://freelancehub.azurewebsites.net',
            header: Avatar(0),
            frames: generateFrames()
        }
    }
}

const Avatar = (frameNumber: number): IFrame => {
    let result: IFrame = {
        frameNumber: frameNumber,
        pixels: []
    };

    const F_pixels: IPixelState[] = [
        // F
        { x: 1, y: 6, color: Colour.White },
        { x: 2, y: 6, color: Colour.White },
        { x: 3, y: 6, color: Colour.White },
        { x: 4, y: 6, color: Colour.White },
        { x: 5, y: 6, color: Colour.White },
        { x: 6, y: 6, color: Colour.White },
        { x: 7, y: 6, color: Colour.White },
        { x: 8, y: 6, color: Colour.White },
        { x: 9, y: 6, color: Colour.White },
        { x: 10, y: 6, color: Colour.White },

        { x: 5, y: 7, color: Colour.White },
        { x: 5, y: 8, color: Colour.White },
        { x: 5, y: 9, color: Colour.White },
        { x: 5, y: 10, color: Colour.White },

        { x: 1, y: 7, color: Colour.White },
        { x: 1, y: 8, color: Colour.White },
        { x: 1, y: 9, color: Colour.White },
        { x: 1, y: 10, color: Colour.White },
    ];

    result.pixels.push(...F_pixels);

    return result;
}

function generateFrames(): IFrame[] {
    const frames: IFrame[] = [];

    for (let frameNumber = 0; frameNumber < 40; frameNumber++) {
        const pixels: IPixelState[] = [];

        const showF = frameNumber + 100;
        const slide = frameNumber - 20;

        if (showF) {
            const fallingSpeed = Math.min(Math.max(frameNumber - 20, 0), 20);
            const fallingDistance = fallingSpeed * 3;

            pixels.push(...Avatar(0).pixels.map(pixel => ({ ...pixel, x: pixel.x - slide, y: pixel.y + fallingDistance })));
        }

        frames.push({
            frameNumber: frameNumber,
            pixels: pixels,
        });
    }

    return frames;
}
