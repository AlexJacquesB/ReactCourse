import React from "react"
import { useFavoriteStore } from "../../store/useFavoriteStore"
import { Grid } from "../shared/Grid/Grid"
import { PokemonCard } from "../PokemonCard/PokemonCard"


export const FavoritePokemon = () => {
    const favoritesIds = useFavoriteStore((state) => state.favorites)

    return (
        <Grid>
            {favoritesIds.map((favoriteId) => (
                <PokemonCard key={favoriteId} pokemonId={Number(favoriteId)} />
            ))}
        </Grid>
    )
}

