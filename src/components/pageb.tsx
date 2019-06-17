import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

interface IProps {
  tempData?: any,
  handleChange: () => void,
  handleDelete: () => void,
  reset: () => void,
}

class Temp extends Component<IProps> {
  private player: any
  private videoRef: HTMLVideoElement | null
  public componentDidMount() {
    const options = {
      autoplay: true,
      controls: true,
      sources: [{
        src: 'rtmp://live.hkstv.hk.lxdns.com/live/hks',
        type: 'rtmp/flv'
      }]
    }

    this.player = videojs(this.videoRef, options, function onPlayerReady() {
      console.log('onPlayerReady')
    })
  }

  public componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  public render() {
    const { tempData } = this.props
    return (
      <Fragment>
        <div>{tempData.something}</div>
        <Button onClick={() => this.props.handleChange()}>add text</Button>
        <Button onClick={() => this.props.handleDelete()}>add delete</Button>
        <Button type='danger' onClick={() => this.props.reset()}>reset</Button>
        <div>
          <div data-vjs-player={true}>
            <video ref={node => this.videoRef = node} className="video-js" width="640" height="300" />
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapState = (state: any) => ({
  tempData: state.tempData,
})

const mapDispatch = (dispatch: any) => ({
  handleChange() {
    dispatch({ type: 'change' })
  },
  handleDelete() {
    dispatch({ type: 'delete' })
  },
  reset() {
    dispatch({ type: 'reset' })
  }
})

export default connect(mapState, mapDispatch)(Temp)
