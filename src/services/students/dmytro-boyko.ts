import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class DmytroBoykoiConfigLoaderService implements IConfigLoaderService {


    public getStudentName(): string {
        return 'dmytro-boyko';
    }

    public getStudentEmail(): string {
        return 'dmytro.boiko@lnu.edu.ua';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Dmytro',
            surname: 'Boyko',
            email: this.getStudentEmail(),
            projectName: 'CalculatorAnimation',
            personalProjectLink: 'https://universal-calculator.azurewebsites.net/',
            header: Header(),
            frames: animGeneration()
        };
    }
}


function Header(): IFrame {
        const CalcLogo: IPixelState[] = [
            { x: 3, y: 0, color: Colour.White },
            { x: 4, y: 0, color: Colour.White },
            { x: 5, y: 0, color: Colour.White },
            { x: 6, y: 0, color: Colour.White },
            { x: 7, y: 0, color: Colour.White },
            { x: 7, y: 1, color: Colour.White },
            { x: 7, y: 2, color: Colour.White },
            { x: 7, y: 4, color: Colour.White },
            { x: 6, y: 4, color: Colour.White },
            { x: 3, y: 5, color: Colour.White },
            { x: 7, y: 5, color: Colour.White },
            { x: 6, y: 4, color: Colour.White },
            { x: 5, y: 4, color: Colour.White },
            { x: 4, y: 4, color: Colour.White },
            { x: 3, y: 4, color: Colour.White },
            { x: 7, y: 6, color: Colour.White },
            { x: 6, y: 6, color: Colour.White },
            { x: 5, y: 6, color: Colour.White },
            { x: 4, y: 6, color: Colour.White },
            { x: 3, y: 6, color: Colour.White },
            { x: 4, y: 8, color: Colour.White },
            { x: 5, y: 8, color: Colour.White },
            { x: 6, y: 8, color: Colour.White },
            { x: 7, y: 9, color: Colour.White },
            { x: 7, y: 10, color: Colour.White },
            { x: 3, y: 9, color: Colour.White },
            { x: 3, y: 10, color: Colour.White },
            { x: 6, y: 11, color: Colour.White },
            { x: 5, y: 11, color: Colour.White },
            { x: 5, y: 10, color: Colour.White },
            { x: 7, y: 13, color: Colour.White },
            { x: 6, y: 13, color: Colour.White },
            { x: 5, y: 13, color: Colour.White },
            { x: 4, y: 13, color: Colour.White },
            { x: 3, y: 13, color: Colour.White },
            { x: 7, y: 15, color: Colour.White },
            { x: 6, y: 15, color: Colour.White },
            { x: 5, y: 15, color: Colour.White },
            { x: 4, y: 15, color: Colour.White },
            { x: 3, y: 15, color: Colour.White },
            { x: 3, y: 14, color: Colour.White },
            { x: 7, y: 14, color: Colour.White },
        ];
        return {
            frameNumber: 0,
            pixels: CalcLogo,
        };
    }

