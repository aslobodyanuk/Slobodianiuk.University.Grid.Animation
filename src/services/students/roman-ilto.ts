import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class IltoRomanConfigLoaderService implements IConfigLoaderService {

	public getStudentName(): string {
		return 'Roman Ilto';
	}

	public getStudentEmail(): string {
		return 'romanilte5@gmail.com';
	}

	public loadConfig(): IAnimationConfig {
		return {
			name: 'Roman',
			surname: 'Ilto',
			email: this.getStudentEmail(),
			projectName: 'Emoji project',
			personalProjectLink: 'https://codeflow.azurewebsites.net',
			header: Avatar(0),
			frames: generateFrames()
		}
	}
}
function generateFrames(): IFrame[] {
	const frames: IFrame[] = [];

	const firstFrame: IPixelState[] = [
		{ x: 13, y: 14, color: Colour.White }, { x: 11, y: 1, color: Colour.White }, { x: 1, y: 9, color: Colour.White }, { x: 6, y: 15, color: Colour.White }, { x: 14, y: 3, color: Colour.White }, { x: 15, y: 8, color: Colour.White }, { x: 5, y: 2, color: Colour.White }, { x: 5, y: 7, color: Colour.White }, { x: 14, y: 13, color: Colour.White }, { x: 12, y: 1, color: Colour.White }, { x: 1, y: 10, color: Colour.White }, { x: 7, y: 15, color: Colour.White }, { x: 15, y: 4, color: Colour.White }, { x: 15, y: 9, color: Colour.White }, { x: 5, y: 3, color: Colour.White }, { x: 4, y: 1, color: Colour.White }, { x: 3, y: 2, color: Colour.White }, { x: 5, y: 1, color: Colour.White }, { x: 2, y: 3, color: Colour.White }, { x: 1, y: 11, color: Colour.White }, { x: 8, y: 15, color: Colour.White }, { x: 15, y: 5, color: Colour.White }, { x: 15, y: 10, color: Colour.White }, { x: 5, y: 4, color: Colour.White }, { x: 5, y: 8, color: Colour.White }, { x: 6, y: 1, color: Colour.White }, { x: 1, y: 4, color: Colour.White }, { x: 1, y: 12, color: Colour.White }, { x: 9, y: 15, color: Colour.White }, { x: 15, y: 6, color: Colour.White }, { x: 15, y: 11, color: Colour.White }, { x: 5, y: 5, color: Colour.White }, { x: 7, y: 1, color: Colour.White }, { x: 1, y: 5, color: Colour.White }, { x: 2, y: 13, color: Colour.White }, { x: 10, y: 15, color: Colour.White },
		{ x: 8, y: 1, color: Colour.White }, { x: 1, y: 6, color: Colour.White }, { x: 3, y: 14, color: Colour.White }, { x: 11, y: 15, color: Colour.White }, { x: 9, y: 1, color: Colour.White }, { x: 1, y: 7, color: Colour.White }, { x: 4, y: 15, color: Colour.White }, { x: 12, y: 15, color: Colour.White }, { x: 10, y: 1, color: Colour.White }, { x: 1, y: 8, color: Colour.White }, { x: 5, y: 15, color: Colour.White }, { x: 13, y: 2, color: Colour.White }, { x: 15, y: 7, color: Colour.White }, { x: 15, y: 12, color: Colour.White }, { x: 5, y: 6, color: Colour.White }, { x: 5, y: 9, color: Colour.White },
		{ x: 5, y: 9, color: Colour.White }, { x: 5, y: 13, color: Colour.White }, { x: 6, y: 6, color: Colour.White }, { x: 6, y: 10, color: Colour.White }, { x: 5, y: 10, color: Colour.White }, { x: 5, y: 14, color: Colour.White }, { x: 6, y: 7, color: Colour.White }, { x: 6, y: 11, color: Colour.White }, { x: 6, y: 3, color: Colour.White }, { x: 5, y: 11, color: Colour.White }, { x: 6, y: 4, color: Colour.White }, { x: 6, y: 8, color: Colour.White }, { x: 6, y: 12, color: Colour.White }, { x: 6, y: 2, color: Colour.White }, { x: 5, y: 12, color: Colour.White }, { x: 6, y: 5, color: Colour.White }, { x: 6, y: 9, color: Colour.White }, { x: 6, y: 13, color: Colour.White }, { x: 6, y: 14, color: Colour.White }, { x: 7, y: 2, color: Colour.White }, { x: 7, y: 9, color: Colour.White }, { x: 7, y: 6, color: Colour.White }, { x: 7, y: 10, color: Colour.White }, { x: 7, y: 3, color: Colour.White }, { x: 7, y: 11, color: Colour.White }, { x: 7, y: 4, color: Colour.White }, { x: 7, y: 12, color: Colour.White }, { x: 7, y: 5, color: Colour.White }, { x: 7, y: 13, color: Colour.White }, { x: 7, y: 7, color: Colour.White }, { x: 7, y: 14, color: Colour.White }, { x: 8, y: 3, color: Colour.White }, { x: 8, y: 10, color: Colour.White }, { x: 8, y: 4, color: Colour.White }, { x: 8, y: 11, color: Colour.White }, { x: 8, y: 5, color: Colour.White }, { x: 8, y: 12, color: Colour.White }, { x: 8, y: 6, color: Colour.White }, { x: 8, y: 13, color: Colour.White }, { x: 10, y: 4, color: Colour.White }, { x: 11, y: 5, color: Colour.White }, { x: 12, y: 6, color: Colour.White }, { x: 12, y: 7, color: Colour.White }, { x: 12, y: 8, color: Colour.White },
	];

	const secondFrame: IPixelState[] = [
		{ x: 13, y: 14, color: Colour.White }, { x: 11, y: 1, color: Colour.White }, { x: 1, y: 9, color: Colour.White }, { x: 6, y: 15, color: Colour.White }, { x: 14, y: 3, color: Colour.White }, { x: 15, y: 8, color: Colour.White }, { x: 5, y: 2, color: Colour.White }, { x: 5, y: 7, color: Colour.White }, { x: 14, y: 13, color: Colour.White }, { x: 12, y: 1, color: Colour.White }, { x: 1, y: 10, color: Colour.White }, { x: 7, y: 15, color: Colour.White }, { x: 15, y: 4, color: Colour.White }, { x: 15, y: 9, color: Colour.White }, { x: 5, y: 3, color: Colour.White }, { x: 4, y: 1, color: Colour.White }, { x: 3, y: 2, color: Colour.White }, { x: 5, y: 1, color: Colour.White }, { x: 2, y: 3, color: Colour.White }, { x: 1, y: 11, color: Colour.White }, { x: 8, y: 15, color: Colour.White }, { x: 15, y: 5, color: Colour.White }, { x: 15, y: 10, color: Colour.White }, { x: 5, y: 4, color: Colour.White }, { x: 5, y: 8, color: Colour.White }, { x: 6, y: 1, color: Colour.White }, { x: 1, y: 4, color: Colour.White }, { x: 1, y: 12, color: Colour.White }, { x: 9, y: 15, color: Colour.White }, { x: 15, y: 6, color: Colour.White }, { x: 15, y: 11, color: Colour.White }, { x: 5, y: 5, color: Colour.White }, { x: 7, y: 1, color: Colour.White }, { x: 1, y: 5, color: Colour.White }, { x: 2, y: 13, color: Colour.White }, { x: 10, y: 15, color: Colour.White }, { x: 8, y: 1, color: Colour.White }, { x: 1, y: 6, color: Colour.White }, { x: 3, y: 14, color: Colour.White }, { x: 11, y: 15, color: Colour.White }, { x: 9, y: 1, color: Colour.White }, { x: 1, y: 7, color: Colour.White }, { x: 4, y: 15, color: Colour.White }, { x: 12, y: 15, color: Colour.White },
		{ x: 10, y: 1, color: Colour.White }, { x: 1, y: 8, color: Colour.White }, { x: 5, y: 15, color: Colour.White }, { x: 13, y: 2, color: Colour.White }, { x: 15, y: 7, color: Colour.White }, { x: 15, y: 12, color: Colour.White }, { x: 5, y: 6, color: Colour.White }, { x: 5, y: 9, color: Colour.White }, { x: 5, y: 9, color: Colour.White }, { x: 5, y: 13, color: Colour.White }, { x: 6, y: 6, color: Colour.White }, { x: 6, y: 10, color: Colour.White }, { x: 5, y: 10, color: Colour.White }, { x: 5, y: 14, color: Colour.White }, { x: 6, y: 7, color: Colour.White }, { x: 6, y: 11, color: Colour.White }, { x: 6, y: 3, color: Colour.White }, { x: 5, y: 11, color: Colour.White }, { x: 6, y: 4, color: Colour.White }, { x: 6, y: 8, color: Colour.White }, { x: 6, y: 12, color: Colour.White }, { x: 6, y: 2, color: Colour.White }, { x: 5, y: 12, color: Colour.White }, { x: 6, y: 5, color: Colour.White }, { x: 6, y: 9, color: Colour.White }, { x: 6, y: 13, color: Colour.White }, { x: 6, y: 14, color: Colour.White }, { x: 7, y: 2, color: Colour.White }, { x: 7, y: 9, color: Colour.White }, { x: 7, y: 6, color: Colour.White }, { x: 7, y: 10, color: Colour.White }, { x: 7, y: 3, color: Colour.White }, { x: 7, y: 11, color: Colour.White }, { x: 7, y: 4, color: Colour.White }, { x: 7, y: 12, color: Colour.White }, { x: 7, y: 5, color: Colour.White }, { x: 7, y: 13, color: Colour.White }, { x: 7, y: 7, color: Colour.White }, { x: 7, y: 14, color: Colour.White }, { x: 8, y: 3, color: Colour.White }, { x: 8, y: 10, color: Colour.White }, { x: 8, y: 4, color: Colour.White }, { x: 8, y: 11, color: Colour.White }, { x: 8, y: 5, color: Colour.White }, { x: 8, y: 12, color: Colour.White }, { x: 8, y: 6, color: Colour.White }, { x: 8, y: 13, color: Colour.White }, { x: 11, y: 5, color: Colour.White }, { x: 12, y: 6, color: Colour.White }, { x: 12, y: 7, color: Colour.White }, { x: 12, y: 8, color: Colour.White }, { x: 12, y: 9, color: Colour.White },
	];

	const thirdFrame: IPixelState[] = [{ x: 13, y: 14, color: Colour.White }, { x: 11, y: 1, color: Colour.White }, { x: 1, y: 9, color: Colour.White }, { x: 6, y: 15, color: Colour.White }, { x: 14, y: 3, color: Colour.White }, { x: 15, y: 8, color: Colour.White }, { x: 5, y: 2, color: Colour.White }, { x: 5, y: 7, color: Colour.White }, { x: 14, y: 13, color: Colour.White }, { x: 12, y: 1, color: Colour.White }, { x: 1, y: 10, color: Colour.White }, { x: 7, y: 15, color: Colour.White }, { x: 15, y: 4, color: Colour.White }, { x: 15, y: 9, color: Colour.White }, { x: 5, y: 3, color: Colour.White }, { x: 4, y: 1, color: Colour.White }, { x: 3, y: 2, color: Colour.White }, { x: 5, y: 1, color: Colour.White }, { x: 2, y: 3, color: Colour.White }, { x: 1, y: 11, color: Colour.White }, { x: 8, y: 15, color: Colour.White }, { x: 15, y: 5, color: Colour.White }, { x: 15, y: 10, color: Colour.White }, { x: 5, y: 4, color: Colour.White }, { x: 5, y: 8, color: Colour.White }, { x: 6, y: 1, color: Colour.White }, { x: 1, y: 4, color: Colour.White }, { x: 1, y: 12, color: Colour.White }, { x: 9, y: 15, color: Colour.White }, { x: 15, y: 6, color: Colour.White }, { x: 15, y: 11, color: Colour.White }, { x: 5, y: 5, color: Colour.White }, { x: 7, y: 1, color: Colour.White }, { x: 1, y: 5, color: Colour.White }, { x: 2, y: 13, color: Colour.White }, { x: 10, y: 15, color: Colour.White }, { x: 8, y: 1, color: Colour.White }, { x: 1, y: 6, color: Colour.White }, { x: 3, y: 14, color: Colour.White }, { x: 11, y: 15, color: Colour.White }, { x: 9, y: 1, color: Colour.White }, { x: 1, y: 7, color: Colour.White }, { x: 4, y: 15, color: Colour.White }, { x: 12, y: 15, color: Colour.White },
	{ x: 10, y: 1, color: Colour.White }, { x: 1, y: 8, color: Colour.White }, { x: 5, y: 15, color: Colour.White }, { x: 13, y: 2, color: Colour.White }, { x: 15, y: 7, color: Colour.White }, { x: 15, y: 12, color: Colour.White }, { x: 5, y: 6, color: Colour.White }, { x: 5, y: 9, color: Colour.White }, { x: 5, y: 9, color: Colour.White }, { x: 5, y: 13, color: Colour.White }, { x: 6, y: 6, color: Colour.White }, { x: 6, y: 10, color: Colour.White }, { x: 5, y: 10, color: Colour.White }, { x: 5, y: 14, color: Colour.White }, { x: 6, y: 7, color: Colour.White }, { x: 6, y: 11, color: Colour.White }, { x: 6, y: 3, color: Colour.White }, { x: 5, y: 11, color: Colour.White }, { x: 6, y: 4, color: Colour.White }, { x: 6, y: 8, color: Colour.White }, { x: 6, y: 12, color: Colour.White }, { x: 6, y: 2, color: Colour.White },
	{ x: 5, y: 12, color: Colour.White }, { x: 6, y: 5, color: Colour.White }, { x: 6, y: 9, color: Colour.White }, { x: 6, y: 13, color: Colour.White }, { x: 6, y: 14, color: Colour.White }, { x: 7, y: 2, color: Colour.White }, { x: 7, y: 9, color: Colour.White }, { x: 7, y: 6, color: Colour.White }, { x: 7, y: 10, color: Colour.White }, { x: 7, y: 3, color: Colour.White }, { x: 7, y: 11, color: Colour.White }, { x: 7, y: 4, color: Colour.White }, { x: 7, y: 12, color: Colour.White }, { x: 7, y: 5, color: Colour.White }, { x: 7, y: 13, color: Colour.White }, { x: 7, y: 7, color: Colour.White }, { x: 7, y: 14, color: Colour.White }, { x: 8, y: 3, color: Colour.White }, { x: 8, y: 10, color: Colour.White }, { x: 8, y: 4, color: Colour.White }, { x: 8, y: 11, color: Colour.White }, { x: 8, y: 5, color: Colour.White }, { x: 8, y: 12, color: Colour.White }, { x: 8, y: 6, color: Colour.White }, { x: 8, y: 13, color: Colour.White }, { x: 12, y: 6, color: Colour.White }, { x: 12, y: 7, color: Colour.White }, { x: 12, y: 8, color: Colour.White }, { x: 12, y: 9, color: Colour.White }, { x: 12, y: 10, color: Colour.White },
	];

	const fourFrame: IPixelState[] = [
		{ x: 13, y: 14, color: Colour.White }, { x: 11, y: 1, color: Colour.White }, { x: 1, y: 9, color: Colour.White }, { x: 6, y: 15, color: Colour.White }, { x: 14, y: 3, color: Colour.White }, { x: 15, y: 8, color: Colour.White }, { x: 5, y: 2, color: Colour.White }, { x: 5, y: 7, color: Colour.White }, { x: 14, y: 13, color: Colour.White }, { x: 12, y: 1, color: Colour.White }, { x: 1, y: 10, color: Colour.White }, { x: 7, y: 15, color: Colour.White }, { x: 15, y: 4, color: Colour.White }, { x: 15, y: 9, color: Colour.White }, { x: 5, y: 3, color: Colour.White }, { x: 4, y: 1, color: Colour.White }, { x: 3, y: 2, color: Colour.White }, { x: 5, y: 1, color: Colour.White }, { x: 2, y: 3, color: Colour.White }, { x: 1, y: 11, color: Colour.White }, { x: 8, y: 15, color: Colour.White }, { x: 15, y: 5, color: Colour.White }, { x: 15, y: 10, color: Colour.White }, { x: 5, y: 4, color: Colour.White }, { x: 5, y: 8, color: Colour.White }, { x: 6, y: 1, color: Colour.White }, { x: 1, y: 4, color: Colour.White }, { x: 1, y: 12, color: Colour.White }, { x: 9, y: 15, color: Colour.White }, { x: 15, y: 6, color: Colour.White }, { x: 15, y: 11, color: Colour.White }, { x: 5, y: 5, color: Colour.White }, { x: 7, y: 1, color: Colour.White }, { x: 1, y: 5, color: Colour.White }, { x: 2, y: 13, color: Colour.White }, { x: 10, y: 15, color: Colour.White }, { x: 8, y: 1, color: Colour.White }, { x: 1, y: 6, color: Colour.White }, { x: 3, y: 14, color: Colour.White }, { x: 11, y: 15, color: Colour.White }, { x: 9, y: 1, color: Colour.White }, { x: 1, y: 7, color: Colour.White }, { x: 4, y: 15, color: Colour.White }, { x: 12, y: 15, color: Colour.White }, { x: 10, y: 1, color: Colour.White }, { x: 1, y: 8, color: Colour.White }, { x: 5, y: 15, color: Colour.White }, { x: 13, y: 2, color: Colour.White }, { x: 15, y: 7, color: Colour.White }, { x: 15, y: 12, color: Colour.White }, { x: 5, y: 6, color: Colour.White }, { x: 5, y: 9, color: Colour.White }, { x: 5, y: 9, color: Colour.White }, { x: 5, y: 13, color: Colour.White }, { x: 6, y: 6, color: Colour.White }, {
			x: 6, y: 10,
			color: Colour.White
		}, { x: 5, y: 10, color: Colour.White }, { x: 5, y: 14, color: Colour.White }, { x: 6, y: 7, color: Colour.White }, { x: 6, y: 11, color: Colour.White }, { x: 6, y: 3, color: Colour.White }, { x: 5, y: 11, color: Colour.White }, { x: 6, y: 4, color: Colour.White }, { x: 6, y: 8, color: Colour.White }, { x: 6, y: 12, color: Colour.White }, { x: 6, y: 2, color: Colour.White }, { x: 5, y: 12, color: Colour.White }, { x: 6, y: 5, color: Colour.White }, { x: 6, y: 9, color: Colour.White }, { x: 6, y: 13, color: Colour.White }, { x: 6, y: 14, color: Colour.White },
		{ x: 7, y: 2, color: Colour.White }, { x: 7, y: 9, color: Colour.White }, { x: 7, y: 6, color: Colour.White }, { x: 7, y: 10, color: Colour.White }, { x: 7, y: 3, color: Colour.White }, { x: 7, y: 11, color: Colour.White }, { x: 7, y: 4, color: Colour.White }, { x: 7, y: 12, color: Colour.White }, { x: 7, y: 5, color: Colour.White }, { x: 7, y: 13, color: Colour.White }, { x: 7, y: 7, color: Colour.White }, { x: 7, y: 14, color: Colour.White }, { x: 8, y: 3, color: Colour.White }, { x: 8, y: 10, color: Colour.White }, { x: 8, y: 4, color: Colour.White }, { x: 8, y: 11, color: Colour.White }, { x: 8, y: 5, color: Colour.White }, { x: 8, y: 12, color: Colour.White }, { x: 8, y: 6, color: Colour.White }, { x: 8, y: 13, color: Colour.White }, { x: 12, y: 7, color: Colour.White }, { x: 12, y: 8, color: Colour.White }, { x: 12, y: 9, color: Colour.White }, { x: 12, y: 10, color: Colour.White }, { x: 11, y: 11, color: Colour.White },
	];

	const fiveFrame: IPixelState[] = [
		{ x: 13, y: 14, color: Colour.White }, { x: 11, y: 1, color: Colour.White }, { x: 1, y: 9, color: Colour.White }, { x: 6, y: 15, color: Colour.White }, { x: 14, y: 3, color: Colour.White }, { x: 15, y: 8, color: Colour.White }, { x: 5, y: 2, color: Colour.White }, { x: 5, y: 7, color: Colour.White }, { x: 14, y: 13, color: Colour.White }, { x: 12, y: 1, color: Colour.White }, { x: 1, y: 10, color: Colour.White }, { x: 7, y: 15, color: Colour.White }, { x: 15, y: 4, color: Colour.White }, { x: 15, y: 9, color: Colour.White }, { x: 5, y: 3, color: Colour.White }, { x: 4, y: 1, color: Colour.White }, { x: 3, y: 2, color: Colour.White }, { x: 5, y: 1, color: Colour.White }, { x: 2, y: 3, color: Colour.White }, { x: 1, y: 11, color: Colour.White }, { x: 8, y: 15, color: Colour.White }, { x: 15, y: 5, color: Colour.White }, { x: 15, y: 10, color: Colour.White }, { x: 5, y: 4, color: Colour.White }, { x: 5, y: 8, color: Colour.White }, { x: 6, y: 1, color: Colour.White }, { x: 1, y: 4, color: Colour.White }, { x: 1, y: 12, color: Colour.White }, { x: 9, y: 15, color: Colour.White }, { x: 15, y: 6, color: Colour.White }, { x: 15, y: 11, color: Colour.White }, { x: 5, y: 5, color: Colour.White }, { x: 7, y: 1, color: Colour.White }, { x: 1, y: 5, color: Colour.White }, { x: 2, y: 13, color: Colour.White }, { x: 10, y: 15, color: Colour.White }, { x: 8, y: 1, color: Colour.White }, { x: 1, y: 6, color: Colour.White }, { x: 3, y: 14, color: Colour.White }, { x: 11, y: 15, color: Colour.White }, { x: 9, y: 1, color: Colour.White }, { x: 1, y: 7, color: Colour.White }, { x: 4, y: 15, color: Colour.White }, { x: 12, y: 15, color: Colour.White },
		{ x: 10, y: 1, color: Colour.White }, { x: 1, y: 8, color: Colour.White }, { x: 5, y: 15, color: Colour.White }, { x: 13, y: 2, color: Colour.White }, { x: 15, y: 7, color: Colour.White }, { x: 15, y: 12, color: Colour.White }, { x: 5, y: 6, color: Colour.White }, { x: 5, y: 9, color: Colour.White }, { x: 5, y: 9, color: Colour.White }, { x: 5, y: 13, color: Colour.White }, { x: 6, y: 6, color: Colour.White }, { x: 6, y: 10, color: Colour.White }, { x: 5, y: 10, color: Colour.White }, { x: 5, y: 14, color: Colour.White }, { x: 6, y: 7, color: Colour.White }, { x: 6, y: 11, color: Colour.White }, { x: 6, y: 3, color: Colour.White }, { x: 5, y: 11, color: Colour.White }, { x: 6, y: 4, color: Colour.White }, { x: 6, y: 8, color: Colour.White }, { x: 6, y: 12, color: Colour.White }, { x: 6, y: 2, color: Colour.White }, { x: 5, y: 12, color: Colour.White }, { x: 6, y: 5, color: Colour.White }, { x: 6, y: 9, color: Colour.White }, { x: 6, y: 13, color: Colour.White }, { x: 6, y: 14, color: Colour.White }, { x: 7, y: 2, color: Colour.White }, { x: 7, y: 9, color: Colour.White }, { x: 7, y: 6, color: Colour.White }, { x: 7, y: 10, color: Colour.White }, { x: 7, y: 3, color: Colour.White }, { x: 7, y: 11, color: Colour.White }, { x: 7, y: 4, color: Colour.White }, { x: 7, y: 12, color: Colour.White }, { x: 7, y: 5, color: Colour.White }, { x: 7, y: 13, color: Colour.White }, { x: 7, y: 7, color: Colour.White }, { x: 7, y: 14, color: Colour.White }, { x: 8, y: 3, color: Colour.White }, { x: 8, y: 10, color: Colour.White }, { x: 8, y: 4, color: Colour.White }, { x: 8, y: 11, color: Colour.White }, { x: 8, y: 5, color: Colour.White }, { x: 8, y: 12, color: Colour.White }, { x: 8, y: 6, color: Colour.White }, { x: 8, y: 13, color: Colour.White }, { x: 12, y: 8, color: Colour.White }, { x: 12, y: 9, color: Colour.White }, { x: 12, y: 10, color: Colour.White }, { x: 11, y: 11, color: Colour.White }, { x: 10, y: 12, color: Colour.White },
	];

	const sixFrame: IPixelState[] = [
		{ x: 13, y: 14, color: Colour.White }, { x: 11, y: 1, color: Colour.White }, { x: 1, y: 9, color: Colour.White }, { x: 6, y: 15, color: Colour.White }, { x: 14, y: 3, color: Colour.White }, { x: 15, y: 8, color: Colour.White }, { x: 5, y: 2, color: Colour.White }, { x: 5, y: 7, color: Colour.White }, { x: 14, y: 13, color: Colour.White }, { x: 12, y: 1, color: Colour.White }, { x: 1, y: 10, color: Colour.White }, { x: 7, y: 15, color: Colour.White }, { x: 15, y: 4, color: Colour.White }, { x: 15, y: 9, color: Colour.White }, { x: 5, y: 3, color: Colour.White }, { x: 4, y: 1, color: Colour.White }, { x: 3, y: 2, color: Colour.White }, { x: 5, y: 1, color: Colour.White }, { x: 2, y: 3, color: Colour.White }, { x: 1, y: 11, color: Colour.White }, { x: 8, y: 15, color: Colour.White }, { x: 15, y: 5, color: Colour.White }, { x: 15, y: 10, color: Colour.White }, { x: 5, y: 4, color: Colour.White }, { x: 5, y: 8, color: Colour.White }, { x: 6, y: 1, color: Colour.White }, { x: 1, y: 4, color: Colour.White }, { x: 1, y: 12, color: Colour.White }, { x: 9, y: 15, color: Colour.White }, { x: 15, y: 6, color: Colour.White }, { x: 15, y: 11, color: Colour.White }, { x: 5, y: 5, color: Colour.White }, { x: 7, y: 1, color: Colour.White }, { x: 1, y: 5, color: Colour.White }, { x: 2, y: 13, color: Colour.White }, { x: 10, y: 15, color: Colour.White }, { x: 8, y: 1, color: Colour.White }, { x: 1, y: 6, color: Colour.White }, { x: 3, y: 14, color: Colour.White }, { x: 11, y: 15, color: Colour.White }, { x: 9, y: 1, color: Colour.White }, { x: 1, y: 7, color: Colour.White }, { x: 4, y: 15, color: Colour.White }, { x: 12, y: 15, color: Colour.White },
		{ x: 10, y: 1, color: Colour.White }, { x: 1, y: 8, color: Colour.White }, { x: 5, y: 15, color: Colour.White }, { x: 13, y: 2, color: Colour.White }, { x: 15, y: 7, color: Colour.White }, { x: 15, y: 12, color: Colour.White }, { x: 5, y: 6, color: Colour.White }, { x: 5, y: 9, color: Colour.White }, { x: 5, y: 9, color: Colour.White }, { x: 5, y: 13, color: Colour.White }, { x: 6, y: 6, color: Colour.White }, { x: 6, y: 10, color: Colour.White }, { x: 5, y: 10, color: Colour.White }, { x: 5, y: 14, color: Colour.White }, { x: 6, y: 7, color: Colour.White }, { x: 6, y: 11, color: Colour.White }, { x: 6, y: 3, color: Colour.White }, { x: 5, y: 11, color: Colour.White }, { x: 6, y: 4, color: Colour.White }, { x: 6, y: 8, color: Colour.White }, { x: 6, y: 12, color: Colour.White }, { x: 6, y: 2, color: Colour.White }, { x: 5, y: 12, color: Colour.White }, { x: 6, y: 5, color: Colour.White }, { x: 6, y: 9, color: Colour.White }, { x: 6, y: 13, color: Colour.White }, { x: 6, y: 14, color: Colour.White }, { x: 7, y: 2, color: Colour.White }, { x: 7, y: 9, color: Colour.White }, { x: 7, y: 6, color: Colour.White }, { x: 7, y: 10, color: Colour.White }, { x: 7, y: 3, color: Colour.White }, { x: 7, y: 11, color: Colour.White }, { x: 7, y: 4, color: Colour.White }, { x: 7, y: 12, color: Colour.White }, { x: 7, y: 5, color: Colour.White }, { x: 7, y: 13, color: Colour.White }, { x: 7, y: 7, color: Colour.White }, { x: 7, y: 14, color: Colour.White }, { x: 8, y: 3, color: Colour.White }, { x: 8, y: 10, color: Colour.White }, { x: 8, y: 4, color: Colour.White }, { x: 8, y: 11, color: Colour.White }, { x: 8, y: 5, color: Colour.White }, { x: 8, y: 12, color: Colour.White }, { x: 8, y: 6, color: Colour.White }, { x: 8, y: 13, color: Colour.White }, { x: 12, y: 7, color: Colour.White }, { x: 12, y: 8, color: Colour.White }, { x: 12, y: 9, color: Colour.White }, { x: 12, y: 10, color: Colour.White }, { x: 11, y: 11, color: Colour.White },
	];

	const sevenFrame: IPixelState[] = [
		{ x: 13, y: 14, color: Colour.White }, { x: 11, y: 1, color: Colour.White }, { x: 1, y: 9, color: Colour.White }, { x: 6, y: 15, color: Colour.White }, { x: 14, y: 3, color: Colour.White }, { x: 15, y: 8, color: Colour.White }, { x: 5, y: 2, color: Colour.White }, { x: 5, y: 7, color: Colour.White }, { x: 14, y: 13, color: Colour.White }, { x: 12, y: 1, color: Colour.White }, { x: 1, y: 10, color: Colour.White }, { x: 7, y: 15, color: Colour.White }, { x: 15, y: 4, color: Colour.White }, { x: 15, y: 9, color: Colour.White }, { x: 5, y: 3, color: Colour.White }, { x: 4, y: 1, color: Colour.White }, { x: 3, y: 2, color: Colour.White },
		{ x: 5, y: 1, color: Colour.White }, { x: 2, y: 3, color: Colour.White }, { x: 1, y: 11, color: Colour.White }, { x: 8, y: 15, color: Colour.White }, { x: 15, y: 5, color: Colour.White }, { x: 15, y: 10, color: Colour.White }, { x: 5, y: 4, color: Colour.White }, { x: 5, y: 8, color: Colour.White }, { x: 6, y: 1, color: Colour.White }, { x: 1, y: 4, color: Colour.White }, { x: 1, y: 12, color: Colour.White }, { x: 9, y: 15, color: Colour.White }, { x: 15, y: 6, color: Colour.White }, { x: 15, y: 11, color: Colour.White }, { x: 5, y: 5, color: Colour.White }, { x: 7, y: 1, color: Colour.White }, { x: 1, y: 5, color: Colour.White }, { x: 2, y: 13, color: Colour.White }, { x: 10, y: 15, color: Colour.White }, { x: 8, y: 1, color: Colour.White }, { x: 1, y: 6, color: Colour.White }, { x: 3, y: 14, color: Colour.White }, { x: 11, y: 15, color: Colour.White }, { x: 9, y: 1, color: Colour.White }, { x: 1, y: 7, color: Colour.White }, { x: 4, y: 15, color: Colour.White }, { x: 12, y: 15, color: Colour.White }, { x: 10, y: 1, color: Colour.White }, { x: 1, y: 8, color: Colour.White }, { x: 5, y: 15, color: Colour.White }, { x: 13, y: 2, color: Colour.White }, { x: 15, y: 7, color: Colour.White }, { x: 15, y: 12, color: Colour.White }, { x: 5, y: 6, color: Colour.White }, { x: 5, y: 9, color: Colour.White }, { x: 5, y: 9, color: Colour.White }, { x: 5, y: 13, color: Colour.White }, { x: 6, y: 6, color: Colour.White }, { x: 6, y: 10, color: Colour.White }, { x: 5, y: 10, color: Colour.White }, { x: 5, y: 14, color: Colour.White }, { x: 6, y: 7, color: Colour.White }, { x: 6, y: 11, color: Colour.White }, { x: 6, y: 3, color: Colour.White }, { x: 5, y: 11, color: Colour.White }, { x: 6, y: 4, color: Colour.White }, { x: 6, y: 8, color: Colour.White }, { x: 6, y: 12, color: Colour.White }, { x: 6, y: 2, color: Colour.White }, { x: 5, y: 12, color: Colour.White }, { x: 6, y: 5, color: Colour.White }, { x: 6, y: 9, color: Colour.White }, { x: 6, y: 13, color: Colour.White }, { x: 6, y: 14, color: Colour.White }, { x: 7, y: 2, color: Colour.White }, { x: 7, y: 9, color: Colour.White }, { x: 7, y: 6, color: Colour.White }, { x: 7, y: 10, color: Colour.White }, { x: 7, y: 3, color: Colour.White }, { x: 7, y: 11, color: Colour.White }, { x: 7, y: 4, color: Colour.White }, { x: 7, y: 12, color: Colour.White }, { x: 7, y: 5, color: Colour.White }, { x: 7, y: 13, color: Colour.White }, { x: 7, y: 7, color: Colour.White }, { x: 7, y: 14, color: Colour.White }, { x: 8, y: 3, color: Colour.White }, { x: 8, y: 10, color: Colour.White }, { x: 8, y: 4, color: Colour.White }, { x: 8, y: 11, color: Colour.White }, { x: 8, y: 5, color: Colour.White }, { x: 8, y: 12, color: Colour.White }, { x: 8, y: 6, color: Colour.White }, { x: 8, y: 13, color: Colour.White }, { x: 12, y: 6, color: Colour.White }, { x: 12, y: 7, color: Colour.White }, { x: 12, y: 8, color: Colour.White }, { x: 12, y: 9, color: Colour.White }, { x: 12, y: 10, color: Colour.White },
	];
	const eightFrame: IPixelState[] = [
		{ x: 13, y: 14, color: Colour.White }, { x: 11, y: 1, color: Colour.White }, { x: 1, y: 9, color: Colour.White }, { x: 6, y: 15, color: Colour.White }, { x: 14, y: 3, color: Colour.White }, { x: 15, y: 8, color: Colour.White }, { x: 5, y: 2, color: Colour.White }, { x: 5, y: 7, color: Colour.White }, { x: 14, y: 13, color: Colour.White }, { x: 12, y: 1, color: Colour.White }, { x: 1, y: 10, color: Colour.White }, { x: 7, y: 15, color: Colour.White }, { x: 15, y: 4, color: Colour.White }, { x: 15, y: 9, color: Colour.White }, { x: 5, y: 3, color: Colour.White }, { x: 4, y: 1, color: Colour.White }, { x: 3, y: 2, color: Colour.White }, { x: 5, y: 1, color: Colour.White }, { x: 2, y: 3, color: Colour.White }, { x: 1, y: 11, color: Colour.White }, { x: 8, y: 15, color: Colour.White }, { x: 15, y: 5, color: Colour.White }, { x: 15, y: 10, color: Colour.White }, { x: 5, y: 4, color: Colour.White }, { x: 5, y: 8, color: Colour.White }, { x: 6, y: 1, color: Colour.White }, { x: 1, y: 4, color: Colour.White }, { x: 1, y: 12, color: Colour.White }, { x: 9, y: 15, color: Colour.White }, { x: 15, y: 6, color: Colour.White }, { x: 15, y: 11, color: Colour.White }, { x: 5, y: 5, color: Colour.White }, { x: 7, y: 1, color: Colour.White }, { x: 1, y: 5, color: Colour.White }, { x: 2, y: 13, color: Colour.White }, { x: 10, y: 15, color: Colour.White }, { x: 8, y: 1, color: Colour.White }, { x: 1, y: 6, color: Colour.White }, { x: 3, y: 14, color: Colour.White }, { x: 11, y: 15, color: Colour.White }, { x: 9, y: 1, color: Colour.White }, { x: 1, y: 7, color: Colour.White }, { x: 4, y: 15, color: Colour.White }, { x: 12, y: 15, color: Colour.White }, { x: 10, y: 1, color: Colour.White }, { x: 1, y: 8, color: Colour.White }, { x: 5, y: 15, color: Colour.White }, { x: 13, y: 2, color: Colour.White }, { x: 15, y: 7, color: Colour.White }, { x: 15, y: 12, color: Colour.White }, { x: 5, y: 6, color: Colour.White }, { x: 5, y: 9, color: Colour.White }, { x: 5, y: 9, color: Colour.White }, { x: 5, y: 13, color: Colour.White }, { x: 6, y: 6, color: Colour.White }, { x: 6, y: 10, color: Colour.White }, { x: 5, y: 10, color: Colour.White }, { x: 5, y: 14, color: Colour.White }, { x: 6, y: 7, color: Colour.White }, { x: 6, y: 11, color: Colour.White }, { x: 6, y: 3, color: Colour.White },
		{ x: 5, y: 11, color: Colour.White }, { x: 6, y: 4, color: Colour.White }, { x: 6, y: 8, color: Colour.White }, { x: 6, y: 12, color: Colour.White }, { x: 6, y: 2, color: Colour.White }, { x: 5, y: 12, color: Colour.White }, { x: 6, y: 5, color: Colour.White }, { x: 6, y: 9, color: Colour.White }, { x: 6, y: 13, color: Colour.White }, { x: 6, y: 14, color: Colour.White }, { x: 7, y: 2, color: Colour.White }, { x: 7, y: 9, color: Colour.White }, { x: 7, y: 6, color: Colour.White }, { x: 7, y: 10, color: Colour.White }, { x: 7, y: 3, color: Colour.White }, { x: 7, y: 11, color: Colour.White }, { x: 7, y: 4, color: Colour.White }, { x: 7, y: 12, color: Colour.White }, { x: 7, y: 5, color: Colour.White }, { x: 7, y: 13, color: Colour.White }, { x: 7, y: 7, color: Colour.White }, { x: 7, y: 14, color: Colour.White }, { x: 8, y: 3, color: Colour.White }, { x: 8, y: 10, color: Colour.White }, { x: 8, y: 4, color: Colour.White }, { x: 8, y: 11, color: Colour.White }, { x: 8, y: 5, color: Colour.White }, { x: 8, y: 12, color: Colour.White }, { x: 8, y: 6, color: Colour.White }, { x: 8, y: 13, color: Colour.White }, { x: 10, y: 6, color: Colour.White }, { x: 10, y: 10, color: Colour.White }, { x: 11, y: 7, color: Colour.White }, { x: 11, y: 9, color: Colour.White }, { x: 12, y: 7, color: Colour.White }, { x: 12, y: 9, color: Colour.White }, { x: 13, y: 6, color: Colour.White }, { x: 13, y: 10, color: Colour.White },
	];
	const nineFrame: IPixelState[] = [
		{ x: 13, y: 14, color: Colour.White }, { x: 11, y: 1, color: Colour.White }, { x: 1, y: 9, color: Colour.White }, { x: 6, y: 15, color: Colour.White }, { x: 14, y: 3, color: Colour.White }, { x: 15, y: 8, color: Colour.White }, { x: 5, y: 2, color: Colour.White }, { x: 5, y: 7, color: Colour.White }, { x: 14, y: 13, color: Colour.White }, { x: 12, y: 1, color: Colour.White }, { x: 1, y: 10, color: Colour.White }, { x: 7, y: 15, color: Colour.White }, { x: 15, y: 4, color: Colour.White }, { x: 15, y: 9, color: Colour.White }, { x: 5, y: 3, color: Colour.White }, { x: 4, y: 1, color: Colour.White }, { x: 3, y: 2, color: Colour.White }, { x: 5, y: 1, color: Colour.White }, { x: 2, y: 3, color: Colour.White }, { x: 1, y: 11, color: Colour.White }, { x: 8, y: 15, color: Colour.White }, { x: 15, y: 5, color: Colour.White }, { x: 15, y: 10, color: Colour.White }, { x: 5, y: 4, color: Colour.White }, { x: 5, y: 8, color: Colour.White }, { x: 6, y: 1, color: Colour.White }, { x: 1, y: 4, color: Colour.White }, { x: 1, y: 12, color: Colour.White }, { x: 9, y: 15, color: Colour.White }, { x: 15, y: 6, color: Colour.White }, { x: 15, y: 11, color: Colour.White }, { x: 5, y: 5, color: Colour.White }, { x: 7, y: 1, color: Colour.White }, { x: 1, y: 5, color: Colour.White }, { x: 2, y: 13, color: Colour.White }, { x: 10, y: 15, color: Colour.White }, { x: 8, y: 1, color: Colour.White }, { x: 1, y: 6, color: Colour.White }, { x: 3, y: 14, color: Colour.White }, { x: 11, y: 15, color: Colour.White }, { x: 9, y: 1, color: Colour.White }, { x: 1, y: 7, color: Colour.White }, { x: 4, y: 15, color: Colour.White }, { x: 12, y: 15, color: Colour.White },
		{ x: 10, y: 1, color: Colour.White }, { x: 1, y: 8, color: Colour.White }, { x: 5, y: 15, color: Colour.White }, { x: 13, y: 2, color: Colour.White }, { x: 15, y: 7, color: Colour.White }, { x: 15, y: 12, color: Colour.White }, { x: 5, y: 6, color: Colour.White }, { x: 5, y: 9, color: Colour.White }, { x: 5, y: 9, color: Colour.White }, { x: 5, y: 13, color: Colour.White }, { x: 6, y: 6, color: Colour.White }, { x: 6, y: 10, color: Colour.White }, { x: 5, y: 10, color: Colour.White }, { x: 5, y: 14, color: Colour.White }, { x: 6, y: 7, color: Colour.White }, { x: 6, y: 11, color: Colour.White }, { x: 6, y: 3, color: Colour.White }, { x: 5, y: 11, color: Colour.White }, { x: 6, y: 4, color: Colour.White }, { x: 6, y: 8, color: Colour.White }, { x: 6, y: 12, color: Colour.White }, { x: 6, y: 2, color: Colour.White }, { x: 5, y: 12, color: Colour.White }, { x: 6, y: 5, color: Colour.White }, { x: 6, y: 9, color: Colour.White }, { x: 6, y: 13, color: Colour.White }, { x: 6, y: 14, color: Colour.White }, { x: 7, y: 2, color: Colour.White }, { x: 7, y: 9, color: Colour.White }, { x: 7, y: 6, color: Colour.White }, { x: 7, y: 10, color: Colour.White }, { x: 7, y: 3, color: Colour.White }, { x: 7, y: 11, color: Colour.White }, { x: 7, y: 4, color: Colour.White }, { x: 7, y: 12, color: Colour.White }, { x: 7, y: 5, color: Colour.White }, { x: 7, y: 13, color: Colour.White }, { x: 7, y: 7, color: Colour.White }, { x: 7, y: 14, color: Colour.White }, { x: 8, y: 3, color: Colour.White }, { x: 8, y: 10, color: Colour.White }, { x: 8, y: 4, color: Colour.White }, { x: 8, y: 11, color: Colour.White }, { x: 8, y: 5, color: Colour.White }, { x: 8, y: 12, color: Colour.White }, { x: 8, y: 6, color: Colour.White }, { x: 8, y: 13, color: Colour.White }, { x: 11, y: 6, color: Colour.White }, { x: 10, y: 7, color: Colour.White }, { x: 13, y: 7, color: Colour.White }, { x: 12, y: 6, color: Colour.White }, { x: 10, y: 8, color: Colour.White }, { x: 13, y: 8, color: Colour.White }, { x: 11, y: 10, color: Colour.White }, { x: 10, y: 9, color: Colour.White }, { x: 13, y: 9, color: Colour.White }, { x: 12, y: 10, color: Colour.White },
	];
	const tenFrame: IPixelState[] = [
		{ x: 13, y: 14, color: Colour.White }, { x: 11, y: 1, color: Colour.White }, { x: 1, y: 9, color: Colour.White }, { x: 6, y: 15, color: Colour.White }, { x: 14, y: 3, color: Colour.White }, { x: 15, y: 8, color: Colour.White }, { x: 5, y: 2, color: Colour.White }, { x: 5, y: 7, color: Colour.White },
		{ x: 14, y: 13, color: Colour.White }, { x: 12, y: 1, color: Colour.White }, { x: 1, y: 10, color: Colour.White }, { x: 7, y: 15, color: Colour.White }, { x: 15, y: 4, color: Colour.White }, { x: 15, y: 9, color: Colour.White }, { x: 5, y: 3, color: Colour.White },
		{ x: 4, y: 1, color: Colour.White }, { x: 3, y: 2, color: Colour.White },
		{ x: 5, y: 1, color: Colour.White }, { x: 2, y: 3, color: Colour.White }, { x: 1, y: 11, color: Colour.White }, { x: 8, y: 15, color: Colour.White }, { x: 15, y: 5, color: Colour.White }, { x: 15, y: 10, color: Colour.White }, { x: 5, y: 4, color: Colour.White }, { x: 5, y: 8, color: Colour.White },
		{ x: 6, y: 1, color: Colour.White }, { x: 1, y: 4, color: Colour.White }, { x: 1, y: 12, color: Colour.White }, { x: 9, y: 15, color: Colour.White }, { x: 15, y: 6, color: Colour.White }, { x: 15, y: 11, color: Colour.White }, { x: 5, y: 5, color: Colour.White },
		{ x: 7, y: 1, color: Colour.White }, { x: 1, y: 5, color: Colour.White }, { x: 2, y: 13, color: Colour.White }, { x: 10, y: 15, color: Colour.White },
		{ x: 8, y: 1, color: Colour.White }, { x: 1, y: 6, color: Colour.White }, { x: 3, y: 14, color: Colour.White }, { x: 11, y: 15, color: Colour.White },
		{ x: 9, y: 1, color: Colour.White }, { x: 1, y: 7, color: Colour.White }, { x: 4, y: 15, color: Colour.White }, { x: 12, y: 15, color: Colour.White },
		{ x: 10, y: 1, color: Colour.White }, { x: 1, y: 8, color: Colour.White }, { x: 5, y: 15, color: Colour.White }, { x: 13, y: 2, color: Colour.White }, { x: 15, y: 7, color: Colour.White }, { x: 15, y: 12, color: Colour.White }, { x: 5, y: 6, color: Colour.White }, { x: 5, y: 9, color: Colour.White },

		{ x: 5, y: 9, color: Colour.White }, { x: 5, y: 13, color: Colour.White }, { x: 6, y: 6, color: Colour.White }, { x: 6, y: 10, color: Colour.White },
		{ x: 5, y: 10, color: Colour.White }, { x: 5, y: 14, color: Colour.White }, { x: 6, y: 7, color: Colour.White }, { x: 6, y: 11, color: Colour.White }, { x: 6, y: 3, color: Colour.White },
		{ x: 5, y: 11, color: Colour.White }, { x: 6, y: 4, color: Colour.White }, { x: 6, y: 8, color: Colour.White }, { x: 6, y: 12, color: Colour.White }, { x: 6, y: 2, color: Colour.White },
		{ x: 5, y: 12, color: Colour.White }, { x: 6, y: 5, color: Colour.White }, { x: 6, y: 9, color: Colour.White }, { x: 6, y: 13, color: Colour.White }, { x: 6, y: 14, color: Colour.White },


		{ x: 7, y: 2, color: Colour.White },
		{ x: 7, y: 6, color: Colour.White }, { x: 7, y: 10, color: Colour.White },
		{ x: 7, y: 3, color: Colour.White }, { x: 7, y: 11, color: Colour.White },
		{ x: 7, y: 4, color: Colour.White }, { x: 7, y: 12, color: Colour.White },
		{ x: 7, y: 5, color: Colour.White }, { x: 7, y: 13, color: Colour.White },
		{ x: 7, y: 14, color: Colour.White },

		{ x: 8, y: 3, color: Colour.White },
		{ x: 8, y: 4, color: Colour.White }, { x: 8, y: 11, color: Colour.White },
		{ x: 8, y: 5, color: Colour.White }, { x: 8, y: 12, color: Colour.White },
		{ x: 8, y: 13, color: Colour.White },

		{ x: 9, y: 4, color: Colour.White }, { x: 9, y: 12, color: Colour.White }, { x: 13, y: 5, color: Colour.White }, { x: 14, y: 6, color: Colour.White },
		{ x: 10, y: 4, color: Colour.White }, { x: 10, y: 12, color: Colour.White }, { x: 13, y: 11, color: Colour.White }, { x: 14, y: 7, color: Colour.White },
		{ x: 11, y: 4, color: Colour.White }, { x: 11, y: 12, color: Colour.White }, { x: 14, y: 8, color: Colour.White },
		{ x: 12, y: 4, color: Colour.White }, { x: 12, y: 12, color: Colour.White }, { x: 14, y: 9, color: Colour.White },
		{ x: 14, y: 10, color: Colour.White },

		{ x: 10, y: 6, color: Colour.White },
		{ x: 9, y: 7, color: Colour.White },
		{ x: 9, y: 8, color: Colour.White },
	];
	const elevenFrame: IPixelState[] = [
		{ x: 13, y: 14, color: Colour.White }, { x: 11, y: 1, color: Colour.White }, { x: 1, y: 9, color: Colour.White }, { x: 6, y: 15, color: Colour.White }, { x: 14, y: 3, color: Colour.White }, { x: 15, y: 8, color: Colour.White }, { x: 5, y: 2, color: Colour.White }, { x: 5, y: 7, color: Colour.White },
		{ x: 14, y: 13, color: Colour.White }, { x: 12, y: 1, color: Colour.White }, { x: 1, y: 10, color: Colour.White }, { x: 7, y: 15, color: Colour.White }, { x: 15, y: 4, color: Colour.White }, { x: 15, y: 9, color: Colour.White }, { x: 5, y: 3, color: Colour.White },
		{ x: 4, y: 1, color: Colour.White }, { x: 3, y: 2, color: Colour.White },
		{ x: 5, y: 1, color: Colour.White }, { x: 2, y: 3, color: Colour.White }, { x: 1, y: 11, color: Colour.White }, { x: 8, y: 15, color: Colour.White }, { x: 15, y: 5, color: Colour.White }, { x: 15, y: 10, color: Colour.White }, { x: 5, y: 4, color: Colour.White }, { x: 5, y: 8, color: Colour.White },
		{ x: 6, y: 1, color: Colour.White }, { x: 1, y: 4, color: Colour.White }, { x: 1, y: 12, color: Colour.White }, { x: 9, y: 15, color: Colour.White }, { x: 15, y: 6, color: Colour.White }, { x: 15, y: 11, color: Colour.White }, { x: 5, y: 5, color: Colour.White },
		{ x: 7, y: 1, color: Colour.White }, { x: 1, y: 5, color: Colour.White }, { x: 2, y: 13, color: Colour.White }, { x: 10, y: 15, color: Colour.White },
		{ x: 8, y: 1, color: Colour.White }, { x: 1, y: 6, color: Colour.White }, { x: 3, y: 14, color: Colour.White }, { x: 11, y: 15, color: Colour.White },
		{ x: 9, y: 1, color: Colour.White }, { x: 1, y: 7, color: Colour.White }, { x: 4, y: 15, color: Colour.White }, { x: 12, y: 15, color: Colour.White },
		{ x: 10, y: 1, color: Colour.White }, { x: 1, y: 8, color: Colour.White }, { x: 5, y: 15, color: Colour.White }, { x: 13, y: 2, color: Colour.White }, { x: 15, y: 7, color: Colour.White }, { x: 15, y: 12, color: Colour.White }, { x: 5, y: 6, color: Colour.White }, { x: 5, y: 9, color: Colour.White },

		{ x: 5, y: 9, color: Colour.White }, { x: 5, y: 13, color: Colour.White }, { x: 6, y: 6, color: Colour.White }, { x: 6, y: 10, color: Colour.White },
		{ x: 5, y: 10, color: Colour.White }, { x: 5, y: 14, color: Colour.White }, { x: 6, y: 7, color: Colour.White }, { x: 6, y: 11, color: Colour.White }, { x: 6, y: 3, color: Colour.White },
		{ x: 5, y: 11, color: Colour.White }, { x: 6, y: 4, color: Colour.White }, { x: 6, y: 8, color: Colour.White }, { x: 6, y: 12, color: Colour.White }, { x: 6, y: 2, color: Colour.White },
		{ x: 5, y: 12, color: Colour.White }, { x: 6, y: 5, color: Colour.White }, { x: 6, y: 9, color: Colour.White }, { x: 6, y: 13, color: Colour.White }, { x: 6, y: 14, color: Colour.White },

		//рядок 7 (очки)
		{ x: 7, y: 2, color: Colour.White }, { x: 7, y: 9, color: Colour.White },
		{ x: 7, y: 6, color: Colour.White }, { x: 7, y: 10, color: Colour.White },
		{ x: 7, y: 3, color: Colour.White }, { x: 7, y: 11, color: Colour.White },
		{ x: 7, y: 4, color: Colour.White }, { x: 7, y: 12, color: Colour.White },
		{ x: 7, y: 5, color: Colour.White }, { x: 7, y: 13, color: Colour.White },
		{ x: 7, y: 7, color: Colour.White }, { x: 7, y: 14, color: Colour.White },
		//рядок 8 (очки)
		{ x: 8, y: 3, color: Colour.White }, { x: 8, y: 10, color: Colour.White },
		{ x: 8, y: 4, color: Colour.White }, { x: 8, y: 11, color: Colour.White },
		{ x: 8, y: 5, color: Colour.White }, { x: 8, y: 12, color: Colour.White },
		{ x: 8, y: 6, color: Colour.White }, { x: 8, y: 13, color: Colour.White },
		//рядок 10-11-12 (посмішка)
		{ x: 11, y: 7, color: Colour.White },
		{ x: 11, y: 8, color: Colour.White },
		{ x: 12, y: 6, color: Colour.White },
		{ x: 12, y: 9, color: Colour.White },
		{ x: 13, y: 7, color: Colour.White },
		{ x: 13, y: 8, color: Colour.White },
		{ x: 8, y: 7, color: Colour.White }, { x: 10, y: 11, color: Colour.White },
		{ x: 9, y: 7, color: Colour.White }, { x: 11, y: 11, color: Colour.White },
		{ x: 9, y: 8, color: Colour.White }, { x: 11, y: 12, color: Colour.White },
		{ x: 11, y: 13, color: Colour.White }, { x: 12, y: 13, color: Colour.White },
		{ x: 9, y: 14, color: Colour.White }, { x: 10, y: 14, color: Colour.White },
		{ x: 14, y: 9, color: Colour.White }, { x: 14, y: 10, color: Colour.White }, { x: 16, y: 11, color: Colour.White },
		{ x: 15, y: 2, color: Colour.White }, { x: 16, y: 2, color: Colour.White },
		{ x: 11, y: 2, color: Colour.White }, { x: 11, y: 3, color: Colour.White }, { x: 11, y: 4, color: Colour.White }, { x: 11, y: 5, color: Colour.White }, { x: 10, y: 3, color: Colour.White }, { x: 10, y: 5, color: Colour.White },

	];


	for (let frameNumber = 0; frameNumber < Constants.MaxTotalFrames; frameNumber++) {
		const pixels: IPixelState[] = [];

		const show1 = frameNumber % 44 < 4;
		const show2 = frameNumber % 44 >= 4 && frameNumber % 44 < 8;
		const show3 = frameNumber % 44 >= 8 && frameNumber % 44 < 12;
		const show4 = frameNumber % 44 >= 12 && frameNumber % 44 < 16;
		const show5 = frameNumber % 44 >= 16 && frameNumber % 44 < 20;
		const show6 = frameNumber % 44 >= 20 && frameNumber % 44 < 24;;
		const show7 = frameNumber % 44 >= 24 && frameNumber % 44 < 28;;
		const show8 = frameNumber % 44 >= 28 && frameNumber % 44 < 32;;
		const show9 = frameNumber % 44 >= 30 && frameNumber % 44 < 36;;
		const show10 = frameNumber % 44 >= 36 && frameNumber % 44 < 40;;
		const show11 = frameNumber % 44 >= 40;

		if (show1) {
			pixels.push(...firstFrame.map(pixel => ({ ...pixel, x: pixel.x, color: Colour.White })));
		}
		if (show2) {
			pixels.push(...secondFrame.map(pixel => ({ ...pixel, x: pixel.x, color: Colour.White })));
		}
		if (show3) {
			pixels.push(...thirdFrame.map(pixel => ({ ...pixel, x: pixel.x, color: Colour.White })));
		}
		if (show4) {
			pixels.push(...fourFrame.map(pixel => ({ ...pixel, x: pixel.x, color: Colour.White })));
		}
		if (show5) {
			pixels.push(...fiveFrame.map(pixel => ({ ...pixel, x: pixel.x, color: Colour.White })));
		}
		if (show6) {
			pixels.push(...sixFrame.map(pixel => ({ ...pixel, x: pixel.x, color: Colour.White })));
		}
		if (show7) {
			pixels.push(...sevenFrame.map(pixel => ({ ...pixel, x: pixel.x, color: Colour.White })));
		}
		if (show8) {
			pixels.push(...eightFrame.map(pixel => ({ ...pixel, x: pixel.x, color: Colour.White })));
		}
		if (show9) {
			pixels.push(...nineFrame.map(pixel => ({ ...pixel, x: pixel.x, color: Colour.White })));
		}
		if (show10) {
			pixels.push(...tenFrame.map(pixel => ({ ...pixel, x: pixel.x, color: Colour.White })));
		}
		if (show11) {
			pixels.push(...elevenFrame.map(pixel => ({ ...pixel, x: pixel.x, color: Colour.White })));
		}

		frames.push({
			frameNumber: frameNumber,
			pixels: pixels,
		});
	}

	return frames;
}

