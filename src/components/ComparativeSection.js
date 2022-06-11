import {
    Row,
    Col,
    Card,
    Select,
    Typography
} from 'antd'

export const ComparativeSection = () => {
    
    const selectOptions = [{value: "Option 1"}, {value: "Option 2"}]
    
    return (
        <Row gutter={[0, 32]} style={{marginBottom: '40px'}}>

            {/* Pokémon 1 */}
            <Col xs={24} md={12} xl={{span: 10, offset: 2}} xxl={{span: 7, offset: 5}} style={{padding: '0px 48px'}}>
                <Card title="Pokémon 1" extra={<Select options={selectOptions} placeholder="Select a pokémon" />}>
                    <Card.Grid hoverable={false}  style={{width: '50%', textAlign: 'center', background: '#8cbf74'}}>
                        <Typography.Text><h4>Attack</h4></Typography.Text>
                        <Typography.Text><h5>23</h5></Typography.Text>
                    </Card.Grid>
                    <Card.Grid hoverable={false}  style={{width: '50%', textAlign: 'center', background: '#ffa7a8'}}>
                        <Typography.Text><h4>Defense</h4></Typography.Text>
                        <Typography.Text><h5>27</h5></Typography.Text>
                    </Card.Grid>
                    <Card.Grid hoverable={false}  style={{width: '50%', textAlign: 'center'}}>
                        <Typography.Text><h4>Special Attack</h4></Typography.Text>
                        <Typography.Text><h5>30</h5></Typography.Text>
                    </Card.Grid>
                    <Card.Grid hoverable={false}  style={{width: '50%', textAlign: 'center', background: '#8cbf74'}}>
                        <Typography.Text><h4>Special Defense</h4></Typography.Text>
                        <Typography.Text><h5>40</h5></Typography.Text>
                    </Card.Grid>
                    <Card.Grid hoverable={false}  style={{width: '100%', textAlign: 'center', background: '#ffa7a8'}}>
                        <Typography.Text><h4>Total</h4></Typography.Text>
                        <Typography.Text><h5>300</h5></Typography.Text>
                    </Card.Grid>
                </Card>
            </Col>

            {/* Pokémon 2 */}
            <Col xs={24} sm={12} md={7} xl={20} xxl={7} style={{padding: "0px 48px"}}></Col>
        </Row>
    )
}