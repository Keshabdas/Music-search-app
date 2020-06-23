import React from 'react';
// import styled from 'styled-components';
import { Row, Col } from 'antd';

const TrackInfo = ({imgSource, artistName, collectionName, genre}) => {
    
    return (
        <Row>
            <Col span={8}>
                <img alt="album art" src={imgSource} height={130} width={130} style={{ boxShadow: '5px 5px 10px  rgba(0,0,0, 0.5)' }} />
            </Col>
            <Col span={16} style={{ padding: '0 10px' }}>
                <Row>
                    <Col>
                        <p><b>Artist Name:</b> {artistName}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p><b>Album Name:</b> {collectionName}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p><b>Genre:</b> {genre}</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default TrackInfo;
