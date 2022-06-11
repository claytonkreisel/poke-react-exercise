import { createContext, useState } from "react"

export const pokemonDetailsContext = createContext()

const PokemonDetailsProvider = (props) => {

    const [pokemonDetails, setPokemonDetails] = useState([])

    return (
        <pokemonDetailsContext.Provider value={[pokemonDetails, setPokemonDetails]}>
            {props.children}
        </pokemonDetailsContext.Provider>
    )

}

export default PokemonDetailsProvider