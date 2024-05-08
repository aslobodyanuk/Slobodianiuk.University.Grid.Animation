import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class AnastasiiaProkopishenaConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Anastasiia Prokopishena';
    }

    public getStudentEmail(): string {
        return 'prokopishena.anastasia@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Anastasiia',
            surname: 'Prokopishena',
            email: this.getStudentEmail(),
            projectName: 'Sun Animation',
            personalProjectLink: 'https://fitness-platform.azurewebsites.net/',
            header: GetHeader(),
            frames: GenerateFrames(),
        };
    }
}

function GenerateSunFrame(frameNumber: number): IFrame {
    const pixels: IPixelState[] = [];

    // Draw sun center
    const sunCenterX = 7;
    const sunCenterY = 7;
    const sunCenterRadius = 3;
    drawCircle(sunCenterX, sunCenterY, sunCenterRadius, pixels);

    // Draw sun rays
    const sunRadius = 5;
    const rayLength = 7; // Збільшити довжину променів
    const raysCount = 8; // Змінити кількість променів
    const angleIncrement = (2 * Math.PI) / raysCount;
    const rotationAngle = (frameNumber % 120) * (Math.PI / 60);
    
    for (let i = 0; i < raysCount; i++) {
        const rayAngle = i * angleIncrement;
        const rayStartX = sunCenterX + (sunCenterRadius + 1) * Math.cos(rayAngle + rotationAngle);
        const rayStartY = sunCenterY + (sunCenterRadius + 1) * Math.sin(rayAngle + rotationAngle);
        const rayEndX = sunCenterX + sunRadius * Math.cos(rayAngle + rotationAngle);
        const rayEndY = sunCenterY + sunRadius * Math.sin(rayAngle + rotationAngle);

        drawLine(rayStartX, rayStartY, rayEndX, rayEndY, rayLength, pixels);
    }

    return { frameNumber, pixels };
}

function drawLine(x1: number, y1: number, x2: number, y2: number, length: number, pixels: IPixelState[]): void {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const unitX = dx / length;
    const unitY = dy / length;

    for (let i = 0; i <= length; i++) {
        const newX = Math.round(x1 + unitX * i);
        const newY = Math.round(y1 + unitY * i);
        pixels.push({ x: newX, y: newY, color: Colour.White });
    }
}

function drawCircle(centerX: number, centerY: number, radius: number, pixels: IPixelState[]): void {
    for (let x = centerX - radius; x <= centerX + radius; x++) {
        for (let y = centerY - radius; y <= centerY + radius; y++) {
            const distanceToCenter = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
            if (distanceToCenter <= radius) {
                pixels.push({ x, y, color: Colour.White });
            }
        }
    }
}

function GenerateFrames(): IFrame[] {
    const frames: IFrame[] = [];

    for (let frameNumber = 0; frameNumber < 120; frameNumber++) {
        frames.push(GenerateSunFrame(frameNumber));
    }

    return frames;
}

function GetHeader(): IFrame {
    return GenerateSunFrame(0);
}
