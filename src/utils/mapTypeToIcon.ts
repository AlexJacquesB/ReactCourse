import { PokemonTypeEnum } from "../constants/types";
import { PokemonType } from "../interfaces/PokemonData";
import normal from "../assets/normal.svg";
import fighting from "../assets/fighting.svg";
import flying from "../assets/flying.svg";
import poison from "../assets/poison.svg";
import ground from "../assets/ground.svg";
import rock from "../assets/rock.svg";
import bug from "../assets/bug.svg";
import ghost from "../assets/ghost.svg";
import steel from "../assets/steel.svg";
import fire from "../assets/fire.svg";
import water from "../assets/water.svg";
import grass from "../assets/grass.svg";
import electric from "../assets//electric.svg";
import psychic from "../assets/psychic.svg";
import ice from "../assets/ice.svg";
import dragon from "../assets/dragon.svg";
import dark from "../assets/dark.svg";
import fairy from "../assets/fairy.svg";

export const mapeTypeToIcon = (type: PokemonType) => {
    switch (type.type.name) {
        case PokemonTypeEnum.normal:
            return normal;
        case PokemonTypeEnum.fighting:
            return fighting;
        case PokemonTypeEnum.flying:
            return flying;
        case PokemonTypeEnum.poison:
            return poison;
        case PokemonTypeEnum.ground:
            return ground;
        case PokemonTypeEnum.rock:
            return rock;
        case PokemonTypeEnum.bug:
            return bug;
        case PokemonTypeEnum.ghost:
            return ghost;
        case PokemonTypeEnum.steel:
            return steel;
        case PokemonTypeEnum.fire:
            return fire;
        case PokemonTypeEnum.water:
            return water;
        case PokemonTypeEnum.grass:
            return grass;
        case PokemonTypeEnum.electric:
            return electric;
        case PokemonTypeEnum.psychic:
            return psychic;
        case PokemonTypeEnum.ice:
            return ice;
        case PokemonTypeEnum.dragon:
            return dragon;
        case PokemonTypeEnum.dark:
            return dark;
        case PokemonTypeEnum.fairy:
            return fairy;
        default:
            return "";    
    }
};