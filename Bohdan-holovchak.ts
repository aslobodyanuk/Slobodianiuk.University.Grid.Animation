import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";

export class BohdanHolovchakConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Holovchak Bohdan';
    }

    public getStudentEmail(): string {
        return 'bohdan.holovchak@lnu.edu.ua';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'bohdan',
            surname: 'Holovchak',
            email: this.getStudentEmail(),
            projectName: 'idk',
            personalProjectLink: 'http://demo-lecture-3.azurewebsites.net',
            header: Constants.DefaultConfig.header,
            frames: Constants.DefaultConfig.frames
        }
    }
}

interface IFrame {
    ball: IPixelState;
    ground: IPixelState[];
}

interface IPixelState {
    x: number;
    y: number;
    color: Colour;
}

enum Colour {
    White = "#FFFFFF",
    Black = "#000000",
    Red = "#FF0000",
    Green = "#00FF00",
    Blue = "#0000FF",
}

function generateBouncingBallFrames(): IFrame[] {
    const frames: IFrame[] = [];

    const ball: IPixelState = { x: 5, y: 0, color: Colour.Red };
    const ground: IPixelState[] = [
        { x: 0, y: 12, color: Colour.Green },
        { x: 1, y: 12, color: Colour.Green },
        { x: 2, y: 12, color: Colour.Green },
        { x: 3, y: 12, color: Colour.Green },
        { x: 4, y: 12, color: Colour.Green },
        { x: 5, y: 12, color: Colour.Green },
        { x: 6, y: 12, color: Colour.Green },
        { x: 7, y: 12, color: Colour.Green },
        { x: 8, y: 12, color: Colour.Green },
        { x: 9, y: 12, color: Colour.Green },
        { x: 10, y: 12, color: Colour.Green },
    ];

    const gravity = 0.5; // acceleration due to gravity
    const initialVelocity = -6; // initial upward velocity of the ball
    const bounceFactor = 0.8; // ratio of upward velocity after a bounce

    let ballY = ball.y;
    let velocity = initialVelocity;

    for (let frameNumber = 0; frameNumber < 50; frameNumber++) {
        const pixels: IPixelState[] = [];

        // Calculate the new position of the ball
        ballY += velocity;
        velocity += gravity;

        // Check if the ball has hit the ground
        if (ballY >= ground[0].y - 1) {
            // Reverse the velocity and reduce it by the bounce factor
            velocity = -velocity * bounceFactor;
            // Move the ball up to the ground
            ballY = ground[0].y - 1;
        }

        // Update the position of the ball
        ball.y = ballY;

        // Add the ball and ground pixels to the frame
        pixels.push(ball);
        pixels.push(...ground);

        // Create the frame
        const frame: IFrame = { ball, ground };
        frames.push(frame);
    }

    return frames;
}

// Example usage
const frames = generateBouncingBallFrames();
console.log(frames);



