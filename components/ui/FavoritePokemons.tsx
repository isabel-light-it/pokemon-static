import { Grid, Card } from '@nextui-org/react'
import React, { FC } from 'react'
import { FavoritePokemonCard } from '.'
import { useRouter } from 'next/router';
interface Props {
    pokemon: number[]
}

export const FavoritePokemons: FC<Props> = ({ pokemon }) => {
   
    return (
        <Grid.Container gap={2} direction='row' justify='flex-start'>
            {pokemon.map(id =>
                <FavoritePokemonCard id={id} key={id} />
            )}
        </Grid.Container>
    )
}
