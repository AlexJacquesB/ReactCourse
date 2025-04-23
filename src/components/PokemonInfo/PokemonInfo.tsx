import React, { useMemo } from "react";
import { useGetPokemon } from "../../hooks/useGetPokemon";
import { useParams } from "react-router-dom";
import { getMainPokemonType } from "../../utils/getMainPokemonType";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { convertInchesToCm } from "../../utils/convertInchesToCm";
import { PokemonSprites } from "../PokemonSprites/PokemonSprites";
import { cocnvertLbsToKg } from "../../utils/convertLbsToKg";
import { TypeIcons } from "../shared/TypeIcon/TypeIcon";

export const PokemonInfo= () => {
    const { pokemonName } = useParams();
    const { pokemonData } = useGetPokemon(pokemonName);
    const mainType = useMemo(() => pokemonData && getMainPokemonType(pokemonData), [pokemonData]);

    return (
        <div className="flex flex-row justify-between shadow-lg bg-gray-100 rounded-lg">
            <div className={`${mainType}-background w-72 rounded-l-lg intems-center`}>
                <img 
                src={pokemonData?.sprites?.front_default} 
                alt={pokemonData?.name ?? ""}
                className="mx-auto w-72 h-72 mt-6" />
            </div>
            <div className="flex flex-col grow p-5 gap-3">
                <div className="relative flex">
                <h1 className="text-2xl"> {capitalizeFirstLetter(pokemonData?.name ?? "")} </h1>
                <TypeIcons types={pokemonData?.types ?? []} />
                </div>
                <span> {`Weight: ${cocnvertLbsToKg( pokemonData?.weight ?? 0)} Kg`} </span>
                <span> {`Height: ${convertInchesToCm( pokemonData?.height ?? 0)} M`} </span>
                <div className="border-t-2 border-gray-300 mt-3 pt-3">
                    <h1 className="text-2xl">Types</h1>
                <PokemonSprites pokemonName={pokemonName} />
                </div>
            </div>
            <div className="flex flex-col grow p-5 gap-2 border-l-2 border-gray-300 ">
                <h1 className="text-2xl">Stats</h1>
                <div className="flex flex-col  p-3 gap-2 border-t-2 border-gray-300 mt-3">
                    {pokemonData?.stats.map((stat) => (
                        <span key={stat.stat.name} className="text-sm text-gray-500">
                            {capitalizeFirstLetter(stat.stat.name)}: {stat.base_stat}
                        </span>
                    ))}
                </div>
            </div>
            </div>
    )
}
