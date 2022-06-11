import { useContext, useCallback } from 'react'
import {
    Row,
    Col,
    Button
} from 'antd'
import { pokemonDetailsContext } from './PokemonDetailsProvider'

export const ResetSection = (props) => {

    //STATE
    const [, setPokemonDetails] = useContext(pokemonDetailsContext)

    //EVENT LISTENERS
    const handleOnClick = useCallback(() => {
        setPokemonDetails([])
    }, [setPokemonDetails])

    return (
        <Row gutter={[0, 32]} style={{marginBottom: '40px'}}>
            <Col span={24} style={{paddingLeft: '48px', paddingRight: '48px', textAlign: 'right'}}>
                <Button size='large' onClick={handleOnClick} danger>Reset</Button>
            </Col>
        </Row>
    )

}