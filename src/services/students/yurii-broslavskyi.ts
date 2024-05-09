import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import { Colour } from '../../models/colour';
import IFrame from '../../models/frame';
import IPixelState from '../../models/pixel-state';

export class YuriiBroslavskyiConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Yurii Broslavskyi';
    }

    public getStudentEmail(): string {
        return 'yurii.broslavskyi@lnu.edu.ua';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Yurii',
            surname: 'Broslavskyi',
            email: this.getStudentEmail(),
            projectName: 'Online Gaming Tournament Platform',
            personalProjectLink: 'https://github.com/YuriiBroslavskyi/Broslavskyi.University.Online-Gaming-Tournament-Platform',
            header: Header(),
            frames: OnlineGamingTournamentPlatformAnimation()
        }
    }
}

function Header(): IFrame {
    const OnlineGamingTournamentPlatformLogo: IPixelState[] = [
        { x: 9, y: 0, color: Colour.White },
        { x: 10, y: 0, color: Colour.White },
        { x: 11, y: 0, color: Colour.White },

        { x: 6, y: 1, color: Colour.White },
        { x: 7, y: 1, color: Colour.White },
        { x: 8, y: 1, color: Colour.White },
        { x: 12, y: 1, color: Colour.White },

        { x: 3, y: 2, color: Colour.White },
        { x: 4, y: 2, color: Colour.White },
        { x: 5, y: 2, color: Colour.White },
        { x: 13, y: 2, color: Colour.White },

        { x: 2, y: 3, color: Colour.White },
        { x: 13, y: 3, color: Colour.White },

        { x: 1, y: 4, color: Colour.White },
        { x: 4, y: 4, color: Colour.White },
        { x: 5, y: 4, color: Colour.White },
        { x: 8, y: 4, color: Colour.White },
        { x: 12, y: 4, color: Colour.White },

        { x: 1, y: 5, color: Colour.White },
        { x: 4, y: 5, color: Colour.White },
        { x: 5, y: 5, color: Colour.White },
        { x: 7, y: 5, color: Colour.White },
        { x: 8, y: 5, color: Colour.White },
        { x: 9, y: 5, color: Colour.White },
        { x: 11, y: 5, color: Colour.White },

        { x: 2, y: 6, color: Colour.White },
        { x: 8, y: 6, color: Colour.White },
        { x: 11, y: 6, color: Colour.White },

        { x: 3, y: 7, color: Colour.White },
        { x: 11, y: 7, color: Colour.White },

        { x: 3, y: 8, color: Colour.White },
        { x: 11, y: 8, color: Colour.White },

        { x: 2, y: 9, color: Colour.White },
        { x: 5, y: 9, color: Colour.White },
        { x: 11, y: 9, color: Colour.White },

        { x: 1, y: 10, color: Colour.White },
        { x: 4, y: 10, color: Colour.White },
        { x: 6, y: 10, color: Colour.White },
        { x: 8, y: 10, color: Colour.White },
        { x: 9, y: 10, color: Colour.White },
        { x: 11, y: 10, color: Colour.White },

        { x: 1, y: 11, color: Colour.White },
        { x: 5, y: 11, color: Colour.White },
        { x: 8, y: 11, color: Colour.White },
        { x: 9, y: 11, color: Colour.White },
        { x: 12, y: 11, color: Colour.White },

        { x: 2, y: 12, color: Colour.White },
        { x: 13, y: 12, color: Colour.White },

        { x: 3, y: 13, color: Colour.White },
        { x: 4, y: 13, color: Colour.White },
        { x: 5, y: 13, color: Colour.White },
        { x: 13, y: 13, color: Colour.White },

        { x: 6, y: 14, color: Colour.White },
        { x: 7, y: 14, color: Colour.White },
        { x: 8, y: 14, color: Colour.White },
        { x: 12, y: 14, color: Colour.White },

        { x: 9, y: 15, color: Colour.White },
        { x: 10, y: 15, color: Colour.White },
        { x: 11, y: 15, color: Colour.White }

    ];
    return {
        frameNumber: 0,
        pixels: OnlineGamingTournamentPlatformLogo,
    };
}

