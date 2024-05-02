import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class AndriiKozynyiConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'andrii-kozynyi';
    }

    public getStudentEmail(): string {
        return 'andrii.kozynyi@lnu.edu.ua';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Andrii',
            surname: 'Kozynyi',
            email: this.getStudentEmail(),
            projectName: 'PixelClockAnimation',
            personalProjectLink: 'https://example.com',
            header: GetHeader(),
            frames: GenerateFrames(),
        };
    }
}

function GenerateClockFrame(frameNumber: number): IFrame {
    const pixels: IPixelState[] = [];

    // Створення контуру годинника
    for (let x = 0; x < 16; x++) {
        for (let y = 0; y < 16; y++) {
            if ((x === 0 || x === 15 || y === 0 || y === 15) && !(x === 0 && y === 0) && !(x === 0 && y === 15) && !(x === 15 && y === 0) && !(x === 15 && y === 15)) {
                pixels.push({ x, y, color: Colour.White });
            }
        }
    }

    // Обличчя годинника
    pixels.push({ x: 7, y: 7, color: Colour.White });

    // Розміщення стрілок годинника залежно від часу
    const hours = frameNumber % 12; // Припустимо, що ми маємо тільки 12 годин
    const minutes = frameNumber % 60; // Припустимо, що ми маємо тільки 60 хвилин

    // Стрілка годин
    const hourAngle = (hours * 30 + minutes / 2) * (Math.PI / 180);
    const hourLength = 3; // Довжина стрілки годин
    const hourX = Math.round(7 + hourLength * Math.sin(hourAngle));
    const hourY = Math.round(7 - hourLength * Math.cos(hourAngle));
    drawLine(7, 7, hourX, hourY, pixels); // Малюємо стрілку годин

    // Стрілка хвилин
    const minuteAngle = minutes * 6 * (Math.PI / 180);
    const minuteLength = 5; // Довжина стрілки хвилин
    const minuteX = Math.round(7 + minuteLength * Math.sin(minuteAngle));
    const minuteY = Math.round(7 - minuteLength * Math.cos(minuteAngle));
    drawLine(7, 7, minuteX, minuteY, pixels); // Малюємо стрілку хвилин

    const frame: IFrame = {
        frameNumber,
        pixels
    };

    return frame;
}

// Функція для малювання лінії на годиннику (стрілки)
function drawLine(x1: number, y1: number, x2: number, y2: number, pixels: IPixelState[]): void {
    const dx = Math.abs(x2 - x1);
    const dy = Math.abs(y2 - y1);
    const sx = (x1 < x2) ? 1 : -1;
    const sy = (y1 < y2) ? 1 : -1;
    let err = dx - dy;

    while (true) {
        pixels.push({ x: x1, y: y1, color: Colour.White });

        if ((x1 === x2) && (y1 === y2)) break;
        const e2 = 2 * err;
        if (e2 > -dy) { err -= dy; x1 += sx; }
        if (e2 < dx) { err += dx; y1 += sy; }
    }
}

function GenerateFrames(): IFrame[] {
    const frames: IFrame[] = [];

    for (let frameNumber = 0; frameNumber < 120; frameNumber++) { // Змінив кількість кадрів на 120
        frames.push(GenerateClockFrame(frameNumber));
    }

    return frames;
}

function GetHeader(): IFrame {
    return GenerateClockFrame(0);
}
