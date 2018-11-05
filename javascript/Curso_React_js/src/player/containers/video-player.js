import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause  from '../components/play-pause'
import Timer from '../../player/components/timer'
import Controls from '../../player/components/video-player-controls'
import formatTime from '../components/utilities'
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume  from '../components/volumen'

class VideoPlayer extends Component {
    state = {
        pause: true,
        duration:'00',
        currentTime:'00',
        durationFloat:0,
        timeFloat:0,
        progress:0,
        loading: false,

    }
    togglePlay = (event) =>{
        this.setState({
            pause: !this.state.pause
        })
    }

    componentDidMount(){
        this.setState({
            pause: (!this.props.autoPlay)
        })
    }
    handleLoadedMetadata = event => {
       this.video = event.target;
       this.setState({
           duration: formatTime(this.video.duration),
           durationFloat: this.video.duration
       })

    }
    handleTimeUpdate =  event => {
        //console.log(this.video.currentTime)
        this.setState({
            currentTime: formatTime(this.video.currentTime),
            timeFloat: this.video.currentTime
        })

    }

    handleProgressChange = event => {
        //event.targer.value
        this.video.currentTime = event.target.value
    }
    handleSeeking = event =>{
        this.setState({
            loading: true
        })
       // console.log('seeking')
    }

    handleSeeked = event => {
        this.setState({
            loading: false
        })

        //console.log('seeked')
    }
    handleVolumeChange = event => {
        this.video.volume = event.target.value;
    }
    handleMute = event => {
        this.video.volume = 0
    }
    render(){
        return(
            <VideoPlayerLayout>
                <Title 
                    title="Esto es un video chido"
                />
                <Controls>
                    <PlayPause
                        pause={this.state.pause}
                        handleClick={this.togglePlay}
                    />
                    <Timer 
                        duration={this.state.duration}
                        currentTime={this.state.currentTime}
                    
                    />
                    <ProgressBar 
                        duration={this.state.durationFloat}
                        value={this.state.timeFloat}
                        handleProgressChange={this.handleProgressChange}
                    
                    />
                    <Volume 
                        handleVolumeChange={this.handleVolumeChange}
                        handleMute={this.handleMute}
                    />

                </Controls> 
                <Spinner 
                    active={this.state.loading}
                
                />   
                <Video 
                    autoPlay={this.autoPlay}
                    pause={this.state.pause}
                    onLoadedMetadata={this.handleLoadedMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    handleSeeking={this.handleSeeking}
                    handleSeeked={this.handleSeeked}
                    src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                />
            </VideoPlayerLayout>
        )
    }
} 

export default VideoPlayer;