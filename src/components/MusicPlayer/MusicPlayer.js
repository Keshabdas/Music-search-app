import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { Row, Col } from 'antd';
import styled from 'styled-components';

const MusicPlayer = ({audioSrc}) => {
    
    // const CustomDiv = styled.div`
    //     & .music_player {
    //         outline: none;
    //         border: 1px solid lightgrey;
    //         border-radius: 100px;
    //         transition: all 0.3s linear;
    //         min-width: 250px;
    //         width: 350px;
    //         box-shadow: 1px 1px 5px rgba(0,0,0, 0.5);
    //         &:hover {
    //             box-shadow: 3px 3px 10px rgba(0,0,0, 0.5);
    //         }
    //     }
    // `;

    return (
        <Row>
            <Col>
                <h3>Song Preview</h3>
                <div>
                    <ReactAudioPlayer
                        src={audioSrc}
                        // className="music_player"
                        controls
                        // onPlay={() => changeBackground(imgSrc)}
                        // onPause={() => changeBackground()}
                        style={{ outline: 'none', border: '1px solid black', borderRadius: '100px', boxShadow: '1px 1px 5px rgba(0,0,0, 0.5)', width: '350px' }}
                    />
                </div>
            </Col>
        </Row>
    )
}

export default MusicPlayer;
