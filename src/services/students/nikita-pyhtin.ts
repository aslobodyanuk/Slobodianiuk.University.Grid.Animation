import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class NikitaPyhtinConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Pyhtin Nikita';
    }

    public getStudentEmail(): string {
        return 'treepack88@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Nikita',
            surname: 'Pyhtin',
            email: this.getStudentEmail(),
            projectName: 'NLO',
            personalProjectLink: "https://uk.wikipedia.org/wiki/",
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

    result.pixels.push(
    );
    return result;
}

function generateFrames(): IFrame[] {
    const frames: IFrame[] = [];

    const house: IPixelState[] = [
        { x: 5, y: 1, color: Colour.White },
        { x: 6, y: 1, color: Colour.White },
        { x: 7, y: 1, color: Colour.White },
        { x: 4, y: 2, color: Colour.White },
        { x: 8, y: 2, color: Colour.White },
        { x: 3, y: 3, color: Colour.White },
        { x: 9, y: 3, color: Colour.White },
        { x: 2, y: 4, color: Colour.White },
        { x: 10, y: 4, color: Colour.White },
        { x: 1, y: 5, color: Colour.White },
        { x: 11, y: 5, color: Colour.White },
        { x: 0, y: 6, color: Colour.White },
        { x: 12, y: 6, color: Colour.White },
        { x: 0, y: 7, color: Colour.White },
        { x: 12, y: 7, color: Colour.White },
        { x: 0, y: 8, color: Colour.White },
        { x: 12, y: 8, color: Colour.White },
        { x: 0, y: 9, color: Colour.White },
        { x: 12, y: 9, color: Colour.White },
        { x: 0, y: 10, color: Colour.White },
        { x: 12, y: 10, color: Colour.White },
        { x: 1, y: 11, color: Colour.White },
        { x: 11, y: 11, color: Colour.White },
        { x: 2, y: 12, color: Colour.White },
        { x: 10, y: 12, color: Colour.White },
        { x: 3, y: 13, color: Colour.White },
        { x: 9, y: 13, color: Colour.White },
        { x: 4, y: 14, color: Colour.White },
        { x: 8, y: 14, color: Colour.White },
        { x: 5, y: 15, color: Colour.White },
        { x: 7, y: 15, color: Colour.White },
        { x: 6, y: 15, color: Colour.White },
        { x: 6, y: 14, color: Colour.White },
        { x: 6, y: 13, color: Colour.White },
        { x: 3, y: 5, color: Colour.White },
        { x: 4, y: 5, color: Colour.White },
        { x: 3, y: 6, color: Colour.White },
        { x: 4, y: 6, color: Colour.White },
        { x: 8, y: 5, color: Colour.White },
        { x: 9, y: 5, color: Colour.White },
        { x: 8, y: 6, color: Colour.White },
        { x: 9, y: 6, color: Colour.White },
    ];

    for (let frameNumber = 0; frameNumber < 40; frameNumber++) {
        const pixels: IPixelState[] = [];

        const showHouse = frameNumber + 100;
        const slide = frameNumber - 20;

        if (showHouse) {
            pixels.push(...house.map(pixel => ({ ...pixel, x: pixel.x - slide, color: Colour.White })));
        }

        frames.push({
            frameNumber: frameNumber,
            pixels: pixels,
        });
    }

    return frames;
}






   