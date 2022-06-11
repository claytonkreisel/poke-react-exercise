import {useState, useContext, useEffect, useMemo, useCallback} from 'react'
import {
    Row,
    Col,
    Select,
    List,
    Card
} from 'antd' //documentation found at https://ant.design/components/overview/
import InfiniteScroll from 'react-infinite-scroll-component'
import { pokemonDetailsContext } from './PokemonDetailsProvider'
import { getPokemon } from '../providers/poke-tools/pokeTools'

export const FilteringSection = () => {
    
    //STATE
    const [listOneItems, setListOneItems] = useState([])
    const [listTwoItems, setListTwoItems] = useState([])
    const [listOneFilter, setListOneFilter] = useState("")
    const [listTwoFilter, setListTwoFilter] = useState("")
    const [pokemonDetails, setPokemonDetails] = useContext(pokemonDetailsContext)

    //ON COMPONENT FIRST MOUNT
    useEffect(() => {

        if(pokemonDetails.length > 0) return

        const allPokemon =  getPokemon()

        //Set the option lists
        const allTypeOnes = []
        const allGenerations = []
        allPokemon.forEach(pokemon => {
            if(!allTypeOnes.includes(pokemon.type1)){
                allTypeOnes.push(pokemon.type1)
            }
            if(!allGenerations.includes(pokemon.generation)){
                allGenerations.push(pokemon.generation)
            }
        })
        allTypeOnes.sort()
        allGenerations.sort()
        
        //Set the display lists
        setListOneItems(allPokemon)
        setListTwoItems(allPokemon)

        //Set filters
        setListOneFilter("")
        setListTwoFilter("")
    
    }, [pokemonDetails])

    //MEMOIZED VALUES
    const allPokemon = useMemo(() => {
        return getPokemon()
    }, [])

    const listOneOptions = useMemo(() => {
        const items = []
        allPokemon.forEach(pokemon => {
            items.push(pokemon.type1)
        })
        const newItems = [... new Set(items.map(item => item))]
        return newItems.map(item => {return {value: item}})
    }, [allPokemon])

    const listTwoOptions = useMemo(() => {
        const items = []
        allPokemon.forEach(pokemon => {
            items.push(pokemon.generation)
        })
        const newItems = [... new Set(items.map(item => item))]
        return newItems.map(item => {return {value: item}})
    }, [allPokemon])

    //EVENT LISTENERS
    const handleFilterOneOnChange = useCallback((v) => {
        const newList = allPokemon.filter(item => item.type1 === v)
        setListOneItems(newList)
        setListOneFilter(v)
        setPokemonDetails(newList.filter(item => listTwoItems.includes(item)))
    }, [allPokemon, listTwoItems, setPokemonDetails])

    const handleFilterTwoOnChange = useCallback((v) => {
        const newList = allPokemon.filter(item => item.generation === v)
        setListTwoItems(newList)
        setListTwoFilter(v)
        setPokemonDetails(newList.filter(item => listOneItems.includes(item)))
    }, [allPokemon, listOneItems, setPokemonDetails])

    return (
        <Row gutter={[0, 32]}>

            {/* Filter by Type */}
            <Col xs={24} xl={12} xxl={8}  style={{paddingRight: '48px', paddingLeft: '48px'}}>
                <Card title="Filter Pokémon by Type 1" extra={<Select options={listOneOptions} onChange={handleFilterOneOnChange} value={listOneFilter || null} placeholder="Select Type 1" />}>
                    <div
                        id="scrollableDiv"
                        style={{
                            marginTop: "10px",
                            marginBottom: "10px",
                            marginLeft: "10px",
                            marginRight: "10px",
                            height: 400,
                            overflow: 'auto',
                            paddingLeft: '0px',
                            paddingRight: '0px',
                            paddingTop: '0px',
                            paddingBottom: '0px',
                            border: '1px solid rgba(140, 140, 140, 0.35)',
                        }}
                    >
                        <InfiniteScroll
                            dataLength={listOneItems.length}
                        >
                            <List
                                dataSource={listOneItems}
                                size="small"
                                renderItem={(item) => {
                                    return (
                                        <List.Item
                                            key={item.number}
                                            style={{paddingRight: '16px', paddingLeft: '16px', paddingTop: '1px', paddingBottom: '1px'}}
                                        >
                                            <span style={{display: 'inline-block', marginRight: "10px", width: '28px', textAlign: "right"}}>#{item.number}</span> {item.name}
                                        </List.Item>
                                    )
                                }}
                            />
                        </InfiniteScroll>
                    </div>
                </Card>
            </Col>

            {/* Filter by Generation */}
            <Col xs={24} xl={12} xxl={8} style={{paddingRight: '48px', paddingLeft: '48px'}}>
            <Card title="Filter Pokémon by Generation" extra={<Select options={listTwoOptions} onChange={handleFilterTwoOnChange} value={listTwoFilter || null} placeholder="Select Generation" />}>
                    <div
                        id="scrollableDiv"
                        style={{
                            margin: "10px 0px",
                            height: 400,
                            overflow: 'auto',
                            padding: '0 0px',
                            border: '1px solid rgba(140, 140, 140, 0.35)',
                        }}
                    >
                        <InfiniteScroll
                            dataLength={listTwoItems.length}
                        >
                            <List
                                dataSource={listTwoItems}
                                size="small"
                                renderItem={(item) => {
                                    return (
                                        <List.Item
                                            key={item.number}
                                            style={{paddingRight: '16px', paddingLeft: '16px', paddingTop: '1px', paddingBottom: '1px'}}
                                        >
                                            <span style={{display: 'inline-block', marginRight: "10px", width: '28px', textAlign: "right"}}>#{item.number}</span> {item.name}
                                        </List.Item>
                                    )
                                }}
                            />
                        </InfiniteScroll>
                    </div>
                </Card>
            </Col>

            {/* List of union between two filters */}
            <Col xs={24} xxl={8} style={{paddingRight: '48px', paddingLeft: '48px'}}>
            <Card title="Pokémon in Both Filtered Lists">
                    <div
                        id="scrollableDiv"
                        style={{
                            margin: "10px 0px",
                            height: 400,
                            overflow: 'auto',
                            padding: '0 0px',
                            border: '1px solid rgba(140, 140, 140, 0.35)',
                        }}
                    >
                        <InfiniteScroll
                            dataLength={pokemonDetails.length}
                        >
                            <List
                                dataSource={pokemonDetails}
                                size="small"
                                renderItem={(item) => {
                                    return (
                                        <List.Item
                                            key={item.number}
                                            style={{paddingRight: '16px', paddingLeft: '16px', paddingTop: '1px', paddingBottom: '1px'}}
                                        >
                                            <span style={{display: 'inline-block', marginRight: "10px", width: '28px', textAlign: "right"}}>#{item.number}</span> {item.name}
                                        </List.Item>
                                    )
                                }}
                            />
                        </InfiniteScroll>
                    </div>
                </Card>
            </Col>
        </Row>
    )
}