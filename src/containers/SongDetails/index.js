import React, { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Breadcrumb, Row, Col, Card, List, Typography } from 'antd';
import styled from 'styled-components';
import { connect } from 'react-redux';

const CustomDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & .image {
        height: 200px;
        width: 200px;
        cursor: pointer;
        transition: all 0.3s linear;
        box-shadow: 5px 5px 10px  rgba(0,0,0, 0.5);
        &:hover {
            box-shadow: 0px 0px 0px  rgba(0,0,0, 0.5);
        }
    }
    & .track_infos {
        margin: 30px 0px;
        & .track_name {
            margin:  10px 0 0 0;
            color: #4285F4;
        }
        & .artist_name {
            margin: 10px 0 0 0;
            color: #34A853;
        }
        & .album_name {
            margin: 10px 0 0 0;
            // color: #FBBC05;
        }
    }
    & .music_player {
        outline: none;
        border: 1px solid lightgrey;
        border-radius: 100px;
        transition: all 0.3s linear;
        min-width: 250px;
        width: 400px;
        box-shadow: 1px 1px 5px rgba(0,0,0, 0.5);
        &:hover {
            box-shadow: 3px 3px 10px rgba(0,0,0, 0.5);
        }
    }
`;



const Details = ({selectedSong, history}) => {

    const [bckImg, setBckImg] = useState('');

    const changeBackground = (value) => {
        setBckImg(value)
    }

    const BackImg = styled.div`
        position: absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        z-index: -1;
        background-image: url(${bckImg});
        filter: blur(8px);
        -webkit-filter: blur(10px);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    `;

    const parseMillisecondsIntoReadableTime = (millisec) => {
        var seconds = (millisec / 1000).toFixed(0);
        var minutes = Math.floor(seconds / 60);
        var hours = "";
        if (minutes > 59) {
            hours = Math.floor(minutes / 60);
            hours = (hours >= 10) ? hours : "0" + hours;
            minutes = minutes - (hours * 60);
            minutes = (minutes >= 10) ? minutes : "0" + minutes;
        }

        seconds = Math.floor(seconds % 60);
        seconds = (seconds >= 10) ? seconds : "0" + seconds;
        if (hours !== "") {
            return hours + ":" + minutes + ":" + seconds;
        }
        return minutes + ":" + seconds;
    }

    const data = [
        {
          title: 'Artist Name',
          value: selectedSong.artistName || '-'
        },
        {
          title: 'Track Name',
          value: selectedSong.trackName || '-'
        },
        {
          title: 'Album Name',
          value: selectedSong.collectionName || '-'
        },
        {
          title: 'Genre',
          value: selectedSong.primaryGenreName || '-'
        },
        {
          title: 'Track Length',
          value: parseMillisecondsIntoReadableTime(selectedSong.trackTimeMillis)
        },
        {
          title: 'Release Date',
          value: moment(selectedSong.releaseDate).format('DD-MM-YYYY')
        },
        {
          title: 'Country',
          value: selectedSong.country || '-'
        },
        {
          title: 'iTunes Price',
          value: selectedSong.trackPrice || 'NA'
        },
    ];

    

    useEffect(() => {
        // pushes back to homepage if no track is selected
        if (Object.keys(selectedSong).length === 0) {
            history.push('/');
        }
    })

    return (
        <div style={{ height: '100vh', background: 'transparent' }}>
            <Breadcrumb style={{ padding: 24, background: '#eee', fontSize: 18, zIndex: 999999 }}>
                <Breadcrumb.Item>
                    <Link to="/">Home</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Details</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <BackImg></BackImg> 
                <Col sm={8} xs={24} style={{ padding: 25 }}>
                    <Card style={{ borderRadius: 20 }}>
                        <CustomDiv>
                            <img className="image" src={selectedSong.artworkUrl100 || ''} alt="album art" />
                        </CustomDiv>
                        <CustomDiv>
                            <div className="track_infos">
                                <Typography.Title level={3} className="track_name">{selectedSong.trackName}</Typography.Title>
                                <Typography.Title level={4} className="artist_name">{selectedSong.artistName}</Typography.Title>
                                <p className="album_name">{selectedSong.collectionName}</p>
                            </div>
                        </CustomDiv>
                        <CustomDiv>
                            <ReactAudioPlayer
                                src={selectedSong.previewUrl}
                                controls
                                className="music_player"
                                onPlay={() => changeBackground(selectedSong.artworkUrl100)}
                                onPause={() => changeBackground()}
                            />
                        </CustomDiv>
                    </Card> 
                </Col>
                <Col sm={16} xs={24} style={{ padding: 20 }}>
                    <Card style={{ borderRadius: 20 }}>
                        <List
                            itemLayout="horizontal"
                            dataSource={Object.keys(selectedSong).length === 0 ? [] : data}
                            loading={Object.keys(selectedSong).length === 0}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={<b>{item.title}</b>}
                                    />
                                    <List.Item.Meta
                                        title={<p><span style={{ display: item.title === 'iTunes Price' ? 'inline-block' : 'none' }}>&#36;</span>{item.value}</p>}
                                    />
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedSong: state.selectedSong.song
    }
}

export default connect(mapStateToProps)(Details);
