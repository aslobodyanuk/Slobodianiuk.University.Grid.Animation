import IAnimationConfig from "../../models/animation-config";
import { Colour } from '../../models/colour';
import IFrame from '../../models/frame';
import IPixelState from '../../models/pixel-state';
import { IConfigLoaderService } from "../config-loader-interface";


export class OlehBezrodnyiConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Oleh Bezrodnyi';
    }

    public getStudentEmail(): string {
        return 'olegbezrodniy912@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Oleh',
            surname: 'Bezrodnyi',
            email: this.getStudentEmail(),
            projectName: 'Eco-Friendly Lifestyle Tracker',
            personalProjectLink: 'https://github.com/Oollll/Bezrodnyi.Unyversity.Eco-Friendly_Lifestyle_Tracker',
            header: {
                frameNumber: 0,
                pixels: this.generateCatFrame(21).pixels,
            },
            frames: this.generateAnimationFrames()
        }
    }

    private generateCatFrame(frameNumber: number): IFrame {
        const pixels: IPixelState[] = [];

        switch (frameNumber % 4) {
            case 0:
                // Frame 0: Cat face
                pixels.push({ x: 10, y: 5, color: Colour.Black }); // Left eye
                pixels.push({ x: 12, y: 5, color: Colour.Black }); // Right eye
                pixels.push({ x: 11, y: 7, color: Colour.Black }); // Nose
                pixels.push({ x: 10, y: 8, color: Colour.Black }); // Mouth
                break;
            case 1:
                // Frame 1: Wink
                pixels.push({ x: 10, y: 5, color: Colour.Black }); // Left eye (open)
                pixels.push({ x: 12, y: 5, color: Colour.White }); // Right eye (wink)
                pixels.push({ x: 11, y: 7, color: Colour.Black }); // Nose
                pixels.push({ x: 10, y: 8, color: Colour.Black }); // Mouth
                break;
            case 2:
                // Frame 2: Surprise
                pixels.push({ x: 10, y: 5, color: Colour.Black }); // Left eye (big)
                pixels.push({ x: 12, y: 5, color: Colour.Black }); // Right eye (big)
                pixels.push({ x: 11, y: 7, color: Colour.Black }); // Nose (wide)
                pixels.push({ x: 10, y: 8, color: Colour.Black }); // Mouth
                break;
            case 3:
                // Frame 3: Normal face
                pixels.push({ x: 10, y: 5, color: Colour.Black }); // Left eye
                pixels.push({ x: 12, y: 5, color: Colour.Black }); // Right eye
                pixels.push({ x: 11, y: 7, color: Colour.Black }); // Nose
                pixels.push({ x: 10, y: 8, color: Colour.Black }); // Mouth
                break;
        }

        return { frameNumber, pixels };
    }

    private generateAnimationFrames(): IFrame[] {
        const frames: IFrame[] = [];
        const totalFramesNumber = 30; // Total frames for the animation

        for (let i = 0; i < totalFramesNumber; i++) {
            frames.push(this.generateCatFrame(i));
        }

        return frames;
    }
}