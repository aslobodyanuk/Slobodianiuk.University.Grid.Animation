import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import { Colour } from '../../models/colour';
import IFrame from '../../models/frame';
import IPixelState from '../../models/pixel-state';


export class DenysHryhoriichukConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Denys Hryhoriichuk';
    }

    public getStudentEmail(): string {
        return 'denys.hryhoriichuk@lnu.edu.ua';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Denys',
            surname: 'Hryhoriichuk',
            email: this.getStudentEmail(),
            projectName: 'Instagram 2.0',
            personalProjectLink: 'https://instbyden.azurewebsites.net/',
            header: {
                frameNumber: 0,
                pixels: [],
            }, 
            frames: this.generateFlyingMickeyMouseFrames()
        }
    }

    private generateFlyingMickeyMouseFrames(): IFrame[] {
        const frames: IFrame[] = [];

        for (let frameNumber = 0; frameNumber < 120; frameNumber++) {
            const pixels: IPixelState[] = [];
            const centerX = 7 + Math.sin(frameNumber / 10) * 3; // Adjust x-coordinate for horizontal movement
            const centerY = 7 + Math.sin(frameNumber / 15) * 3; // Adjust y-coordinate for vertical movement
            const heartSize = 2 + frameNumber / 20; // Adjust heart size based on frame number

            for (let y = 0; y < 16; y++) {
                for (let x = 0; x < 16; x++) {
                    const distance = Math.sqrt(Math.pow(centerX - x, 2) + Math.pow(centerY - y, 2));

                    // Adjust heart shape to resemble a heart-like button
                    const isInHeart = this.isInsideHeart(x, y, centerX, centerY, heartSize);

                    if (isInHeart) {
                        pixels.push({
                            x: x,
                            y: y,
                            color: Colour.White // Heart color is white
                        });
                    } else {
                        pixels.push({
                            x: x,
                            y: y,
                            color: Colour.Black // Default color is black
                        });
                    }
                }
            }

            frames.push({
                frameNumber: frameNumber,
                pixels: pixels
            });
        }

        return frames;
    }

    private isInsideHeart(x: number, y: number, centerX: number, centerY: number, heartSize: number): boolean {
        const dx = Math.abs(x - centerX);
        const dy = Math.abs(y - centerY);

        if (x >= centerX - heartSize && x <= centerX + heartSize && y >= centerY - heartSize && y <= centerY + heartSize) {
            return true;
        }

        // Equation for the top half of the heart
        if (dy <= heartSize && (dx <= heartSize && (dx + dy) <= heartSize)) {
            return true;
        }

        // Equation for the bottom left part of the heart
        if (Math.pow(x - (centerX - heartSize), 2) + Math.pow(y - (centerY - heartSize), 2) <= Math.pow(heartSize, 2)) {
            return true;
        }

        // Equation for the bottom right part of the heart
        if (Math.pow(x - (centerX + heartSize), 2) + Math.pow(y - (centerY - heartSize), 2) <= Math.pow(heartSize, 2)) {
            return true;
        }

        return false;
    }


}