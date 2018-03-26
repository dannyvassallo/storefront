import React, {Component} from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './style.scss'
import YouTube from 'react-youtube'

export default class VideoBackground extends React.Component {
  _onReady(event) {
    event.target.mute();
  }

  _onEnd(event) {
    event.target.playVideo();
  }

  render() {

    const videoOptions = {
      playerVars: {
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0
      }
    };

    return (
      <Grid fluid>
        <Row>
          <Col xs={6} md={3}>
            <div>
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
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}
