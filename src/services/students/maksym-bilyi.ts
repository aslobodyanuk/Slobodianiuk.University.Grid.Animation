import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

const ScreenHeight = 16;
const ScreenWidth = 16; 
const PlaneWidth = 8; 
const PlaneHeight = 8;
export class MaksymBilyiConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Maksym Bilyi';
    }

    public getStudentEmail(): string {
        return 'maksim.belly@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Maksym',
            surname: 'Bilyi',
            email: this.getStudentEmail(),
            projectName: 'Airplane',
            personalProjectLink: '',
            header: createAirplaneHeader(),
            frames: generateFrames(),
        };
    }
}

function createAirplaneHeader(): IFrame {
    const pixels: IPixelState[] = [
        { x: 7, y: 5, color: Colour.White },

        { x: 9, y: 5, color: Colour.White },
        { x: 10, y: 4, color: Colour.White },
        { x: 11, y: 3, color: Colour.White },

        { x: 7, y: 4, color: Colour.White },
        { x: 6, y: 4, color: Colour.White },
        { x: 5, y: 3, color: Colour.White },

        { x: 8, y: 4, color: Colour.White },
        { x: 8, y: 5, color: Colour.White },
        { x: 8, y: 6, color: Colour.White },
        { x: 8, y: 7, color: Colour.White },
        { x: 8, y: 8, color: Colour.White },
        { x: 8, y: 9, color: Colour.White },
        { x: 8, y: 10, color: Colour.White },
        { x: 8, y: 11, color: Colour.White },
        { x: 7, y: 11, color: Colour.White },
        { x: 8, y: 12, color: Colour.White },
        { x: 8, y: 12, color: Colour.White },
        //Krylo1
        { x: 7, y: 10, color: Colour.White },
        { x: 7, y: 9, color: Colour.White },
        { x: 6, y: 8, color: Colour.White },
        { x:5, y: 7, color: Colour.White },
        { x: 4, y: 6, color: Colour.White },
        { x: 4, y: 7, color: Colour.White },
        { x: 5, y: 8, color: Colour.White },
        { x: 6, y: 9, color: Colour.White },
        //Krylo
        { x: 9, y: 10, color: Colour.White },
        { x: 9, y: 9, color: Colour.White },
        { x: 10, y: 8, color: Colour.White },
        { x:11, y: 7, color: Colour.White },
        { x: 12, y: 6, color: Colour.White },
        { x: 12, y: 7, color: Colour.White },
        { x: 11, y: 8, color: Colour.White },
        { x: 10, y: 9, color: Colour.White },
    ];

    return {
        frameNumber: 0,
        pixels: pixels,
    };
}

function generateFrames(): IFrame[] {
    const frames: IFrame[] = [];

    for (let frameNumber = 0; frameNumber < Constants.MaxTotalFrames; frameNumber++) {
        const pixels: IPixelState[] = [];

        
        const currentY = frameNumber % ScreenHeight;

       
        for (let i = 0; i < createAirplaneHeader().pixels.length; i++) {
            const { x, y, color } = createAirplaneHeader().pixels[i];
            pixels.push({ x: x, y: y + currentY, color: color });
        }

        frames.push({
            frameNumber: frameNumber,
            pixels: pixels,
        });
    }

    return frames;
}
