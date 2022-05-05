import { Layout } from "../../components/layouts"
import { NoFavorites } from '../../components/ui';
import { useEffect, useState } from 'react';
import { localFavorites } from "../../utils";
import { Card, Grid } from '@nextui-org/react';
import { FavoritePokemons } from "../../components/ui";


const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, [])


  return (
    <>
      <Layout title="Listado de favoritos">
        {favoritePokemons.length === 0 ?
          (<NoFavorites />) :
          (<FavoritePokemons pokemon={favoritePokemons}/>)
        }
      </Layout>
    </>
  )
}

export default FavoritesPage