function OnlineGamingTournamentPlatformAnimation(): IFrame[] {
    const frames: IFrame[] = [];
    const logoCenterX = 9;
    const logoCenterY = 7;
    const angleIncrement = (2 * Math.PI) / 40;

    const originalPixels: IPixelState[] = [
        { x: 9, y: 0, color: Colour.White },
        { x: 10, y: 0, color: Colour.White },
        { x: 11, y: 0, color: Colour.White },

        { x: 6, y: 1, color: Colour.White },
        { x: 7, y: 1, color: Colour.White },
        { x: 8, y: 1, color: Colour.White },
        { x: 12, y: 1, color: Colour.White },

        { x: 3, y: 2, color: Colour.White },
        { x: 4, y: 2, color: Colour.White },
        { x: 5, y: 2, color: Colour.White },
        { x: 13, y: 2, color: Colour.White },

        { x: 2, y: 3, color: Colour.White },
        { x: 13, y: 3, color: Colour.White },

        { x: 1, y: 4, color: Colour.White },
        { x: 4, y: 4, color: Colour.White },
        { x: 5, y: 4, color: Colour.White },
        { x: 8, y: 4, color: Colour.White },
        { x: 12, y: 4, color: Colour.White },

        { x: 1, y: 5, color: Colour.White },
        { x: 4, y: 5, color: Colour.White },
        { x: 5, y: 5, color: Colour.White },
        { x: 7, y: 5, color: Colour.White },
        { x: 8, y: 5, color: Colour.White },
        { x: 9, y: 5, color: Colour.White },
        { x: 11, y: 5, color: Colour.White },

        { x: 2, y: 6, color: Colour.White },
        { x: 8, y: 6, color: Colour.White },
        { x: 11, y: 6, color: Colour.White },

        { x: 3, y: 7, color: Colour.White },
        { x: 11, y: 7, color: Colour.White },

        { x: 3, y: 8, color: Colour.White },
        { x: 11, y: 8, color: Colour.White },

        { x: 2, y: 9, color: Colour.White },
        { x: 5, y: 9, color: Colour.White },
        { x: 11, y: 9, color: Colour.White },

        { x: 1, y: 10, color: Colour.White },
        { x: 4, y: 10, color: Colour.White },
        { x: 6, y: 10, color: Colour.White },
        { x: 8, y: 10, color: Colour.White },
        { x: 9, y: 10, color: Colour.White },
        { x: 11, y: 10, color: Colour.White },

        { x: 1, y: 11, color: Colour.White },
        { x: 5, y: 11, color: Colour.White },
        { x: 8, y: 11, color: Colour.White },
        { x: 9, y: 11, color: Colour.White },
        { x: 12, y: 11, color: Colour.White },

        { x: 2, y: 12, color: Colour.White },
        { x: 13, y: 12, color: Colour.White },

        { x: 3, y: 13, color: Colour.White },
        { x: 4, y: 13, color: Colour.White },
        { x: 5, y: 13, color: Colour.White },
        { x: 13, y: 13, color: Colour.White },

        { x: 6, y: 14, color: Colour.White },
        { x: 7, y: 14, color: Colour.White },
        { x: 8, y: 14, color: Colour.White },
        { x: 12, y: 14, color: Colour.White },

        { x: 9, y: 15, color: Colour.White },
        { x: 10, y: 15, color: Colour.White },
        { x: 11, y: 15, color: Colour.White }
    ];

    for (let frameNumber = 0; frameNumber < 40; frameNumber++) {
        const pixels: IPixelState[] = [];

        const angle = angleIncrement * frameNumber;

        originalPixels.forEach(pixel => {
            const rotatedX = Math.round((pixel.x - logoCenterX) * Math.cos(angle) - (pixel.y - logoCenterY) * Math.sin(angle) + logoCenterX);
            const rotatedY = Math.round((pixel.x - logoCenterX) * Math.sin(angle) + (pixel.y - logoCenterY) * Math.cos(angle) + logoCenterY);

            pixels.push({ x: rotatedX, y: rotatedY, color: pixel.color });
        });

        frames.push({
            frameNumber: frameNumber,
            pixels: pixels,
        });
    }

    return frames;
}