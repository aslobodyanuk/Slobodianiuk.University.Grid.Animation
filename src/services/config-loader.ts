import IAnimationConfig from '../models/animation-config';
import { IConfigLoaderService } from './config-loader-interface';
import { AndriiSlobodianiukConfigLoaderService } from './students/andrii-slobodianiuk';
import { MariiaBodnarConfigLoaderService } from './students/mariia-bodnar';
import { VitaliiSynytskyiConfigLoaderService } from './students/vitalii-synytskyi';
import { OleksandrZhukConfigLoaderService } from './students/oleksandr-zhuk';
import { YaroslavPasichnykConfigLoaderService } from './students/yaroslav-pasichnyk';
import { YaroslavTsvykConfigLoaderService } from './students/yaroslav-tsvyk';
import { OstapBlystsivConfigLoaderService } from './students/ostap-blystsiv';
import { DenysZarubaConfigLoaderService } from './students/denys-zaruba';
import { VoievodaVladislavConfigLoaderService } from './students/vlad-voievoda';
import { IlliaChumakConfigLoaderService } from './students/illia-chumak';
import { NazarPohonchukConfigLoaderService } from './students/nazar-pohonchuk';
import { MalishVitaliyConfigLoaderService } from './students/vitalii.malysh';
import { ArsenShvediukConfigLoaderService } from './students/arsen-shvediuk';
import { DaniilHulchenkoLoaderService } from './students/daniil-hulchenko';
import { VitaliyHavronaConfigLoaderService } from './students/vitaliy-havrona';
import { RuslanHavrilyakConfigLoaderService } from './students/ruslan-havrilyak';
import { MyronVikaConfigLoaderService } from './students/vika-myron';
import { TarasRohulyaConfigLoaderService } from './students/taras-rohulya';
import { OleksandrZhovanukConfigLoaderService } from './students/oleksandr-zhovanuk';
import { BohdanDzirbaConfigLoaderService } from './students/bohdan-dzirba';
import { YaroslavHolovkoConfigLoaderService } from './students/yaroslav-holovko';
import { BardakovConfigLoaderService } from './students/bardakov';
import { ZakalaOleksandrConfigLoaderService } from './students/zakala-oleksandr';
import { ValeriymanuilykConfigLoaderService } from './students/valerii-manuilyk';
import { LozoviiTarasConfigLoaderService } from './students/taras-lozovii';
import { NazarYarishConfigLoaderService } from './students/nazar-yarish';
import { StepTkachivskyiConfigLoaderService } from './students/stepan-tkachivskyi';
import { VitaliLyloConfigLoaderService } from './students/vitali-lylo';
import { OlehGeriiConfigLoaderService } from './students/oleh-gerii';
import { DenysVelychkoConfigLoaderService } from './students/denys-velychko';
import { YuriiRobakConfigLoaderService } from './students/yurii-robak';
import { OlesandrBiletskyiConfigLoaderService } from './students/oleksandr-biletskyi';
import { OlehSuvorovConfigLoaderService } from './students/oleh-suvorov';
import { KoarizVolodymyrConfigLoaderService } from './students/volodymyr-kozariz';
import { OlehMuzychukConfigLoaderService } from './students/oleh-muzychuk';
import { OleksiiPylypenkoConfigLoaderService } from './students/oleksii-pylypenko';
import { MykhailoHorpyniukConfigLoaderService } from './students/mykhailo-horpyniuk';
import { DmytroSerafymConfigLoaderService } from './students/dmytro_serafym';
import { VictoriaKondratskaConfigLoaderService } from './students/victoria-kondratska';
import { AndriiKozynyiConfigLoaderService } from './students/andrii-kozynyi';
import { MariiaHusakConfigLoaderService } from './students/mariia-husak';
import { OlehTysovskyiConfigLoaderService } from './students/oleh-tysovskyi';
import { AnastasiaLiodaConfigLoaderService } from './students/anastasia-lioda';
import { VictoriaYatsiukConfigLoaderService } from './students/victoria-yatsiuk';
import { MykhailoRyzhanovskyiConfigLoaderService } from './students/mykhailo-ryzhanovskyi';
import { MykytaSirykConfigLoaderService } from './students/mykyta-siryk';
import { DariiaHrychynaConfigLoaderService } from './students/dariia.hrychyna';
import { DmytroBilykConfigLoaderService } from './students/dmytro-bilyk';
import { NikitaPashchukConfigLoaderService } from './students/nikita-pashchuk';
import { KaterynaBaryliukConfigLoaderService } from './students/kateryna-baryliuk';
import { YelyzavetaChervynskaConfigLoaderService } from './students/yelyzaveta-chervynska';
import { AnastasiaDmytryshynConfigLoaderService } from './students/anastasia-dmytryshyn';
import { VolodymyrDemchyshynConfigLoaderService } from './students/volodymyr-demchyshyn';
import { MariiaKatsubaConfigLoaderService } from './students/mariia-katsuba';
import { AnastasiiaProkopishenaConfigLoaderService } from './students/anastasiia-prokopishena';
import { DenysNemyrkaConfigLoaderService } from './students/denys-nemyrka';
import { VladBarvinskiyConfigLoaderService } from './students/vladuslav-barvinskui';
import { AntonMikhalitsynConfigLoaderService } from './students/anton-mikhalitsyn';
import { OlehBezrodnyiConfigLoaderService } from './students/oleh-bezrodnyi';
import { OlehFiniakConfigLoaderService } from './students/oleh-finiak';
import { DanyloHrabarConfigLoaderService } from './students/danylo-hrabar';
import { VolodymyrBorshoshConfigLoaderService } from './students/volodymyr-borshosh';
import { NazarKolodchakConfigLoaderService } from './students/nazar-kolodchak';
import { DmytroBoykoiConfigLoaderService } from './students/dmytro-boyko';
import { VitaliyZhuravskyiConfigLoaderService } from './students/vitaliy-zhuravskyi';
import { YuriiBroslavskyiConfigLoaderService } from './students/yurii-broslavskyi';
import { DenysHryhoriichukConfigLoaderService } from './students/denys-hryhoriichuk';
import { GalaburdaLizaConfigLoaderService } from './students/galaburda-liza';
import { NikitaPyhtinConfigLoaderService } from './students/nikita-pyhtin';
import { RostykDurjaginConfigLoaderService } from './students/rostyk-durjagin';
import { MykhailoHulakConfigLoaderService } from './students/mykhailo-hulak';

