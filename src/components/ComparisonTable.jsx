import {
    Card,
    Select,
    Typography
} from 'antd'
/**
 * @typedef ComparisonTableProps 
 * @type {object} 
 * @property {Pokemon|null} selected
 * @property {Pokemon[]} options
 * @property {function} onChange
 * @property {string} title 
 * @param {ComparisonTableProps} props
 */
export const ComparisonTable = (props) => {

    const handleOnChange = (v) => {
        props.onChange(v)
    }

    const pokemon = props.selected
    const comparePokemon = props.compareTo

    /**
     * This function returns a style based on what stat is being compared
     * @param {string} stat - The stat that you are wanting to compare to set the style for 
     * @param {boolean} full - Whether the table cell is 100% or not
     * @returns 
     */
    const getTableCellStyle = (stat, full = false) => {
        let style = {textAlign: 'center', width: '50%'}
        if(full){
            style.width = '100%'
        }
        if(!pokemon || !comparePokemon) return style
        if((typeof pokemon[stat] == 'undefined') || (typeof comparePokemon[stat] == 'undefined')) return style
        if(pokemon[stat] > comparePokemon[stat]){
            style.background = '#8cbf74'
        } else if (pokemon[stat] < comparePokemon[stat]){
            style.background = '#ffa7a8'
        }
        return style
    }

    return (
        <Card title={props.title} extra={<Select options={props.options} value={(pokemon) ? pokemon.number : null} onChange={handleOnChange} placeholder="Select a pokémon" />}>
            <Card.Grid hoverable={false}  style={getTableCellStyle('hp')}>
                <Typography.Text><h4>HP</h4></Typography.Text>
                <Typography.Text><h5>{(pokemon) ? pokemon.hp : "--"}</h5></Typography.Text>
            </Card.Grid>
            <Card.Grid hoverable={false}  style={getTableCellStyle('speed')}>
                <Typography.Text><h4>Speed</h4></Typography.Text>
                <Typography.Text><h5>{(pokemon) ? pokemon.speed : "--"}</h5></Typography.Text>
            </Card.Grid>
            <Card.Grid hoverable={false}  style={getTableCellStyle('attack')}>
                <Typography.Text><h4>Attack</h4></Typography.Text>
                <Typography.Text><h5>{(pokemon) ? pokemon.attack : "--"}</h5></Typography.Text>
            </Card.Grid>
            <Card.Grid hoverable={false}  style={getTableCellStyle('defense')}>
                <Typography.Text><h4>Defense</h4></Typography.Text>
                <Typography.Text><h5>{(pokemon) ? pokemon.defense : "--"}</h5></Typography.Text>
            </Card.Grid>
            <Card.Grid hoverable={false}  style={getTableCellStyle('specialAttack')}>
                <Typography.Text><h4>Special Attack</h4></Typography.Text>
                <Typography.Text><h5>{(pokemon) ? pokemon.specialAttack : "--"}</h5></Typography.Text>
            </Card.Grid>
            <Card.Grid hoverable={false}  style={getTableCellStyle('specialDefense')}>
                <Typography.Text><h4>Special Defense</h4></Typography.Text>
                <Typography.Text><h5>{(pokemon) ? pokemon.specialDefense : "--"}</h5></Typography.Text>
            </Card.Grid>
            <Card.Grid hoverable={false}  style={getTableCellStyle('total', true)}>
                <Typography.Text><h4>Total</h4></Typography.Text>
                <Typography.Text><h5>{(pokemon) ? pokemon.total : "--"}</h5></Typography.Text>
            </Card.Grid>
        </Card>
    )
}