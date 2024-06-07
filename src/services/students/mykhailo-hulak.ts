import IAnimationConfig from '../../models/animation-config';
import { IConfigLoaderService } from '../config-loader-interface';
import IFrame from '../../models/frame';
import IPixelState from '../../models/pixel-state';
import { Colour } from '../../models/colour';

export class MykhailoHulakConfigLoaderService implements IConfigLoaderService {
    public getStudentName(): string {
        return 'mykhailo-hulak';
    }

    public getStudentEmail(): string {
        return 'miha.gulak@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Mykhailo',
            surname: 'Hulak',
            email: this.getStudentEmail(),
            projectName: 'BlackHoleAnimation',
            personalProjectLink: 'https://local-news-client-eight.vercel.app/',
            header: GetHeader(),
            frames: GenerateFrames(),
        };
    }
}

function GenerateBlackHoleFrame(frameNumber: number): IFrame {
    const pixels: IPixelState[] = [];

    const blackHoleSize = 4;
    const rotationSpeed = 1.5;

    const angle = (frameNumber * rotationSpeed) % 360;
    const centerX = 7.5;
    const centerY = 7.5;

    for (let x = centerX - blackHoleSize; x <= centerX + blackHoleSize; x++) {
        for (
            let y = centerY - blackHoleSize;
            y <= centerY + blackHoleSize;
            y++
        ) {
            const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
            if (distance <= blackHoleSize && distance >= blackHoleSize - 1) {
                const angleRad = angle * (Math.PI / 180);
                const newX = Math.round(
                    centerX +
                        (x - centerX) * Math.cos(angleRad) -
                        (y - centerY) * Math.sin(angleRad)
                );
                const newY = Math.round(
                    centerY +
                        (x - centerX) * Math.sin(angleRad) +
                        (y - centerY) * Math.cos(angleRad)
                );
                pixels.push({ x: newX, y: newY, color: Colour.White });
            }
        }
    }

    const frame: IFrame = {
        frameNumber,
        pixels,
    };

    return frame;
}

function GenerateFrames(): IFrame[] {
    const frames: IFrame[] = [];

    for (let frameNumber = 0; frameNumber < 360; frameNumber++) {
        frames.push(GenerateBlackHoleFrame(frameNumber));
    }

    return frames;
}

function GetHeader(): IFrame {
    return GenerateBlackHoleFrame(0);
}
