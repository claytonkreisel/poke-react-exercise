import {useState, useMemo, useContext, useCallback, useEffect} from 'react'
import {
    Row,
    Col,
    Card,
    Select,
    Typography
} from 'antd'
import { pokemonDetailsContext } from './PokemonDetailsProvider'
import { ComparisonTable } from './ComparisonTable'

export const ComparativeSection = () => {
    
    //STATE
    const [pokemonDetails] = useContext(pokemonDetailsContext)
    const [pokemonOne, setPokemonOne] = useState(null)
    const [pokemonTwo, setPokemonTwo] = useState(null)

    //CHANGE POKEMON ON POKEMON DETAILS CHANGE
    useEffect(() => {
        if(pokemonOne && !pokemonDetails.includes(pokemonOne)){
            setPokemonOne(null)
        }
        
        if(pokemonTwo && !pokemonDetails.includes(pokemonTwo)){
            setPokemonTwo(null)
        }
        
    }, [pokemonDetails])

    //EVENT LISTENERS
    const handlePokemonOneSelectOnChange = useCallback((v) => {
        const selectedPokemon = pokemonDetails.filter(pokemon => pokemon.number === v)
        setPokemonOne((selectedPokemon.length > 0) ? selectedPokemon[0] : null)
    }, [pokemonDetails])

    const handlePokemonTwoSelectOnChange = useCallback((v) => {
        const selectedPokemon = pokemonDetails.filter(pokemon => pokemon.number === v)
        setPokemonTwo((selectedPokemon.length > 0) ? selectedPokemon[0] : null)
    }, [pokemonDetails])

    //MEMOIZED VALUES
    const selectOptions = useMemo(() => {
        return pokemonDetails.map(pokemon => {return {value: pokemon.number, label: pokemon.name}})
    }, [pokemonDetails])

    return (
        <Row gutter={[0, 32]} style={{marginBottom: '40px'}}>
            {/* Pokémon 1 */}
            <Col xs={24} md={12} xl={12} xxl={{span: 7, offset: 5}} style={{paddingRight: '48px', paddingLeft: '48px'}}>
                <ComparisonTable title="Pokemon 1" selected={pokemonOne} compareTo={pokemonTwo} options={selectOptions} onChange={handlePokemonOneSelectOnChange} />
            </Col>

            {/* Pokémon 2 */}
            <Col xs={24} sm={12} md={7} xl={12} xxl={7} style={{paddingRight: '48px', paddingLeft: '48px'}}>
                <ComparisonTable title="Pokemon 2" selected={pokemonTwo} compareTo={pokemonOne} options={selectOptions} onChange={handlePokemonTwoSelectOnChange} />
            </Col>
        </Row>
    )
}