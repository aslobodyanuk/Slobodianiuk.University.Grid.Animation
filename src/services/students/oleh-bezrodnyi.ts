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
                pixels: this.generateObjectFrame(0, 80), // Передача ширини екрану (наприклад, 80) в якості параметра
            },
            frames: this.generateObjectAnimationFrames(),
        };
    }
        
    private generateObjectFrame(frameNumber: number, screenWidth: number): IPixelState[] {
        const pixels: IPixelState[] = [];
        
        // Define object (rectangle) position based on frame number
        const objectWidth = 5; // Width of the object (rectangle)
        const objectX = frameNumber % (screenWidth - objectWidth); // Calculate object position based on frame number
        
        // Draw the object (rectangle) at the calculated position
        for (let x = objectX; x < objectX + objectWidth; x++) {
            for (let y = 5; y < 10; y++) { // Object height from y=5 to y=9
                pixels.push({ x: x, y: y, color: Colour.White });
            }
        }
        
        return pixels;
    }
        
    private generateObjectAnimationFrames(): IFrame[] {
        const frames: IFrame[] = [];
        const totalFrames = 40; // Total frames for the animation
        
        for (let frameNumber = 0; frameNumber < totalFrames; frameNumber++) {
            const frame: IFrame = {
                frameNumber: frameNumber,
                pixels: this.generateObjectFrame(frameNumber, 80), // Передача ширини екрану (наприклад, 80) в якості параметра
            };
            frames.push(frame);
        }
        
        return frames;
    }
}
