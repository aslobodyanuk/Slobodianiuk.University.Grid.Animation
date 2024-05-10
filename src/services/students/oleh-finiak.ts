import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class OlehFiniakConfigLoaderService implements IConfigLoaderService {
    public getStudentName(): string {
        return 'Oleh Finiak';
    }

    public getStudentEmail(): string {
        return 'finako243@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Oleh',
            surname: 'Finiak',
            email: this.getStudentEmail(),
            projectName: 'Twitter clone',
            personalProjectLink: 'https://tresor-website.azurewebsites.net/',
            header: Fish(0),
            frames: Film(),
        }
    }
}

const Fish = (frameNumber: number): IFrame => {
    let result: IFrame = {
        frameNumber: frameNumber,
        pixels: [],
    }

    result.pixels.push(
        { x: 8, y: 8, color: Colour.White},
        { x: 9, y: 8, color: Colour.White},
        { x: 7, y: 8, color: Colour.White},
        { x: 6, y: 8, color: Colour.White},
        { x: 10, y: 8, color: Colour.White},
        { x: 5, y: 8, color: Colour.White},
        { x: 11, y: 8, color: Colour.White},
        { x: 8, y: 7, color: Colour.White},
        { x: 9, y: 7, color: Colour.White},
        { x: 6, y: 7, color: Colour.White},
        { x: 10, y: 7, color: Colour.White},
        { x: 5, y: 9, color: Colour.White},
        { x: 11, y: 9, color: Colour.White},
        { x: 8, y: 9, color: Colour.White},
        { x: 9, y: 9, color: Colour.White},
        { x: 7, y: 9, color: Colour.White},
        { x: 6, y: 9, color: Colour.White},
        { x: 10, y: 9, color: Colour.White},
        { x: 8, y: 6, color: Colour.White},
        { x: 9, y: 6, color: Colour.White},
        { x: 7, y: 6, color: Colour.White},
        { x: 6, y: 6, color: Colour.White},
        { x: 10, y: 6, color: Colour.White},
        { x: 8, y: 5, color: Colour.White},
        { x: 9, y: 5, color: Colour.White},
        { x: 7, y: 5, color: Colour.White},
        { x: 8, y: 4, color: Colour.White},
        { x: 8, y: 10, color: Colour.White},
        { x: 9, y: 10, color: Colour.White},
        { x: 7, y: 10, color: Colour.White},
        { x: 6, y: 10, color: Colour.White},
        { x: 10, y: 10, color: Colour.White},
        { x: 8, y: 11, color: Colour.White},
        { x: 9, y: 11, color: Colour.White},
        { x: 7, y: 11, color: Colour.White},
        { x: 8, y: 12, color: Colour.White},
        { x: 8, y: 13, color: Colour.White},
        { x: 9, y: 13, color: Colour.White},
        { x: 7, y: 13, color: Colour.White},
        { x: 8, y: 14, color: Colour.White},
        { x: 9, y: 14, color: Colour.White},
        { x: 6, y: 14, color: Colour.White},
        { x: 10, y: 14, color: Colour.White},
        { x: 7, y: 14, color: Colour.White},
    );
    return result;
}

function Film(): IFrame[]{
    const frames: IFrame[] = [];
    const Step: IPixelState [] = [
        { x: 8, y: 8, color: Colour.White},
        { x: 9, y: 8, color: Colour.White},
        { x: 7, y: 8, color: Colour.White},
        { x: 6, y: 8, color: Colour.White},
        { x: 10, y: 8, color: Colour.White},
        { x: 5, y: 8, color: Colour.White},
        { x: 11, y: 8, color: Colour.White},
        { x: 8, y: 7, color: Colour.White},
        { x: 9, y: 7, color: Colour.White},
        { x: 6, y: 7, color: Colour.White},
        { x: 10, y: 7, color: Colour.White},
        { x: 5, y: 9, color: Colour.White},
        { x: 11, y: 9, color: Colour.White},
        { x: 8, y: 9, color: Colour.White},
        { x: 9, y: 9, color: Colour.White},
        { x: 7, y: 9, color: Colour.White},
        { x: 6, y: 9, color: Colour.White},
        { x: 10, y: 9, color: Colour.White},
        { x: 8, y: 6, color: Colour.White},
        { x: 9, y: 6, color: Colour.White},
        { x: 7, y: 6, color: Colour.White},
        { x: 6, y: 6, color: Colour.White},
        { x: 10, y: 6, color: Colour.White},
        { x: 8, y: 5, color: Colour.White},
        { x: 9, y: 5, color: Colour.White},
        { x: 7, y: 5, color: Colour.White},
        { x: 8, y: 4, color: Colour.White},
        { x: 8, y: 10, color: Colour.White},
        { x: 9, y: 10, color: Colour.White},
        { x: 7, y: 10, color: Colour.White},
        { x: 6, y: 10, color: Colour.White},
        { x: 10, y: 10, color: Colour.White},
        { x: 8, y: 11, color: Colour.White},
        { x: 9, y: 11, color: Colour.White},
        { x: 7, y: 11, color: Colour.White},
        { x: 8, y: 12, color: Colour.White},
        { x: 8, y: 13, color: Colour.White},
        { x: 9, y: 13, color: Colour.White},
        { x: 7, y: 13, color: Colour.White},
        { x: 8, y: 14, color: Colour.White},
        { x: 9, y: 14, color: Colour.White},
        { x: 6, y: 14, color: Colour.White},
        { x: 10, y: 14, color: Colour.White},
        { x: 7, y: 14, color: Colour.White},
    ]

    for (let frameNumber = 0; frameNumber < 35; frameNumber++){
        const pixels: IPixelState [] = [];
        const ProjectAnim = frameNumber+1;
        const Moving = frameNumber -15;
        if (ProjectAnim){
            pixels.push(...Step.map(pixel => ({ ...pixel, y: pixel.y - Moving, color: Colour.White })));
        }
        frames.push({
            frameNumber: frameNumber,
            pixels: pixels,
        });
    }
    return frames;
}