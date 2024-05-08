import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class NazarKolodchakConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Nazar Kolodchak';
    }

    public getStudentEmail(): string {
        return 'nazar.kolodchak@lnu.edu.ua';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: this.getStudentName(),
            surname: '',
            email: this.getStudentEmail(),
            projectName: 'LinkedIn',
            personalProjectLink: 'https://www.youtube.com/',
            header: GetSnowHeader(),
            frames: GenerateSnowFrames(),
        };
    }
}

function GenerateSnowFrame(frameNumber: number): IFrame {
    const pixels: IPixelState[] = [];
    const numFlakes = 10; 
    const maxX = 15;
    const maxY = 15;

    for (let i = 0; i < numFlakes; i++) {
        const x = Math.floor(Math.random() * maxX);
        const y = Math.floor(Math.random() * maxY);
        pixels.push({ x, y, color: Colour.White }); 
    }

    return { frameNumber, pixels };
}

function GenerateSnowFrames(): IFrame[] {
    const frames: IFrame[] = [];

    for (let frameNumber = 0; frameNumber < 60; frameNumber++) { 
        frames.push(GenerateSnowFrame(frameNumber));
    }

    return frames;
}

function GetSnowHeader(): IFrame {
    return GenerateSnowFrame(0);
}
