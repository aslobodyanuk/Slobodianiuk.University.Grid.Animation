import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import { Colour } from '../../models/colour';
import IFrame from '../../models/frame';
import IPixelState from '../../models/pixel-state';

export class VladBarvinskiyConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Vlad Barvinskiy';
    }

    public getStudentEmail(): string {
        return 'mezu4a@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Vlad',
            surname: 'Barvinskiy',
            email: this.getStudentEmail(),
            projectName: 'Fitness Tracker',
            personalProjectLink: 'https://ftracker-uni.azurewebsites.net',
            header: {
                frameNumber: 1,
                pixels: this.generateJumpFrame(0, 0, 0),
            },
            frames: this.generateJumpFrames(),
        };
    }

    private generateJumpFrames(): IFrame[] {
        const frames: IFrame[] = [];
        const jumpHeight = 4;
        const numFrames = 30;

        for (let frameNumber = 0; frameNumber < numFrames; frameNumber++) {
            const pixels: IPixelState[] = this.generateJumpFrame(frameNumber, numFrames, jumpHeight);
            frames.push({ frameNumber, pixels });
        }

        return frames;
    }

    private generateJumpFrame(frameNumber: number, numFrames: number, jumpHeight: number): IPixelState[] {
        const pixels: IPixelState[] = [];
        const initialX = 0;
        const initialY = 0;
        const jumpDuration = 0.5;

        const jumpProgress = frameNumber / numFrames;
        const jumpY = initialY - (jumpHeight * 4 * jumpProgress * (1 - jumpProgress));

        this.drawStickman(pixels, Math.round(jumpY), 0);
        return pixels;
    }

    private drawStickman(pixels: IPixelState[], x: number, y: number): void {
        const stickmanPixelArt: IPixelState[] = [
            { x: 4, y: 7, color: Colour.White },
            { x: 5, y: 7, color: Colour.White }, 
            { x: 4, y: 8, color: Colour.White }, 
            { x: 5, y: 8, color: Colour.White }, 
            { x: 6, y: 8, color: Colour.White },
            { x: 7, y: 8, color: Colour.White }, 
            { x: 8, y: 8, color: Colour.White },
            { x: 9, y: 8, color: Colour.White },
            { x: 10, y: 8, color: Colour.White },
            { x: 11, y: 8, color: Colour.White },
            { x: 12, y: 8, color: Colour.White },
            { x: 13, y: 9, color: Colour.White },
            { x: 14, y: 10, color: Colour.White },
            { x: 12, y: 8, color: Colour.White },
            { x: 6, y: 9, color: Colour.White },
            { x: 6, y: 10, color: Colour.White },
        ];

        stickmanPixelArt.forEach(pixel => {
            pixels.push({ x: pixel.x + x, y: pixel.y + y, color: pixel.color });
        });
    }
}