function animGeneration(): IFrame[] {
    const frames: IFrame[] = [];

    const Calc: IPixelState[] = [
        { x: 0, y: 7, color: Colour.White },
        { x: 0, y: 8, color: Colour.White },
        { x: 1, y: 7, color: Colour.White },
        { x: 1, y: 8, color: Colour.White },
        { x: 2, y: 7, color: Colour.White },
        { x: 2, y: 8, color: Colour.White },
        { x: 3, y: 7, color: Colour.White },
        { x: 3, y: 8, color: Colour.White },
        { x: 4, y: 7, color: Colour.White },
        { x: 4, y: 8, color: Colour.White },
        { x: 5, y: 7, color: Colour.White },
        { x: 5, y: 8, color: Colour.White },
        { x: 6, y: 7, color: Colour.White },
        { x: 6, y: 8, color: Colour.White },
        { x: 7, y: 7, color: Colour.White },
        { x: 7, y: 8, color: Colour.White },
        { x: 8, y: 7, color: Colour.White },
        { x: 8, y: 8, color: Colour.White },
        { x: 9, y: 7, color: Colour.White },
        { x: 9, y: 8, color: Colour.White },
        { x: 10, y: 7, color: Colour.White },
        { x: 10, y: 8, color: Colour.White },
        { x: 11, y: 7, color: Colour.White },
        { x: 11, y: 8, color: Colour.White },
        { x: 12, y: 7, color: Colour.White },
        { x: 12, y: 8, color: Colour.White },
        { x: 13, y: 7, color: Colour.White },
        { x: 13, y: 8, color: Colour.White },
        { x: 14, y: 7, color: Colour.White },
        { x: 14, y: 8, color: Colour.White },
        { x: 15, y: 7, color: Colour.White },
        { x: 15, y: 8, color: Colour.White },
        { x: 16, y: 7, color: Colour.White },
        { x: 16, y: 8, color: Colour.White },
        { x: 7, y: 0, color: Colour.White },
        { x: 8, y: 0, color: Colour.White },
        { x: 7, y: 1, color: Colour.White },
        { x: 8, y: 1, color: Colour.White },
        { x: 7, y: 2, color: Colour.White },
        { x: 8, y: 2, color: Colour.White },
        { x: 7, y: 3, color: Colour.White },
        { x: 8, y: 3, color: Colour.White },
        { x: 7, y: 4, color: Colour.White },
        { x: 8, y: 4, color: Colour.White },
        { x: 7, y: 5, color: Colour.White },
        { x: 8, y: 5, color: Colour.White },
        { x: 7, y: 6, color: Colour.White },
        { x: 8, y: 6, color: Colour.White },
        { x: 7, y: 7, color: Colour.White },
        { x: 8, y: 7, color: Colour.White },
        { x: 7, y: 8, color: Colour.White },
        { x: 8, y: 8, color: Colour.White },
        { x: 7, y: 9, color: Colour.White },
        { x: 8, y: 9, color: Colour.White },
        { x: 7, y: 10, color: Colour.White },
        { x: 8, y: 10, color: Colour.White },
        { x: 7, y: 11, color: Colour.White },
        { x: 8, y: 11, color: Colour.White },
        { x: 7, y: 12, color: Colour.White },
        { x: 8, y: 12, color: Colour.White },
        { x: 7, y: 13, color: Colour.White },
        { x: 8, y: 13, color: Colour.White },
        { x: 7, y: 14, color: Colour.White },
        { x: 8, y: 14, color: Colour.White },
        { x: 7, y: 15, color: Colour.White },
        { x: 8, y: 15, color: Colour.White },

        { x: 3, y: 2, color: Colour.White },
        { x: 3, y: 3, color: Colour.White },
        { x: 3, y: 4, color: Colour.White },
        { x: 2, y: 3, color: Colour.White },
        { x: 4, y: 3, color: Colour.White },
        { x: 3, y: 12, color: Colour.White },
        { x: 3, y: 11, color: Colour.White },
        { x: 3, y: 13, color: Colour.White },
        { x: 11, y: 11, color: Colour.White },
        { x: 11, y: 13, color: Colour.White },
        { x: 12, y: 12, color: Colour.White },
        { x: 13, y: 11, color: Colour.White },
        { x: 13, y: 13, color: Colour.White },
        { x: 12, y: 2, color: Colour.White },
        { x: 12, y: 3, color: Colour.White },
        { x: 12, y: 4, color: Colour.White },
        { x: 12, y: 5, color: Colour.White },
        { x: 12, y: 1, color: Colour.White },
        { x: 10, y: 3, color: Colour.White },
        { x: 14, y: 3, color: Colour.White },
    ];

    for (let frameNumber = 0; frameNumber < 40; frameNumber++) {
        const pixels: IPixelState[] = [];

        const showCar = frameNumber + 100;
        const slide = frameNumber - 20;

        if (showCar) {
            pixels.push(...Calc.map(pixel => ({ ...pixel, x: pixel.x - slide, color: Colour.White })));
        }


        frames.push({
            frameNumber: frameNumber,
            pixels: pixels,
        });


    }
    return frames;
}