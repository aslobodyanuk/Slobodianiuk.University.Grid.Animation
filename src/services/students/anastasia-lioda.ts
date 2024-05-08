import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from '../../models/frame';
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class AnastasiaLiodaConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Anastasia LIoda';
    }

    public getStudentEmail(): string {
        return 'nastyalioda@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Anastasia',
            surname: 'Lioda',
            email: this.getStudentEmail(),
            projectName: 'LinkedinClone',
            personalProjectLink: 'https://treeanimation.azurewebsites.net',
            header: {
                frameNumber: 0,
                pixels: this.generateDiagonalFrame(8, 3, 3, "down", Colour.White).pixels,
            },
            
            frames: this.generateAnimationFrames(),
        }
    }


    private generateLineFrame(frameNumber: number, startX: number, startY: number, endX: number, color: Colour): IFrame {
        const pixels: IPixelState[] = [];

        for (let x = startX; x < endX; x++) {
            pixels.push({ x, y: startY, color });
        }

        return { frameNumber, pixels };
    }

    private generateDiagonalFrame(frameNumber: number, startX: number, startY: number, direction: 'up' | 'down', color: Colour): IFrame {
        const pixels: IPixelState[] = [];
        const offset = frameNumber % 4; // Adjust offset for swaying motion (change value for stronger/weaker sway)

        for (let x = startX; x < frameNumber + 1; x++) {
            let y = startY;
            if (direction === 'up') {
                y -= x - startX + offset; // Upward diagonal
            } else {
                y += x - startX - offset; // Downward diagonal
            }
            pixels.push({ x, y, color });
        }

        return { frameNumber, pixels };
    }

    private generateLeavesFrame(frameNumber: number, startX: number, startY: number, size: number, color: Colour): IFrame {
        const pixels: IPixelState[] = [];

        for (let x = startX; x < startX + size; x++) {
            for (let y = startY; y < startY + size; y++) {
                if (Math.random() > 0.5) { // Random placement for leaves
                    pixels.push({ x, y, color });
                }
            }
        }

        return { frameNumber, pixels };
    }

    private generateAnimationFrames(): IFrame[] {
        const frames: IFrame[] = [];
        const totalFrames = 30;
        const trunkLength = 10;
        const branchLength = 5;
        const leafSize = 3;

        const centerX = Math.floor(totalFrames / 2); // Center position for swaying motion

        for (let i = 0; i < totalFrames; i++) {
            const swayOffset = Math.sin(i / Math.PI) * 2; // Sinusoidal sway calculation (adjust value for sway amplitude)

            // Trunk (adjust starting X for swaying)
            frames.push(this.generateLineFrame(i, centerX - swayOffset, 0, trunkLength, Colour.White));

            // Left Branch
            frames.push(this.generateDiagonalFrame(i, centerX - swayOffset - branchLength, trunkLength, 'up', Colour.White));

            // Right Branch
            frames.push(this.generateDiagonalFrame(i, centerX - swayOffset + branchLength, trunkLength, 'down', Colour.White));

            // Leaves (adjust starting X for swaying)
            frames.push(this.generateLeavesFrame(i, centerX - swayOffset - branchLength + 1, trunkLength - 2, leafSize, Colour.Green));
            frames.push(this.generateLeavesFrame(i, centerX - swayOffset + branchLength - 1, trunkLength - 2, leafSize, Colour.Green));
          
        }
        return frames;
    }
}