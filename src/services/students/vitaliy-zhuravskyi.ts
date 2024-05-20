import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class VitaliyZhuravskyiConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Vitaliy Zhuravskyi';
    }

    public getStudentEmail(): string {
        return 'vitaliy.zhuravskyi@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Vitaliy',
            surname: 'Zhuravskyi',
            email: this.getStudentEmail(),
            projectName: 'Geometry Dash',
            personalProjectLink: 'crowdcausify.azurewebsites.net',
            header: BeautifulHeader(0),
            frames: generateCubeFrames(),
        }
    }
}

const BeautifulHeader = (frameNumber: number): IFrame => {
    let header: IFrame = {
        frameNumber: frameNumber,
        pixels: []
    };

    let topLine = []
    for(let i = 2; i <= 13; i++) {
        topLine.push({ x: 2, y: i, color: Colour.White })
    }

    let bottomLine = []
    for(let i = 2; i <= 13; i++) {
        bottomLine.push({ x: 14, y: i, color: Colour.White })
    }

    let rightLine = []
    for(let i = 2; i <= 14; i++) {
        rightLine.push({ x: i, y: 13, color: Colour.White })
    }

    let leftLine = []
    for(let i = 2; i <= 14; i++) {
        leftLine.push({ x: i, y: 2, color: Colour.White })
    }


    header.pixels.push(
        ...topLine,
        ...bottomLine,
        ...leftLine,
        ...rightLine,
        { x: 5, y: 5, color: Colour.White },
        { x: 5, y: 10, color: Colour.White },

    );
        
    return header;
}

function generateCubeFrames(): IFrame[] {
    const frames: IFrame[] = [];

    // Generate frames for 30 steps
    for (let step = 0; step < 30; step++) {
        const pixels: IPixelState[] = [];

        // Calculate offset for all sides simultaneously
        const offset = Math.min(step, 12);
        const offset1 = Math.min(step, 17);

        // Draw top line
        for (let i = 0; i <= offset - 1; i++) {
            pixels.push({ x: 2 + i, y: 2, color: Colour.White });
        }

        // Draw right line
        for (let i = 0; i <= offset - 1; i++) {
            pixels.push({ x: 13, y: 2 + i, color: Colour.White });
        }

        // Draw bottom line
        for (let i = 0; i <= offset - 1; i++) {
            pixels.push({ x: 13 - i, y: 13, color: Colour.White });
        }

        // Draw left line
        for (let i = 0; i <= offset - 1; i++) {
            pixels.push({ x: 2, y: 13 - i, color: Colour.White });
        }
        
        if(step >= 13) {
            pixels.push({ x: 5, y: 5, color: Colour.White },);
        }

        if(step >= 15) {
            pixels.push({ x: 5, y: 10, color: Colour.White },);
        }

        if(step >= 13) {
            for (let i = 0; i <= offset1-12; i++) {
                pixels.push({ x: 10, y: i+5, color: Colour.White });
            }
        }

        frames.push({
            frameNumber: step,
            pixels
        });
    }

    return frames;
}
