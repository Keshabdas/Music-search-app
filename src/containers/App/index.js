import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import { Input, Row, Col, Card, Empty, BackTop, Layout, Typography } from 'antd';
// import { Link } from 'react-router-dom';
import TrackInfo from '../../components/TrackInfo/TrackInfo';
import MusicPlayer from '../../components/MusicPlayer/MusicPlayer';
import { connect } from "react-redux";
import SearchActions from '../../Actions/Search';
import SelectedSongActions from '../../Actions/selectedSong';

const { Header } = Layout;

const Main = ({searchData, fetchSearchData, getSelectedSong, history}) => {
    
    const [text, setText] = useState('');
    const [data, setData] = useState([]);
    // const [bckImg, setBckImg] = useState('');

    const onChangeSearch = (e) => {
        setText(e.target.value);
    }

    // const changeBackground = (value) => {
    //     setBckImg(value)
    // }

    const handleOnClickChange = (item) => {
        getSelectedSong(item);
        history.push('/details');
    }

    useEffect(() => {
        setData(searchData)
    }, [searchData])

    useEffect(() => {
        if(text !== '') {
            fetchSearchData(text);
        }
    }, [text, fetchSearchData]);

    return (
        
        <div>
            <Header style={{ background: '#cfe0e8', height: 92, width: '100%', position: 'fixed', zIndex: 10 }}>
                <Input 
                    size="large"
                    type="text" 
                    placeholder='Search for your favourite Artist, Songs and more....' 
                    allowClear 
                    value={text} 
                    onChange={(e) => onChangeSearch(e)} 
                    style={{ height: 56, outline: 'none', borderRadius: 30, padding: '2px 40px' }}
                />
            </Header>
            <div 
                style={{ 
                    padding: '120px 30px', 
                    // height: '88vh',
                    // background: '#cfe0e8',
                    // height: '100%', 
                }}
            >
                <Row>
                    <Col><Typography.Title level={4} style={{ display: data.results && data.results.length > 0 ? 'inline-block' : 'none' }}>Found {data.resultCount || 0} results.</Typography.Title></Col>
                </Row>
                <Row gutter={[16, 24]} align="stretch">
                    { data.results && data.results.length > 0 ? data.results.map((item, index) => {
                        return (
                        <Col className="gutter-column" lg={8} md={12} sm={12} xs={24} style={{ position: 'relative' }} key={index} >
                            {/* <Link to="/details"> */}
                            <Card 
                                hoverable 
                                title={`Song Name: ${item.trackName}`} 
                                bordered 
                                loading={false}
                                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                extra={<a onClick={() => handleOnClickChange(item)}>Know More</a>}
                                onClick={() => handleOnClickChange(item)}
                                style={{ 
                                    borderColor: 'blue',
                                    borderWidth: 1.5,
                                    borderRadius: 20,
                                    height: '100%', 
                                }}
                            >
                                <TrackInfo imgSource={item.artworkUrl100} artistName={item.artistName} collectionName={item.collectionName} genre={item.primaryGenreName} />
                                <br />
                                <MusicPlayer audioSrc={item.previewUrl} />
                            </Card>                                
                            {/* </Link> */}
                        </Col> 
                        )
                    }): <div  style={{ height: '100%', width: '100%' }}><Empty /></div>}   
                </Row>
            </div>
            <BackTop />
        </div>
    )
}

const fetchSearchData = SearchActions.Creators.fetchSearchData;
const getSelectedSong = SelectedSongActions.Creators.getSelectedSong;

const mapStateToProps = (state) => {
    return {
        searchData: state.searchData.data
    }
}

export default connect(mapStateToProps, { fetchSearchData, getSelectedSong })(Main);
