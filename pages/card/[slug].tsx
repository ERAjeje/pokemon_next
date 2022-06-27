import { GetStaticPaths, GetStaticProps } from "next"


interface PokemonProps {
    param: string;
}

export default function Pokemon({ param }: PokemonProps) {
    return (
        <h1>{param}</h1>
    )
}

export const getStaticProps: GetStaticProps<PokemonProps> = async (context) => {
    return {
        props: {
            param: context.params!.slug as string
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: false
    }
}
