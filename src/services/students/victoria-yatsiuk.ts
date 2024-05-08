import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class VictoriaYatsiukConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Victoria Yatsiuk';
    }

    public getStudentEmail(): string {
        return 'privateaccvictoria@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        const headerPixels = Header(0); 
        return {
            name: 'Victoria',
            surname: 'Yatsiuk',
            email: this.getStudentEmail(),
            projectName: 'Cat Leaving The Disco',
            personalProjectLink: 'https://inspira-app.azurewebsites.net/',
            header: headerPixels,
            frames: FlashingCatFrames(headerPixels.pixels) 
        }
    }
}

const Header = (frameNumber: number): IFrame => {
    let result: IFrame = {
        frameNumber: frameNumber,
        pixels: []
    };

    // cat pixelart ^3^
    result.pixels.push(
        { x: 2, y: 3, color: Colour.White },
        { x: 3, y: 3, color: Colour.White },
        { x: 4, y: 3, color: Colour.White },
        { x: 5, y: 3, color: Colour.White },
        { x: 6, y: 4, color: Colour.White },
        { x: 4, y: 4, color: Colour.White },
        { x: 3, y: 4, color: Colour.White },
        { x: 5, y: 7, color: Colour.White },
        { x: 5, y: 5, color: Colour.White },
        { x: 5, y: 3, color: Colour.White },
        { x: 3, y: 6, color: Colour.White },
        { x: 4, y: 6, color: Colour.White },
        { x: 6, y: 6, color: Colour.White },
        { x: 7, y: 5, color: Colour.White },
        { x: 6, y: 5, color: Colour.White },
        { x: 4, y: 5, color: Colour.White },
        { x: 2, y: 7, color: Colour.White },
        { x: 3, y: 7, color: Colour.White },
        { x: 4, y: 7, color: Colour.White },
        { x: 9, y: 4, color: Colour.White },
        { x: 8, y: 5, color: Colour.White },
        { x: 9, y: 5, color: Colour.White },
        { x: 8, y: 6, color: Colour.White },
        { x: 9, y: 6, color: Colour.White },
        { x: 8, y: 7, color: Colour.White },
        { x: 9, y: 7, color: Colour.White },
        { x: 8, y: 8, color: Colour.White },
        { x: 9, y: 8, color: Colour.White },
        { x: 8, y: 9, color: Colour.White },
        { x: 9, y: 9, color: Colour.White },
        { x: 8, y: 10, color: Colour.White },
        { x: 9, y: 10, color: Colour.White },
        { x: 8, y: 11, color: Colour.White },
        { x: 9, y: 11, color: Colour.White },
        { x: 10, y: 4, color: Colour.White },
        { x: 11, y: 4, color: Colour.White },
        { x: 12, y: 4, color: Colour.White },
        { x: 13, y: 4, color: Colour.White },
        { x: 14, y: 4, color: Colour.White },
        { x: 14, y: 3, color: Colour.White },
        { x: 10, y: 6, color: Colour.White },
        { x: 11, y: 6, color: Colour.White },
        { x: 12, y: 7, color: Colour.White },
        { x: 13, y: 7, color: Colour.White },
        { x: 14, y: 7, color: Colour.White },
        { x: 14, y: 6, color: Colour.White },
        { x: 10, y: 9, color: Colour.White },
        { x: 11, y: 9, color: Colour.White },
        { x: 12, y: 9, color: Colour.White },
        { x: 13, y: 9, color: Colour.White },
        { x: 14, y: 9, color: Colour.White },
        { x: 14, y: 8, color: Colour.White },
        { x: 10, y: 11, color: Colour.White },
        { x: 11, y: 11, color: Colour.White },
        { x: 12, y: 12, color: Colour.White },
        { x: 13, y: 12, color: Colour.White },
        { x: 14, y: 12, color: Colour.White },
        { x: 14, y: 11, color: Colour.White },
        { x: 7, y: 11, color: Colour.White },
        { x: 6, y: 11, color: Colour.White },
        { x: 5, y: 11, color: Colour.White },
        { x: 5, y: 12, color: Colour.White },
        { x: 5, y: 13, color: Colour.White },
        { x: 6, y: 13, color: Colour.White },
        { x: 7, y: 13, color: Colour.White },
    );
        
    return result;
}

function FlashingCatFrames(headerPixels: IPixelState[]): IFrame[] {
    const frames: IFrame[] = [];

    for (let frameNumber = 0; frameNumber < 35; frameNumber++) {
        const pixels: IPixelState[] = [];
        const ProjectAnim = frameNumber + 1;

        const CatStep = frameNumber % 2 === 0 ? frameNumber / 2 : -(frameNumber / 2);

        if (ProjectAnim) {
            pixels.push(...headerPixels.map(pixel => ({ ...pixel, y: pixel.y - CatStep, color: Colour.White })));
        }

        frames.push({
            frameNumber: frameNumber,
            pixels: pixels,
        });
    }

    return frames;
}
