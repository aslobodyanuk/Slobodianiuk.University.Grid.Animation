import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import { Colour } from "../../models/colour";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";

export class OlehTysovskyiConfigLoaderService implements IConfigLoaderService {
  public getStudentName(): string {
    return "Oleh Tysovskyi";
  }

  public getStudentEmail(): string {
    return "oleg.tisovsky228@gmail.com";
  }

  public loadConfig(): IAnimationConfig {
    return {
      name: "Oleh",
      surname: "Tysovskyi",
      email: this.getStudentEmail(),
      projectName: "Monobank",
      personalProjectLink:
        "https://tysovskyi-university-monobank-client.vercel.app",
      header: {
        frameNumber: 0,
        pixels: this.generateBombFrame(0),
      },
      frames: this.generateBombFrames(),
    };
  }

  private generateBombFrames(): IFrame[] {
    const frames: IFrame[] = [];

    // Додаємо кадри, де нитка згорає
    for (let frameNumber = 0; frameNumber < 10; frameNumber++) {
      frames.push({
        frameNumber: frameNumber,
        pixels: this.generateBurningFuseFrame(frameNumber),
      });
    }

    // Додаємо кадри, де бомба вибухає
    for (let frameNumber = 10; frameNumber < 30; frameNumber++) {
      frames.push({
        frameNumber: frameNumber,
        pixels: this.generateExplosionFrame(frameNumber - 10),
      });
    }

    return frames;
  }

  private generateBurningFuseFrame(frameNumber: number): IPixelState[] {
    const pixels: IPixelState[] = [];

    const centerX = 9; // Половина ширини поля
    const centerY = 7; // Половина висоти поля
    const circleRadius = 5;

    // Генеруємо круглу форму бомби
    for (let theta = 0; theta < 360; theta++) {
      const radians = theta * (Math.PI / 180);
      const x = Math.round(centerX + circleRadius * Math.cos(radians));
      const y = Math.round(centerY + circleRadius * Math.sin(radians));
      pixels.push({
        x: x,
        y: y,
        color: Colour.White,
      });
    }

    // Генеруємо "палючу" нитку, яка збільшується зверху
    for (let i = 0; i < 3 - frameNumber; i++) {
      pixels.push({
        x: 3 - i,
        y: centerY, // Змінюємо напрямок збільшення вверх
        color: Colour.White,
      });
    }

    return pixels;
  }

  private generateExplosionFrame(frameNumber: number): IPixelState[] {
    const pixels: IPixelState[] = [];

    const centerX = 9; // Половина ширини поля
    const centerY = 7; // Половина висоти поля
    const circleRadius = 5;

    // Починаємо з найменшого радіусу і збільшуємо його на кожній ітерації
    for (let r = circleRadius; r <= circleRadius + frameNumber; r++) {
      pixels.length = 0;
      for (let theta = 0; theta < 360; theta++) {
        const radians = theta * (Math.PI / 180);
        const x = Math.round(centerX + r * Math.cos(radians));
        const y = Math.round(centerY + r * Math.sin(radians));
        pixels.push({
          x: x,
          y: y,
          color: Colour.White,
        });
      }
    }

    return pixels;
  }

  private generateBombFrame(frameNumber: number): IPixelState[] {
    // Викликаємо метод для першого кадру
    return this.generateBurningFuseFrame(frameNumber);
  }
}
