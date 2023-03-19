import IAnimationConfig from "../models/animation-config";
import { IConfigLoaderService } from "./config-loader-interface";
import { AndriiSlobodianiukConfigLoaderService } from "./students/andrii-slobodianiuk";
import { OleksandrZhukConfigLoaderService } from "./students/oleksandr-zhuk"; 
import { YaroslavPasichnykConfigLoaderService } from "./students/yaroslav-pasichnyk"; 

export class MainConfigLoaderService {

    private services: IConfigLoaderService[];

    constructor() {
        this.services = [
            new AndriiSlobodianiukConfigLoaderService(),
            new OleksandrZhukConfigLoaderService(),
            new YaroslavPasichnykConfigLoaderService()
        ];
    }

    public loadAllConfigs(): IAnimationConfig[] {

        const results = [];
        let counter = 0;

        for (const service of this.services) {

            let name = '';
            let email = '';

            try {

                name = service.getStudentName();
                email = service.getStudentEmail();
                const config = service.loadConfig();
                config.id = counter.toString();

                results.push(config);
                counter++;

            } catch (exc) {
                console.error(`Error occured while processing student '${name}' - ${email}.`, exc);
            }
        }

        return results;
    }
}