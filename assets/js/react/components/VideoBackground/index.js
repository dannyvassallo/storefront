import React, {Component} from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './style.scss'
import YouTube from 'react-youtube'
import { Parallax, Background } from 'react-parallax'
import logo from '../../../../images/chiodobros/lowpolyv1.png'
import splatter from '../../../../images/chiodobros/splatter.png'
import splatterTop from '../../../../images/chiodobros/splattertop.png'
import cx from 'classnames'
import Loader from 'react-loaders'

const themeBundlePath = '/wp-content/themes/chiodobros/dist/'
const splatterBottomStyle = {}//{ backgroundImage: `url(${themeBundlePath}${splatter})` }
const splatterTopStyle = {}//{ backgroundImage: `url(${themeBundlePath}${splatterTop})` }

export default class VideoBackground extends React.Component {

  constructor(props) {
    super(props)
    this.state = {started: false}
  }

  _onReady(event) {
    event.target.mute()
    event.target.seekTo(8.5)
  }

  _onReady2(event) {
    event.target.mute()
    event.target.seekTo(17)
  }


  _onPlay(){

  }

  _onEnd(event) {
    event.target.seekTo(0)
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
    }

    return (
      <div>
        <div style={splatterTopStyle} className="splatter-top"></div>
        <div style={splatterTopStyle} className="splatter-top2"></div>
        <Parallax strength={300}>
          <div className="logo-wrapper">
            <img
              // className={cx('logo', {
              //   fadeIn: this.state.started,
              // })}
              className={'fadeInUpBig animated logo'}
              src={`${themeBundlePath}${logo}`}
              alt="logo"
            />
          </div>
          <Background className="custom-bg">
            <div className="video-background">
              <div className="video-foreground">
                <YouTube
                  videoId="uu-18NqggeY"
                  opts={videoOptions}
                  className="video-iframe"
                  onReady={this._onReady}
                  onEnd={this._onEnd}
                  onPlay={this._onPlay}
                />
              </div>
            </div>
            <div className="video-background-two">
              <div className="video-foreground-two">
                <YouTube
                  videoId="uu-18NqggeY"
                  opts={videoOptions}
                  className="video-iframe"
                  onReady={this._onReady2}
                  onEnd={this._onEnd}
                  onPlay={this._onPlay}
                />
              </div>
            </div>
          </Background>
        </Parallax>
        <div style={splatterBottomStyle} className="splatter-bottom"></div>
        <div style={splatterBottomStyle} className="splatter-bottom2"></div>
      </div>
    )
  }
}