export class MainConfigLoaderService {
    private services: IConfigLoaderService[];

    constructor() {
        this.services = [
            new MykhailoHulakConfigLoaderService(),
            new AndriiSlobodianiukConfigLoaderService(),
            new MariiaBodnarConfigLoaderService(),
            new OleksandrZhukConfigLoaderService(),
            new YaroslavPasichnykConfigLoaderService(),
            new YaroslavTsvykConfigLoaderService(),
            new OstapBlystsivConfigLoaderService(),
            new DenysZarubaConfigLoaderService(),
            new VitaliiSynytskyiConfigLoaderService(),
            new VoievodaVladislavConfigLoaderService(),
            new IlliaChumakConfigLoaderService(),
            new NazarPohonchukConfigLoaderService(),
            new DaniilHulchenkoLoaderService(),
            new ArsenShvediukConfigLoaderService(),
            new VitaliyHavronaConfigLoaderService(),
            new RuslanHavrilyakConfigLoaderService(),
            new MyronVikaConfigLoaderService(),
            new TarasRohulyaConfigLoaderService(),
            new OleksandrZhovanukConfigLoaderService(),
            new BohdanDzirbaConfigLoaderService(),
            new MalishVitaliyConfigLoaderService(),
            new YaroslavHolovkoConfigLoaderService(),
            new BardakovConfigLoaderService(),
            new ZakalaOleksandrConfigLoaderService(),
            new ValeriymanuilykConfigLoaderService(),
            new LozoviiTarasConfigLoaderService(),
            new NazarYarishConfigLoaderService(),
            new StepTkachivskyiConfigLoaderService(),
            new VitaliLyloConfigLoaderService(),
            new OlehGeriiConfigLoaderService(),
            new DenysVelychkoConfigLoaderService(),
            new YuriiRobakConfigLoaderService(),
            new OlesandrBiletskyiConfigLoaderService(),
            new OlehSuvorovConfigLoaderService(),
            new KoarizVolodymyrConfigLoaderService(),
            new OlehMuzychukConfigLoaderService(),
            new OleksiiPylypenkoConfigLoaderService(),
            new MykhailoHorpyniukConfigLoaderService(),
            new DmytroSerafymConfigLoaderService(),
            new VictoriaKondratskaConfigLoaderService(),
            new AndriiKozynyiConfigLoaderService(),
            new MariiaHusakConfigLoaderService(),
            new OlehTysovskyiConfigLoaderService(),
            new AnastasiaLiodaConfigLoaderService(),
            new VictoriaYatsiukConfigLoaderService(),
            new MykhailoRyzhanovskyiConfigLoaderService(),
            new MykytaSirykConfigLoaderService(),
            new DariiaHrychynaConfigLoaderService(),
            new DmytroBilykConfigLoaderService(),
            new NikitaPashchukConfigLoaderService(),
            new KaterynaBaryliukConfigLoaderService(),
            new YelyzavetaChervynskaConfigLoaderService(),
            new AnastasiaDmytryshynConfigLoaderService(),
            new VolodymyrDemchyshynConfigLoaderService(),
            new MariiaKatsubaConfigLoaderService(),
            new AnastasiiaProkopishenaConfigLoaderService(),
            new DenysNemyrkaConfigLoaderService(),
            new VladBarvinskiyConfigLoaderService(),
            new AntonMikhalitsynConfigLoaderService(),
            new OlehBezrodnyiConfigLoaderService(),
            new OlehFiniakConfigLoaderService(),
            new DanyloHrabarConfigLoaderService(),
            new VolodymyrBorshoshConfigLoaderService(),
            new NazarKolodchakConfigLoaderService(),
            new DmytroBoykoiConfigLoaderService(),
            new VitaliyZhuravskyiConfigLoaderService(),
            new YuriiBroslavskyiConfigLoaderService(),
            new DenysHryhoriichukConfigLoaderService(),
            new GalaburdaLizaConfigLoaderService(),
            new NikitaPyhtinConfigLoaderService(),
            new RostykDurjaginConfigLoaderService(),
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
                console.error(
                    `Error occured while processing student '${name}' - ${email}.`,
                    exc
                );
            }
        }

        return results;
    }
}
