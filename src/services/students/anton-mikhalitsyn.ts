import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import { Colour } from '../../models/colour';
import IFrame from '../../models/frame';
import IPixelState from '../../models/pixel-state';

export class AntonMikhalitsynConfigLoaderService implements IConfigLoaderService {
    
    private static readonly GRID_WIDTH = 16;
    private static readonly GRID_HEIGHT = 16;
    private static readonly CARD_HEADER_HEIGHT = 11;

    public getStudentName(): string {
        return 'Anton Mikhalitsyn';
    }

    public getStudentEmail(): string {
        return 'antonmih2005@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Anton',
            surname: 'Mikhalitsyn',
            email: this.getStudentEmail(),
            projectName: 'Expanding cross',
            personalProjectLink: 's',
            header: {
                frameNumber: 0,
                pixels: this.generateHeaderPixels(),
            },
            frames: this.generateFrames(),
        };
    }

    private generateHeaderPixels(): IPixelState[] {
        const pixels: IPixelState[] = [];
        const centerY = Math.floor(AntonMikhalitsynConfigLoaderService.CARD_HEADER_HEIGHT / 2);

        
        for (let x = 0; x < AntonMikhalitsynConfigLoaderService.GRID_WIDTH; x++) {
            pixels.push({
                x,
                y: centerY,
                color: Colour.White
            });
        }

        return pixels;
    }

    private generateFrames(): IFrame[] {
        const frames: IFrame[] = [];
        const maxFrames = 120;
        const frameDuration = 42; 

        for (let frameNumber = 0; frameNumber < maxFrames; frameNumber++) {
            const crossPixels: IPixelState[] = this.generateCross(frameNumber);
            frames.push({
                frameNumber: frameNumber,
                pixels: this.fillGridWithDefaultColor(crossPixels),
            });
        }

        return frames;
    }

    private generateCross(frameNumber: number): IPixelState[] {
        const crossPixels: IPixelState[] = [];
        const centerX = Math.floor(AntonMikhalitsynConfigLoaderService.GRID_WIDTH / 2);
        const centerY = Math.floor(AntonMikhalitsynConfigLoaderService.GRID_HEIGHT / 2);

        const maxLength = 8; 
        const currentLength = (frameNumber / 120) * maxLength; 

        
        for (let x = centerX - currentLength; x <= centerX + currentLength; x++) {
            crossPixels.push({
                x,
                y: centerY,
                color: Colour.White
            });
        }

       
        for (let y = centerY - currentLength; y <= centerY + currentLength; y++) {
            crossPixels.push({
                x: centerX,
                y,
                color: Colour.White
            });
        }

        return crossPixels;
    }

    private fillGridWithDefaultColor(pixels: IPixelState[]): IPixelState[] {
        const filledPixels: IPixelState[] = [];

        for (let y = 0; y < AntonMikhalitsynConfigLoaderService.GRID_HEIGHT; y++) {
            for (let x = 0; x < AntonMikhalitsynConfigLoaderService.GRID_WIDTH; x++) {
                const foundPixel = pixels.find(pixel => pixel.x === x && pixel.y === y);
                filledPixels.push(foundPixel ? foundPixel : { x, y, color: Colour.Black });
            }
        }

        return filledPixels;
    }
}