const Avatar = (frameNumber: number): IFrame => {
	let result: IFrame = {
		frameNumber: frameNumber,
		pixels: []
	};
	result.pixels.push(
		{ x: 13, y: 14, color: Colour.White }, { x: 11, y: 1, color: Colour.White }, { x: 1, y: 9, color: Colour.White }, { x: 6, y: 15, color: Colour.White }, { x: 14, y: 3, color: Colour.White }, { x: 15, y: 8, color: Colour.White }, { x: 5, y: 2, color: Colour.White }, { x: 5, y: 7, color: Colour.White },
		{ x: 14, y: 13, color: Colour.White }, { x: 12, y: 1, color: Colour.White }, { x: 1, y: 10, color: Colour.White }, { x: 7, y: 15, color: Colour.White }, { x: 15, y: 4, color: Colour.White }, { x: 15, y: 9, color: Colour.White }, { x: 5, y: 3, color: Colour.White },
		{ x: 4, y: 1, color: Colour.White }, { x: 3, y: 2, color: Colour.White },
		{ x: 5, y: 1, color: Colour.White }, { x: 2, y: 3, color: Colour.White }, { x: 1, y: 11, color: Colour.White }, { x: 8, y: 15, color: Colour.White }, { x: 15, y: 5, color: Colour.White }, { x: 15, y: 10, color: Colour.White }, { x: 5, y: 4, color: Colour.White }, { x: 5, y: 8, color: Colour.White },
		{ x: 6, y: 1, color: Colour.White }, { x: 1, y: 4, color: Colour.White }, { x: 1, y: 12, color: Colour.White }, { x: 9, y: 15, color: Colour.White }, { x: 15, y: 6, color: Colour.White }, { x: 15, y: 11, color: Colour.White }, { x: 5, y: 5, color: Colour.White },
		{ x: 7, y: 1, color: Colour.White }, { x: 1, y: 5, color: Colour.White }, { x: 2, y: 13, color: Colour.White }, { x: 10, y: 15, color: Colour.White },
		{ x: 8, y: 1, color: Colour.White }, { x: 1, y: 6, color: Colour.White }, { x: 3, y: 14, color: Colour.White }, { x: 11, y: 15, color: Colour.White },
		{ x: 9, y: 1, color: Colour.White }, { x: 1, y: 7, color: Colour.White }, { x: 4, y: 15, color: Colour.White }, { x: 12, y: 15, color: Colour.White },
		{ x: 10, y: 1, color: Colour.White }, { x: 1, y: 8, color: Colour.White }, { x: 5, y: 15, color: Colour.White }, { x: 13, y: 2, color: Colour.White }, { x: 15, y: 7, color: Colour.White }, { x: 15, y: 12, color: Colour.White }, { x: 5, y: 6, color: Colour.White }, { x: 5, y: 9, color: Colour.White },

		{ x: 5, y: 9, color: Colour.White }, { x: 5, y: 13, color: Colour.White }, { x: 6, y: 6, color: Colour.White }, { x: 6, y: 10, color: Colour.White },
		{ x: 5, y: 10, color: Colour.White }, { x: 5, y: 14, color: Colour.White }, { x: 6, y: 7, color: Colour.White }, { x: 6, y: 11, color: Colour.White }, { x: 6, y: 3, color: Colour.White },
		{ x: 5, y: 11, color: Colour.White }, { x: 6, y: 4, color: Colour.White }, { x: 6, y: 8, color: Colour.White }, { x: 6, y: 12, color: Colour.White }, { x: 6, y: 2, color: Colour.White },
		{ x: 5, y: 12, color: Colour.White }, { x: 6, y: 5, color: Colour.White }, { x: 6, y: 9, color: Colour.White }, { x: 6, y: 13, color: Colour.White }, { x: 6, y: 14, color: Colour.White },

		//рядок 7 (очки)
		{ x: 7, y: 2, color: Colour.White }, { x: 7, y: 9, color: Colour.White },
		{ x: 7, y: 6, color: Colour.White }, { x: 7, y: 10, color: Colour.White },
		{ x: 7, y: 3, color: Colour.White }, { x: 7, y: 11, color: Colour.White },
		{ x: 7, y: 4, color: Colour.White }, { x: 7, y: 12, color: Colour.White },
		{ x: 7, y: 5, color: Colour.White }, { x: 7, y: 13, color: Colour.White },
		{ x: 7, y: 7, color: Colour.White }, { x: 7, y: 14, color: Colour.White },
		//рядок 8 (очки)
		{ x: 8, y: 3, color: Colour.White }, { x: 8, y: 10, color: Colour.White },
		{ x: 8, y: 4, color: Colour.White }, { x: 8, y: 11, color: Colour.White },
		{ x: 8, y: 5, color: Colour.White }, { x: 8, y: 12, color: Colour.White },
		{ x: 8, y: 6, color: Colour.White }, { x: 8, y: 13, color: Colour.White },
		//рядок 10-11-12 (посмішка)
		{ x: 10, y: 4, color: Colour.White },
		{ x: 11, y: 5, color: Colour.White },
		{ x: 12, y: 6, color: Colour.White },
		{ x: 12, y: 7, color: Colour.White },
		{ x: 12, y: 8, color: Colour.White },
	);

	return result;
}