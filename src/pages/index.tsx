import type { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { Card, CardCol, CardRow, CardSpan, CardSubtitle, CardTitle } from '../components/card'
import { Image } from '../components/image'
import Lista from '../list'
import { PokemonModel } from '../models/pokemon_model'
import styles from '../../styles/Home.module.css'

type HomeProps = {
  data: PokemonModel
}

const Home = ({ data }: HomeProps) => {
  const [pokemon, setPokemon] = useState<PokemonModel>(data)
  const selectPokemon = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${event.target.value}`)
    .then(response => response.json())
    .then(response => setPokemon(response))
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon</title>
        <meta name="description" content="Projeto de estudo de next. Card Pokemon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <select onChange={selectPokemon}>
          {
            Lista.map((item, index) => <option value={item.toLocaleLowerCase()} key={index}>{item}</option>)
          }
        </select>
        <Card>
          <CardRow height={'30vh'}>
            <CardRow>
              <Image src={`${pokemon?.sprites.other.dream_world.front_default}`} alt={pokemon?.name} />
            </CardRow>
            <CardRow>
              <CardTitle>{pokemon?.name.toLocaleUpperCase()}</CardTitle>
            </CardRow>
          </CardRow>
          <CardRow>
            <CardCol size={3}>
              <CardSubtitle>{pokemon?.stats[0].stat.name}</CardSubtitle>
              <CardSpan>{pokemon?.stats[0].base_stat}</CardSpan>
            </CardCol>
            <CardCol size={3}>
              <CardSubtitle>{pokemon?.stats[1].stat.name}</CardSubtitle>
              <CardSpan>{pokemon?.stats[1].base_stat}</CardSpan>
            </CardCol>
            <CardCol size={3}>
              <CardSubtitle>{pokemon?.stats[2].stat.name}</CardSubtitle>
              <CardSpan>{pokemon?.stats[2].base_stat}</CardSpan>
            </CardCol>
          </CardRow>
        </Card>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/1`)
  const data = await response.json()
  return {
    props: {
      data
    }
  }
}

