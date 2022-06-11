/**
 * The Pokémon Object Type
 * @typedef Pokemon
 * @type {object}
 * @property {number} number - The ID of he pokémon in the pokédex.
 * @property {string} name - The name of the pokémon.
 * @property {string} type1 - The primary type of the pokémon (Grass, Fire, Water, Dragon, Fairy, Dark, Bug, Poison, Ground, Electric, Normal, Fighting, Psychic, Rock, Ice, Steel, Ghost or Flying)
 * @property {string|null} type2 - The secondary type of the pokémon (Grass, Fire, Water, Dragon, Fairy, Dark, Bug, Poison, Ground, Electric, Normal, Fighting, Psychic, Rock, Ice, Steel, Ghost or Flying)
 * @property {number} total - The aggregate total of all the stats combined
 * @property {number} hp - The HP of the pokémon
 * @property {number} attack - The attack stat of the pokémon
 * @property {number} defense - The defense stat of the pokémon
 * @property {number} specialAttack - The special attack stat of the pokémon
 * @property {number} specialDefense - The special defense stat of the pokémon
 * @property {number} speed - The speed stat of the pokémon
 * @property {number} generation - The generation the pokémon first appeared in
 * @property {boolean} legendary - Whether the pokémon is legendary or not
 */
import pokedex from './pokedex.json'

/**
* Fetches either a complete pokédex or a pokémon given the pokémon's pokédex id number.
* @param {number|null=} [number=null] - The pokémons pokédex number
*/
export const getPokemon = (number = null) => {
    if(!number) return pokedex
    return pokedex.filter(pokemon => pokemon.number === number)
}

/** 
* Fetches random pokémon from the pokédex.
* @param {number=} [count=1] - The pokémons pokédex number
* @param {boolean=} [allowDuplicates=false] - Whether to allow for duplicate pokémon or not
*/
export const getRandomPokemon = (count = 1, allowDuplicates = false) => {
    if(count > 100) count = 100
    const max = getPokemon().length
    const pokemon = []
    const rolls = []
    for(let i = 0; i < count; i++){
        /**
        * @type {Pokemon}
        */
        let singlePokemon = {}
        if(allowDuplicates){
            singlePokemon = getPokemon(Math.floor((Math.random() * max) + 1))[0]
        } else {
            let roll = Math.floor((Math.random() * max) + 1)
            while(rolls.indexOf(roll) > -1){
                roll = Math.floor((Math.random() * max) + 1)
            }
            rolls.push(roll)
            singlePokemon = getPokemon(roll)[0]
        }
        pokemon.push(singlePokemon)
    }
    return pokemon
}