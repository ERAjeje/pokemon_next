import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Card, CardCol, CardRow, CardSpan, CardSubtitle, CardTitle } from '../src/components/card'
import { Image } from '../src/components/image'
import { Pokemon } from '../src/models/pokemon'
import styles from '../styles/Home.module.css'

const Lista =[
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate",
  "Spearow",
  "Fearow",
  "Ekans",
  "Arbok",
  "Pikachu",
  "Raichu",
  "Sandshrew",
  "Sandslash",
  "Nidoran♀",
  "Nidorina",
  "Nidoqueen",
  "Nidoran♂",
  "Nidorino",
  "Nidoking",
  "Clefairy",
  "Clefable",
  "Vulpix",
  "Ninetales",
  "Jigglypuff",
  "Wigglytuff",
  "Zubat",
  "Golbat",
  "Oddish",
  "Gloom",
  "Vileplume",
  "Paras",
  "Parasect",
  "Venonat",
  "Venomoth",
  "Diglett",
  "Dugtrio",
  "Meowth",
  "Persian",
  "Psyduck",
  "Golduck",
  "Mankey",
  "Primeape",
  "Growlithe",
  "Arcanine",
  "Poliwag",
  "Poliwhirl",
  "Poliwrath",
  "Abra",
  "Kadabra",
  "Alakazam",
  "Machop",
  "Machoke",
  "Machamp",
  "Bellsprout",
  "Weepinbell",
  "Victreebel",
  "Tentacool",
  "Tentacruel",
  "Geodude",
  "Graveler",
  "Golem",
  "Ponyta",
  "Rapidash",
  "Slowpoke",
  "Slowbro",
  "Magnemite",
  "Magneton",
  "Farfetch'd",
  "Doduo",
  "Dodrio",
  "Seel",
  "Dewgong",
  "Grimer",
  "Muk",
  "Shellder",
  "Cloyster",
  "Gastly",
  "Haunter",
  "Gengar",
  "Onix",
  "Drowzee",
  "Hypno",
  "Krabby",
  "Kingler",
  "Voltorb",
  "Electrode",
  "Exeggcute",
  "Exeggutor",
  "Cubone",
  "Marowak",
  "Hitmonlee",
  "Hitmonchan",
  "Lickitung",
  "Koffing",
  "Weezing",
  "Rhyhorn",
  "Rhydon",
  "Chansey",
  "Tangela",
  "Kangaskhan",
  "Horsea",
  "Seadra",
  "Goldeen",
  "Seaking",
  "Staryu",
  "Starmie",
  "Mr. Mime",
  "Scyther",
  "Jynx",
  "Electabuzz",
  "Magmar",
  "Pinsir",
  "Tauros",
  "Magikarp",
  "Gyarados",
  "Lapras",
  "Ditto",
  "Eevee",
  "Vaporeon",
  "Jolteon",
  "Flareon",
  "Porygon",
  "Omanyte",
  "Omastar",
  "Kabuto",
  "Kabutops",
  "Aerodactyl",
  "Snorlax",
  "Articuno",
  "Zapdos",
  "Moltres",
  "Dratini",
  "Dragonair",
  "Dragonite",
  "Mewtwo",
  "Mew",
  "MissingNo."
]

const Home: NextPage = () => {
  const [pokemon, setPokemon] = useState<Pokemon>()
  const selectPokemon = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${event.target.value}`)
    .then(response => response.json())
    .then(response => setPokemon(response))
  }
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/1`)
    .then(response => response.json())
    .then(response => setPokemon(response))
  },[])
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
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
