import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause  from '../components/play-pause'
import Timer from '../../player/components/timer'
import Controls from '../../player/components/video-player-controls'
import formatTime from '../components/utilities'

class VideoPlayer extends Component {
    state = {
        pause: true,
        duration:0,
        currentTime:0
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
    handleLoadedMetadata = event =>{
       this.video = event.target;
       this.setState({
           duration: formatTime(this.video.duration)
       })

    }
    handleTimeUpdate =  event =>{
        //console.log(this.video.currentTime)
        this.setState({
            currentTime: formatTime(this.video.currentTime)
        })

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

                </Controls>    
                <Video 
                    autoPlay={this.autoPlay}
                    pause={this.state.pause}
                    onLoadedMetadata={this.handleLoadedMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                />
            </VideoPlayerLayout>
        )
    }
} 

export default VideoPlayer;