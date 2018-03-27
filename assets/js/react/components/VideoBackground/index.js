import React, {Component} from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './style.scss'
import YouTube from 'react-youtube'
import { Parallax, Background } from 'react-parallax'
import logo from '../../../../images/chiodobros/logo.png'

const themeBundlePath = '/wp-content/themes/chiodobros/dist/'

export default class VideoBackground extends React.Component {

  constructor(props) {
    super(props)
    this.state = {started: false}
  }

  _onReady(event) {
    event.target.mute()
    event.target.seekTo(8.5)
    this.setState({
      started: true
    })
  }

  _onEnd(event) {
    event.target.seekTo(8.5)
    event.target.playVideo()
  }

  render() {

    const videoOptions = {
      playerVars: {
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
      }
    };

    return (
      <div>
        <Parallax strength={300} blur={{ min: -15, max: 15 }}>
          <div className="logo-wrapper">
            <img
              className="fadeInUpBig animated logo"
              src={`${themeBundlePath}/${logo}`}
              alt="logo"
            />
          </div>
          <Background className="custom-bg">
            <div className="video-background">
              <div className="video-foreground">
                <YouTube
                  videoId="TA6V7cOjkbA"
                  opts={videoOptions}
                  className="video-iframe"
                  onReady={this._onReady}
                  onEnd={this._onEnd}
                />
              </div>
            </div>
          </Background>
        </Parallax>
      </div>
    )
  }
}
