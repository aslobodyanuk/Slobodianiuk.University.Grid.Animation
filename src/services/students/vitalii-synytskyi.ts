import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class VitaliiSynytskyiConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Vitalii Synytskyi';
    }

    public getStudentEmail(): string {
        return 'howery1337@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Vitalii',
            surname: 'Synytskyi',
            email: this.getStudentEmail(),
            projectName: 'Circle',
            personalProjectLink: 'https://lab2-animation.azurewebsites.net',
            header: getDefaultCircleFrame(0),
            frames: frames()
        }
    }
}
export const getDefaultCircleFrame = (frameNumber: number): IFrame => {
    let result: IFrame = {
        frameNumber: frameNumber,
        pixels: []
    };



    return result;
}




function frames(): IFrame[] {
    const frames: IFrame[] = [];


    return frames;
}