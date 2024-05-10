import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class VolodymyrBorshoshConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Volodymyr Borshosh';
    }

    public getStudentEmail(): string {
        return 'mugivaraq13@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Volodymyr',
            surname: 'Borshosh',
            email: this.getStudentEmail(),
            projectName: 'Jail',
            personalProjectLink: "https://uk.wikipedia.org/wiki/Dota_2",
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

    const art: IPixelState[] = [
        { x: 1, y: 1, color: Colour.White   },
        { x: 1, y: 2, color: Colour.White   },
        { x: 1, y: 3, color: Colour.White   },
        { x: 1, y: 4, color: Colour.White   },
        { x: 1, y: 5, color: Colour.White   },
        { x: 1, y: 6, color: Colour.White   },
        { x: 1, y: 7, color: Colour.White   },
        { x: 1, y: 8, color: Colour.White   },
        { x: 1, y: 9, color: Colour.White   },
        { x: 1, y: 10, color: Colour.White   },
        { x: 1, y: 11, color: Colour.White   },
        { x: 1, y: 12, color: Colour.White   },
        { x: 1, y: 13, color: Colour.White   },
        { x: 1, y: 14, color: Colour.White   },
        { x: 2, y: 14, color: Colour.White   },
        { x: 3, y: 14, color: Colour.White   },
        { x: 4, y: 14, color: Colour.White   },
        { x: 5, y: 14, color: Colour.White   },
        { x: 6, y: 14, color: Colour.White   },
        { x: 7, y: 14, color: Colour.White   },
        { x: 8, y: 14, color: Colour.White   },
        { x: 9, y: 14, color: Colour.White   },
        { x: 10, y: 14, color: Colour.White   },
        { x: 11, y: 14, color: Colour.White   },
        { x: 12, y: 14, color: Colour.White   },
        { x: 13, y: 14, color: Colour.White   },
        { x: 14, y: 14, color: Colour.White   },
        { x: 2, y: 1, color: Colour.White   },
        { x: 3, y: 1, color: Colour.White   },
        { x: 4, y: 1, color: Colour.White   },
        { x: 5, y: 1, color: Colour.White   },
        { x: 6, y: 1, color: Colour.White   },
        { x: 7, y: 1, color: Colour.White   },
        { x: 8, y: 1, color: Colour.White   },
        { x: 9, y: 1, color: Colour.White   },
        { x: 10, y: 1, color: Colour.White   },
        { x: 11, y: 1, color: Colour.White   },
        { x: 12, y: 1, color: Colour.White   },
        { x: 13, y: 1, color: Colour.White   },
        { x: 14, y: 1, color: Colour.White   },
        { x: 14, y: 2, color: Colour.White   },
        { x: 14, y: 3, color: Colour.White   },
        { x: 14, y: 4, color: Colour.White   },
        { x: 14, y: 5, color: Colour.White   },
        { x: 14, y: 6, color: Colour.White   },
        { x: 14, y: 7, color: Colour.White   },
        { x: 14, y: 8, color: Colour.White   },
        { x: 14, y: 9, color: Colour.White   },
        { x: 14, y: 10, color: Colour.White   },
        { x: 14, y: 11, color: Colour.White   },
        { x: 14, y: 12, color: Colour.White   },
        { x: 14, y: 13, color: Colour.White   },
        { x: 3, y: 3, color: Colour.White   },
        { x: 4, y: 4, color: Colour.White   },
        { x: 5, y: 5, color: Colour.White   },
        { x: 6, y: 6, color: Colour.White   },
        { x: 7, y: 7, color: Colour.White   },
        { x: 8, y: 8, color: Colour.White   },
        { x: 9, y: 9, color: Colour.White   },
        { x: 10, y: 10, color: Colour.White   },
        { x: 11, y: 11, color: Colour.White   },
        { x: 12, y: 12, color: Colour.White   },
        { x: 4, y: 3, color: Colour.White   },
        { x: 5, y: 4, color: Colour.White   },
        { x: 6, y: 5, color: Colour.White   },
        { x: 7, y: 6, color: Colour.White   },
        { x: 8, y: 7, color: Colour.White   },
        { x: 9, y: 8, color: Colour.White   },
        { x: 10, y: 9, color: Colour.White   },
        { x: 11, y: 10, color: Colour.White   },
        { x: 12, y: 11, color: Colour.White   },
        { x: 3, y: 4, color: Colour.White   },
        { x: 4, y: 5, color: Colour.White   },
        { x: 5, y: 6, color: Colour.White   },
        { x: 6, y: 7, color: Colour.White   },
        { x: 7, y: 8, color: Colour.White   },
        { x: 8, y: 9, color: Colour.White   },
        { x: 9, y: 10, color: Colour.White   },
        { x: 10, y: 11, color: Colour.White   },
        { x: 11, y: 12, color: Colour.White   },
        { x: 3, y: 12, color: Colour.White   },
        { x: 3, y: 11, color: Colour.White   },
        { x: 4, y: 12, color: Colour.White   },
        { x: 4, y: 11, color: Colour.White   },
        { x: 4, y: 10, color: Colour.White   },
        { x: 5, y: 10, color: Colour.White   },
        { x: 5, y: 11, color: Colour.White   },
        { x: 12, y: 3, color: Colour.White   },
        { x: 11, y: 3, color: Colour.White   },
        { x: 12, y: 4, color: Colour.White   },
        { x: 11, y: 4, color: Colour.White   },
        { x: 10, y: 4, color: Colour.White   },
        { x: 10, y: 5, color: Colour.White   },
        { x: 11, y: 5, color: Colour.White   },
    ];

    for (let frameNumber = 0; frameNumber < 40; frameNumber++) {
        const pixels: IPixelState[] = [];

        const showart = frameNumber  +100;
        const slide = frameNumber -20 ;

        if (showart) {
            pixels.push(...art.map(pixel => ({ ...pixel, x: pixel.x - slide, color: Colour.White })));
        }
        
        frames.push({
            frameNumber: frameNumber,
            pixels: pixels,
        });

    }

    return frames;
}
   