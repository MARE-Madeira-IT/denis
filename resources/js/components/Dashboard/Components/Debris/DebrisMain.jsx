import { Col, Row } from 'antd'
import React from 'react'
import DebrisMaterial from './Material/DebrisMaterial'

function Main() {
    return (
        <Row type="flex" justify='space-around' gutter={32}>
            <Col span={8}><DebrisMaterial /></Col>
            <Col span={8}><DebrisMaterial /></Col>
            <Col span={8}><DebrisMaterial /></Col>
        </Row>
    )
}

export default Main