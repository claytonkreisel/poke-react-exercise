import {
    Row,
    Col,
    Button
} from 'antd'

export const ResetSection = () => {
    
    
    return (
        <Row gutter={[0, 32]} style={{marginBottom: '40px'}}>
            <Col span={24} style={{padding: "0px 48px", textAlign: 'right'}}>
                <Button size='large'>Reset</Button>
            </Col>
        </Row>
    )
}